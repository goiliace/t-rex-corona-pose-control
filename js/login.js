async function checkPassword(e) {
    let t = `${backendUrl}/login`,
        a = await fetch(t, {
            method: "POST",
            body: JSON.stringify(e),
            cache: "no-cache"
        }),
        o = await a.json();
    alert(o.msg), 1 === o.code && (localStorage.setItem("Authorization", o.data.access_token), localStorage.setItem("username", e.username), localStorage.setItem("is_super", o.data.is_super), localStorage.setItem("userDisabled", !1), localStorage.setItem("asdf", o.data.asdf), window.location.href = frontendUrl)
} (async () => {
    (await document.querySelector("button#submit-login")).addEventListener("click", e => {
        let t = document.querySelector("#username").value,
            a = document.querySelector("#password").value;
        requestJson = {
            username: t,
            password: a
        }, checkPassword(requestJson)
    })
})(), (async () => {
    (await document.querySelector("#redirect-register-btn")).addEventListener("click", () => {
        window.location.href = frontendUrl + "/register.html"
    })
})();