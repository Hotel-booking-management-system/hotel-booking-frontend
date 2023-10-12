let side = document.getElementById('side')
let sidebar = document.createElement('div')
sidebar.classList.add('w-[15%]','px-3','mx-4','my-12')

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
bookingListBtn.href = './dashboard.html'
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
roomListBtn.href = './room.html'
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