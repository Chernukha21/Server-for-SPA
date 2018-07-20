var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

class request {
	constructor () {
		this.xhr =  new XMLHttpRequest()
		this.result = {}
		this.uri = "http://m.it.ua/ws/WebService.asmx/ExecuteEx"
		this.param = {
			calcId: null,
			args: null,
			ticket: null
		}
		this.data = ""
		this.used = 0
	}
	post (param) {
		if (this.xhr == undefined) { 
			this.xhr = new XMLHttpRequest() 
		}
		this.xhr.open('POST', this.uri, false)
		if (this.used == 0) {
			this.used = 1
			this.xhr.setRequestHeader("Content-Type", "application/json")
			this.xhr.setRequestHeader("Data-Type", "json")
		}
		this.param.calcId = (param.calcId) ? param.calcId : this.param.calcId
		this.param.args = (param.args) ? param.args : this.param.args
		this.param.ticket = (param.ticket) ? param.ticket : this.param.ticket
		this.data = JSON.stringify(this.param)
		this.xhr.send(this.data)
		try {
			return JSON.parse(this.xhr.responseText)
		} catch (e) {
			console.log(e)
			console.log("-----------------\n", this.xhr.responseText, "-----------------\n")
		}
		this.xhr = undefined
		this.data = ""
	}
}

module.exports.request = request