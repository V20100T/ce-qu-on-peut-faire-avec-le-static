(() => {
  const z = $("[data-p360]"), bande = $("[data-bande]"), L = 420 * 4;
  $$(".p360__mur", z).forEach((m, i) => (m.style.backgroundColor = ["#e9dcc6", "#d9e6ea", "#efe3d3", "#dfe9d8"][i % 4]));
  let x = 0, x0 = null, auto = true;
  const poser = () => { x = ((x % L) + L) % L; bande.style.transform = `translateX(${-x}px)`; };
  z.addEventListener("pointerdown", (e) => { x0 = e.clientX; auto = false; z.setPointerCapture(e.pointerId); });
  z.addEventListener("pointermove", (e) => { if (x0 === null) return; x -= e.clientX - x0; x0 = e.clientX; poser(); });
  z.addEventListener("pointerup", () => (x0 = null));
  const tourner = () => { if (auto && !matchMedia("(prefers-reduced-motion: reduce)").matches) { x += .4; poser(); } requestAnimationFrame(tourner); };
  tourner();
})();
