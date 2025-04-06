const products = [
    { id: 1, name: 'Kaos Polos', description: 'Kaos polos nyaman untuk sehari-hari.', price: 75000, category: 'pakaian', image: 'https://img.freepik.com/free-psd/psd-isolated-pack-black-tshirts-front-view_1409-3405.jpg' },
    { id: 2, name: 'Sepatu Sneakers', description: 'Sepatu sneakers stylish dan nyaman.', price: 250000, category: 'sepatu', image: 'https://img.freepik.com/free-photo/shoes_1203-8154.jpg' },
    { id: 3, name: 'Topi Baseball', description: 'Topi baseball modis.', price: 50000, category: 'aksesoris', image: 'https://img.freepik.com/free-vector/vector-realistic-illustration-white-black-textile-baseball-cap-front-back-side-view_1441-558.jpg' },
    { id: 4, name: 'Jeans Hitam', description: 'Celana jeans hitam berkualitas.', price: 150000, category: 'pakaian', image: 'https://img.freepik.com/premium-photo/white-background-pair-black-denim-pants-with-front-pockets-straight-leg-cut-are-displayed-generative-ai_1219132-27511.jpg' },
    { id: 5, name: 'Tas Ransel', description: 'Tas ransel keren untuk harian.', price: 120000, category: 'aksesoris', image: 'https://img.freepik.com/free-vector/black-backpack-design-front-back-side-view-set-college-school-rucksack-mockup_575670-824.jpg' },
    { id: 6, name: 'Sepatu Lari', description: 'Sepatu lari untuk aktivitas olahraga.', price: 300000, category: 'sepatu', image: 'https://img.freepik.com/premium-photo/athletic-sneakers_488220-77499.jpg' },
    { id: 7, name: 'Kemeja Flanel', description: 'Kemeja flanel nyaman dan stylish.', price: 120000, category: 'pakaian', image: 'http://img.freepik.com/free-photo/button-cotton-shirt-classic-background_1203-6410.jpg' },
    { id: 8, name: 'Tas Selempang', description: 'Tas selempang praktis dan elegan.', price: 90000, category: 'aksesoris', image: 'https://img.freepik.com/premium-photo/close-up-bag-against-white-background_1048944-21523804.jpg' },
    { id: 9, name: 'Jaket Bomber', description: 'Jaket bomber keren untuk cuaca dingin.', price: 200000, category: 'pakaian', image: 'https://img.freepik.com/free-photo/still-life-rendering-jackets-display_23-2149745039.jpg' },
    { id: 10, name: 'Sepatu Formal', description: 'Sepatu formal untuk acara resmi.', price: 350000, category: 'sepatu', image: 'https://img.freepik.com/free-photo/man-wearing-brown-leather-loafer-shoes_53876-102231.jpg' },
    { id: 11, name: 'Jam Tangan', description: 'Jam tangan modis dan elegan.', price: 250000, category: 'aksesoris', image: 'https://img.freepik.com/free-vector/smart-watch-realistic-image-black_1284-11873.jpg' },
    { id: 12, name: 'Kaos Baseball', description: 'Kaos baseball dengan desain keren.', price: 95000, category: 'pakaian', image: 'https://img.freepik.com/premium-vector/baseball-t-shirt-template_115282-37.jpg' },
    { id: 13, name: 'Topi Snapback', description: 'Topi snapback yang cocok untuk casual.', price: 75000, category: 'aksesoris', image: 'https://img.freepik.com/free-photo/trendy-looking-cool-teenage-boy-looking-with-confident-smile-adjusting-baseball-hat-his-head-holding-hands-peak-pretty-boy-wearing-snapback_343059-2476.jpg' },
    { id: 14, name: 'Kaos Keren', description: 'Kaos keren dengan desain unik.', price: 85000, category: 'pakaian', image: 'https://img.freepik.com/premium-vector/cat-addicted-fishing-t-shirt-design_13773-417.jpg' },
    { id: 15, name: 'Sweater Hoodie', description: 'Sweater hoodie nyaman untuk musim dingin.', price: 180000, category: 'pakaian', image: 'https://img.freepik.com/free-photo/crop-man-showing-holding-gesture_23-2147795518.jpg' },
    { id: 16, name: 'Sepatu High-top', description: 'Sepatu high-top untuk gaya kasual.', price: 350000, category: 'sepatu', image: 'https://img.freepik.com/premium-photo/women-s-rubber-shoes_78621-3294.jpg' },
    { id: 17, name: 'Topi Fedora', description: 'Topi fedora yang elegan.', price: 95000, category: 'aksesoris', image: 'https://img.freepik.com/free-photo/straw-hat-man_1203-7257.jpg' },
    { id: 18, name: 'Celana Pendek', description: 'Celana pendek yang nyaman untuk liburan.', price: 70000, category: 'pakaian', image: 'https://img.freepik.com/free-photo/man-shorts-summer-fashion-photoshoot-close-up_53876-108600.jpg' },
    { id: 19, name: 'Jam Tangan Digital', description: 'Jam tangan digital modern.', price: 400000, category: 'aksesoris', image: 'https://img.freepik.com/free-vector/smartwatch-with-blank-screen-black-wrist-band_107791-29499.jpg' },
    { id: 20, name: 'Tali Pinggang', description: 'Tali pinggang praktis dan stylish.', price: 95000, category: 'aksesoris', image: 'https://img.freepik.com/premium-photo/man-putting-belt-businessman-politician-man-s-style-male-hands-closeup-businessman-businessman-businessman-from-asia-people-business-fashion-clothing-concept_194143-354.jpg?' }
];

function renderProducts(filteredProducts) {
    const produkList = document.getElementById('produkList');
    produkList.innerHTML = '';
    filteredProducts.forEach(product => {
        const productCard = `
            <div class="col">
                <div class="card product-card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-price">Rp ${product.price.toLocaleString()}</p>
                        <!-- Form untuk mengirim data ke beli.html -->
                        <form action="beli.html" method="GET">
                            <input type="hidden" name="productId" value="${product.id}">
                            <input type="hidden" name="productName" value="${product.name}">
                            <input type="hidden" name="productPrice" value="${product.price}">
                            <input type="hidden" name="productDescription" value="${product.description}">
                            <input type="hidden" name="productImage" value="${product.image}">
                            <button type="submit" class="btn btn-primary w-100">Beli</button>
                        </form>
                    </div>
                </div>
            </div>
        `;
        produkList.innerHTML += productCard;
    });
}

renderProducts(products);