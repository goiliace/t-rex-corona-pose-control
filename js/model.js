const URL = "https://teachablemachine.withgoogle.com/models/flmvFrw9F/";
let model, webcam, ctx, labelContainer, maxPredictions, jump = new KeyboardEvent("keydown", {
    key: "dot",
    keyCode: 110,
    code: "DotKey",
    which: 110,
    shiftKey: !1,
    ctrlKey: !1,
    metaKey: !1
});
async function init() {
    const e = URL + "model.json",
        t = URL + "metadata.json";
    model = await tmPose.load(e, t), maxPredictions = model.getTotalClasses();
    webcam = new tmPose.Webcam(224, 224, !0), await webcam.setup(), await webcam.play(), window.requestAnimationFrame(loop);
    const a = document.getElementById("canvas");
    a.width = 224, a.height = 224, ctx = a.getContext("2d"), localStorage.setItem("isDead", !1)
}
async function loop(e) {
    webcam.update(), await predict(), window.requestAnimationFrame(loop)
}
async function predict() {
    const {
        pose: e,
        posenetOutput: t
    } = await model.estimatePose(webcam.canvas);
    (await model.predict(t))[0].probability >= .5 ? (document.dispatchEvent(jump), "true" != localStorage.getItem("isDead") && ring(1)) : "true" != localStorage.getItem("isDead") && ring(2), drawPose(e)
}

function drawPose(e) {
    if (webcam.canvas && (ctx.drawImage(webcam.canvas, 0, 0), e)) {
        const t = .5;
        tmPose.drawKeypoints(e.keypoints, t, ctx), tmPose.drawSkeleton(e.keypoints, t, ctx)
    }
}