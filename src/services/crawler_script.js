export function generateCssSelector(el) {
  if (!(el instanceof Element)) return;

  const parts = [];
  while (el.nodeType === Node.ELEMENT_NODE) {
    let tag = el.nodeName.toLowerCase();
    let id = el.id ? `#${el.id}` : "";
    let className = el.className
      ? `.${el.className.trim().replace(/\s+/g, ".")}`
      : "";

    parts.unshift(`${tag}${id}${className}`);
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

    if (first.includes("#") || second.includes("#")) {
      let getElement1 = segments1[i].split("#");
      let getElement2 = segments2[i].split("#");
      first = getElement1[0];
      second = getElement2[0];
    } else if (first.includes(".") || second.includes(".")) {
      let getElement1 = segments1[i].split(".");
      let getElement2 = segments2[i].split(".");
      first = getElement1[0];
      second = getElement2[0];
    }

    if (first === second) {
      commonSelector += first + " > ";
    } else {
      break;
    }
  }

  return commonSelector.slice(0, -3); // Remove the trailing ' > '
}

export function extract_data(elements) {
  let content = [];

  elements.forEach((element) => {
    content.push(element.textContent.trim());
  });

  return content
}
