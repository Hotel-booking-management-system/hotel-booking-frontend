const tbody = document.getElementById('tbody');

const apiUrl = 'http://localhost:8000/api/admin/bookings';
const month = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Function to get day with a suffix (e.g., 1st, 2nd, 3rd, 4th)
function getDayWithSuffix(date) {
    const day = date;
    const suffix =
        day === 1 ? "st" :
            day === 2 ? "nd" :
                day === 3 ? "rd" : "th";

    return day + suffix;
}

// Function to create and populate the table
function createTable(data) {
    tbody.innerHTML = ''; // Clear the table before populating
    data.forEach(item => {
        const dateObject = new Date(item.applied_date);
        const row = `
        <tr>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.phone}</td>
            <td>${item.room_type}</td>
            <td>${item.duration}</td>
            <td>${month[dateObject.getMonth()]} ${getDayWithSuffix(dateObject.getDate())}</td>
            <td><button onclick="AcceptData(${item.id},'${item.name}','${item.email}','${item.phone}','${item.room_type}','${item.duration}','${item.applied_date}')">accept</button></td>
            </tr>`;
        tbody.innerHTML += row;
    });
}
// Fetch data from the API
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

function AcceptData(id, name, email, phone, room_type, duration, applied_date) {
    // fetch("http://localhost:8000/api/admin/bookings", {
    //     method: 'POST',

    // })
}
