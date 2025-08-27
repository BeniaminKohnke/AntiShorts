setInterval(() => {
    document.evaluate('//ytd-rich-section-renderer[.//span[@id="title" and text()="Shorts"]]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue?.remove();
    document.evaluate('//ytd-mini-guide-entry-renderer[.//span[@class="title style-scope ytd-mini-guide-entry-renderer" and text()="Shorts"]]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue?.remove();
    document.evaluate('//ytd-guide-entry-renderer[.//yt-formatted-string[text()="Shorts"]]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue?.remove();
    document.evaluate('//ytd-reel-shelf-renderer', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue?.remove();
    document.evaluate('//div[@id="shorts-container"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue?.remove();
    
    if (window.location.href.startsWith('https://www.youtube.com/shorts/')) {
        window.location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }
}, 1000);