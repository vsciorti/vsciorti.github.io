document.getElementById('year').textContent = new Date().getFullYear();
const copyButton = document.getElementById('copy-email');
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('vsciortino@ogs.it');
    copyButton.textContent = 'Copied ✓';
    setTimeout(() => { copyButton.innerHTML = 'Copy address <span aria-hidden="true">⧉</span>'; }, 2400);
  } catch {
    window.location.href = 'mailto:vsciortino@ogs.it';
  }
});
