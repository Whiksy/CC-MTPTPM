const express = require('express');
const app = express();
const path = require('path');
const PORT = 5000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/flowers', (req, res) => {
    const flowers = [
        { id: 1, name: 'Hoa Hồng', price: 15 },
        { id: 2, name: 'Hoa Lan', price: 30 },
        { id: 3, name: 'Hoa Cúc', price: 10 },
        { id: 4, name: 'Hoa Ly', price: 25 },
        { id: 5, name: 'Hoa Hướng Dương', price: 20 }
    ];
    res.json(flowers);
});

app.listen(PORT, () => {
    console.log(`Server Flower Shop đang chạy tại http://localhost:${PORT}`);
});