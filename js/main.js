var count = 0;
let updateHighScore = async () => {
    let e = await document.querySelector("#highest-score"),
        t = await fetch(`${backendUrl}/get-highscore?ktjdk=` + getAsdf(), {
            method: "GET",
            headers: {
                Authorization: "Bearer " + getAccessToken(),
                "Access-Control-Allow-Origin": backendUrl,
                credentials: "include",
                cache: "no-cache"
            }
        }),
        n = await t.json();
    e.innerHTML = n.data.score, localStorage.setItem("asdf", n.data.asdf)
};
updateHighScore();
let btnPlay = document.querySelector("button#btn-play");
async function ring(e = 0) {
    let t = await document.querySelector("img#state-run"),
        n = await document.querySelector("img#state-jump"),
        a = await document.querySelector("img#state-dead");
    0 == e ? (n.style.display = "none", t.style.display = "none", a.style.display = "none") : 1 == e ? (n.style.display = "block", n.style.animation = "shake-up 0.5s infinite", t.style.display = "none", a.style.display = "none") : 2 == e ? (n.style.display = "none", t.style.display = "block", t.style.animation = "shake-near 0.5s infinite", a.style.display = "none") : (n.style.display = "none", t.style.display = "none", a.style.display = "block")
}
btnPlay.addEventListener("click", () => {
    btnPlay.innerText = localStorage.getItem("username") + " is playing ...", btnPlay.disabled = !0
}), ring(0), (async () => {
    let e = document.querySelector("#account-img"),
        t = document.querySelector("#form-box");
    e && e.addEventListener("click", () => {
        t.style.display = count % 2 == 0 ? "block" : "none", count += 1
    })
})(), setInterval(() => {
    let e = document.querySelector("button#btn-play");
    "true" == localStorage.getItem("userDisabled") ? e.disabled = !0 : e.disabled = !1
}, 200);
let signOut = document.querySelector("button#sign-out");
async function show_username() {
    let e = localStorage.getItem("username");
    (await document.querySelector("p#name")).innerText = "Tên: " + e
}
signOut.onclick = function () {
    localStorage.removeItem("Authorization"), localStorage.removeItem("username"), location.reload()
}, show_username();
let btnToLeaderBoard = document.querySelector("div#btn-to-leaderboard > button");
btnToLeaderBoard.addEventListener("click", () => {
    window.location.href = frontendUrl + "/leaderboard.html"
});