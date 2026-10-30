# Verify all extracurriculars and repair logos

## Scope
- Confirm the live merge produces exactly 443 distinct opportunities and that every record has the fields Talem needs.
- Test all 443 displayed image sources, including silent generic favicon responses that do not trigger a browser error.
- Replace the 56 broken or generic images found in the audit with verified artwork published by the corresponding organization or its official program website.
- Store replacement artwork with the project so third-party hotlink failures do not return.
- Keep all opportunity titles, descriptions, tags, filters, and destinations unchanged.

## Verification
- Re-run the complete 443-record data and image audit after replacement.
- Open the live Extracurriculars page, confirm the 443 result count, inspect all rendered cards for Talem fallback images, and test representative detail dialogs and destination buttons.
- Check desktop and mobile layouts and confirm the project builds successfully.

## Technical details
- Add a keyed logo override map so both live database records and bundled Klyra records receive the repaired image before rendering.
- Use organization-hosted logos or official-domain favicons only; do not invent marks or use the Talem logo as an activity substitute.
- Preserve the current merge and deduplication behavior that yields 159 original records plus 284 Klyra additions.
