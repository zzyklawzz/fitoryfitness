# FITORY WEBSITE DEVELOPMENT GUIDELINES

Version: 2.3

Related Documents:
- 01_DESIGN_SYSTEM.md
- 02_COMPONENT_LIBRARY.md
- 03_CONTENT_GUIDE.md

Master HTML / Visual Reference:
- Home page: index.html + home.html
- index.html is the Home page shell.
- home.html contains the current Home page content loaded by script.js.

Master Reference Rule:
- The Home page is the primary visual master for the Fitory website.
- New and revised pages must follow the Home page's overall visual language before adapting page-specific content.
- facilities.html, business.html, career.html, mobile-app.html and other existing pages may be used as secondary implementation references only.
- The latest approved Home implementation takes precedence over older page implementations when visual patterns differ.


---

# Purpose

This document defines the coding standards, HTML structure, TailwindCSS conventions, file structure and development rules for the Fitory website.

Every page must follow these standards to ensure consistency, maintainability and production-ready quality.


---

# 0. Mandatory Pre-Build Review

Before generating or significantly revising any Fitory page, the following files must be reviewed first.

## Required MD Review

Always review the latest versions of:

- 00_PROJECT_OVERVIEW.md
- 01_DESIGN_SYSTEM.md
- 02_COMPONENT_LIBRARY.md
- 03_CONTENT_GUIDE.md
- 04_DEVELOPMENT_GUIDELINES.md

Do not rely on memory of previous conversations or previous versions of the MD files.

Use the latest uploaded/current version of each MD file.


---

## Required Project Review

Before generating page code, also review the latest approved implementation files relevant to the task.

At minimum:

- index.html
- home.html
- components/header.html
- components/footer.html
- script.js
- style.css

Also review the most relevant existing page for the new page's purpose when useful.

Examples:

- Facilities-related page → facilities.html
- Business-related page → business.html
- Career-related page → career.html
- Mobile App-related page → mobile-app.html

These pages are secondary implementation references.

They do not override the Home page as the primary visual master.


---

## Review Order

Use this order when building a new page:

1. Latest MD files
2. Current Home page (`index.html` + `home.html`)
3. Current shared Header and Footer
4. Current `style.css` and `script.js`
5. Relevant existing page(s)
6. New page content and layout


---

## Home Page Master Rule

The Home page is the primary visual reference for the entire Fitory website.

The Home page defines the overall visual language, including:

- Hero proportions and treatment
- Overall page rhythm
- Section spacing
- Typography hierarchy
- Orange / black / white visual balance
- Image treatment
- Card treatment
- Border treatment
- CTA treatment
- Container width
- Responsive behaviour
- Overall premium fitness brand presentation

When creating a new page, adapt the Home page visual language rather than copying an unrelated page's design.

The Home page is the master visual reference.

It is not a requirement for every page to copy the Home page section-for-section.

Each page should retain its own purpose and content while maintaining the same overall Fitory visual language.

### Master Hero Rule

The latest approved hero structure in `home.html` is the master hero component for all pages.

New or revised page heroes should follow these rules:

- Use one `<section class="site-hero PAGE-hero">`.
- Use one `<img class="hero-media">` as the visual layer by default.
- Use one `hero-content > hero-copy` text block.
- Use the same eyebrow, headline and description markup at desktop and mobile sizes.
- Do not create separate mobile headline markup.
- Do not force `<br>` line breaks in hero titles unless explicitly approved.
- Do not use `100vh` as the primary height for the new hero pattern.
- Use controlled fluid height and `clamp()` typography.
- Use `object-fit: cover`; page-specific `object-position` is allowed when needed.
- Do not switch to a separate mobile hero creative by default.
- Keep fixed-header clearance in mind at all responsive widths, including narrow desktop and browser Desktop Site mode.


---

## Existing Page Reference Rule

Existing pages may be reviewed for reusable implementation patterns, but they are not automatically the visual master.

For example:

- facilities.html may provide a useful feature-section implementation.
- business.html may provide a useful business-content implementation.
- career.html may provide a useful career-content implementation.
- mobile-app.html may provide a useful app-content implementation.

However, if their visual treatment differs from the latest Home page, the Home page takes priority for visual consistency.


---

## Conflict Resolution

If the following sources conflict, use this priority:

1. Latest explicit project decision
2. Latest approved Home implementation
3. Latest MD guidance
4. Shared component implementation
5. Older page implementation

If an MD file conflicts with a latest explicit project decision, do not silently choose one.

Flag the conflict and update the relevant MD file when the user asks to amend the project rules.


---

## Pre-Code Confirmation

Before generating code, verify internally that:

- All required MD files were reviewed.
- The latest Home page was reviewed.
- The latest Header and Footer were reviewed.
- The current CSS and JavaScript were reviewed when relevant.
- Existing components were reused where applicable.
- No unnecessary new architecture is being introduced.
- The new page does not unnecessarily duplicate Home page content.
- The page follows the current Fitory visual language.

Do not claim that the MD files were reviewed unless they were actually searched/opened in the current task.


---

# 1. Development Principles

Every page should be:

- Clean
- Consistent
- Responsive
- Easy to maintain
- Copy-and-paste ready
- Production ready

Never generate placeholder layouts unless specifically requested.

Do not introduce unnecessary architecture.

Do not create duplicate implementations of existing components.

Do not move or rename files unless explicitly required.


---

# 2. Website File Structure

The Fitory website uses a simple root-level multi-page HTML structure.

Recommended structure:

Fitory Website/

├── index.html
├── home.html
├── facilities.html
├── business.html
├── career.html
├── mobile-app.html
├── pt-collaboration.html
├── about-us.html
├── program.html
├── contact-us.html
│
├── components/
│   ├── header.html
│   └── footer.html
│
├── Assets/
│
├── script.js
└── style.css


---

## Main Page Files

Main website pages remain in the website root.

Examples:

- index.html
- facilities.html
- business.html
- career.html
- mobile-app.html
- pt-collaboration.html
- about-us.html
- program.html
- contact-us.html

Do not create a `pages/` directory for the main website pages.

Do not create a `content/` directory for the main website pages.


---

# 3. Page Architecture

All Fitory website pages follow the same standard HTML architecture.

Each page contains:

Header

↓

Page-specific Content

↓

Footer


---

## index.html

`index.html` is the Home page.

Structure:

Header

↓

Home Content

↓

Footer

The Home page content may be maintained in:

home.html

when using the current JavaScript loading structure.


---

## Individual Pages

Individual pages are standalone HTML files in the website root.

Examples:

- facilities.html
- business.html
- career.html
- mobile-app.html
- pt-collaboration.html
- about-us.html
- program.html
- contact-us.html

Each page contains:

- Page Header
- Page-specific content
- Page Footer

The Header and Footer must follow the approved Fitory shared layout.


---

# 4. Standard HTML Structure

Every standalone page should follow this structure:

<!DOCTYPE html>

<html lang="en">

<head>

    Page Information

    Favicon

    TailwindCSS

    Website CSS

</head>

<body>

    Header

    <main>

        Page-specific content

    </main>

    Footer

    Website JavaScript

</body>

</html>


---

## Standard Body Structure

Use:

<body
    class="bg-black text-white overflow-x-hidden"
    data-page="PAGE_NAME"
>

    <div id="header"></div>

    <main>

        <!-- Page-specific content -->

    </main>

    <div id="footer"></div>

    <script src="script.js"></script>

</body>


---

# 5. Header and Footer Architecture

The Header and Footer are global website components.

They must be consistent across all pages.

Reference component files:

components/header.html

components/footer.html

These files define the approved shared Header and Footer structure.


---

## Header

Every page must display the shared Fitory Header.

The Header should include:

- Fitory logo
- Main navigation
- Active navigation state
- Desktop navigation
- Mobile navigation
- Consistent spacing
- Consistent typography
- Consistent responsive behaviour

The Header must not be redesigned separately for individual pages.


---

## Footer

Every page must display the shared Fitory Footer.

The Footer should include:

- Fitory logo
- Navigation
- Contact information
- Social links
- Copyright
- Consistent spacing
- Consistent typography
- Consistent responsive behaviour

The Footer must not be redesigned separately for individual pages.


---

## Header/Footer Consistency Rule

All pages must use the same approved Header and Footer design.

Do not:

- Create a different Header for Facilities
- Create a different Header for Business
- Create a different Header for Career
- Create a different Header for About Us
- Create a different Footer for individual pages
- Change Header spacing on one page only
- Change Footer structure on one page only
- Create alternative navigation styles

If the global Header or Footer design changes, the change must be reflected across all pages.


---

# 6. Shared Components

Reusable shared components are stored in:

components/

Current reference components:

components/header.html

components/footer.html

These files are the reference versions for the global Header and Footer.

Before creating or modifying a page, check the existing component files.

Do not create a new Header or Footer design when an approved component already exists.


---

# 7. Page Content Rule

Only the page-specific content should change from page to page.

Standard structure:

Header

↓

Unique Page Content

↓

Footer


---

## Page-Specific Content

The following may change between pages:

- Hero
- Hero image
- Section titles
- Feature sections
- Images
- Cards
- Statistics
- Forms
- CTA content
- Page-specific interactions


---

## Global Content

The following should remain consistent:

- Header
- Navigation
- Footer
- Logo
- Global typography
- Global colours
- Global containers
- Global responsive behaviour
- Shared component styling


---

## Home Duplication Rule

The Home page already contains major brand/value sections such as:

- Why Choose Fitory
- Calories Miles
- Locations
- Member Reviews
- Download App CTA

New pages should not simply repeat these sections.

Each page should have a clear purpose and unique content.

For example:

- About Us → brand story, mission, vision, values and community
- Facilities → facilities, equipment and training experiences
- Mobile App → app features and digital member experience
- Business → investment and business model
- Career → employment opportunities
- Program → programs and training offerings
- Contact Us → contact information and enquiry actions

Shared themes may be referenced, but avoid unnecessary duplication of complete Home sections.


---

# 8. Page Flow

## Standard Individual Page

Hero

↓

Introduction

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

## Home Page — Master Visual Reference

The Home page is the primary visual master for all Fitory pages.

The current Home page is implemented through:

- index.html — Home page shell
- home.html — Home page content loaded by script.js

The current Home page includes sections such as:

Header

↓

Home Hero

↓

Why Choose Fitory

↓

Calories Miles Statistics

↓

How Calories Miles Work

↓

Locations

↓

Member Reviews

↓

Download App CTA

↓

Footer

The exact content and section order may evolve as the Home page is revised.

When building a new page:

- Follow the Home page's visual language.
- Reuse its typography hierarchy where appropriate.
- Follow its container and spacing conventions.
- Follow its image and card treatment.
- Follow its black / orange / white visual balance.
- Avoid copying Home-only content unless the new page specifically requires it.

The Home page is the master visual reference, not a template that every page must copy section-for-section.


---

## Individual Page Purpose

Every individual page should have a clear purpose.

Examples:

### About Us

Focus on:

- Fitory story
- Why Fitory exists
- Mission
- Vision
- Core values
- Community philosophy
- Brand promise

Avoid repeating:

- Home page USP cards
- Calories Miles
- Locations
- Member reviews
- Detailed app features

---

### Facilities

Focus on:

- Premium equipment
- Gym facilities
- Training environment
- Group fitness
- FitPro Zone
- Available training experiences


---

### Mobile App

Focus on:

- App features
- Digital member experience
- Calories Miles
- Account management
- Membership management
- App download


---

### Business

Focus on:

- Business opportunity
- Fitory investment model
- Franchise / partnership information
- Business benefits
- Business enquiry CTA


---

### Career

Focus on:

- Fitory culture
- Career opportunities
- Available positions
- Employee environment
- Application process


---

### Program

Focus on:

- Fitness programs
- Training programs
- Group programs
- Future program offerings

The Program page may remain a placeholder until the content and program structure are finalized.

Do not invent detailed program information before it is approved.


---

### Contact Us

Focus on:

- Contact information
- General enquiries
- Business enquiries
- Career enquiries
- Location/contact channels
- Contact CTA


---

# 8A. Responsive Hero / Mobile View Standard

The responsive hero implementation must follow the latest approved Home page.

## Same Content Across Viewports

Desktop, normal mobile, tablet/narrow desktop, and mobile browser Desktop Site mode should use the same hero content structure.

The browser should adapt through CSS, not through duplicate HTML content.

## Same Visual by Default

Use one master hero visual per page by default.

Do not automatically maintain separate `-mobile` hero images. Introduce a second creative only when the approved design genuinely requires a different composition and responsive cropping cannot solve it.

## Fluid Sizing

Prefer `clamp()` for:

- Hero height
- Hero title size
- Hero eyebrow size
- Hero description size
- Hero top/bottom spacing

## Header Clearance

The hero copy must never sit behind the fixed Header.

For compact desktop/tablet ranges, use a dedicated responsive range only when necessary to preserve safe clearance and readable copy width.

## Desktop Site Mode

Do not build a separate “phone Desktop Site” experience. Treat the reported viewport width as a normal responsive viewport. The hero architecture should remain stable because it uses one visual, one text block and fluid sizing.

---

# 9. Pre-Delivery Quality Check

Before delivering any new or revised page, verify:


## Structure

- Valid standalone HTML structure
- Correct `<head>` metadata
- Correct favicon path
- TailwindCSS loaded correctly
- `style.css` loaded correctly
- Shared Header loaded through the approved architecture
- Shared Footer loaded through the approved architecture
- `script.js` loaded correctly


## Visual Consistency

- Home page used as the primary visual master
- Correct Fitory typography hierarchy
- Correct Fitory black / orange / white palette
- Consistent container width
- Consistent section spacing
- Consistent card and border treatment
- Responsive behaviour checked
- Hero image is not unintentionally cropped
- Text is not clipped at desktop or mobile breakpoints
- No accidental background colour changes between sections


## Components

- Existing Header reused
- Existing Footer reused
- Existing CSS/component patterns reused where applicable
- No duplicate mobile-menu implementation
- No unnecessary new architecture
- No page-specific replacement of global components


## Content

- Page purpose is clear
- Content does not unnecessarily duplicate Home
- Content follows the Content Guide
- Headings follow the established Fitory style
- CTAs are relevant to the page


Only after these checks should the page be considered ready for delivery.


---

# 10. Feature Block Grouping

When multiple feature items belong to the same major section:

- Keep all related feature items inside the same major `<section>`.
- Follow the current Home master rhythm: use `py-16 lg:py-20` for grouped major sections and `h-16 lg:h-20` between feature blocks.
- Do not stack vertical padding on nested sections unless the design specifically requires it.
- Do not create a separate padded major section for every individual feature item.


---

## Correct Structure

```html
<section class="bg-[#0a0a0a] py-16 lg:py-20">

    <div class="max-w-7xl mx-auto px-6 lg:px-10">

        <!-- Feature 01 -->

        <div class="grid lg:grid-cols-2 gap-16 items-center">

            ...

        </div>


        <div class="h-16 lg:h-20"></div>


        <!-- Feature 02 -->

        <div class="grid lg:grid-cols-2 gap-16 items-center">

            ...

        </div>

    </div>

</section>