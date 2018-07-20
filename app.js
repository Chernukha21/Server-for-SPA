const express = require('express'),
	  bodyParser = require('body-parser'),
	  cors = require('cors'),
	  cookieParser = require('cookie-parser'),
	  app = express()


const { request } = require("./class/request.js")
let   xhr = new request()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())
// app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
	res.json({
		"answer": 500
	})
})

app.get('/category/list/', (req, res) => {
	// res.json(data.folderview())
	let data = {
			calcId: "_MOCK.GET_GROUPS"
		},
		result = xhr.post(data)
		res.json(result)
})
app.get('/category/:id/desctription/', (req, res) => {
	let data = {
			calcId: "_MOCK.GET_GROUP_DESCRIPTION",
			args: {
				groupId: "" + req.params.id
			}
		},
		result = xhr.post(data)
		res.json(result)
		result = undefined
})
app.get('/product/list/', (req, res) => {
	let data = {
			calcId: "_MOCK.GET_PRODUCTS"
		},
		result = xhr.post(data)
		res.json(result)
		result = undefined
})
app.get('/order/list/', (req, res) => {
	let data = {
			calcId: "_MOCK.GET_ORDERS"
		},
		result = xhr.post(data)
		res.json(result)
		result = undefined
})
app.get('/order/status/list/', (req, res) => {
	let data = {
			calcId: "_MOCK.GET_STAGES"
		},
		result = xhr.post(data)
		res.json(result)
		result = undefined
})


app.get('/*', (req, res) => {
	res.send("404, page not found")
})



app.listen(3000)