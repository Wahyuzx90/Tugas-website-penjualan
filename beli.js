const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId');
    const productName = urlParams.get('productName');
    const productPrice = urlParams.get('productPrice');
    const productDescription = urlParams.get('productDescription');
    const productImage = urlParams.get('productImage');

    let cart = JSON.parse(localStorage.getItem('cart')) || {};

    if (productId && !cart[productId]) {
        cart[productId] = {
            quantity: 1,
            name: productName,
            price: parseInt(productPrice),
            description: productDescription,
            image: productImage
        };
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function renderCart() {
        const cartContent = document.getElementById('cart-content');
        cartContent.innerHTML = '';
        let total = 0;

        for (let productId in cart) {
            const product = cart[productId];
            if (product && product.quantity > 0) {
                const subtotal = product.price * product.quantity;
                total += subtotal;

                const row = document.createElement('div');
                row.classList.add('cart-item');
                row.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" />
                    <div class="product-details">
                        <h5>${product.name}</h5>
                        <p>Rp ${product.price.toLocaleString()}</p>
                    </div>
                    <div>
                        <input type="number" value="${product.quantity}" min="1" onchange="updateQuantity('${productId}', this.value)" />
                        <button class="btn btn-danger btn-sm" onclick="removeItem('${productId}')">Hapus</button>
                    </div>
                    <div>
                        Rp ${subtotal.toLocaleString()}
                    </div>
                `;
                cartContent.appendChild(row);
            }
        }

        const totalPrice = document.getElementById('total-price');
        totalPrice.innerHTML = `<h4>Total: Rp ${total.toLocaleString()}</h4>`;
    }

    function updateQuantity(productId, quantity) {
        if (quantity < 1) quantity = 1;
        if (cart[productId]) {
            cart[productId].quantity = parseInt(quantity);
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
        }
    }

    function removeItem(productId) {
        delete cart[productId];
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    function clearCart() {
        cart = {};
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    function checkout() {
        if (Object.keys(cart).length === 0) {
            alert('Keranjang Anda kosong!');
            return;
        }
        window.location.href = 'checkout.html';
    }

    renderCart();