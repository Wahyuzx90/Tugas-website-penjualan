document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var pesan = document.getElementById('pesan').value;

    setTimeout(function() {
        var responseMessage = document.getElementById('responseMessage');
        responseMessage.innerHTML = `<div class="alert alert-success">
            Pesan dari <strong>${nama}</strong> berhasil dikirim!
        </div>`;

        document.getElementById('contactForm').reset();
    }, 1000); 
});