chrome.action.onClicked.addListener((tab) => {
    if (tab.url && tab.url.includes('youtube.com/watch')) {
        const url = new URL(tab.url);
        const videoId = url.searchParams.get('v');
    
        if (videoId) {
            const embedUrl = 'https://www.youtube.com/embed/${videoId}?autoplay=1';

            chrome.tabs.update(tab.id, { url: embedUrl });
        }
    }
});