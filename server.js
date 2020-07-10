const app = require('express')();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

app.listen(PORT,_=>console.log(`server running on port ${PORT}`))
app.use(cors())

const books = [
    {book:1},
    {book:2},
    {book:3},
    {book:4},
    {book:5},
    {book:6},
    {book:7},
    {book:8},
    {book:9},
    {book:10},
    {book:11},
    {book:12},
    {book:13},
    {book:14},
    {book:15},
    {book:16},
    {book:17},
    {book:18},
    {book:19},
    {book:20}
]
//list with skip-limit 
app.get('/books',(req,res)=>{
    const skip = parseInt(req.query.skip || 0);
    const limit = parseInt(req.query.limit || 5);
    
    console.log('limt ',limit)
    console.log('skip ',skip)
    console.log(skip+limit)

    res.json({
        skip:skip,
        limit:limit,
        records:books.length,
        data:books.slice(skip,skip+limit)
    })
})

