# FITORY WEBSITE DESIGN SYSTEM
Version: 1.0

---

# Brand Style

Fitory is a premium fitness brand.

The website should feel like:

- Apple
- Tesla
- Stripe
- Nike

Keywords

- Premium
- Luxury
- Spacious
- Minimal
- Modern
- High-end
- Investor Confidence
- Large Typography
- Clean Layout
- Black Theme

Never create cluttered layouts.

---

# Brand Colours

Primary Orange
#f58220

Background
#0a0a0a

Card Background
#1a1a1a

Primary Text
#FFFFFF

Secondary Text
text-zinc-400

Borders
border-white/10

---

# Typography

Main Heading

text-4xl md:text-5xl
font-black
uppercase

Hero Heading

text-5xl md:text-6xl lg:text-7xl
font-black
uppercase
leading-[0.95]

Section Label

text-sm
md:text-base
uppercase
tracking-[0.25em]
font-semibold
text-orange-500

Paragraph

text-lg
leading-8
text-zinc-400

---

# Global Container

Every section MUST use

max-w-7xl
mx-auto
px-6
lg:px-10

Never use inconsistent container widths.

---

# Header Standard

Use the same header on every page.

Requirements

- Fixed Header
- Black background
- Slight transparency
- Backdrop blur
- Orange active menu
- Logo on left
- Navigation centered/right
- CTA button on desktop only

Header Classes

fixed top-0 left-0 right-0
z-50
bg-black/90
backdrop-blur
border-b border-orange-500/10

Navigation Container

max-w-7xl mx-auto px-6 py-4
flex
items-center
justify-between

Logo

Assets/logos/fitory-logo.png

Desktop Navigation

hidden lg:flex

Active Menu

text-orange-500

Inactive Menu

white

---

# Footer Standard

All pages MUST use the same footer.

Requirements

- Black background
- Orange divider
- Company logo
- Navigation links
- Contact
- Social Icons
- Copyright
- Rounded top section if applicable

Never redesign the footer differently.

---

# Hero Section

Default Hero

Height

h-[75vh]

Background

Large full-width image

Overlay

Use left-to-right black gradient

Example

rgba(0,0,0,.88)
↓

rgba(0,0,0,.15)

Content

Left aligned

max-w-xl

No CTA button unless requested.

Hero Typography

Large
Bold
Minimal

---

# Section Structure

Preferred order

Hero

↓

Introduction

↓

Large Visual

↓

Feature Sections

↓

Cards

↓

Statistics

↓

CTA

↓

Footer

---

# Section Header

Always use

Centered

Small Orange Label

Large Heading

Description

Spacing

mb-20

---

# Content Layout

Standard Layout

grid lg:grid-cols-2
gap-16
items-center

Alternate every section

Image Left

Content Right

↓

Content Left

Image Right

↓

Image Left

Content Right

---

# Number Style

Every feature section begins with

01

02

03

Style

text-6xl
font-black
text-orange-500

---

# Orange Divider

Always

w-14
h-1
bg-orange-500
rounded-full

---

# Images

Every large image MUST use

rounded-3xl

Examples

class="w-full rounded-3xl"

or

class="w-full object-cover rounded-3xl shadow-2xl hover:scale-[1.02] transition duration-500"

Never use plain rectangular images.

---

# Image Style

Preferred

Lifestyle

Premium Photography

Dashboard Mockups

Laptop Mockups

Phone Mockups

3D Composition

Floating Cards

Avoid

Flow Charts

Technical Diagrams

Complex Infographics

Crowded Visuals

---

# Cards

Background

bg-[#1a1a1a]

Border

border border-white/10

Radius

rounded-2xl

Padding

p-8

---

# Feature Checklist

Always use

grid-cols-2

Orange Tick

✓

Example

✓ Premium Equipment

✓ Cardio Zone

✓ Recovery Area

✓ Coach Support

---

# Section Spacing

Major Sections

py-24

Internal Blocks

space-y-24

or

<div class="h-24"></div>

---

# Border Radius Rules

Large Image

rounded-3xl

Cards

rounded-2xl

Buttons

rounded-full
or
rounded-md

---

# Shadows

Large Images

shadow-2xl

Cards

No heavy shadow

---

# Animations

Allowed

hover:scale-[1.02]

transition duration-500

Avoid

Complex animations

Parallax

Heavy motion

---

# HTML Rules

Always output COMPLETE HTML blocks.

Never output partial snippets unless requested.

Do not remove existing classes.

Preserve spacing.

Follow the existing page style.

---

# Naming Convention

Images

business-hero.png

business-dashboard.png

business-ecosystem.png

facility-hyrox.png

membership-card.png

HTML

business.html

facilities.html

membership.html

---

# Design Principle

Every page should feel like it belongs to the same website.

Consistency is more important than creativity.

When unsure,

follow the Facilities page as the master design reference.