const room = document.getElementById('room');
const apiUrl = 'http://localhost:8000/api/client/rooms';

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

        for (const roomType in dataByName) {
            if (dataByName.hasOwnProperty(roomType)) {
                const roomData = dataByName[roomType][0];
                const rooms = dataByName[roomType].length;
                const card = createRoomCard(roomData, rooms);
                room.append(card);
            }
        }
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });

function createRoomCard(data, rooms) {
    const card = document.createElement('a');
    card.href = './booking.html';
    card.classList.add('bg-blue-500', 'p-6', 'w-[30%]', 'rounded-xl', 'text-white','my-3','max-sm:w-[95%]');

    const img = document.createElement('img');
    img.classList.add('rounded-lg', 'w-full',);
    img.src = `http://localhost:8000/public/images/${data.image}`;

    const h1 = document.createElement('h1');
    h1.classList.add('font-semibold','py-2')
    h1.textContent = data.room_type;

    const h2 = document.createElement('h2');
    if (rooms) {
        h2.textContent = `${rooms} Rooms available`;
        h2.classList.add('text-green-400')
    }else{
        h2.textContent = `${rooms} Rooms available`;
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