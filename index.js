import express from 'express'
import axios from 'axios'


const app = express();

const router = express.Router()

// 解决跨域
app.use('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin','*');
    next()
})

app.use('/api', router)

router.get('/list', async (req, res) => {
    const result = await axios.post('https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=localCityNCOVDataList,diseaseh5Shelf')
    res.json({
        data: result.data
    })
})


app.listen(8888, () => {
    console.log('Server is running at http://127.0.0.1:8888')
})