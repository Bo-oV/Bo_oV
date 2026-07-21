# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

## Bo_oV Prototype Decisions

- The first-screen hero image should use `src/assets/sviato-hero-mockup.webp`, based on the supplied Sviato mobile mockup, and should render large enough to visually fill the hero media area on desktop and mobile.
- The first-screen hero image should sit opposite the hero text and scale within a controlled media size so it does not create a large empty gap before the “Наш підхід” section.
- The first-screen hero image must not be cropped; it should scale down responsively with its shadow visible inside the media area.
- On mobile, the manifesto value list and Sviato feature list should share the same icon/text layout: fixed icon column, equal icon-to-text gap, and icons vertically centered against the full text block.
- The contact CTA button should open Telegram at `https://t.me/liberieritis_wd` and use a white Telegram icon on the gradient button.
