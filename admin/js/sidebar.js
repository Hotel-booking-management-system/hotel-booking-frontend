let nav = document.createElement('div')
nav.classList.add('bg-blue-400','sticky','h-fit','top-0','py-2')
let navBtn = document.createElement('button')
let navSpan = document.createElement('span')
navSpan.classList.add('material-symbols-outlined');
navSpan.style.cssText = "color: white;padding: 10px 10px;"
navSpan.innerHTML = 'menu'
navBtn.append(navSpan);
navBtn.addEventListener('click', () => {
})

nav.append(navBtn);
let bd = document.getElementById('bd')

bd.append(nav)

let side = document.getElementById('side')
side.classList.add('w-[15%]')
let sidebar = document.createElement('div')

let bookingBtn = document.createElement('button')
let bookingSpan = document.createElement('span')
bookingSpan.classList.add('material-symbols-outlined')
bookingSpan.innerHTML = 'calendar_month'
let bookingSpanText = document.createElement('span')
bookingSpanText.classList.add('mx-2','py-2','text-lg')
bookingSpanText.innerHTML = '<p class="side-item-text">Bookings</p>'
bookingBtn.append(bookingSpan,bookingSpanText)
bookingBtn.classList.add('flex','justify-center','items-center','my-6')


let bookingListBtn = document.createElement('a')
let bookingListSpan = document.createElement('span')
bookingListSpan.classList.add('material-symbols-outlined')
bookingListSpan.innerHTML = 'format_list_bulleted'
let bookingListSpanText = document.createElement('span')
bookingListSpanText.classList.add('mx-2','py-2','text-lg')
bookingListSpanText.innerHTML = '<p class="side-item-text">List</p>'
bookingListBtn.classList.add('flex','items-center','my-1','px-4','hidden')
bookingListBtn.href = './list.html'
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
roomSpanText.innerHTML = '<p class="side-item-text">Rooms</p>'
roomBtn.append(roomSpan,roomSpanText)
roomBtn.classList.add('flex','justify-start','items-center','my-6','mx-0')

let roomListBtn = document.createElement('a')
let roomListSpan = document.createElement('span')
roomListSpan.classList.add('material-symbols-outlined')
roomListSpan.innerHTML = 'format_list_bulleted'
let roomListSpanText = document.createElement('span')
roomListSpanText.classList.add('mx-2','py-2','text-lg')
roomListSpanText.innerHTML = '<p class="side-item-text">List</p>'
roomListBtn.classList.add('flex','items-center','my-1','px-4','hidden')
roomListBtn.href = './room.html'
roomListBtn.append(roomListSpan,roomListSpanText)


let roomaddBtn = document.createElement('a')
let roomaddSpan = document.createElement('span')
roomaddSpan.classList.add('material-symbols-outlined')
roomaddSpan.innerHTML = 'add_card'
let roomaddSpanText = document.createElement('span')
roomaddSpanText.classList.add('mx-2','py-2','text-lg',)
roomaddSpanText.innerHTML =   '<p class="side-item-text">Add</p>'
roomaddBtn.href = './dashboard.html'
roomaddBtn.append(roomaddSpan,roomaddSpanText)
roomaddBtn.classList.add('flex','items-center','my-2','px-4','hidden')

roomBtn.addEventListener("click", () => {
    roomListBtn.classList.toggle("hidden")
    roomaddBtn.classList.toggle("hidden")
})


sidebar.append(bookingBtn,bookingListBtn,roomBtn,roomListBtn,roomaddBtn)
side.append(sidebar)

side.firstChild.classList.add('flex','flex-col','justify-center','px-10','w-full')

let data_section = document.getElementById('data_section')

let items = document.querySelectorAll('.side-item-text')

let bol = true;
navBtn.addEventListener('click',function(){
    if (bol) {
        sidebar.classList.remove('px-10')
        sidebar.classList.add('px-2')
        roomBtn.classList.remove('justify-start')
        roomBtn.classList.add('justify-center')

        bol= false
    }else{
        roomBtn.classList.add('justify-start')
        roomBtn.classList.remove('justify-center')
        sidebar.classList.remove('px-2')
        sidebar.classList.add('px-10')
        bol = true
    }
    
    items.forEach(item => {
        console.log(item);
        item.classList.toggle('hidden');
    });
})