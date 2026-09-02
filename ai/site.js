document.querySelectorAll("[data-copy-wechat]").forEach((button) => {
  button.addEventListener("click", async () => {
    const status = document.querySelector("[data-copy-status]");
    const copiedLabel = button.dataset.copiedLabel || "Copied";
    const fallbackLabel = button.dataset.fallbackLabel || "WeChat: 23110388";

    try {
      await navigator.clipboard.writeText("23110388");
      if (status) status.textContent = copiedLabel;
    } catch {
      if (status) status.textContent = fallbackLabel;
    }
  });
});

const legacyDetailRoutes = {
  "#consult": "consult",
  "#training": "training",
  "#caio": "caio",
  "#vibe-coding": "vibe-coding",
  "#deploy": "ai-employees",
  "#assets": "ai-assets",
  "#products": "products",
};

const legacyTarget = legacyDetailRoutes[window.location.hash];
const legacySection = window.location.hash ? document.querySelector(window.location.hash) : null;

if (legacyTarget && legacySection?.hidden) {
  const localePrefix = window.location.pathname.startsWith("/ai/en/")
    ? "/ai/en/"
    : window.location.pathname.startsWith("/ai/zh-hk/")
      ? "/ai/zh-hk/"
      : "/ai/";
  window.location.replace(`${localePrefix}${legacyTarget}/`);
}
