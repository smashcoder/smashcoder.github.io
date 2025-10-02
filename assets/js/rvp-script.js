if (window.location.pathname.match(/^\/[A-Z]{3}\/index\.html$/)) {
    history.replaceState(null, '', '/index.html');
}