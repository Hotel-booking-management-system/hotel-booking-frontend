let side = document.getElementById('side')
let sidebar = document.createElement('div')
sidebar.classList.add('w-[15%]','px-3','mx-4','my-12')

let bookingBtn = document.createElement('button')
let bookingSpan = document.createElement('span')
bookingSpan.classList.add('material-symbols-outlined')
bookingSpan.innerHTML = 'calendar_month'
let bookingSpanText = document.createElement('span')
bookingSpanText.classList.add('mx-2','py-2','text-lg')
bookingSpanText = 'Bookings'
bookingBtn.append(bookingSpan,bookingSpanText)
bookingBtn.classList.add('flex','items-center','mx-10','my-6')

let bookingListBtn = document.createElement('button')
let bookingListSpan = document.createElement('span')
bookingListSpan.classList.add('material-symbols-outlined')
bookingListSpan.innerHTML = 'format_list_bulleted'
let bookingListSpanText = document.createElement('span')
bookingListSpanText.classList.add('mx-2','py-2','text-lg')
bookingListSpanText ='List'
bookingListBtn.append(bookingListSpan,bookingListSpanText)
bookingListBtn.classList.add('flex','items-center','mx-16','my-2')

let roomBtn = document.createElement('button')
let roomSpan = document.createElement('span')
roomSpan.classList.add('material-symbols-outlined')
roomSpan.innerHTML = 'bed'
let roomSpanText = document.createElement('span')
roomSpanText.classList.add('mx-2','py-2','text-lg')
roomSpanText = 'Rooms'
roomBtn.append(roomSpan,roomSpanText)
roomBtn.classList.add('flex','items-center','mx-10','my-6')

let roomListBtn = document.createElement('button')
let roomListSpan = document.createElement('span')
roomListSpan.classList.add('material-symbols-outlined')
roomListSpan.innerHTML = 'format_list_bulleted'
let roomListSpanText = document.createElement('span')
roomListSpanText.classList.add('mx-2','py-2','text-lg')
roomListSpanText ='List'
roomListBtn.append(roomListSpan,roomListSpanText)
roomListBtn.classList.add('flex','items-center','mx-16','my-2')

let roomaddBtn = document.createElement('button')
let roomaddSpan = document.createElement('span')
roomaddSpan.classList.add('material-symbols-outlined')
roomaddSpan.innerHTML = 'format_list_bulleted'
let roomaddSpanText = document.createElement('span')
roomaddSpanText.classList.add('mx-2','py-2','text-lg')
roomaddSpanText ='Add'
roomaddBtn.append(roomaddSpan,roomaddSpanText)
roomaddBtn.classList.add('flex','items-center','mx-16','my-2')

sidebar.append(bookingBtn,bookingListBtn,roomBtn,roomListBtn,roomaddBtn)
side.append(sidebar)