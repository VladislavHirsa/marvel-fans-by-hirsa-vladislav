const express = require('express');
const app = express();
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000;
console.log(process.env, 'ENV..........................')
connectDB();

app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('API to go'))

app.use('/api/users', require('./routs/api/users'));
app.use('/api/auth', require('./routs/api/auth'));
app.use('/api/profile', require('./routs/api/profile'));
app.use('/api/post', require('./routs/api/post'));

app.listen(PORT, () => console.log(`Succesfuly conect to port ${PORT}`));