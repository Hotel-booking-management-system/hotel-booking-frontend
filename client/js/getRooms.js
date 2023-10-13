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
                card.addEventListener('click', () => {
                    for (let key = 0; key < room.children.length; key++) {
                        room.children[key].style.display = 'none'
                    }
                    card.style.display = 'block'; // Hide the clicked card
                }, { once: true });
                room.append(card);
            }
        }
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
const formData = {};
function createRoomCard(data, rooms) {
    const card = document.createElement('card');
    card.addEventListener('click', () => {
        const form = document.createElement('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            formData.room_type = data.room_type
            formData.name = document.getElementById('name').value
            formData.email = document.getElementById('email').value
            formData.phone = document.getElementById('phone').value
            formData.duration = document.getElementById('duration').value
            fetch("http://localhost:8000/api/client/bookings", {
                method: "POST",
                body: JSON.stringify(formData), // Assuming formData is a JSON object
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(response => response.json())
                .then(response => console.log(response))
                .catch(error => console.log(error));

        })
        const input = `
    <div class="mx-4 my-10 bg-gray-200 border-b-2 border-gray-500 rounded-md">
        <label class="w-full mx-3 px-4 block" for="">Name</label>
        <input required id="name" type="text" class="bg-gray-200 outline-none px-2 py-2 w-full" >
    </div>
    <div class="mx-4 my-10 bg-gray-200 border-b-2 border-gray-500 rounded-md">
        <label class="w-full mx-3 px-4 block" for="">Email Address</label>
        <input required id="email" name="email" type="text" class="bg-gray-200 outline-none px-2 py-2 w-full" >
    </div>
    <div class="mx-4 my-10 bg-gray-200 border-b-2 border-gray-500 rounded-md">
        <label class="w-full mx-3 px-4 block" for="">Phone Number</label>
        <input id="phone" type="text" class="bg-gray-200 outline-none px-2 py-2 w-full" >
    </div>
    <div class="mx-4 my-10 bg-gray-200  border-b-2 border-gray-500 rounded-md">
        <label class="w-full mx-3 px-4 block" for="">Duration</label>
        <input required id="duration" type="text" class="bg-gray-200 outline-none px-2 py-2 w-full" >
    </div>
    <div class="w-full bg-gray-400 py-3">
        <button class="flex items-center text-white bg-blue-500 mx-12">
            <span style="margin-left: 10px;" class="material-symbols-outlined">
                save
            </span>
            <span class="mx-6 py-2 text-lg">Booking Now</span>
        </button>
    </div>`
        form.innerHTML += input;
        card.append(form);
    }, { once: true })
    card.classList.add('bg-blue-500', 'p-6', 'w-[30%]', 'rounded-xl', 'text-white', 'my-3', 'max-sm:w-[95%]');
    const img = document.createElement('img');
    img.classList.add('rounded-lg', 'w-full',);
    img.src = `http://localhost:8000/public/images/${data.image}`;

    const h1 = document.createElement('h1');
    h1.classList.add('font-semibold', 'py-2')
    h1.textContent = data.room_type;

    const h2 = document.createElement('h2');
    if (rooms) {
        h2.textContent = `${rooms} Rooms available`;
        h2.classList.add('text-green-400')
    } else {
        h2.textContent = `${rooms} Rooms available`;
        h2.classList.add('text-red-400')
    }

    const h3 = document.createElement('h3');
    h3.classList.add('py-2')
    h3.textContent = `Price - ${data.price} per day`;

    const h4 = document.createElement('h4');
    h4.textContent = `Room Size - ${data.room_size}`;
    h4.classList.add('py-2', 'w-full')


    const h5 = document.createElement('h5');
    h5.textContent = `Accessories - ${data.accessories}`;
    h5.classList.add('py-2', 'max-sm:py-1.5')


    card.append(img, h1, h2, h3, h4, h5);

    return card;
}