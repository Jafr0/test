const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const authRouter = require('./authRouter')
const cors = require("cors");

const PORT = 3000


const app = express();

app.use(express.json())
app.use('/auth', authRouter)

const corsOptions = {
	origin: '*',
	credentials: true,            //access-control-allow-credentials:true
	optionSuccessStatus: 200,
}

app.use(cors(corsOptions))



async function start() {
	try {
		await mongoose.connect('mongodb+srv://Jafr0:Jafr0228@cluster0.i7uke4d.mongodb.net/mono-rs-clone', {
			useNewUrlParser: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
			useCreateIndex: true

		})
		app.listen(PORT, () => {
			console.log("stardet")
		})
	} catch (e) {
		console.log(e)
	}
}

start()



