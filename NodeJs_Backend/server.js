const express = require('express');
const dotEnv = require('dotenv');
dotEnv.config();

const app = express();
app.use(express.json());


const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});



