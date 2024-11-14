const express = require('express') //epress 모듈 가져옴
const app = express() //새로운 express 앱 생성
const port = 5000

app.get('/', (req,res) => res.send('Hello world!')) //Hello world! 출력

app.listen(port, () => console.log(`Example app listening on port ${port}!`))