document.getElementById('upload-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData();
    const fileInput = document.getElementById('fileInput');
    const number_of_rooms = document.getElementById('number_of_rooms');
    const room_types = document.getElementById('room_types');
    const price = document.getElementById('price');
    const room_size = document.getElementById('room_size');
    const accessories = document.getElementById('accessories'); // Corrected the variable name here
    formData.append('image', fileInput.files[0]);
    formData.append('numberOfRoom', number_of_rooms.value);
    formData.append('room_type', room_types.value);
    formData.append('price', price.value);
    formData.append('room_size', room_size.value);
    formData.append('accessories', accessories.value); // Corrected the variable name here
    fetch('http://localhost:8000/api/admin/rooms', {
    method: 'POST',
    body: formData,
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(responseData => {
    if (!responseData) {
        // Handle empty response here
        console.error('Empty response received');
    } else {
        console.log(responseData);
        // Process the response as needed
    }
})
.catch(error => {
    console.error('Error:', error);
});

});
