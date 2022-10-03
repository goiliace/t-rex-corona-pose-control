function checkRePassword() {
    return document.querySelector("#password").value != document.querySelector("#re-password").value ? ($("#re-password").tooltip("show"), !1) : ($("#re-password").tooltip("hide"), !0)
}

function checkUsernameSize() {
    return document.querySelector("#username").value.length >= 30 ? $("#username").tooltip("show") : $("#username").tooltip("hide"), !0
}

function toLogin() {
    window.location.href = frontendUrl + "/login.html"
} (async () => {
    let e = await document.querySelector("ul#course-dropdown");
    ["K17", "K16", "K15", "K14", "K13", "Khác"].map(t => {
        e.appendChild(function (e) {
            let t = document.createElement("LI"),
                o = document.createElement("A");
            o.classList.add("dropdown-item"), o.classList.add("course-a"), o.setAttribute("href", "javascript:void(0);");
            let r = document.createTextNode(e);
            return o.appendChild(r), t.appendChild(o), t.addEventListener("click", () => {
                document.querySelector("#inputToggle").value = e
            }), t
        }(t))
    })
})(), (async () => {
    (await document.querySelector("#submit-register")).addEventListener("click", async () => {
        let e = {
            username: await document.querySelector("#username").value,
            password: await document.querySelector("#password").value,
            gender: !1 ^ await document.querySelector("#gender-girl") == await document.querySelector(".active"),
            course: await document.querySelector("#inputToggle").value
        },
            t = await fetch(backendUrl + "/register", {
                method: "POST",
                credentials: "include",
                body: JSON.stringify(e),
                cache: "no-cache"
            }),
            o = await t.json();
        alert(o.msg), 1 === o.code && (localStorage.setItem("asdf", o.data.asdf), window.location.href = frontendUrl + "/login.html")
    })
})();