let startLocation = window.pageYOffset;

export function scrollFunction(nav) {
    if (!nav) {
        console.error("Element with ID 'nav' not found");
        return;
    }

    window.onscroll = function () {
        let locationScroll = window.pageYOffset;
        if (startLocation >= locationScroll) {
            nav.style.top = '0';
        } else {
            nav.style.top = '-100px';
        }
        startLocation = locationScroll;
    };
}