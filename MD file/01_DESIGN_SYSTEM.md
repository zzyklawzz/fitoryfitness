# FITORY WEBSITE DESIGN SYSTEM

Version: 2.1

Master Reference:
- index.html + home.html

---

# Purpose

This document defines the global visual language, layout standards and coding conventions for the Fitory website.

Every new page must follow this design system to ensure visual consistency across the entire website.

When in doubt, always follow the latest approved Home implementation in **index.html + home.html**.

---

# 1. Brand Identity

## Brand Personality

Fitory is a premium fitness brand.

The website should communicate:

- Premium
- Modern
- Luxury
- Professional
- Spacious
- High-end
- Trustworthy
- Investor Confidence

---

## Design Inspiration

The visual direction should feel similar to:

- Apple
- Tesla
- Nike
- Stripe

Not because of identical appearance,
but because of their clean layout,
large typography,
strong branding
and minimal user interface.

---

# 2. Colour System

## Primary Orange

Hex

#f58220

Usage

- Active navigation
- Buttons
- Dividers
- Section labels
- Feature numbers
- Highlights

---

## Background

Primary

#0a0a0a

Page Background

Black

---

## Surface

Cards

#1a1a1a

---

## Text

Primary

White

Secondary

text-zinc-400

Muted

text-zinc-500

---

## Borders

Default

border-white/10

---

# 3. Typography

## Hero Heading

Hero typography must be fluid and responsive rather than tied to separate desktop/mobile headline markup.

Recommended CSS pattern

```css
font-size: clamp(38px, 4.35vw, 68px);
line-height: 0.96;
```

Compact mobile may use a smaller fluid range, for example:

```css
font-size: clamp(32px, 8.2vw, 39px);
```

Style

- Font Black
- Uppercase
- Left aligned
- Same headline content across desktop and mobile
- Avoid forced `<br>` line breaks unless specifically required by the approved design

---

## Section Heading

text-4xl md:text-5xl

Font

font-black

Uppercase

---

## Feature Heading

text-4xl

font-extrabold

uppercase

---

## Section Label

text-sm

md:text-base

uppercase

tracking-[0.25em]

font-semibold

text-orange-500

---

## Paragraph

text-lg

leading-8

text-zinc-400

Maximum Width

max-w-3xl

---

# 4. Layout System

## Global Container

Every section must use

max-w-7xl

mx-auto

px-6

lg:px-10

---

## Grid

Default

grid lg:grid-cols-2

gap-16

items-center

---

## Section Spacing

Primary Home / master rhythm

Major Sections

`py-16 lg:py-20`

Between Feature Blocks

`h-16 lg:h-20`

Use larger spacing only when a specific layout clearly requires it. Avoid stacking vertical padding on nested sections.

---

## Section Title

Always centered.

Contains

- Orange Label
- Large Heading
- Description

Spacing

mb-20

---

# 5. Hero Standard

The current approved Home hero in `home.html` is the master hero implementation for all pages.

## Core Architecture

Every page hero should use one responsive component:

- One hero section
- One visual source by default
- One eyebrow
- One headline
- One description
- Shared overlays
- Fluid typography and spacing

Do not build separate desktop and mobile text markup.

Do not use a separate mobile hero creative by default. A separate asset should only be introduced when there is a confirmed design requirement that cannot be solved through responsive cropping.

## Recommended Structure

```html
<section class="site-hero PAGE-hero">

    <img
        src="Assets/images/PAGE/PAGE-hero.png"
        alt=""
        class="hero-media"
    >

    <div class="absolute inset-0 bg-black/20 z-[1]"></div>
    <div class="absolute inset-0 hero-gradient z-[2]"></div>

    <div class="hero-content">
        <div class="hero-copy">
            <p class="hero-eyebrow">SECTION LABEL</p>
            <h1 class="hero-title">Hero headline</h1>
            <p class="hero-description">Hero description.</p>
        </div>
    </div>

</section>
```

## Hero Media

Use a real `<img class="hero-media">` inside the hero instead of switching CSS background images between breakpoints.

Recommended behaviour:

```css
.hero-media {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
}
```

Page-specific `object-position` adjustments are allowed when required by composition.

## Hero Height

Do not use `100vh` as the primary hero height for the new master hero pattern.

Use a controlled fluid range, following the approved Home implementation. Example:

```css
min-height: clamp(520px, 48vw, 760px);
```

Compact mobile may use a fixed minimum such as `500px` when needed to preserve content readability.

## Mobile / Compact Behaviour

- Keep the same visual and same text content.
- Let width and `clamp()` control text wrapping.
- Do not force mobile-only `<br>` line breaks.
- Keep enough top clearance for the fixed header.
- Use `object-fit: cover` and page-specific `object-position` only when necessary.
- Avoid special handling for browser “Desktop site” mode unless a genuine breakpoint issue remains after using the fluid hero architecture.

## Content Alignment

Content is left aligned by default.

Hero copy width and title width should be controlled responsively so text does not collide with the main subject in the artwork.

## CTA

No CTA unless requested.

---

# 6. Feature Section Standard

Every feature section begins with

01

02

03

...

Number Style

text-6xl

font-black

text-orange-500

---

Heading

text-4xl

font-extrabold

uppercase

---

Divider

w-14

h-1

bg-orange-500

rounded-full

---

Checklist

grid-cols-2

Orange tick

Uppercase text

---

# 7. Images

Use premium lifestyle photography.

Preferred

- Gym
- Members
- Coaches
- Recovery
- Equipment

Avoid

- Technical diagrams
- Flowcharts
- Busy infographics

---

Large Images

rounded-3xl

Optional

shadow-2xl

hover:scale-[1.02]

transition duration-500

---

# 8. Cards

Background

bg-[#1a1a1a]

Border

border border-white/10

Radius

rounded-2xl

Padding

p-8

Heavy shadows are not recommended.

---

# 9. Buttons

Primary

Orange

Rounded

Bold

Uppercase

Hover

Slight colour change only.

Avoid excessive animations.

---

# 10. Animation

Allowed

hover:scale-[1.02]

transition duration-500

Avoid

- Heavy animation
- Parallax
- Auto motion
- Complex effects

---

# 11. HTML Standards

Always generate complete HTML.

Never output partial layouts unless requested.

Do not replace repeated elements with comments.

Example

❌

<!-- Repeat Card -->

✅

Output every card completely.

The generated HTML must be production-ready and copy-and-paste ready.

---

# 12. Naming Convention

Images

home-hero.png

facility-hyrox.png

membership-card.png

business-dashboard.png

Files

index.html

facilities.html

membership.html

classes.html

pt.html

business.html

---

# 13. Design Philosophy

Consistency is more important than creativity.

Every page should feel like it belongs to the same website.

Do not redesign components unnecessarily.

When uncertain,

follow the latest approved implementation in **index.html + home.html**.