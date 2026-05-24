const express = require('express');

const app = express();









app.use('/', (req, res)=>{
    res.send('Welcome to the home pages')
})
const PORT  = 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})