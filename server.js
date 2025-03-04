// const express = require('express')
// const dotenv = require('dotenv');
// const morgan = require('morgan');
// dotenv.config({path:'config.env' })
// const app = express();

// if (process.env.NODE_ENV === 'development') {
//     app.use(morgan('dev'));
//     console.log(`mode: ${process.env.NODE_ENV}`);
// }

// app.get('/',(req,res) => {
//     res.send('our api');
// });
// const PORT = process.env.PORT;
// app.listen(PORT, () => {
//     console.log('app running');
// });

// const express = require('express');
// const dotenv = require('dotenv');
// const morgan = require('morgan');
// dotenv.config({path:'config.env' })
// const app = express();

// // connect db
// mongoose.connect(process.env.db_url). then((conn) =>{
//     console.log('database connected:${conn.connection.host}');
// })
// .catch((err)=>{
//     console.error('database error :$(err)');
//     process.exit(1);
// });

// //middleware
// app.use(express.json());


// if (process.env.NODE_ENV === 'development') {
//     app.use(morgan('dev'));
//     console.log(`mode: ${process.env.NODE_ENV}`);
// }
// const categorySchema = new mongoose.Schema({
//     name: String,
// });
// const categoryModel = mongoose.model('category',categorySchema);

// app.post('/', (req, res) => {
//     const name =req.body.name;
//     console.log(req.body);

//     const newCategroy = new categoryModel({name});
//     newCategroy.save().then((doc) => {
//         res.json(doc);
//     })
//     .catch((err)=>{
//         res.json(err);
//     } );

// });

// app.get('/', (req, res) => {
//     res.send('Hello, Express!');
// });

// const PORT = process.env.PORT;
// app.listen(PORT, () => {
//     console.log('Server is running on http://localhost:3000');
// });


// const express = require('express');
// const dotenv = require('dotenv');
// const morgan = require('morgan');

// dotenv.config({ path: 'config.env' });
// const dbConnection = require('./config/database');
// const categoryRoute = require('./routes/categoryRoute');

// // Connect with db
// dbConnection();

// // express app
// const app = express();

// // Middlewares
// app.use(express.json());

// if (process.env.NODE_ENV === 'development') {
//     app.use(morgan('dev'));
//     console.log(`mode: ${process.env.NODE_ENV}`);
// }

// // Mount Routes
// app.use('/api/v1/categories', categoryRoute);

// const PORT = process.env.PORT;
// app.listen(PORT, () => {
//     console.log('Server is running on http://localhost:3000');
// });
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({ path: 'config.env' });
const dbConnection = require('./config/database');
const categoryRoute = require('./routes/categoryRoute');

// Connect with db
dbConnection();

// express app
const app = express();

// Middlewares
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
    console.log(`mode: ${process.env.NODE_ENV}`);
}

// Mount Routes
app.use('/api/v1/categories', categoryRoute);

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App running running on port ${PORT}`);
});