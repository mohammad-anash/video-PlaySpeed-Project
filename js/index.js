const video = document.querySelector(".video");

document.getElementById("select").addEventListener("change", function (e) {
  video.playbackRate = e.target.value;
});
