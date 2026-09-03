# FITORY WEBSITE PROJECT

**Version:** 1.1  
**Project Status:** Active Development  
**Design Baseline:** index.html + home.html  
**Last Updated:** 2026-08-27

---

# Project Overview

This repository contains the complete design standards, reusable components, content guidelines, and development conventions for the official Fitory website.

The objective is to ensure every page follows a single design language, coding standard, and user experience.

This documentation serves as the single source of truth for all future website development.

---

# Project Objectives

The Fitory website should always be:

- Premium
- Modern
- Clean
- Responsive
- Consistent
- Easy to maintain
- Scalable

Every page should feel like it belongs to the same website.

---

# Design Baseline

## Current Baseline

**index.html + home.html**

The Home page is the official implementation reference for the website. `index.html` is the Home page shell and `home.html` contains the current approved Home page content loaded by `script.js`.

Unless explicitly instructed otherwise, all future pages should follow the same:

- Header
- Footer
- Typography
- Layout
- Component styling
- Spacing
- HTML formatting
- TailwindCSS conventions
- Responsive behaviour

For hero sections, `home.html` is the master implementation. New and revised page heroes should follow the same responsive component architecture: one visual, one text block, fluid sizing, and no separate mobile creative by default.

---

# Documentation

## 01_DESIGN_SYSTEM.md

Defines the visual identity of the website.

Includes

- Brand Identity
- Colour Palette
- Typography
- Layout System
- UI Standards
- Design Principles

Purpose

**How the website should look.**

---

## 02_COMPONENT_LIBRARY.md

Defines every reusable UI component.

Includes

- Header
- Footer
- Hero
- Section Header
- Feature Sections
- Cards
- CTA
- FAQ
- Statistics
- Buttons

Purpose

**What reusable components exist.**

---

## 03_CONTENT_GUIDE.md

Defines the writing standards for the website.

Includes

- Brand Voice
- Writing Style
- CTA Guidelines
- Headlines
- Tone
- SEO Writing

Purpose

**How the website should communicate.**

---

## 04_DEVELOPMENT_GUIDELINES.md

Defines coding standards.

Includes

- HTML Structure
- TailwindCSS Standards
- Responsive Rules
- Accessibility
- Performance
- HTML Formatting

Purpose

**How the website should be developed.**

---

# Development Workflow

Every new page should follow this process.

```
Design System
        ↓
Component Library
        ↓
Content Guide
        ↓
Development Guidelines
        ↓
Master HTML (index.html + home.html)
        ↓
Generate Production HTML
```

Do not skip any step.

---

# Design Philosophy

The website should always prioritise:

1. Consistency
2. Simplicity
3. Readability
4. Maintainability
5. User Experience

Avoid unnecessary creativity that breaks visual consistency.

---

# Reusable Components

Before creating a new layout, always check whether an existing component can be reused.

Reuse is preferred over redesign.

Only introduce new components when they are expected to be reused across multiple pages.

---

# Project Structure

```
Fitory Website/

docs/
│
├── 00_PROJECT_OVERVIEW.md
├── 01_DESIGN_SYSTEM.md
├── 02_COMPONENT_LIBRARY.md
├── 03_CONTENT_GUIDE.md
├── 04_DEVELOPMENT_GUIDELINES.md
│
├── pages/
│
├── components/
│
├── assets/
│
├── css/
│
└── js/
```

---

# Master Assets

Assets should be organised into logical folders.

```
assets/

logos/

images/

icons/

videos/

downloads/
```

Follow the project naming conventions for all future assets.

---

# AI Working Rules

When generating HTML or modifying existing pages, always:

- Follow the Design System.
- Reuse approved Components.
- Follow the Content Guide.
- Follow the Development Guidelines.
- Match the Design Baseline.
- Preserve existing design consistency.
- Generate production-ready code.
- Output complete HTML unless partial output is specifically requested.

---

# Future Documentation

As the project grows, additional documentation may include:

```
05_PROJECT_STRUCTURE.md

06_CHANGELOG.md

pages/

home.md

facilities.md

membership.md

classes.md

pt.md

business.md

careers.md

contact.md
```

---

# Quality Checklist

Before considering any page complete:

- Design matches the Design System.
- Approved Components are used.
- Content follows the Content Guide.
- Code follows the Development Guidelines.
- Responsive behaviour is verified.
- Images follow project standards.
- Accessibility has been considered.
- HTML is clean and production-ready.

---

# Guiding Principle

> **Consistency over creativity.**

Every new page should feel like it was designed and developed as part of the same premium website.

When uncertain, always follow the approved documentation and the latest approved Home implementation (`index.html` + `home.html`).