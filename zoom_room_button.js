const express = require('express');
const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

// Route to render room page
app.get('/:room_name', (req, res) => {
    const roomName = req.params.room_name.charAt(0).toUpperCase() + req.params.room_name.slice(1);
    res.render('index', { room_name: roomName, reserved: false });
});

// Route to reserve room
app.post('/:room_name/reserve', (req, res) => {
    const roomName = req.params.room_name.charAt(0).toUpperCase() + req.params.room_name.slice(1);
    const duration = parseInt(req.body.duration, 10) || 0;
    res.render('index', { room_name: roomName, reserved: true, duration });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
