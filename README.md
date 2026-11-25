# Tap-to-share business card

Dot-style contact cards for EMC Tickets people: Anthony Quintana at `/card/`, Steve White at `/card/steve/`. An NFC card holds only a link to this page; the details live here, so they can change without touching the cards. iPhones only open links from a card, which is why the details are not stored on the card itself.

- `index.html` + `anthony-quintana.vcf`: Anthony's page and the contact file behind **Save contact**.
- `steve/index.html` + `steve/steve-white.vcf`: Steve's.
- `card.css`, `card.js`, `fonts/`, `emc-logo.png`: shared by every page (the look comes from the EMC site; `card.js` is the `?setup` card writer).
- `node check.mjs` checks each page and its contact file carry the same details.

## Adding a person

Copy `steve/` to a new folder, change the name, buttons and contact file, add the person to `PEOPLE` in `check.mjs`, run it, publish. Their cards are written from `/card/<folder>/?setup`.

## Changing a detail

Edit it in both the person's page and their contact file, run `node check.mjs`, publish. The cards need no change.

## Writing a card

1. On an Android phone with NFC, open the published page in Chrome with `?setup` on the end of the address.
2. Press **Write a card**, allow NFC, hold the card flat against the back of the phone until it says "Card written".

The card gets the link of whatever address the page was opened at. Cards are left unlocked on purpose so they can be pointed at a new address later (for example emctickets.com/anthony once the site moves). Cards must be the kind phones read: NTAG213, 215 or 216. 125 kHz "proximity" cards do not work.
