/**
 * returns the browser type.
 * only supports Opera, Firefox, Safari, IE, Edge, Chrome
 * Instead of checking from userAgent which might be misleading, it makes feature detection.
 */
export function getBrowser() {

    // Opera 8.0+
    const isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    const isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]" 
    const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

    // Internet Explorer 6-11
    const isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    const isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1 - 71
    const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

    if (isOpera) {
        return "Opera";
    } else if (isFirefox) {
        return "Firefox";
    } else if (isSafari) {
        return "Safari";
    } else if (isIE) {
        return "Internet Explorer";
    } else if (isEdge) {
        return "Microsoft Edge";
    } else if (isChrome) {
        return "Chrome";
    } else {
        // no browser type found
        return null;
    }

}