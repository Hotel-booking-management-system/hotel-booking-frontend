// const container = document.getElementById('container');
// const apiUrl = 'http://localhost:8000/api/admin/bookings';
// fetch(apiUrl)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(datas => {
//         datas.forEach(data => {
//             console.log(data);
//             this.createTable(data);
//         });
//     })
//     .catch(error => {
//         console.log('Fetch error:', error);
//     });
// const keys = [];
// function createTable(data) {
//     for (var key in data) {
//         keys = [...key, key];
//     }
//     console.log(keys);
// }
