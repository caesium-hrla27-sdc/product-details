const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const parser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 3002;

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.listen(PORT, () => console.log(`server is listening on PORT: ${PORT}`));
