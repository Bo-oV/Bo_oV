# Design QA

## Comparison target

- Source visual: `E:\Bo_oV\Material\exec-2d60a1c5-4c70-4ec3-afce-443ced3d3938.png`
- Implementation captures:
  - `screenshots/1440x1024.png` — desktop hero and manifesto
  - `screenshots/834x1194.png` — tablet
  - `screenshots/390x844.png` — mobile hero
  - `screenshots/mobile-menu.png` — mobile open-menu state
- Comparison evidence: `screenshots/comparison-desktop.png` combines the source design board and rendered desktop frame.

## Findings and fixes

- [P1, fixed] The mobile menu could visually blend with page content.
  - Fix: rendered an opaque, fixed navigation layer below the header with its own stacking context, 44px control target, `aria-expanded`, and `aria-controls`.
- [P1, fixed] Mobile and tablet spacing used overlapping one-off values.
  - Fix: consolidated spacing to the 4/8px token scale and applied consistent section, typography, button, and list gaps.
- [P2, fixed] Founder card contained an invented portrait, contrary to the final content brief.
  - Fix: replaced it with the text-only founder and LinkedIn block.
- [P2, fixed] Copy and external-link handling diverged from the final brief.
  - Fix: applied the supplied Ukrainian copy and added Google Play / Instagram links with `noopener noreferrer`.

## Required fidelity surfaces

- Fonts and typography: Manrope display hierarchy and Inter body copy; display, heading, body, label, and spacing tokens use responsive `clamp()` scales. Headings use balanced wrapping; paragraphs use pretty wrapping.
- Spacing and layout rhythm: 4/8px spacing tokens and responsive section padding; mobile gutters are 20px (16px at 360px).
- Colors and visual tokens: warm white, navy, supplied blue-to-violet gradient, lavender accents, and thin orbit lines remain intact.
- Image quality and asset fidelity: Sviato hero artwork retains its original proportions using `object-fit: contain`; the founder image was intentionally removed per the final brief.
- Copy and content: final supplied Ukrainian content is in place.

## Responsive checks

- No horizontal overflow: 360×800, 390×844, 430×932, 768×1024, 834×1194, 1024×1366, 1280×800, 1440×1024, and 1920×1080.
- Mobile menu: opens as an opaque layer, closes on internal-link selection, and maintains accessible button state.
- Motion: the reduced-motion rule disables reveal transitions and hero hover rotation.

## Follow-up polish

- The hero phone artwork is supplied as a raster composition with a white canvas. Replacing it with an original transparent Sviato render later would remove the faint rectangular edge visible on some large screens.

final result: passed
