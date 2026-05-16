const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('combined'));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});