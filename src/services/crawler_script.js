export function generateCssSelector(element) {
  const selectorComponents = [];

  while (element) {
    if (element.id) {
      selectorComponents.unshift(`#${element.id}`);
      break;
    } else {
      let selector = element.nodeName.toLowerCase();
      if (element.className) {
        selector += `.${element.className.trim().replace(/\s+/g, ".")}`;
      }
      selectorComponents.unshift(selector);
      element = element.parentElement;
    }
  }

  return selectorComponents.join(" > ");
}

export function summarizeCSSPaths(path1, path2) {
  const segments1 = path1.split(" > ");
  const segments2 = path2.split(" > ");

  let commonSelector = "";

  for (let i = 0; i < Math.min(segments1.length, segments2.length); i++) {
    let first = segments1[i];
    let second = segments2[i];
    if (first.split(".").length > 1 && first === second) {
      if (first.includes(".highlightEl")) {
        first = first.replace(".highlightEl", "");
        segments1[i] = first.split(".").slice(0, -1).join(".");
      } else {
        segments1[i] = first;
      }
    }
    if (document.querySelectorAll(segments1.join(" > ")).length === 1) {
      segments1[i] = first.split(".")[0];
    }
  }

  return segments1.join(" > "); // Remove the trailing ' > '
}

export function extract_data(elements) {
  let content = [];

  elements.forEach((element) => {
    content.push(element.textContent.trim());
  });

  return content;
}
