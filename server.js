const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3005;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(require('./routes/api'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/noSqlApi', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));

app.get("/", function (req, res) {
    res.send('test');
})
