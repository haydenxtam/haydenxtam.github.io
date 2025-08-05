export function renderWithTemplate(template, parentElement, data, callback, position = "afterbegin") {
  if (parentElement) {
    parentElement.insertAdjacentHTML(position, template);
    if (callback) {
      callback(data);
    }
    else {
      console.error("Parent element is null or undefined");
    }
  }
}

async function loadTemplate(path) {
  const res = await fetch(path);
  const template = await res.text();
  return template;
}

export async function loadHeaderFooter() {
  //const headerHTML = await fetch("header.html").then(res => res.text());
  const footerHTML = await fetch("footer.html").then(res => res.text());

  //document.getElementById("header").innerHTML = headerHTML;
  document.getElementById("footer").innerHTML = footerHTML;
}