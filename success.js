const order = JSON.parse(localStorage.getItem('lastOrder'));

const summaryContainer = document.getElementById('order-summary');

if (order) {
    let total = 0;
    let itemListHTML = '';

    for (let id in order.items) {
        const item = order.items[id];
        const subtotal = item.price * item.quantity;
        total += subtotal;

        itemListHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <strong>${item.name}</strong><br>
                    <small>${item.quantity} x Rp ${item.price.toLocaleString()}</small>
                </div>
                <span>Rp ${subtotal.toLocaleString()}</span>
            </li>
        `;
    }

    summaryContainer.innerHTML = `
        <h5>👤 Nama:</h5>
        <p>${order.nama}</p>
        <h5>📍 Alamat:</h5>
        <p>${order.alamat}</p>
        <h5>💳 Metode Pembayaran:</h5>
        <p>${order.pembayaran === 'transfer' ? 'Transfer Bank' : 'Bayar di Tempat'}</p>
        <h5>🛒 Rincian Pesanan:</h5>
        <ul class="list-group">${itemListHTML}</ul>
        <div class="text-end mt-3">
            <h5>Total: <strong>Rp ${total.toLocaleString()}</strong></h5>
        </div>
    `;

} else {
    summaryContainer.innerHTML = `<p>Tidak ada data pesanan ditemukan.</p>`;
}