// Danh sách sản phẩm hoa mẫu
const flowerProducts = [
    { id: 1, name: "Hoa Hồng Đỏ", category: "Fresh Cut", price: 15, image: "images/templatemo_image_01.jpg", description: "Aliquam tristique lacus in sapien. Suspendisse potenti." },
    { id: 2, name: "Hoa Lan Hồ Điệp", category: "Pot Plants", price: 50, image: "images/templatemo_image_02.jpg", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing." },
    { id: 3, name: "Hoa Cúc Họa Mi", category: "Dried", price: 10, image: "images/templatemo_image_03.jpg", description: "Suspendisse potenti. Ut sed pede. Nullam vitae tellus." },
    { id: 4, name: "Hoa Ly Trắng", category: "Fresh Cut", price: 25, image: "images/templatemo_image_01.jpg", description: "Vẻ đẹp thanh tao, biểu tượng của sự chân thành." },
    { id: 5, name: "Hoa Hướng Dương", category: "Gardens", price: 20, image: "images/templatemo_image_02.jpg", description: "Hương thơm dịu nhẹ từ vùng Provence nước Pháp." },
    { id: 6, name: "Hoa Cẩm Tú Cầu", category: "Fresh Cut", price: 22, image: "images/templatemo_image_01.jpg", description: "Vẻ đẹp thanh tao, biểu tượng của sự chân thành." },
    { id: 7, name: "Hoa Oải Hương", category: "Gardens", price: 35, image: "images/templatemo_image_02.jpg", description: "Hương thơm dịu nhẹ từ vùng Provence nước Pháp." }
];

// Hàm hiển thị sản phẩm
function renderProducts(products) {
    const container = document.getElementById('products-container');
    container.innerHTML = '';
    products.forEach(product => {
        const productBox = document.createElement('div');
        productBox.className = 'product_box';
        productBox.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.image}" alt="${product.name}" />
            <p>${product.description}</p>
            <div class="price">PRICE:<span>$${product.price}.00</span></div>
            <div class="buynow"><a href="#">Buy Now</a></div><a href="#">Details</a>
        `;
        container.appendChild(productBox);
    });
}

// Hàm lọc sản phẩm theo danh mục
function filterFlowers(category) {
    const filtered = flowerProducts.filter(f => f.category === category);
    renderProducts(filtered);
}

// Hàm tìm kiếm sản phẩm
function searchFlowers(keyword) {
    const filtered = flowerProducts.filter(f => f.name.toLowerCase().includes(keyword.toLowerCase()));
    renderProducts(filtered);
}

// Sự kiện khi trang tải
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(flowerProducts);

    // Sự kiện tìm kiếm
    const searchForm = document.querySelector('form[action="#"]');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const keyword = document.getElementById('keyword').value;
        searchFlowers(keyword);
    });

    // Sự kiện lọc danh mục
    const categoryLinks = document.querySelectorAll('#templatemo_content_right .templatemo_right_section_content ul li a');
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.textContent.split(' ')[0]; // Lấy từ đầu tiên, ví dụ "Hoa" từ "Hoa Khai Trương"
            // Map categories
            const categoryMap = {
                'Hoa': 'Fresh Cut',
                'Quà': 'Dried',
                'Dịch': 'Gardens'
            };
            const mappedCategory = categoryMap[category] || 'Fresh Cut';
            filterFlowers(mappedCategory);
        });
    });
});