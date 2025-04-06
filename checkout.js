document.getElementById('checkout-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const dataPesanan = {
        nama: document.getElementById('nama').value,
        alamat: document.getElementById('alamat').value,
        pembayaran: document.getElementById('pembayaran').value,
        items: JSON.parse(localStorage.getItem('cart')) || []
    };

    localStorage.setItem('lastOrder', JSON.stringify(dataPesanan));
    window.location.href = 'success.html';
});