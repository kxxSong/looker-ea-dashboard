(function () {
  const pages = [
    "p_1endzgexsd",
    "p_texbdxfmvd",
    "p_2x0f5io5td",
    "p_5yebpg6jxd",
    "p_4275ef5mud",
    "p_4pkb4m6uud",
    "p_nsu0tp6uud",
    "p_kvsqfk6jxd",
    "p_4959fo6jxd",
    "p_xbwp0q6jxd",
    "p_v3zcwt6jxd",
    "p_bzttsw6jxd",
    "p_irgop06jxd",
    "p_4sxnq26jxd",
    "p_ag6hv3beud",
    "p_zc1wl8m4td",
    "p_ad61hko5td",
    "p_i2sztlo5td",
    "p_2oy574beud",
    "p_brjf4g0jud",
  ];
  const base =
    "https://lookerstudio.google.com/embed/reporting/6adb4333-3157-427e-aa10-34fee0262736/page/";
  const frameA = document.getElementById("frameA");
  const frameB = document.getElementById("frameB");
  let current = 0;

  const DISPLAY_TIME_MS = 30_000; 
  const FADE_DURATION_MS = 1000;

  //Switches the 'active' class from current to next frame.
  function showNextPage() {
    const currentFrame = current % 2 === 0 ? frameA : frameB;
    const nextFrame = current % 2 === 0 ? frameB : frameA;
  
    currentFrame.classList.remove("active");
    nextFrame.classList.add("active");

    // Update current page index to the next visible page
    current = (current + 1) % pages.length;
    setTimeout(showNextPage, DISPLAY_TIME_MS);
    preloadNextPage();
  }

  //loading page in hidden iframe
  function preloadNextPage() {
    const pageToLoad = (current + 1) % pages.length;
    const frameToLoad = current % 2 === 0 ? frameB : frameA;
    // const loadingOverlay = document.getElementById("loadingOverlay");

    //loading overlay screen
    // loadingOverlay.classList.add("active");

    // Set the src to start preloading
    frameToLoad.src = `${base}${pages[pageToLoad]}`;
    frameToLoad.onload = () => {
      // Hide overlay once fully loaded
      // loadingOverlay.classList.remove("active");
      // The page is loaded. It will sit here hidden until showNextPage is triggered
    };
  }

  frameA.src = `${base}${pages[0]}`;
  frameA.onload = () => {
    setTimeout(showNextPage, DISPLAY_TIME_MS);
    preloadNextPage();
  };
})();

const REFRESH_INTERVAL_MS = 6 * 60 * 60 * 1000;

setTimeout(() => {
  console.log ("Refreshing page");
  window.location.reload(true);
}, REFRESH_INTERVAL_MS);
