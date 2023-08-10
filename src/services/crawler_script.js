export function generateCssSelector(element, elementType) {
  // if (!(el instanceof Element)) return;

  const path = [];
  while (element) {
    console.log(element.tagName);
    if (element.tagName === elementType.toUpperCase()) {
      let selector = elementType;

      // Calculate the position of the element among its siblings
      let index = 1;
      let sibling = element.previousElementSibling;
      while (sibling) {
        if (sibling.tagName === elementType.toUpperCase()) {
          index++;
        }
        sibling = sibling.previousElementSibling;
      }

      // Append :nth-child selector
      selector += `:nth-child(${index})`;

      path.unshift(selector);
    } else {
      path.unshift(element.tagName);
    }
    element = element.parentElement;
    if (element !== null) {
      elementType = element.tagName;
    }
  }

  return path.join(" > ");
}

export function summarizeCSSPaths(path1, path2) {
  const segments1 = path1.split(" > ");
  const segments2 = path2.split(" > ");

  let commonSelector = "";

  for (let i = 0; i < Math.min(segments1.length, segments2.length); i++) {
    let first = segments1[i];
    let second = segments2[i];

    if (first === second && i > segments1.length - 4) {
      commonSelector += first + " > ";
    } else {
      tag = first.split(":")[0];
      commonSelector += tag + " > ";
    }
  }

  return commonSelector.slice(0, -3); // Remove the trailing ' > '
}

export function extract_data(elements) {
  let content = [];

  elements.forEach((element) => {
    content.push(element.textContent.trim());
  });

  return content;
}
