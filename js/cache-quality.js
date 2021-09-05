//CACHE THE PAGE FOR FASTER RETURN
window.addEventListener('pageshow', function (event) {
    if (event.persisted) { console.log('This page was restored from the bfcache.'); }
    else { console.log('This page was loaded normally.'); }
});
window.addEventListener('pagehide', function (event) {
    if (event.persisted === true) { console.log('This page *might* be entering the bfcache.'); }
    else { console.log('This page will unload normally and be discarded.'); }
});

//CHECK INTERNET QUALITY
if (navigator.connection.effectiveType === '4g') {
    //provide high-quality content
} else {//provide low-quality or hide content
}