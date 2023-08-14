export function generateCssSelector(el) {
  if (!(el instanceof Element)) return;

  const parts = [];
  while (el.nodeType === Node.ELEMENT_NODE) {
    let tag = el.nodeName.toLowerCase();
    let elementType = el.tagName
    let idx = 1
    let sibling = el.previousElementSibling || null
    if (sibling) { var hasSibling = el.previousElementSibling.tagName == elementType ? true : false }
    while (sibling) {
      if (sibling.tagName === elementType) {
        idx++;
      }
      sibling = sibling.previousElementSibling;
    }

    /**
     * Use of nth-of-type is safer than nth-child because will count index based on same siblings with similiar tag
    */

    let selector = elementType.toLowerCase();
    selector += `:nth-of-type(${idx})`;
    parts.unshift(`${selector}`);

    /**
     * Below code is for selecting whenever element is uniquely having certain selector but quite unsafe
     * since adjacent elements which doesn't needed are grabbed
    */

    // if (!hasSibling) {
    //   let id = el.id ? `#${el.id}` : "";
    //   let className = el.className
    //     ? `.${el.className.trim().replace(/\s+/g, ".")}`
    //     : "";
    //   parts.unshift(`${tag}${id}${className}`);
    // }
    // else {
    //   let selector = elementType.toLowerCase();
    //   selector += `:nth-of-type(${idx})`;
    //   parts.unshift(`${selector}`);
    // }
    el = el.parentNode;
  }

  return parts.join(" > ");
}

export function summarizeCSSPaths(path1, path2) {
  const segments1 = path1.split(" > ");
  const segments2 = path2.split(" > ");

  let commonSelector = "";

  for (let i = 0; i < Math.min(segments1.length, segments2.length); i++) {
    let first = segments1[i];
    let second = segments2[i];

    if (first === second) {
      commonSelector += first + " > ";
    }
    else if (first.includes(".") && second.includes(".")) {
      const selectors1 = first.split(".")
      const selectors2 = second.split(".")

      for (let i = 0; i < Math.min(selectors1.length, selectors2.length); i++) {
        let sel1 = selectors1[i]
        let sel2 = selectors2[i]
        if (sel1 !== sel2) {
          commonSelector += selectors1.slice(0, i).join(".") + " > "

        }
      }
    }
    else {
      const regex = /^\w+(?=[\.\:])/g
      tag = first.match(regex).pop()
      commonSelector += tag + " > ";
    }
  }

  // replace the injected CSS class by our extension
  commonSelector = commonSelector.replace(".highlightEl", "")

  return commonSelector.slice(0, -3);
}

export function extract_data(elements) {
  let content = [];

  elements.forEach((element) => {
    content.push(element.textContent.trim());
  });

  return content;
}
