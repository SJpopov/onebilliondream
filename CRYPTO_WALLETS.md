# Crypto wallet register

The crypto contribution button is temporarily hidden on the website while
wallet access and supported networks are being verified.

Do not enable an address only because it has a zero balance. First confirm
that the wallet or exchange account is accessible, verify the exact network,
and complete a small incoming and outgoing test transaction.

## Current addresses

| Asset / network label | Public receiving address | Status checked 2026-07-29 |
| --- | --- | --- |
| BTC | `bc1q9zsep5cspgu3zeyh5hlg5tyvra59duj2wq27km` | Zero balance; wallet source unknown |
| ETH / USDT / USDC / BNB | `0x48bbe31fa584b52b4fce3e7cae48cadfbf50a9b2` | Zero balance on Ethereum and BNB Smart Chain; wallet source and token networks unknown |
| SOL | `62s6iRJpHbYENpj96Nm6fncqBTygTHrSjEvUVWANcKfV` | Zero balance; wallet source unknown |
| DOGE | `D9G7cNbGhWxocSimXNMiRCZpCeS4C5aV6p` | Zero balance; wallet source unknown |
| ADA | `addr1q903k5pwzhf46fjjh7dp7047t9ard89hulmpdj3jr4mj8spp7xaqmgslpxklpwjqck3rluqzrvuw59dsvcwe5rhs8dxsyhkl66` | Zero balance; wallet source unknown |
| TRX / USDT TRC-20 | `TKfTomhzn5n67euckht3Dz34YTrQJN2m1s` | Zero balance; wallet source unknown |
| XLM | `GCW3WED6SDHAWABJNMODJN3MU5WO7XE2Q7S23VMCWZWXL7NAB23DSF3D` | Account not activated; wallet source unknown |
| TON | `UQDgV0oRmvWrwA2yarptc70V15C6E_83tkxtcJSkzZmXbi2T` | Address not initialized; wallet source unknown |
| LTC | `ltc1q8fu9euv8zelfuln5vc776tn7z8qwtj6sr7755w` | Zero balance; wallet source unknown |
| ZEC | `t1Nd9AoiQKhkBC2Boj2KQ26ChgMLidyAxgM` | Zero balance; wallet source unknown |

## Re-enable the website button

1. Confirm access to every address that will remain listed.
2. Replace or remove unverified addresses in `index.html`.
3. State the exact network for every token, especially USDT and USDC.
4. Complete small incoming and outgoing test transactions.
5. In `index.html`, find the button with `id="crypto-btn"` and remove only
   the `hidden` attribute.
6. Validate the modal, copied addresses, and live deployment before accepting
   contributions.

Never store seed phrases, private keys, recovery files, passwords, or exchange
credentials in this repository.
