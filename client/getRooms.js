const container = document.getElementById('container');
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
                container.append(card);
            }
        }
    })
    .catch(error => {
        console.error('Fetch error:', error);
        // Handle the error appropriately
    });

function createRoomCard(data, rooms) {
    const card = document.createElement('a');
    card.href = './booking.html';
    card.classList.add('bg-blue-500', 'p-6', 'w-[20%]', 'rounded-xl', 'text-white');

    const img = document.createElement('img');
    img.classList.add('rounded-lg', 'w-full');
    img.src = `http://localhost:8000/public/images/${data.image}`;

    const h1 = document.createElement('h1');
    h1.textContent = data.room_type;

    const h2 = document.createElement('h2');
    h2.textContent = `${rooms} Rooms available`;

    const h3 = document.createElement('h3');
    h3.textContent = `Price - ${data.price} per day`;

    const h4 = document.createElement('h4');
    h4.textContent = `Room Size - ${data.room_size}`;

    const h5 = document.createElement('h5');
    h5.textContent = `Accessories - ${data.accessories}`;

    card.append(img, h1, h2, h3, h4, h5);

    return card;
}
