let nav = document.createElement('div')
nav.classList.add('bg-blue-400','sticky','h-fit','top-0','py-2')
let navBtn = document.createElement('button')
let navSpan = document.createElement('span')
navSpan.classList.add('material-symbols-outlined');
navSpan.style.cssText = "color: white;padding: 10px 10px;"
navSpan.innerHTML = 'menu'
navBtn.append(navSpan);
nav.append(navBtn);
let bd = document.getElementById('bd')

bd.append(nav)
