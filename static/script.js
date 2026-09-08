/* ================================= */
/* PINDAH HALAMAN */
/* ================================= */

function nextPage(pageNumber) {

    const pages =
        document.querySelectorAll(".page");


    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    const nextPageElement =
        document.getElementById(
            "page" + pageNumber
        );


    if (nextPageElement) {

        nextPageElement.classList.add("active");

    }


    /*
        Musik mulai setelah pengguna
        menekan tombol pertama.
    */

    if (pageNumber === 2) {

        playMusic();

    }

}


/* ================================= */
/* MUSIK */
/* ================================= */

const music =
    document.getElementById("music");


const musicButton =
    document.getElementById("musicButton");


let musicPlaying = false;


function playMusic() {

    if (!musicPlaying) {

        music.volume = 0.45;


        music.play()
            .then(function() {

                musicPlaying = true;

                musicButton.innerHTML =
                    "🔊";

            })
            .catch(function(error) {

                console.log(
                    "Browser memblokir musik:",
                    error
                );

            });

    }

}


function toggleMusic() {

    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

        musicButton.innerHTML =
            "🎵";

    }

    else {

        music.volume = 0.45;


        music.play()
            .then(function() {

                musicPlaying = true;

                musicButton.innerHTML =
                    "🔊";

            })
            .catch(function(error) {

                console.log(error);

            });

    }

}


/* ================================= */
/* KEJUTAN */
/* ================================= */

function showSurprise() {

    document
        .getElementById("popup")
        .style.display = "flex";


    createConfetti();

}


function closeSurprise() {

    document
        .getElementById("popup")
        .style.display = "none";

}


/* ================================= */
/* CONFETTI */
/* ================================= */

function createConfetti() {

    const container =
        document.getElementById(
            "confetti-container"
        );


    const emojis = [

        "🎉",
        "🎊",
        "💙",
        "❤️",
        "✨",
        "⭐"

    ];


    for (
        let i = 0;
        i < 80;
        i++
    ) {

        const item =
            document.createElement(
                "div"
            );


        item.innerHTML =
            emojis[
                Math.floor(
                    Math.random()
                    * emojis.length
                )
            ];


        item.style.position =
            "fixed";


        item.style.left =
            Math.random()
            * 100
            + "vw";


        item.style.top =
            "-30px";


        item.style.fontSize =
            Math.random()
            * 18
            + 12
            + "px";


        item.style.zIndex =
            "200";


        item.style.transition =
            "transform 4s linear, opacity 4s";


        container.appendChild(
            item
        );


        setTimeout(function() {

            item.style.transform =
                "translateY(110vh) rotate(720deg)";

            item.style.opacity =
                "0";

        }, 50);


        setTimeout(function() {

            item.remove();

        }, 4500);

    }

}