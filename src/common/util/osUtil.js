function getOS() {

    // system
    let os = "Other";
    var clientStrings = [
        {s:'Windows', r:/(Windows 10.0|Windows NT 10.0)/},
        {s:'Windows', r:/(Windows 8.1|Windows NT 6.3)/},
        {s:'Windows', r:/(Windows 8|Windows NT 6.2)/},
        {s:'Windows', r:/(Windows 7|Windows NT 6.1)/},
        {s:'Windows', r:/Windows NT 6.0/},
        {s:'Windows', r:/Windows NT 5.2/},
        {s:'Windows', r:/(Windows NT 5.1|Windows XP)/},
        {s:'Windows', r:/(Windows NT 5.0|Windows 2000)/},
        {s:'Windows', r:/(Win 9x 4.90|Windows ME)/},
        {s:'Windows', r:/(Windows 98|Win98)/},
        {s:'Windows', r:/(Windows 95|Win95|Windows_95)/},
        {s:'Windows', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
        {s:'Windows', r:/Windows CE/},
        {s:'Windows', r:/Win16/},
        {s:'Android', r:/Android/},
        {s:'Linux', r:/(Linux|X11(?!.*CrOS))/},
        {s:'iOS', r:/(iPhone|iPad|iPod)/},
        {s:'MacOS', r:/(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh|Mac OS X)/}
    ];
    for (let i = 0; i < clientStrings.length; i++) {
        const clientString = clientStrings[i];
        if (clientString.r.test(navigator.userAgent)) {
            os = clientString.s;
            break;
        }
    }

    return os;
}


export { getOS };