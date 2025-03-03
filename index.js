const { log } = require('console')
const express = require('express')
var cors = require('cors')
const app = express()
const port = 8080

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/sound/:name', (req,res) => {
    const { name } = req.params
    if (name == 'dog') {
        res.json({'sound':'멍멍'})
    }
    else if (name == 'cat') {
        res.json({'sound':'야옹'})
    }
    else if (name == '돼지') {
        res.json({'sound':'꿀꿀'})
    }
    else {
        res.json({'sound':'알수없음'})
    }
})

app.listen(port, () => {
    console.log(`서버가 포트번호 ${port}에서 실행중`)
})