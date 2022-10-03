var frontendUrl = "https://corona-runner.vercel.app",
    backendUrl = "https://backend-runner.herokuapp.com",
    loginUrl = frontendUrl + "/login.html";

function getAccessToken() {
    return localStorage.getItem("Authorization")
}

function getAsdf() {
    return localStorage.getItem("asdf")
}
async function checkAuthorization() {
    let e = getAccessToken();
    if (null !== e) {
        let t = await fetch(`${backendUrl}/auth?kkk=` + getAsdf(), {
            method: "GET",
            headers: {
                Authorization: "Bearer " + e
            }
        }),
            o = await t.json();
        if (1 === o.code && localStorage.setItem("asdf", o.data.asdf), 1 == o.data.user_disabled ? "true" == localStorage.getItem("is_super") ? localStorage.setItem("userDisabled", !1) : localStorage.setItem("userDisabled", !0) : localStorage.setItem("userDisabled", !1), "Missing Authorization Header" == o.msg) return window.location.href !== loginUrl && (window.location.href = loginUrl), !1;
        if ("Tài khoản hiện tại" === o.msg) return !0
    } else if (window.location.href !== loginUrl) return window.location.href = loginUrl, !1;
    return !0
}
// window.location.href != frontendUrl + "/index.html" && window.location.href != frontendUrl + "/" && window.location.href != loginUrl || setInterval(checkAuthorization, 3e3), document.onkeydown = function (e) {
//     return 123 !== e.keyCode && ((!e.ctrlKey || e.keyCode != "U".charCodeAt(0)) && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "I".charCodeAt(0)) && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "J".charCodeAt(0)) && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "C".charCodeAt(0)) && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "E".charCodeAt(0)) && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "K".charCodeAt(0)) && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "M".charCodeAt(0)) && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "Z".charCodeAt(0)) && ((!e.shiftKey || 115 !== e.keyCode) && ((!e.shiftKey || 116 !== e.keyCode) && ((!e.shiftKey || 117 !== e.keyCode) && ((!e.shiftKey || 118 !== e.keyCode) && ((!e.shiftKey || 119 !== e.keyCode) && ((!e.shiftKey || 120 !== e.keyCode) && void 0))))))))))))))
// };