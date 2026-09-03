# FITORY WEBSITE COMPONENT LIBRARY

Version: 2.1

Related Documents:

- 01_DESIGN_SYSTEM.md
- 03_CONTENT_GUIDE.md
- 04_DEVELOPMENT_GUIDELINES.md

---

# Component Philosophy

Fitory uses a consistent set of reusable UI patterns.

The purpose of this library is to ensure:

- Visual consistency
- Reusable layouts
- Consistent spacing
- Consistent typography
- Consistent responsive behaviour
- Easy maintenance
- Faster page development

Do not create a new design pattern when an existing component can be reused.

---

# COMP-01 — Header

## Purpose

Global website navigation.

The active Header implementation is maintained in:

index.html

A reference/reusable copy is stored in:

components/header.html

---

## Usage

The Header is included only in:

index.html

Individual page files must NOT contain the Header HTML.

Individual pages include only their own page content.

---

## Structure

Logo

↓

Desktop Navigation

↓

CTA

↓

Mobile Navigation

---

## Layout

Header:

fixed top-0 left-0 right-0
z-50
bg-black/90
backdrop-blur
border-b border-orange-500/10

Navigation container:

max-w-7xl
mx-auto
px-6
py-4

flex

items-center

justify-between

---

## Logo

Use:

Assets/logos/fitory-logo.png

Example:

```html
<a href="index.html"
   class="flex items-center shrink-0">

    <img
        src="Assets/logos/fitory-logo.png"
        alt="Fitory Fitness"
        class="h-10 md:h-12">

</a>

---

# COMP-02 — Responsive Hero

## Purpose

The Hero is the reusable responsive banner component used at the top of Fitory pages.

The master implementation is the approved Home hero in:

- `home.html`
- `style.css`

All new and revised page heroes should follow this structure before adding page-specific content.

## Structure

Hero Section

↓

Hero Media (`hero-media`)

↓

Dark Overlay + `hero-gradient`

↓

Hero Content (`hero-content`)

↓

Hero Copy (`hero-copy`)

↓

Eyebrow + Title + Description

## Standard Markup

```html
<section
    id="hero"
    class="site-hero PAGE-hero"
>

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

            <h1 class="hero-title">
                Hero headline
            </h1>

            <p class="hero-description">
                Hero description.
            </p>
        </div>
    </div>

</section>
```

## Responsive Rules

- Use the same visual source across desktop, mobile and narrow desktop by default.
- Use the same eyebrow, title and description markup at all sizes.
- Do not create separate mobile hero text.
- Do not use forced `<br>` line breaks by default.
- Use fluid `clamp()` sizing for hero typography.
- Use a controlled hero height instead of `100vh`.
- Use `object-fit: cover` for the media.
- Adjust `object-position` page-by-page only when required.
- Preserve safe spacing below the fixed header.

## Page-Specific Variations

Allowed:

- Hero image source
- `object-position`
- Copy width
- Minor typography adjustment for unusually long page titles

Avoid:

- Different hero architecture per page
- Separate mobile creative without a confirmed need
- Different header clearance logic per page
- Page-specific fixed heights that break responsive behaviour
