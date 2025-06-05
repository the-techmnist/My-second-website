
document.getElementById('uploadForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const input = document.getElementById('fileInput');
  const file = input.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      const projDiv = document.createElement('div');
      projDiv.classList.add('project-item');
      if (file.type.startsWith('image/')) {
        projDiv.innerHTML = '<img src="' + evt.target.result + '" style="max-width:100%; margin-top: 1rem; border-radius:10px;" />';
      } else {
        projDiv.innerHTML = '<p><a href="' + evt.target.result + '" target="_blank">' + file.name + '</a></p>';
      }
      document.getElementById('projects').appendChild(projDiv);
    };
    reader.readAsDataURL(file);
  }
});
