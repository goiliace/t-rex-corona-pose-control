(async () => {
    let e = await document.querySelector("div.countdown");
    "true" != localStorage.getItem("is_super") && (e.style.display = "none")
})();
let timeReq = 3e3;

function changeIn4(e, n) {
    return n.querySelector("img").setAttribute("src", e.gender ? "./assets/girl.png" : "./assets/boy.png"), n.querySelector("p.link").innerHTML = "@" + e.username, n.querySelector("p.points").innerHTML = e.score.toString(), n
}
async function getLeaderboard() {
    let e = await fetch(`${backendUrl}/get-leaderboard`),
        n = (await e.json()).data.data;
    if (null != n[0]) {
        let e = document.querySelector("div.person.first");
        e = changeIn4(n[0], e)
    }
    if (null != n[1]) {
        let e = document.querySelector("div.person.second");
        e = changeIn4(n[1], e)
    }
    if (null != n[2]) {
        let e = document.querySelector("div.person.third");
        e = changeIn4(n[2], e)
    }
    if (null != n[3]) {
        let e = document.querySelector("div.info.flex4");
        e = changeIn4(n[3], e)
    }
    if (null != n[4]) {
        let e = document.querySelector("div.info.flex5");
        e = changeIn4(n[4], e)
    }
    if (null != n[5]) {
        let e = document.querySelector("div.info.flex6");
        e = changeIn4(n[5], e)
    }
    if (null != n[6]) {
        let e = document.querySelector("div.info.flex7");
        e = changeIn4(n[6], e)
    }
    if (null != n[7]) {
        let e = document.querySelector("div.info.flex8");
        e = changeIn4(n[7], e)
    }
    if (null != n[8]) {
        let e = document.querySelector("div.info.flex9");
        e = changeIn4(n[8], e)
    }
    if (null != n[9]) {
        let e = document.querySelector("div.info.flex10");
        e = changeIn4(n[9], e)
    }
}
setInterval(getLeaderboard, timeReq);