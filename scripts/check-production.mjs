const baseUrl = new URL(process.env.MONITOR_BASE_URL || "https://onebilliondream.com");

const routes = [
  "/",
  "/privacy",
  "/play",
  "/wall-of-dreamers",
  "/sitemap.xml",
  "/robots.txt",
];

const failures = [];

function fail(check, detail) {
  failures.push(`${check}: ${detail}`);
}

function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function fetchRoute(route) {
  const url = new URL(route, baseUrl);
  let lastError;

  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15_000);

    try {
      const response = await fetch(url, {
        headers: { "user-agent": "onebilliondream-production-monitor/1.0" },
        redirect: "follow",
        signal: controller.signal,
      });

      if (response.status < 500 || attempt === 3) {
        return {
          body: await response.text(),
          headers: response.headers,
          status: response.status,
          url: response.url,
        };
      }

      lastError = new Error(`temporary HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
    } finally {
      clearTimeout(timeout);
    }

    if (attempt < 3) await delay(2_000 * attempt);
  }

  throw lastError;
}

const results = new Map();

await Promise.all(
  routes.map(async (route) => {
    try {
      results.set(route, await fetchRoute(route));
    } catch (error) {
      fail(`${route} is reachable`, error instanceof Error ? error.message : String(error));
    }
  }),
);

for (const route of routes) {
  const result = results.get(route);
  if (result && result.status !== 200) {
    fail(`${route} returns HTTP 200`, `received HTTP ${result.status}`);
  }
}

const home = results.get("/");

if (home) {
  const finalUrl = new URL(home.url);

  if (finalUrl.protocol !== "https:") {
    fail("HTTPS", `final URL is ${home.url}`);
  }

  if (finalUrl.hostname !== "onebilliondream.com") {
    fail("primary hostname", `final hostname is ${finalUrl.hostname}`);
  }

  if (!home.body.includes("I build independent projects")) {
    fail("home-page marker", "expected public message is missing");
  }

  if (!home.body.includes('<link rel="canonical" href="https://onebilliondream.com">')) {
    fail("canonical URL", "expected home canonical link is missing or changed");
  }

  const contentSecurityPolicy = home.headers.get("content-security-policy") || "";
  if (!contentSecurityPolicy.includes("default-src 'self'")) {
    fail("Content-Security-Policy", "default-src 'self' is missing");
  }
  if (!contentSecurityPolicy.includes("frame-ancestors 'none'")) {
    fail("Content-Security-Policy", "frame-ancestors 'none' is missing");
  }

  if (!home.headers.get("strict-transport-security")) {
    fail("HTTPS protection", "Strict-Transport-Security header is missing");
  }

  const cryptoButton = /<button\b(?=[^>]*\bid=["']crypto-btn["'])(?=[^>]*\bhidden(?:\s|=|>))[^>]*>/i;
  if (!cryptoButton.test(home.body)) {
    fail("crypto remains disabled", "the crypto button is absent or no longer hidden");
  }

  for (const id of [
    "consent-banner",
    "consent-reject-btn",
    "consent-accept-btn",
    "cookie-settings-btn",
  ]) {
    if (!home.body.includes(`id="${id}"`)) {
      fail("privacy controls", `#${id} is missing`);
    }
  }

  if (!home.body.includes('href="/privacy"')) {
    fail("privacy link", "the home page does not link to /privacy");
  }

  if (!home.body.includes('href="/play"')) {
    fail("hidden game link", "the home page no longer links to /play");
  }

  const heroVideos = home.body.match(/<video\b(?=[^>]*\bclass=["'][^"']*\bbg-video\b[^"']*["'])[^>]*>/gi) || [];
  if (heroVideos.length !== 2 || !home.body.includes("crossfadeHeroVideo")) {
    fail("hero video loop", "the two-video crossfade is missing");
  }
}

const privacy = results.get("/privacy");
if (privacy) {
  if (!privacy.body.includes("<h1>Privacy Policy</h1>")) {
    fail("privacy page", "Privacy Policy heading is missing");
  }
  const hasContact =
    privacy.body.includes("dreambig@onebilliondream.com") ||
    (privacy.body.includes("Privacy questions and requests can be sent to") &&
      privacy.body.includes("/cdn-cgi/l/email-protection"));
  if (!hasContact) {
    fail("privacy contact", "the public privacy contact is missing");
  }
}

const play = results.get("/play");
if (play) {
  if (!play.body.includes("<title>Play — One Billion Dream</title>")) {
    fail("hidden game", "the expected game page title is missing");
  }
  if (!/<meta\s+name=["']robots["']\s+content=["'][^"']*noindex/i.test(play.body)) {
    fail("hidden game privacy", "the hidden game is no longer marked noindex");
  }
}

if (failures.length > 0) {
  for (const failure of failures) {
    console.error(`::error title=Production check failed::${failure}`);
  }
  console.error(`\n${failures.length} production check(s) failed.`);
  process.exit(1);
}

console.log(`All ${routes.length} public routes and production safeguards passed.`);
