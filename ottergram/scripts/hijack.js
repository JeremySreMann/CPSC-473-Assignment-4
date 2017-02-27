var LINK_SELECTOR = '[href]';

function addLinkClickHandler(thumb) {
    'use strict';
    thumb.addEventListener('click', function(event) {
        event.preventDefault();
    });
}

function initializeEvents() {
    'use strict';
    var links = document.querySelectorAll(LINK_SELECTOR);
    var linksArray = [].slice.call(links);
    linksArray.forEach(addLinkClickHandler);
}

initializeEvents();
