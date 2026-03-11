// Danh sách sản phẩm hoa mẫu
const flowerProducts = [
    { id: 1, name: "Hoa Hồng Đỏ", category: "Fresh Cut", price: 15 },
    { id: 2, name: "Hoa Lan Hồ Điệp", category: "Pot Plants", price: 50 },
    { id: 3, name: "Hoa Cúc Họa Mi", category: "Dried", price: 10 },
    { id: 4, name: "Hoa Ly Trắng", category: "Fresh Cut", price: 25 },
    { id: 5, name: "Hoa Hướng Dương", category: "Gardens", price: 20 }
];

// Hàm hiển thị sản phẩm theo danh mục
function filterFlowers(category) {
    const filtered = flowerProducts.filter(f => f.category === category);
    console.log(`Đang lọc danh mục: ${category}`);
    console.log("Kết quả:", filtered);
    return filtered;
}