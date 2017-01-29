let id = 1;
const container = document.createElement('div');
container.id = 'container'
document.body.appendChild(container);
container.appendChild(createButton(id++));

function clicked() {
  for (let i=0; i < 2; i++) {
    container.insertBefore(createButton(id++), this);
  }
	
  this.remove();
}

function createButton(id) {
  const btn = document.createElement('button');
  btn.innerText = `# ${id}`;
  btn.addEventListener('click',clicked);
  return btn;
}