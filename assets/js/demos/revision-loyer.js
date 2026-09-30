(() => {
  const i = Object.fromEntries($$("[data-i]").map((x) => [x.dataset.i, x]));
  const maj = () => {
    const n = +i.loyer.value * +i.nouveau.value / (+i.ancien.value || 1);
    $("[data-nouveau-loyer]").textContent = euros(n, 2) + T(" / mois", " / month");
    $("[data-hausse]").textContent = T(`Soit ${euros(n - +i.loyer.value, 2)} de plus par mois (${nombre((n / +i.loyer.value - 1) * 100, 2)} %).`, `That's ${euros(n - +i.loyer.value, 2)} more per month (${nombre((n / +i.loyer.value - 1) * 100, 2)}%).`);
  };
  Object.values(i).forEach((x) => x.addEventListener("input", maj)); maj();
})();
