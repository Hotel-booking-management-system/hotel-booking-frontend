let nav = document.createElement('div')
nav.classList.add('bg-blue-400','sticky','h-fit','top-0','py-2')
let navBtn = document.createElement('button')
let navSpan = document.createElement('span')
navSpan.classList.add('material-symbols-outlined');
navSpan.style.cssText = "color: white;padding: 10px 10px;"
navSpan.innerHTML = 'menu'
navBtn.append(navSpan);
navBtn.addEventListener('click', () => {
    bookingSpanText.classList.remove('mx-2','py-2','text-lg');
    bookingListBtn.classList.remove('mx-16','my-2')
    bookingBtn.classList.remove('mx-10','my-6')
})
nav.append(navBtn);
let bd = document.getElementById('bd')

bd.append(nav)

let side = document.getElementById('side')
let sidebar = document.createElement('div')

let bookingBtn = document.createElement('button')
let bookingSpan = document.createElement('span')
bookingSpan.classList.add('material-symbols-outlined')
bookingSpan.innerHTML = 'calendar_month'
let bookingSpanText = document.createElement('span')
bookingSpanText.classList.add('mx-2','py-2','text-lg')
bookingSpanText.append('Bookings')
bookingBtn.append(bookingSpan,bookingSpanText)
bookingBtn.classList.add('flex','items-center','mx-10','my-6')


let bookingListBtn = document.createElement('a')
let bookingListSpan = document.createElement('span')
bookingListSpan.classList.add('material-symbols-outlined')
bookingListSpan.innerHTML = 'format_list_bulleted'
let bookingListSpanText = document.createElement('span')
bookingListSpanText.classList.add('mx-2','py-2','text-lg')
bookingListSpanText.append('List')
bookingListBtn.classList.add('flex','items-center','mx-16','my-2')
bookingListBtn.href = './room.html'
bookingListBtn.append(bookingListSpan,bookingListSpanText)

bookingBtn.addEventListener("click", () =>{
    bookingListBtn.classList.toggle("hidden")
})


let roomBtn = document.createElement('button')
let roomSpan = document.createElement('span')
roomSpan.classList.add('material-symbols-outlined')
roomSpan.innerHTML = 'bed'
let roomSpanText = document.createElement('span')
roomSpanText.classList.add('mx-2','py-2','text-lg')
roomSpanText.append('Rooms')
roomBtn.append(roomSpan,roomSpanText)
roomBtn.classList.add('flex','items-center','mx-10','my-6')

let roomListBtn = document.createElement('a')
let roomListSpan = document.createElement('span')
roomListSpan.classList.add('material-symbols-outlined')
roomListSpan.innerHTML = 'format_list_bulleted'
let roomListSpanText = document.createElement('span')
roomListSpanText.classList.add('mx-2','py-2','text-lg')
roomListSpanText.append('List')
roomListBtn.classList.add('flex','items-center','mx-16','my-2')
roomListBtn.href = './list.html'
roomListBtn.append(roomListSpan,roomListSpanText)


let roomaddBtn = document.createElement('a')
let roomaddSpan = document.createElement('span')
roomaddSpan.classList.add('material-symbols-outlined')
roomaddSpan.innerHTML = 'add_card'
let roomaddSpanText = document.createElement('span')
roomaddSpanText.classList.add('mx-2','py-2','text-lg',)
roomaddSpanText.append('Add')
roomaddBtn.href = './dashboard.html'
roomaddBtn.append(roomaddSpan,roomaddSpanText)
roomaddBtn.classList.add('flex','items-center','mx-16','my-2')

roomBtn.addEventListener("click", () => {
    roomListBtn.classList.toggle("hidden")
    roomaddBtn.classList.toggle("hidden")
})

sidebar.append(bookingBtn,bookingListBtn,roomBtn,roomListBtn,roomaddBtn)
side.append(sidebar)