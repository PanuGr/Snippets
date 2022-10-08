const scripts = ['https://bootstrap.bundle.min.js', './app.js'];
scripts.forEach(function (scriptUrl) {
    const s = document.createElement('script');
    s.src = scriptUrl;
    s.async = true; // to preserve execution order
    document.head.appendChild(s);
});

//make it hash-code and add it to headers. IT can be links or whatever else that javascript adds automatically to the page