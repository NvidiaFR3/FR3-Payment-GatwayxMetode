export function toggleInfo(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.toggle("active");
    if (el.style.display === "block") {
      el.style.display = "none";
    } else {
      el.style.display = "block";
    }
  }
}

export function zoomQR(img) {
  if (img.style.width === "200px") {
    img.style.width = "400px";
  } else {
    img.style.width = "200px";
  }
}

export function downloadQR() {
  const link = document.createElement("a");
  link.href = "assets/img/qris.png";
  link.download = "qris.png";
  link.click();
}
