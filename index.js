'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

app.set('port', (process.env.PORT || 5000))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())

// index
app.get('/', function (req, res) {
	res.send('hello world i am a secret bot')
})

// for facebook verification
app.get('/webhook/', function (req, res) {
	if (req.query['hub.verify_token'] === 'my_voice_is_my_password_verify_me') {
		res.send(req.query['hub.challenge'])
	}
	res.send('Error, wrong token')
})

// to post data
app.post('/webhook/', function (req, res) {
	let messaging_events = req.body.entry[0].messaging
	for (let i = 0; i < messaging_events.length; i++) {
		let event = req.body.entry[0].messaging[i]
		let sender = event.sender.id
		if (event.message && event.message.text) {
			let text = event.message.text.toLowerCase()
			if (text.includes("Demos")) {
				sendDemosMessage(sender)
				continue
			} else if (text === 'demos') {
				sendDemosMessage(sender)
				continue
			} else if (text === 'Merch') {
				sendTextMessage(sender, "Merch will be coming really soon :) ")
				continue
			} else if (text === 'merch') {
				sendTextMessage(sender, "Merch will be coming really soon :) ")
				continue
			} else if (text === 'Hey') {
				sendTextMessage(sender, "Hello there.")
				continue
			} else if (text === 'hey') {
				sendTextMessage(sender, "Hello there.")
				continue
			} else if (text === 'Hello') {
				sendTextMessage(sender, "Hey.")
				continue
			} else if (text === 'hello') {
				sendTextMessage(sender, "Hey.")
				continue
			} else if (text === 'Hey Eternity') {
				sendTextMessage(sender, "What's up, Stranger?")
				continue
			} else if (text === 'hey Eternity') {
				sendTextMessage(sender, "What's up, Stranger?")
				continue
			} else if (text === 'Hello Eternity') {
				sendTextMessage(sender, "Hey there, Stranger.")
				continue
			} else if (text === 'hello Eternity') {
				sendTextMessage(sender, "Hey there, Stranger.")
				continue
			} else if (text === 'Hey eternity') {
				sendTextMessage(sender, "lol")
					sendTextMessage(sender, "*Eternity")
				continue
			} else if (text === 'hey eternity') {
				sendTextMessage(sender, "lol")
					sendTextMessage(sender, "*Eternity")
				continue
			} else if (text === 'Hello eternity') {
				sendTextMessage(sender, "lol")
					sendTextMessage(sender, "*Eternity")
				continue
			} else if (text === 'hello eternity') {
				sendTextMessage(sender, "lol")
					sendTextMessage(sender, "*Eternity")
				continue
			} else if (text === '#eternityfam') {
				sendTextMessage(sender, "ETERNITY FAM IS LIT AF <3")
				continue
			} else if (text === 'you suck') {
				 sendTextMessage(sender, "and you swallow :)")
				 continue
			 } else if (text === 'You suck') {
 				 sendTextMessage(sender, "and you swallow :)")
 				 continue
 			 } else if (text === 'You Suck') {
 				 sendTextMessage(sender, "and you swallow :)")
 				 continue
 			 } else if (text === 'Savage') {
 				 sendTextMessage(sender, "we are ;)")
 				 continue
 			 } else if (text === 'savage') {
 				 sendTextMessage(sender, "we are ;)")
 			 }
		}
		if (event.postback) {
			let text = JSON.stringify(event.postback)
			sendTextMessage(sender, "Postback received: "+text.substring(0, 200), token)
			continue
		}
	}
	res.sendStatus(200)
})


// recommended to inject access tokens as environmental variables, e.g.
// const token = process.env.PAGE_ACCESS_TOKEN
const token = "EAAXEBS5Tr1ABANQqpi3rZBmlbfkYL7C7JJkTTwpSZBcJBQbtZAZA6nuZAjS0K0VK4yRi5QPwqrEbwe81WO4sosDOjgi2jvZB954CZBIMec8NGzJe6h5tDB2oT8Hz8iq83lnZCQWZBy9qE4V5tRWiI5zjZAh4W2AgJ8oWqS7jqroZCRHbwZDZD"

function sendTextMessage(sender, text) {
	let messageData = { text:text }

	request({
		url: 'https://graph.facebook.com/v2.6/me/messages',
		qs: {access_token:token},
		method: 'POST',
		json: {
			recipient: {id:sender},
			message: messageData,
		}
	}, function(error, response, body) {
		if (error) {
			console.log('Error sending messages: ', error)
		} else if (response.body.error) {
			console.log('Error: ', response.body.error)
		}
	})
}

function sendGenericMessage(sender) {
	let messageData = {
		"attachment": {
			"type": "template",
			"payload": {
				"template_type": "generic",
				"elements": [{
					"title": "First card",
					"subtitle": "Element #1 of an hscroll",
					"image_url": "http://messengerdemo.parseapp.com/img/rift.png",
					"buttons": [{
						"type": "web_url",
						"url": "https://www.messenger.com",
						"title": "web url"
					}, {
						"type": "postback",
						"title": "Postback",
						"payload": "Payload for first element in a generic bubble",
					}],
				}, {
					"title": "Second card",
					"subtitle": "Element #2 of an hscroll",
					"image_url": "http://messengerdemo.parseapp.com/img/gearvr.png",
					"buttons": [{
						"type": "postback",
						"title": "Postback",
						"payload": "Payload for second element in a generic bubble",
					}],
				}]
			}
		}
	}
	request({
		url: 'https://graph.facebook.com/v2.6/me/messages',
		qs: {access_token:token},
		method: 'POST',
		json: {
			recipient: {id:sender},
			message: messageData,
		}
	}, function(error, response, body) {
		if (error) {
			console.log('Error sending messages: ', error)
		} else if (response.body.error) {
			console.log('Error: ', response.body.error)
		}
	})
}

function sendDemosMessage(sender) {
	let messageData = {
		"attachment": {
			"type": "template",
			"payload": {
				"template_type": "generic",
				"elements": [{
					"title": "Demos",
					"subtitle": "Send Your Demos Here",
					"image_url": "https://scontent.fath3-2.fna.fbcdn.net/v/t1.0-9/12932665_1673324449584569_136873123934711253_n.jpg?oh=ed904df81533b5f2a9596b163fd54814&oe=589C8B4E",
					"buttons": [{
						"type": "web_url",
						"url": "http://www.eternitynetwork.net",
						"title": "Submit"
					}],
				}]
			}
		}
	}
	request({
		url: 'https://graph.facebook.com/v2.6/me/messages',
		qs: {access_token:token},
		method: 'POST',
		json: {
			recipient: {id:sender},
			message: messageData,
		}
	}, function(error, response, body) {
		if (error) {
			console.log('Error sending messages: ', error)
		} else if (response.body.error) {
			console.log('Error: ', response.body.error)
		}
	})
}

// spin spin sugar
app.listen(app.get('port'), function() {
	console.log('running on port', app.get('port'))
})
