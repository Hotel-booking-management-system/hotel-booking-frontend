const room = document.getElementById('room');
const ActionButton = document.getElementById('ActionButton');
const apiUrl = 'http://localhost:8000/api/admin/rooms';

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
            btn.id = roomName;
            btn.addEventListener('click', () => {
                room.innerHTML = '';
                const getdata = dataByName[roomName] ?? dataByName['single room'];
                for (const roomType in getdata) {
                    if (getdata.hasOwnProperty(roomType)) {
                        const roomData = getdata[roomType];
                        const rooms = dataByName[roomType];
                        const card = createRoomCard(roomData);
                        room.append(card)
                    }
                }
            })
            btn.classList.add('bg-gray','px-2','py-1.5','border','border-gray-400','rounded-md');
            btn.textContent = roomName;
            divBtn.append(btn);
            const getdata = dataByName[roomName] ?? dataByName['single room'];
            for (const roomType in getdata) {
                if (getdata.hasOwnProperty(roomType)) {
                    const roomData = getdata[roomType];
                    const rooms = dataByName[roomType];
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
    card.classList.add('bg-gray-300', 'p-4', 'w-[26%]', 'rounded-xl','my-3','max-sm:w-[95%]');

    const img = document.createElement('img');
    img.classList.add('rounded-lg', 'w-full',);
    img.src = `http://localhost:8000/public/images/${data.image}`;

    const h1 = document.createElement('h1');
    h1.classList.add('font-semibold','py-2')
    h1.textContent = data.room_type;

    const h2 = document.createElement('h2');
    if (data.available) {
        h2.textContent = `Available Now`;
        h2.classList.add('text-green-500')
    }else{
        h2.textContent = `${data.time_to_available.toLocaleString()}`;
        h2.classList.add('text-red-400')
    }

    const h3 = document.createElement('h3');
    h3.classList.add('py-2')
    h3.textContent =  `Price - ${data.price} per day` ;

    const h4 = document.createElement('h4');
    h4.textContent = `Room Size - ${data.room_size}`;
    h4.classList.add('py-2','w-full')


    const h5 = document.createElement('h5');
    h5.textContent = `Accessories - ${data.accessories}`;
    h5.classList.add('py-2','max-sm:py-1.5')


    card.append(img, h1, h2, h3, h4, h5);

    return card;
}

//sidebar actions//

let divBtn = document.createElement('div');
divBtn.classList.add('w-full','flex','justify-end','mb-3')
ActionButton.append(divBtn)
