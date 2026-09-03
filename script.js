/* ===================================== */
/* FITORY WEBSITE JAVASCRIPT */
/* VERSION 3.1 - MOBILE MENU FIX */
/* ===================================== */


/* ===================================== */
/* COMPONENT LOADER */
/* ===================================== */

async function loadComponent(id, file) {

    const element =
        document.getElementById(id);

    if (!element) {
        return;
    }

    try {

        const response =
            await fetch(
                file + "?v=" + Date.now()
            );

        if (!response.ok) {

            throw new Error(
                `Unable to load ${file} (${response.status})`
            );

        }

        const html =
            await response.text();

        element.innerHTML = html;

    } catch (error) {

        console.error(
            `Fitory component loading error: ${error.message}`
        );

    }

}


/* ===================================== */
/* LOAD SHARED LAYOUT */
/* ===================================== */

async function loadLayout() {

    const page =
        document.body.dataset.page;


    /* ================================= */
    /* LOAD HEADER */
    /* ================================= */

    await loadComponent(
        "header",
        "components/header.html"
    );


    /* ================================= */
    /* LOAD HOME CONTENT */
    /* ================================= */

    /*
       Only index.html / Home loads
       home.html dynamically.

       Other pages contain their own
       page-specific content.
    */

    if (page === "home") {

        await loadComponent(
            "content",
            "home.html"
        );

    }


    /* ================================= */
    /* LOAD FOOTER */
    /* ================================= */

    await loadComponent(
        "footer",
        "components/footer.html"
    );


    /* ================================= */
    /* INITIALIZE SHARED FUNCTIONS */
    /* ================================= */

    requestAnimationFrame(() => {

        highlightActiveMenu();

        initMobileMenu();

    });

}


/* ===================================== */
/* ACTIVE NAVIGATION */
/* ===================================== */

function highlightActiveMenu() {

    const page =
        document.body.dataset.page;

    if (!page) {
        return;
    }


    /* ================================= */
    /* REMOVE EXISTING ACTIVE STATE */
    /* ================================= */

    document
        .querySelectorAll(".menu-nav-link")
        .forEach(link => {

            link.classList.remove(
                "active",
                "text-orange-500"
            );

        });


    /* ================================= */
    /* PAGE MAP */
    /* ================================= */

    const pageMap = {

        home:
            "index.html",

        facilities:
            "facilities.html",

        "mobile-app":
            "mobile-app.html",

        programs:
            "programs.html",

        career:
            "career.html",

        investor:
            "investor.html",

        "about-us":
            "about-us.html",

        "contact-us":
            "contact-us.html",

        "coaches-partnership":
            "coaches-partnership.html"

    };


    const currentFile =
        pageMap[page];


    if (!currentFile) {
        return;
    }


    /* ================================= */
    /* DESKTOP + MOBILE ACTIVE LINK */
    /* ================================= */

    document
        .querySelectorAll(
            ".menu-nav-link"
        )
        .forEach(link => {

            const href =
                link.getAttribute("href");

            if (href === currentFile) {

                link.classList.add(
                    "active",
                    "text-orange-500"
                );

            }

        });

}


/* ===================================== */
/* MOBILE MENU */
/* ===================================== */

function initMobileMenu() {

    /*
       IMPORTANT:

       Header uses:

       id="mobile-menu-button"

       NOT:

       id="mobile-menu-btn"
    */

    const menuButton =
        document.getElementById(
            "mobile-menu-button"
        );

    const mobileMenu =
        document.getElementById(
            "mobile-menu"
        );

    const menuIcon =
        document.getElementById(
            "menu-icon"
        );

    const closeIcon =
        document.getElementById(
            "close-icon"
        );


    /* ================================= */
    /* CHECK ELEMENTS */
    /* ================================= */

    if (!menuButton || !mobileMenu) {

        console.warn(
            "Fitory mobile menu elements not found."
        );

        return;

    }


    /* ================================= */
    /* PREVENT DUPLICATE LISTENERS */
    /* ================================= */

    if (
        menuButton.dataset.initialized
        ===
        "true"
    ) {

        return;

    }

    menuButton.dataset.initialized =
        "true";


    /* ================================= */
    /* OPEN / CLOSE MENU */
    /* ================================= */

    menuButton.addEventListener(
        "click",
        function () {

            const isCurrentlyOpen =
                !mobileMenu.classList.contains(
                    "hidden"
                );


            /*
               Toggle menu visibility
            */

            mobileMenu.classList.toggle(
                "hidden"
            );


            /*
               Hamburger icon
            */

            if (menuIcon) {

                menuIcon.classList.toggle(
                    "hidden"
                );

            }


            /*
               Close icon
            */

            if (closeIcon) {

                closeIcon.classList.toggle(
                    "hidden"
                );

            }


            /*
               Accessibility
            */

            menuButton.setAttribute(
                "aria-expanded",
                String(!isCurrentlyOpen)
            );


            /*
               Lock page scroll when open
            */

            document.body.classList.toggle(
                "overflow-hidden",
                !isCurrentlyOpen
            );

        }
    );


    /* ================================= */
    /* CLOSE AFTER CLICKING MENU LINK */
    /* ================================= */

    mobileMenu
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                function () {

                    closeMobileMenu();

                }
            );

        });


    /* ================================= */
    /* CLOSE MENU FUNCTION */
    /* ================================= */

    function closeMobileMenu() {

        mobileMenu.classList.add(
            "hidden"
        );


        if (menuIcon) {

            menuIcon.classList.remove(
                "hidden"
            );

        }


        if (closeIcon) {

            closeIcon.classList.add(
                "hidden"
            );

        }


        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );


        document.body.classList.remove(
            "overflow-hidden"
        );

    }


    /* ================================= */
    /* CLOSE WHEN WINDOW BECOMES DESKTOP */
    /* ================================= */

    window.addEventListener(
        "resize",
        function () {

            if (
                window.innerWidth >= 1024
            ) {

                closeMobileMenu();

            }

        }
    );

}


/* ===================================== */
/* USP DATA */
/* ===================================== */

const uspData = [

    {
        icon:
            "Assets/icons/usp/icon-24-7-access.png",

        title:
            "24/7 Access",

        desc:
            "Train anytime that fits your lifestyle, day or night."
    },

    {
        icon:
            "Assets/icons/usp/icon-affordable-membership.png",

        title:
            "Affordable Membership",

        desc:
            "Premium fitness without the premium price tag."
    },

    {
        icon:
            "Assets/icons/usp/icon-premium-equipment.png",

        title:
            "Premium Equipment",

        desc:
            "Train with high-quality machines and modern facilities."
    },

    {
        icon:
            "Assets/icons/usp/icon-beginner-friendly.png",

        title:
            "Beginner Friendly",

        desc:
            "A welcoming gym environment for every fitness level."
    },

    {
        icon:
            "Assets/icons/usp/icon-multiple-branches.png",

        title:
            "Multiple Branches",

        desc:
            "Convenient locations around Rawang for your workouts."
    },

    {
        icon:
            "Assets/icons/usp/icon-spacious.png",

        title:
            "SPACIOUS & COMFORTABLE",

        desc:
            "Train in an open, comfortable environment designed for a better workout experience."
    }

];


/* ===================================== */
/* RENDER USP */
/* ===================================== */

function renderUSP() {

    const uspGrid =
        document.getElementById(
            "usp-grid"
        );


    if (!uspGrid) {
        return;
    }


    uspGrid.innerHTML =
        uspData
            .map(item => `

                <div class="usp-card">

                    <img
                        src="${item.icon}"
                        alt="${item.title}"
                        loading="lazy"
                    >

                    <h3>
                        ${item.title}
                    </h3>

                    <p>
                        ${item.desc}
                    </p>

                </div>

            `)
            .join("");

}


/* ===================================== */
/* BRANCH DATA */
/* ===================================== */

const branchData = [

    {
        id:
            "country-homes",

        name:
            "Fitory Fitness Country Homes",

        location:
            "Country Homes, Rawang",

        address:
            "1-18, Avia Plus, Jalan Desa Utama, Bandar Country Homes, 48000 Rawang, Selangor",

        googleMaps:
            "https://maps.app.goo.gl/ZG7psTfe2488TJKL6",

        facebook:
            "https://www.facebook.com/profile.php?id=61592643099664",

        instagram:
            "https://www.instagram.com/fitoryfitness_bdrcountryhomes/"
    },

    {
        id:
            "tasik-puteri",

        name:
            "Fitory Fitness Tasik Puteri",

        location:
            "Bandar Tasik Puteri, Rawang",

        address:
            "Q-2-129, Avenue 3, Medan Puteri at, Jalan 7A/4, Bandar Tasik Puteri, 48020 Rawang, Selangor",

        googleMaps:
            "https://maps.app.goo.gl/8RXiBjHvtbkaqRe39",

        facebook:
            "https://www.facebook.com/profile.php?id=61593035513501",

        instagram:
            "https://www.instagram.com/fitoryfitness_tasikputeri/"
    },

    {
        id:
            "rawang",

        name:
            "Fitory Fitness Rawang",

        location:
            "Taman Jati, Rawang",

        address:
            "29A, Jalan 1B, Taman Jati, 48000 Rawang, Selangor",

        googleMaps:
            "https://maps.app.goo.gl/jNj3XXTaVKQb5eAs9",

        facebook:
            "https://www.facebook.com/profile.php?id=61592842735537",

        instagram:
            "https://www.instagram.com/fitoryfitness_rawang/"
    }

];


/* ===================================== */
/* RENDER BRANCHES */
/* ===================================== */

function renderBranches() {

    const branchGrid =
        document.getElementById(
            "branches-grid"
        );


    if (!branchGrid) {
        return;
    }


    branchGrid.innerHTML =
        branchData
            .map(branch => `

                <div class="branch-card">

                    <img
                        src="Assets/images/branches/fitory-branch-${branch.id}.png"
                        alt="${branch.name}"
                        loading="lazy"
                    >

                    <div class="branch-content">

                        <h3>
                            ${branch.name}
                        </h3>

                        <p class="text-orange-400 font-semibold mb-2">
                            📍 ${branch.location}
                        </p>

                        <p class="text-zinc-400 mb-4">
                            ${branch.address}
                        </p>

                        <div class="branch-buttons">

    <a
        href="${branch.googleMaps}"
        target="_blank"
        rel="noopener noreferrer"
        class="branch-btn"
    >
        View Map
    </a>


    <a
        href="${branch.facebook}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="${branch.name} Facebook"
        class="outlet-social-link"
    >
        <img
            src="Assets/icons/contact-us/facebook.png"
            alt="Facebook"
        >
    </a>


    <a
        href="${branch.instagram}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="${branch.name} Instagram"
        class="outlet-social-link"
    >
        <img
            src="Assets/icons/contact-us/instagram.png"
            alt="Instagram"
        >
    </a>

</div>

                    </div>

                </div>

            `)
            .join("");

}


/* ===================================== */
/* TESTIMONIAL DATA */
/* ===================================== */

const testimonialData = [

    {
        name:
            "Iffa Rameli",

        rating:
            5,

        source:
            "Google Review",

        review:
            "There are many gym equipments, and I've tried most of the machines. But there's one missing the hip abductor machine."
    },

    {
        name:
            "Paveetra Ariv",

        rating:
            5,

        source:
            "Google Review",

        review:
            "I've never been someone who loves working out. But after trying a session with Coach Dev, I'm hooked."
    },

    {
        name:
            "Thashiraa",

        rating:
            5,

        source:
            "Google Review",

        review:
            "The best value for money gym in Rawang in my opinion, very convenient, nice vibe and motivated environment."
    },

    {
        name:
            "Syahril Simon",

        rating:
            5,

        source:
            "Google Review",

        review:
            "Having a free trial. Very cozy and clean environment. Friendly gym crew. Everyone should come and try."
    },

    {
        name:
            "Nur Julaiha",

        rating:
            5,

        source:
            "Google Review",

        review:
            "Tried this gym for the first time and honestly it's so good! Super clean, good vibes, and beginner-friendly."
    },

    {
        name:
            "j Ekhmal",

        rating:
            5,

        source:
            "Google Review",

        review:
            "Friendly staff gym taker!! Raj and aaron so friendly and accommodating!! Gym is so vibe!!! 10/10"
    },

   {
        name:
            "Ahmad Quayyumshah",

        rating:
            5,

        source:
            "Google Review",

        review:
            "Gym full and new equipment . Very cozy. And also had hot shower ! Definitely gonna come here again"
    },

    {
        name:
            "muhd adam",

        rating:
            5,

        source:
            "Google Review",

        review:
            "Nice place to workout w your friends & family, the place is very organized and tidy… suitable for every gymbros"
    },

    {
        name:
            "azreen darwin",

        rating:
            5,

        source:
            "Google Review",

        review:
            "The Gym is so aesthetic , the staff is so helping and friendly. The equipment for me also nice !"
    }

];


/* ===================================== */
/* RENDER TESTIMONIALS */
/* ===================================== */

function renderTestimonials() {

    const testimonialContainer =
        document.getElementById(
            "testimonials-slider"
        );


    if (!testimonialContainer) {
        return;
    }


    let currentSlide = 0;


    function showTestimonials() {

        const featured =
            testimonialData.slice(
                currentSlide,
                currentSlide + 3
            );


        /*
           If fewer than 3 reviews remain,
           fill from beginning.
        */

        if (featured.length < 3) {

            featured.push(
                ...testimonialData.slice(
                    0,
                    3 - featured.length
                )
            );

        }


        testimonialContainer.innerHTML =
            featured
                .map(item => `

                    <div class="testimonial-card">

                        <div class="testimonial-stars">
                            ${"★".repeat(item.rating)}
                        </div>

                        <p class="testimonial-source">
                            ${item.source}
                        </p>

                        <p class="testimonial-review">
                            "${item.review}"
                        </p>

                        <div class="testimonial-name">
                            ${item.name}
                        </div>

                    </div>

                `)
                .join("");


        currentSlide += 3;


        if (
            currentSlide >=
            testimonialData.length
        ) {

            currentSlide = 0;

        }

    }


    showTestimonials();


    /*
       Clear previous timer if script
       gets initialized again.
    */

    if (window.testimonialTimer) {

        clearInterval(
            window.testimonialTimer
        );

    }


    window.testimonialTimer =
        setInterval(
            showTestimonials,
            4000
        );

}


/* ===================================== */
/* FITNESS STORY SCROLL REVEAL */
/* ===================================== */

function initFitnessStoryReveal() {

    const section =
        document.querySelector(
            ".fitness-story-section"
        );


    if (!section) {
        return;
    }


    /*
       Fallback for browsers without
       IntersectionObserver.
    */

    if (
        !("IntersectionObserver" in window)
    ) {

        section.classList.add(
            "is-visible"
        );

        return;

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "is-visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    observer.observe(
        section
    );

}

/* ===================================== */
/* GOOGLE REVIEW OUTLET SELECTOR */
/* ===================================== */

function initReviewSelector() {

    const reviewToggle =
        document.getElementById(
            "review-us-toggle"
        );

    const reviewOptions =
        document.getElementById(
            "review-outlet-options"
        );


    if (
        !reviewToggle ||
        !reviewOptions
    ) {
        return;
    }


    reviewToggle.addEventListener(
        "click",
        function () {

            const isOpen =
                reviewOptions.classList.toggle(
                    "is-open"
                );


            reviewToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        }
    );

}

/* ===================================== */
/* PAGE INITIALIZATION */
/* ===================================== */

document.addEventListener(
    "DOMContentLoaded",
    async () => {


        /* ================================= */
        /* LOAD SHARED COMPONENTS */
        /* ================================= */

        await loadLayout();


        /* ================================= */
        /* CURRENT PAGE */
        /* ================================= */

        const page =
            document.body.dataset.page;


        /* ================================= */
        /* PAGE FUNCTIONS */
        /* ================================= */

        switch (page) {


            /* ============================= */
            /* HOME */
            /* ============================= */

            case "home":

                renderUSP();

                renderBranches();

                renderTestimonials();

                initFitnessStoryReveal();

                initReviewSelector();

                break;


            /* ============================= */
            /* FACILITIES */
            /* ============================= */

            case "facilities":

                break;


            /* ============================= */
            /* MOBILE APP */
            /* ============================= */

            case "mobile-app":

                break;


            /* ============================= */
            /* PROGRAMS */
            /* ============================= */

            case "programs":

                break;


            /* ============================= */
            /* INVESTOR */
            /* ============================= */

            case "investor":

                break;


            /* ============================= */
            /* CAREER */
            /* ============================= */

            case "career":

                break;


            /* ============================= */
            /* ABOUT US */
            /* ============================= */

            case "about-us":

                break;


            /* ============================= */
            /* CONTACT US */
            /* ============================= */

            case "contact-us":

                break;


            /* ============================= */
            /* COACHES PARTNERSHIP */
            /* ============================= */

            case "coaches-partnership":

                break;


            /* ============================= */
            /* DEFAULT */
            /* ============================= */

            default:

                break;

        }

    }
);