# Complete the Talem migration

## Goal
Restore everything present in the uploaded Talem app and remove migration-only rendering gaps without redesigning or rewriting its content.

## Changes
- Restore the original SVG handling so sign-in, blog editing, error, and detail-page icons render instead of crashing their pages.
- Make every gradient phrase—including “Made Easy”—visibly render while preserving the original gradient styling.
- Correct the invalid nested heading in the testimonials section, which currently causes a browser rendering warning.
- Restore the original favicon exactly and preserve the original public-file behavior.
- Add page-specific browser/share titles and descriptions to every page wrapper, because the original title system does not update them under the new app shell.
- Guard account/profile pages against missing signed-in user data so they show their intended states rather than throwing errors.
- Replace the two dead external college images only if the uploaded project contains a matching local source; otherwise retain the original URLs to preserve exact content.

## Verification
- Compare all uploaded source and public files again after changes.
- Check every declared page on desktop and mobile for visible headings, text, images, horizontal overflow, and browser errors.
- Confirm the main heading reads “High School Made Easy,” sign-in and editor pages render, and the project build is clean.

## Technical details
- Keep the existing TanStack routing compatibility layer; do not alter Talem’s data, Firebase project, copy, or visual design.
- Limit legacy-source edits to compatibility fixes that are required by React 19/Tailwind 4.
