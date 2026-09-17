const sections = [

    {
        name: "DAUGHTER",
        theme: "daughter",

        title: "Before she became everyone's strength...",
        line: "She was someone's little girl. ♡",

        images: [
            "images/Daughter/1.jpg",
            "images/Daughter/9.jpg"
        ]
    },

    {
        name: "WIFE",
        theme: "wife",

        title: "A beautiful chapter of togetherness",
        line: "Built through little moments, laughter and a life shared.",

        images: [
            "images/Wife/2.jpg",
            "images/Wife/3.jpg",
            "images/Wife/4.jpg"
        ]
    },

    {
        name: "MOTHER",
        theme: "mother",

        title: "For them, she is home.",
        line: "The warmth, comfort and love that never asks for anything back.",

        images: [
            "images/Mother/5.jpg",
            "images/Mother/6.jpg",
            "images/Mother/7.jpg",
            "images/Mother/8.jpg"
        ]
    },

    {
        name: "SISTER",
        theme: "sister",

        title: "A little bit of childhood that stays forever",
        line: "Part family, part memories, part forever. ✦",

        images: [
            "images/Sister/10.jpg",
            "images/Sister/11.jpg",
            "images/Sister/12.jpg",
            "images/Sister/13.jpg"
        ]
    },

    {
        name: "SISTER-IN-LAW",
        theme: "sisinlaw",

        title: "Some relationships become family...",
        line: "And some become something beautifully more.",

        images: [
            "images/Sisinlaw/14.jpg",
            "images/Sisinlaw/15.jpg"
        ]
    },

    {
        name: "HER AS A PERSON",
        theme: "individual",

        title: "And then... there is simply her.",
        line: "Kind. Warm. Caring. Funny. Irreplaceable.",

        images: [
            "images/Individual/16.jpg",
            "images/Individual/17.jpg"
        ]
    }

];


let currentSection = 0;


/* =====================================================
   OPEN WEBSITE
===================================================== */

function startWebsite() {

    const opening =
        document.getElementById("opening");

    const experience =
        document.getElementById("experience");


    opening.style.opacity = "0";


    setTimeout(function () {

        opening.style.display = "none";

        experience.style.display = "block";

        currentSection = 0;

        showSection();

    }, 700);

}


/* =====================================================
   SHOW SECTION
===================================================== */

function showSection() {

    const section =
        sections[currentSection];

    const experience =
        document.getElementById("experience");

    const content =
        document.getElementById("content");

    const number =
        document.getElementById("number");

    const role =
        document.getElementById("role");

    const fill =
        document.getElementById("fill");

    const nextButton =
        document.getElementById("nextButton");


    /* Theme */

    experience.className = "";

    experience.classList.add(section.theme);


    /* Progress */

    number.textContent =
        String(currentSection + 1).padStart(2, "0");

    role.textContent =
        section.name;

    fill.style.width =
        ((currentSection + 1) / sections.length * 100) + "%";


    /* Photos */

    let photos = "";


    section.images.forEach(function (image, index) {

        photos += `
            <img
                src="${image}"
                class="photo photo-${index + 1}"
                alt="${section.name}"
            >
        `;

    });


    /* Content */

    content.innerHTML = `

        <div class="section-text">

            <div class="section-label">
                ${section.name}
            </div>

            <h2>
                ${section.title}
            </h2>

            <p>
                ${section.line}
            </p>

        </div>


        <div class="gallery gallery-${section.images.length}">
            ${photos}
        </div>

    `;


    /* Button */

    if (currentSection === sections.length - 1) {

        nextButton.innerHTML =
            `Celebrate ♡`;

    } else {

        nextButton.innerHTML =
            `Continue →`;

    }

}


/* =====================================================
   NEXT BUTTON
===================================================== */

function nextSection() {

    if (currentSection < sections.length - 1) {

        currentSection++;

        showSection();

    } else {

        showFinal();

    }

}


/* =====================================================
   FINAL BIRTHDAY SCREEN
===================================================== */

function showFinal() {

    document.body.classList.add("birthday-reveal");


    const experience =
        document.getElementById("experience");

    const content =
        document.getElementById("content");

    const number =
        document.getElementById("number");

    const role =
        document.getElementById("role");

    const fill =
        document.getElementById("fill");

    const nextButton =
        document.getElementById("nextButton");


    experience.className = "final";


    number.textContent = "♡";

    role.textContent = "FOR MY AKKA";

    fill.style.width = "100%";


    nextButton.style.display = "none";


    content.innerHTML = `

        <div class="final-particles">

            <span>✦</span>
            <span>♡</span>
            <span>✧</span>
            <span>♡</span>
            <span>✦</span>
            <span>❀</span>
            <span>♡</span>
            <span>✧</span>
            <span>✦</span>
            <span>♡</span>

        </div>


        <div class="final-glow"></div>


        <div class="final-screen">

            <div class="final-heading">

                <span>
                    FOR SOMEONE VERY SPECIAL
                </span>

                <div class="heading-line">
                    ───── ✦ ─────
                </div>

            </div>


            <h1>
                Happiest Birthday
            </h1>


            <h2>
                Akka ♡
            </h2>


            <div class="final-message">

                <p>
                    Happiest birthday akka. ♡
                </p>

                <p>
                    Stay happy and healthy always.
                </p>

                <p>
                    I'm so lucky to have you in my life.
                </p>

                <p>
                    Though we were not born as siblings,
                    by the time I needed someone to share
                    things with, you became the first person
                    I chose to.
                </p>

                <p>
                    Thank you for always being there for me —
                    supporting me, advising me and
                    understanding me.
                </p>

                <p>
                    You never doubt me, even when others do.
                    And because of that, I have never felt lonely
                    when it comes to having someone who truly
                    understands me.
                </p>

                <p>
                    Thank you for loving me with your whole heart
                    and for always being true to me.
                </p>

                <p>
                    I know I have all our cousins,
                    but somehow my heart always jumps to choose
                    you first whenever I want to share anything.
                </p>

                <p class="final-last">
                    Once again, happiest birthday, akka. ♡
                </p>

            </div>


            <div class="final-signature">
                Always grateful for you ✦
            </div>


            <button
                class="secret-button"
                onclick="showSecretMessage()">

                One more thing... ♡

            </button>


            <div
                id="secretMessage"
                class="secret-message">

                <div class="secret-symbol">
                    ♡
                </div>

                <h3>
                    Just in case you ever forget...
                </h3>

                <p>
                    You are more loved, appreciated and
                    cherished than you probably realise.
                </p>

                <p>
                    And no matter how life changes,
                    you'll always have a very special place
                    in my heart. ♡
                </p>

                <div class="secret-end">
                    Happy Birthday, Akka ✦
                </div>

            </div>

        </div>

    `;

}


/* =====================================================
   SECRET MESSAGE
===================================================== */

function showSecretMessage() {

    const secret =
        document.getElementById("secretMessage");

    const button =
        document.querySelector(".secret-button");


    if (secret) {

        secret.classList.add("show");

    }


    if (button) {

        button.style.display = "none";

    }

}


/* =====================================================
   MUSIC
===================================================== */

function toggleMusic() {

    const music =
        document.getElementById("birthdayMusic");

    const button =
        document.getElementById("musicButton");


    if (music.paused) {

        music.play();

        button.textContent =
            "♪ Music";

    } else {

        music.pause();

        button.textContent =
            "♪ Off";

    }

}