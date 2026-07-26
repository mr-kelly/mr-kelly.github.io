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
