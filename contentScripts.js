const xpath = '//ytd-rich-section-renderer[.//span[@id="title" and text()="Shorts"]] '
    + '| //ytd-mini-guide-entry-renderer[.//span[@class="title style-scope ytd-mini-guide-entry-renderer" and text()="Shorts"]] '
    + '| //ytd-guide-entry-renderer[.//yt-formatted-string[text()="Shorts"]]' 
    + '| //ytd-reel-shelf-renderer'
    + '| //div[@id="shorts-container"]';

setInterval(() => {
    if ((window.location.href.includes('youtube') || window.location.href.includes('youtu.be')) && window.location.href.includes('/shorts/')) {
        window.location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        return;
    }

    let element = null;
    while (element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue) {
        console.log('removed: ' + element.innerHTML);
        element.remove();
    }
}, 1000);