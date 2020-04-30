console.log("[IVC] Looking for video elements.");
Array.from(document.getElementsByTagName('video')).forEach((video) => {
  video.style.pointerEvents = 'none'
  console.log("[IVC] Updated video element.", video);
});
console.log("[IVC] Done looking for video elements.");
