function removeScript(src) {
  const scripts = document.getElementsByTagName('script');
  for (let i = 0; i < scripts.length; i++) {
    if (scripts[i].src.includes(src)) {
      scripts[i].parentNode.removeChild(scripts[i]);
    }
  }
}

// Remove the polyfills script
removeScript('polyfills.d49af079a931b085d446.js');
