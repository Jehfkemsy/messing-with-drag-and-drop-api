const sidebarEl = document.getElementById("folders");
const contentEl = document.getElementById("content");

new Array(1000).fill(null).map((v, i) => {
  const el = document.createElement("div");
  el.className = "folder-label";

  const img = document.createElement("img");
  img.src = "icons8-folder-60.png";
  img.className = "folder-icon";

  const p = document.createElement("p");
  p.innerText = `Folder ${i + 1}`;

  el.appendChild(img);
  el.appendChild(p);

  sidebarEl.appendChild(el);
});
