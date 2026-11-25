# Tap-to-share business card

A dot-style contact card for Anthony Quintana (EMC Tickets). An NFC card holds only a link to this page; the details live here, so they can change without touching the cards. iPhones only open links from a card, which is why the details are not stored on the card itself.

- `index.html`: the whole page. Look (cream ticket on EMC red, Bricolage Grotesque and Figtree, pressed-pill button) comes from the EMC site.
- `anthony-quintana.vcf`: what **Save contact** opens. Keep it in step with the page: `node check.mjs`.

## Changing a detail

Edit it in both `index.html` and `anthony-quintana.vcf`, run `node check.mjs`, publish. The cards need no change.

## Writing a card

1. On an Android phone with NFC, open the published page in Chrome with `?setup` on the end of the address.
2. Press **Write a card**, allow NFC, hold the card flat against the back of the phone until it says "Card written".

The card gets the link of whatever address the page was opened at. Cards are left unlocked on purpose so they can be pointed at a new address later (for example emctickets.com/anthony once the site moves). Cards must be the kind phones read: NTAG213, 215 or 216. 125 kHz "proximity" cards do not work.
