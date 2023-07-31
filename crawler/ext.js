// contentScript.js
(function () {
    function copyToClipboard(text) {
      const dummy = document.createElement('textarea');
      document.body.appendChild(dummy);
      dummy.value = text;
      dummy.select();
      document.execCommand('copy');
      document.body.removeChild(dummy);
    }
  
    function generateCssSelector(el) {
      if (!(el instanceof Element)) return;
  
      const parts = [];
      while (el.nodeType === Node.ELEMENT_NODE) {
        let tag = el.nodeName.toLowerCase();
        let id = el.id ? `#${el.id}` : '';
        let className = el.className ? `.${el.className.trim().replace(/\s+/g, '.')}` : '';
  
        parts.unshift(`${tag}${id}${className}`);
        el = el.parentNode;
      }
  
      return parts.join(' > ');
    }
  
    function handleClick(event) {
      const cssSelector = generateCssSelector(event.target);
      copyToClipboard(cssSelector);
      console.log(`CSS Selector copied to clipboard: ${cssSelector}`);
    }
  
    document.addEventListener('click', handleClick);
  })();
  