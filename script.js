const badgeCard = document.querySelector(".badge-card");

document.addEventListener("keydown", (event) => {
    if (event.key === "Tab") {
        document.documentElement.classList.add("keyboard-navigation");
    }
});

document.addEventListener("pointerdown", () => {
    document.documentElement.classList.remove("keyboard-navigation");
});

if (badgeCard) {
    const toggleBadge = () => {
        badgeCard.classList.toggle("is-flipped");

        const isFlipped = badgeCard.classList.contains("is-flipped");

        badgeCard.setAttribute("aria-pressed", String(isFlipped));
        badgeCard.setAttribute(
            "aria-label",
            isFlipped
                ? "Virar o crachá: exibir Eduarda Fragoso"
                : "Virar o crachá: exibir Lorena Esteves"
        );
    };

    badgeCard.addEventListener("click", toggleBadge);

    badgeCard.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleBadge();
        }
    });
}

const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);

const updateAutoplayVideos = () => {
    const autoplayVideos = document.querySelectorAll("video[autoplay]");

    autoplayVideos.forEach((video) => {
        if (reducedMotion.matches) {
            video.pause();
            return;
        }

        const playRequest = video.play();

        if (playRequest) {
            playRequest.catch(() => {
                // Reprodução automática bloqueada pelo navegador.
            });
        }
    });
};

updateAutoplayVideos();

reducedMotion.addEventListener("change", updateAutoplayVideos);
    