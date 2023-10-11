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
bookingBtn.classList.add('flex','items-center','mx-10')

let bookingListBtn = document.createElement('button')
let bookingListSpan = document.createElement('span')
bookingListSpan.classList.add('material-symbols-outlined')
bookingListSpan.innerHTML = 'format_list_bulleted'
let bookingListSpanText = document.createElement('span')
bookingListSpanText.classList.add('mx-2','py-2','text-lg')
bookingListSpanText ='List'
bookingListBtn.append(bookingListSpan,bookingListSpanText)
bookingListBtn.classList.add('flex','items-center','mx-16')




sidebar.append(bookingBtn,bookingListBtn)
side.append(sidebar)