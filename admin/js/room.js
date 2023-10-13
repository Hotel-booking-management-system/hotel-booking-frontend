const room = document.getElementById('room');
const ActionButton = document.getElementById('ActionButton');
const apiUrl = 'http://localhost:8000/api/admin/rooms';
const month = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function getDayWithSuffix(date) {
    const day = date;
    const suffix =
        day === 1 ? "st" :
            day === 2 ? "nd" :
                day === 3 ? "rd" : "th";

    return day + suffix;
}

function getHourWithAMPM(hour) {
    const suffix =
        hour >= 12 ? "PM" : "AM";

    const formattedHour = (hour % 12) || 12;

    return formattedHour + suffix;
}

let currentBtn = null;
let i = null;
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const dataByName = {};

        data.forEach(item => {
            if (dataByName[item.room_type]) {
                dataByName[item.room_type].push(item);
            } else {
                dataByName[item.room_type] = [item];
            }
        });
        for (const roomName in dataByName) {
            const btn = document.createElement('button');
            btn.addEventListener('click', () => {
                room.innerHTML = '';
                const getdata = dataByName[roomName] ?? dataByName['single room'];
                if(currentBtn) {
                    currentBtn.classList.remove("bg-blue-600","text-white");
                }
                btn.classList.add("bg-blue-600","text-white");
                currentBtn = btn;
                for (const roomType in getdata) {
                    if (getdata.hasOwnProperty(roomType)) {
                        const roomData = getdata[roomType];
                        const card = createRoomCard(roomData);
                        room.append(card)
                    }
                }
                 })
            btn.classList.add('bg-white','px-5','py-2','border-r','border-r-gray-300','rounded-md','border-l','border-l-gray-300','border-t','border-t-gray-300');
            btn.textContent = roomName;
            divBtn.append(btn);
            const getdata = dataByName[roomName] ?? dataByName['single room'];
            for (const roomType in getdata) {
                if (getdata.hasOwnProperty(roomType)) {
                    const no = Number(roomType)+ 1;
                    const roomData = getdata[roomType];
                    roomData['no'] = no;
                    const card = createRoomCard(roomData);
                    room.append(card)
                }
            }
        }
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });

function createRoomCard(data) {
    const card = document.createElement('a');
    card.href = './booking.html';
    card.classList.add('bg-gray-300','w-[28%]', 'rounded-xl','my-6','max-sm:w-[95%]',);

    const img = document.createElement('img');
    img.classList.add('rounded-lg','h-48','w-full');
    img.src = `http://localhost:8000/public/images/${data.image}`;

    const h1 = document.createElement('span');
    h1.classList.add('font-semibold','py-1','text-lg','px-3')
    h1.textContent ="No"+"." +data.no;

    const h2 = document.createElement('span');
    const dateObject = new Date(data.time_to_available);
    if (data.available) {
        h2.textContent = `Available Now`;
        h2.classList.add('text-green-500','py-1','px-2','text-right','font-semibold')
    }else{
        h2.textContent = `${month[dateObject.getMonth()]} ${getDayWithSuffix(dateObject.getDate())} ,${getHourWithAMPM(dateObject.getDate())}`;
        h2.classList.add('text-red-400','py-1','px-2','font-semibold')
    }

    const h3 = document.createElement('h3');
    h3.classList.add('py-1','px-3')
    h3.textContent =  `Price - ${data.price} per day` ;

    const h4 = document.createElement('h4');
    h4.textContent = `Room Size - ${data.room_size}`;
    h4.classList.add('py-1','w-full','px-3')


    const h5 = document.createElement('h5');
    h5.textContent = `Accessories - ${data.accessories}`;
    h5.classList.add('pt-1','max-sm:py-1.5','px-3')

    let div = document.createElement('div')
    div.classList.add('px-10','py-3')
    div.append(img,h1,h2,h3,h4,h5)

    card.append(div);

    return card;
}


let divBtn = document.createElement('div');
divBtn.classList.add('w-full','flex','justify-end','mb-3')
ActionButton.append(divBtn)
