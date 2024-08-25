const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.send('hello from express on codespaces');
});
const PORT = process.env.PORT ||3000;
app.listen(PORT, () => {
console.log(`server running on http://localhost:${PORT}`);
});

