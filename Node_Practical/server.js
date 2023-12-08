// A Basic Express Server That Tell's Welcome When You Open 127.0.0.1:3000

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome');
}
);

app.listen(3000, () => {
    console.log('Server Started at http://127.0.0.1: 3000');
});