const mongoose=require('mongoose');

const dbPath=`mongodb://localhost:27017/products`

const options = {
useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology: true,
}

const dbConnect = () => {
mongoose.connect(dbPath, options)
.then(() => console.log('Connected 200Ok'))
.catch((err) => console.log(err))
}

module.exports = dbConnect 
