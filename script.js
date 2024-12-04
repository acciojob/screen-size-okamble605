//your JS code here. If required.
function updateSizeInfo() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const sizeInfo = document.getElementById('sizeInfo');
  
  sizeInfo.innerHTML = `<h1>Width: ${width} and Height: ${height}</h1>`;
}

// Initial display
updateSizeInfo();

// Update size information whenever the window is resized
window.addEventListener('resize', updateSizeInfo);
