const tbody = document.getElementById('tbody');

const apiUrl = 'http://localhost:8000/api/admin/bookings';
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

function createTable(data) {
    tbody.innerHTML = '';
    data.forEach(item => {
        const dateObject = new Date(item.applied_date);
        const row = `
        <tr class="border-b text-sm border-b-gray-200">
            <td class="px-4 py-4">${item.name}</td>
            <td class="px-4 py-4">${item.email}</td>
            <td class="px-4 py-4">${item.phone}</td>
            <td class="px-4 py-4">${item.room_type}</td>
            <td class="px-4 py-4">${item.duration}</td>
            <td class="px-4 py-4">${month[dateObject.getMonth()]} ${getDayWithSuffix(dateObject.getDate())}</td>
            <td class="px-4 py-4 flex">
            <button class="flex items-center" onclick="AcceptData(${item.id},'${item.name}','${item.email}','${item.phone}','${item.room_type}','${item.duration}','${item.applied_date}')">
            <span style="color:#FFFFFF;background-color:#000000;border-radius: 100%;font-size:10px;padding: 1px;"  class="material-symbols-outlined">
                done
            </span>
            <span class="mx-3">Accept</span></button>
            <button class=" flex items-center mx-4" onclick="Cancel(${item.id})">
            <span style="color:#FFFFFF;background-color:#000000;border-radius: 100%;font-size:10px;padding: 1px;" class="material-symbols-outlined">
                close
            </span>           
            <span class="mx-3">Cancel</span></button>
            </td>
            </tr>`;
        tbody.innerHTML += row;
    });
}
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        createTable(data);
    })
    .catch(error => {
        console.log('Fetch error:', error);
    });
function Cancel(id) {
    fetch(`http://localhost:8000/api/admin/bookings/${id}`, { method: "DELETE" }).then(response => {
        return response.json();
    }).then(response => {
        console.log("🚀 ~ file: list.js:61 ~ Cancel ~ response:", response)
    }).catch(error => {
        console.log("🚀 ~ file: list.js:61 ~ fetch ~ error:", error)
    })

}
function AcceptData(id, name, email, phone, room_type, duration, applied_date) {
    const data = {
        id, name, email, phone, room_type, duration, applied_date
    }

    fetch('http://localhost:8000/api/admin/bookings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
           
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            if (!responseData) {
                console.error('Empty response received');
            } else {
                console.log(responseData);
            }
            window.location.reload();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
