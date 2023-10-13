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
                    card.style.display = 'block'; 
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
                body: JSON.stringify(formData), 
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(response => response.json())
                .then(response => {
                    window.location.reload();
                })
                .catch(error => console.log(error));

        })
        const input = `
    <div class="max-sm:mx-2 mx-4 my-10 bg-gray-200 border-b-2 border-gray-500 rounded-md">
        <label class="w-full mx-3 text-gray-400 py-1 text-xs px-2 block" for="">Name *</label>
        <input required id="name" type="text" class="bg-gray-200 text-gray-600 outline-none px-2 w-full" >
    </div>
    <div class="max-sm:mx-2 mx-4 my-10 bg-gray-200 border-b-2 border-gray-500 rounded-md">
        <label class="w-full mx-3 text-gray-400 py-1 text-xs px-2 block" for="">Email Address *</label>
        <input required id="email" name="email" type="text" class="bg-gray-200 text-gray-600 outline-none px-2  w-full" >
    </div>
    <div class="max-sm:mx-2 mx-4 my-10 bg-gray-200 border-b-2 border-gray-500 rounded-md">
        <label class="w-full mx-3 px-2 py-1 text-gray-400 text-xs block" for="">Phone Number *</label>
        <input id="phone" type="text" class="bg-gray-200 text-gray-600 outline-none px-2  w-full" >
    </div>
    <div class="max-sm:mx-2 mx-4 my-10 bg-gray-200  border-b-2 border-gray-500 rounded-md">
        <label class="w-full text-xs py-1 text-gray-400 mx-3 px-2 block" for="">Duration *</label>
        <input required id="duration" type="text" class="bg-gray-200 text-gray-600 outline-none px-2 py-1  w-full" >
    </div>
    <div class="w-full py-3">
        <button class="flex items-center text-blue-500 rounded-md font-semibold font-lg bg-white mx-4">
            <span class="material-symbols-outlined">
                cloud_done
            </span>
            <span class="mx-2 py-2 text-lg">Booking Now</span>
        </button>
    </div>`
        form.innerHTML += input;
        card.append(form);
    }, { once: true })

    card.classList.add('bg-blue-500', 'p-6', 'w-[70%]', 'rounded-xl', 'text-white', 'my-3', 'max-sm:w-[97%]','flex','max-sm:block');
    const img = document.createElement('img');
    img.classList.add('rounded-lg', 'w-[40%]','h-52','max-sm:w-full');
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
    h3.classList.add('py-2','max-sm:py-1')
    h3.textContent =  `Price - $ ${data.price} per day`;

    const h4 = document.createElement('h4');
    h4.textContent = `Room Size - ${data.room_size}`;
    h4.classList.add('py-2', 'w-full','max-sm:py-1')


    const h5 = document.createElement('h5');
    h5.textContent = `Accessories - ${data.accessories}`;
    h5.classList.add('py-2', 'max-sm:py-1.5','w-full')

    let div = document.createElement('div')
    div.classList.add('w-[50%]','px-10','max-sm:w-full','max-sm:px-2')
    div.append(h1,h2,h3,h4,h5)
    card.append(img,div);

    return card;
}