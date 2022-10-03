let hours = 0,
    minutes = 5,
    seconds = 0,
    timeinterval = void 0;

function getTimeRemaining(e) {
    const t = Date.parse(e) - Date.parse(new Date),
        a = Math.floor(t / 1e3 % 60),
        o = Math.floor(t / 1e3 / 60 % 60);
    return {
        total: t,
        hours: Math.floor(t / 36e5 % 24),
        minutes: o,
        seconds: a
    }
}

function initializeClock(e, t) {
    const a = document.getElementById(e),
        o = a.querySelector(".hours"),
        c = a.querySelector(".minutes"),
        n = a.querySelector(".seconds");

    function s() {
        const e = getTimeRemaining(t);
        o.innerHTML = ("0" + e.hours).slice(-2), c.innerHTML = ("0" + e.minutes).slice(-2), n.innerHTML = ("0" + e.seconds).slice(-2), e.total <= 0 && ((async () => {
            let e = await fetch(backendUrl + "/owo?owo=" + getAsdf(), {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + getAccessToken(),
                    "Access-Control-Allow-Origin": backendUrl,
                    credentials: "include",
                    cache: "no-cache"
                }
            }),
                t = await e.json();
            localStorage.setItem("asdf", t.data.asdf), "false" === localStorage.getItem("is_super") && localStorage.setItem("userDisabled", !0)
        })(), clearInterval(timeinterval))
    }
    s(), timeinterval = setInterval(s, 1e3)
}

function startClock() {
    console.log("Start clock");
    let e = new Date(Date.parse(new Date) + 1e3 * (3600 * hours + 60 * minutes + seconds));
    (async () => {
        let e = await fetch(backendUrl + "/eau?eau=" + getAsdf(), {
            method: "GET",
            headers: {
                Authorization: "Bearer " + getAccessToken(),
                "Access-Control-Allow-Origin": backendUrl,
                credentials: "include",
                cache: "no-cache"
            }
        }),
            t = await e.json();
        localStorage.setItem("asdf", t.data.asdf)
    })(), initializeClock("clockdiv", e)
}

function stopClock() {
    (async () => {
        let e = await fetch(backendUrl + "/owo?owo=" + getAsdf(), {
            method: "GET",
            headers: {
                Authorization: "Bearer " + getAccessToken(),
                "Access-Control-Allow-Origin": backendUrl,
                credentials: "include",
                cache: "no-cache"
            }
        }),
            t = await e.json();
        localStorage.setItem("asdf", t.data.asdf)
    })(), clearInterval(timeinterval)
}

function resetScore() {
    (async () => {
        let e = await fetch(backendUrl + "/uwu?uwu=" + getAsdf(), {
            method: "GET",
            headers: {
                Authorization: "Bearer " + getAccessToken(),
                "Access-Control-Allow-Origin": backendUrl,
                credentials: "include",
                cache: "no-cache"
            }
        }),
            t = await e.json();
        localStorage.setItem("asdf", t.data.asdf), "false" === localStorage.getItem("is_super") && localStorage.setItem("userDisabled", !0)
    })()
}