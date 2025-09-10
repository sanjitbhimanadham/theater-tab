chrome.action.onClicked.addListener((tab) => {
    if (!tab.url) return;

    const url = new URL(tab.url);

    if (url.hostname.includes("youtube.com") && url.pathname === "/watch") {
        const videoId = url.searchParams.get("v");
        if (videoId) {
            const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            chrome.tabs.update(tab.id, { url: embedUrl });
        }
        return;
    }

    if (url.hostname.includes("youtube.com") && url.pathname.startsWith("/embed/")) {
        const videoId = url.pathname.split("/embed/")[1];
        if (videoId) {
            const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
            chrome.tabs.update(tab.id, { url: watchUrl });
        }
        return;
    }
});
