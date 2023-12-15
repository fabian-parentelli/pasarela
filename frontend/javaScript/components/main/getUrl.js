let urlParams

export function getUrl() {
    const url = window.location.href;
    urlParams = new URLSearchParams(new URL(url).search);
    const token = urlParams.get('token');
    return token;
};

export function deleteUrl(token) {
    urlParams.delete('token');
    const newUrl = `${window.location.origin}${window.location.pathname}${urlParams.toString() ? `?${urlParams.toString()}` : ''}`;
    window.history.replaceState({}, document.title, newUrl);
};