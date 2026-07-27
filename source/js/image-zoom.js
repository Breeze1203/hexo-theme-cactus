document.addEventListener("DOMContentLoaded", () => {
  console.log("image-zoom.js loaded");
  mediumZoom("article img", {
    margin: 24,
    background: "rgba(0, 0, 0, 0.85)",
  });
});
