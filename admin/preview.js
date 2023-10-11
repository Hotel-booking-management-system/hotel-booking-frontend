let fileInput = document.getElementById('fileInput');
let imagePreview = document.getElementById('imagePreview');

fileInput.addEventListener('change', function () {
    let file = fileInput.files[0];
    if (file) {
        let reader = new FileReader();

        reader.onload = function (e) {
            imagePreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        imagePreview.src = '../image/image_input.png';
    }
});
imagePreview.addEventListener('click', () => {
    fileInput.click();
})
