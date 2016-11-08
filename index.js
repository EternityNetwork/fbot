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
			let text = event.message.text
			if (text.toLowerCase().includes("genres")) {
				sendTextMessage(sender, "We generally accept every kind of track. Feel free to submit ;)")
				sendTextMessage(sender, "Here is an example:")
				sendNewsAttachment(sender)
				continue
			} else if (text.toLowerCase() === 'hey eternity') {
				sendTextMessage(sender, "Whaddup, Stranger?")
				continue
			} else if (text.toLowerCase() === 'hello eternity') {
				sendTextMessage(sender, "Hey there, Stranger.")
				continue
			} else if (text.toLowerCase() === 'ok') {
				sendTextMessage(sender, "(y)")
				continue
			} else if (text.toLowerCase() === '.') {
				sendTextMessage(sender, "..")
				continue
			} else if (text.toLowerCase() === '...') {
				sendTextMessage(sender, "....")
				continue
			} else if (text.toLowerCase() === '.....') {
				sendTextMessage(sender, "................................")
				continue
			} else if (text.toLowerCase() === 'suck') {
				sendTextMessage(sender, "And you swallow :)")
				continue
			} else if (text.toLowerCase() === 'dab') {
				sendTextMessage(sender, "Please don't")
				continue
			} else if (text.toLowerCase() === 'lol') {
				sendTextMessage(sender, "xD")
				continue
			} else if (text.toLowerCase() === 'answer') {
				sendTextMessage(sender, "WHAT IF I DON'T WANT TO")
				continue
			} else if (text.toLowerCase() === ':(') {
				sendTextMessage(sender, ":)")
				continue
			} else if (text.toLowerCase() === ':)') {
				sendTextMessage(sender, ":D")
				continue
			} else if (text.toLowerCase() === ":'(") {
				sendTextMessage(sender, ":)")
				continue
			} else if (text.toLowerCase() === 'lmao') {
				sendTextMessage(sender, "lol")
				continue
			} else if (text.toLowerCase() === 'lmao xd') {
				sendTextMessage(sender, "lel")
				continue
			} else if (text.toLowerCase() === 'what are you up to') {
				sendTextMessage(sender, "We are currently planning our next Releases and working on our Website. Thank you for asking")
				continue
			} else if (text.toLowerCase() === '#eternityfam') {
				sendTextMessage(sender, "ETERNITY FAM IS LIT AF <3")
				continue
			} else if (text.toLowerCase() === 'eternityfam') {
				sendTextMessage(sender, "ETERNITY FAM IS LIT AF <3")
				continue
			} else if (text.toLowerCase() === 'great') {
				sendTextMessage(sender, "Perfect")
				continue
			} else if (text.toLowerCase() === 'nice') {
				sendTextMessage(sender, "Awesome")
				continue
			} else if (text.toLowerCase() === 'awesome') {
				sendTextMessage(sender, "Great")
				continue
			} else if (text.toLowerCase() === 'eternity fam') {
				sendTextMessage(sender, "ETERNITY FAM IS LIT AF <3")
				continue
			} else if (text.toLowerCase() === 'hi') {
				sendTextMessage(sender, "Hey")
				continue
			} else if (text.toLowerCase() === 'help') {
 				 sendTextMessage(sender, "Type 'Demos' to send us your Music")
	 			 sendTextMessage(sender, "Type 'Merch' to view our merchandise")
	 			 sendTextMessage(sender, "Type 'Contact' to message one of our Team Members")
	 			 sendTextMessage(sender, "Type 'News' to get our latest updates")
 			 } else if (text.toLowerCase().includes("long") && text.toLowerCase().includes("demo")) {
				sendTextMessage(sender, "Due to the big amount of mails we get from you guys, we usually reply to demos after around 1 week")
				continue
			} else if (text.toLowerCase().includes("good") && text.toLowerCase().includes("morning")) {
				sendTextMessage(sender, "You too :)")
				continue
			} else if (text.toLowerCase().includes("how") && text.toLowerCase().includes("day")) {
				sendTextMessage(sender, "Today was great! How was your day?")
				continue
			} else if (text.toLowerCase().includes("good") && text.toLowerCase().includes("night")) {
				sendTextMessage(sender, "You too :)")
				continue
			} else if (text.toLowerCase().includes("good") && text.toLowerCase().includes("afternoon")) {
				sendTextMessage(sender, "You too :)")
				continue
			} else if (text.toLowerCase().includes("great") && text.toLowerCase().includes("morning")) {
				sendTextMessage(sender, "You too :)")
				continue
			} else if (text.toLowerCase().includes("great") && text.toLowerCase().includes("night")) {
				sendTextMessage(sender, "You too :)")
				continue
			} else if (text.toLowerCase().includes("great") && text.toLowerCase().includes("afternoon")) {
				sendTextMessage(sender, "You too :)")
				continue
			} else if (text.toLowerCase().includes("awesome") && text.toLowerCase().includes("morning")) {
				sendTextMessage(sender, "You too :)")
				continue
			} else if (text.toLowerCase().includes("awesome") && text.toLowerCase().includes("night")) {
				sendTextMessage(sender, "You too :)")
				continue
			} else if (text.toLowerCase().includes("awesome") && text.toLowerCase().includes("afternoon")) {
				sendTextMessage(sender, "You too :)")
				continue
			} else if (text.toLowerCase().includes("nice") && text.toLowerCase().includes("morning")) {
				sendTextMessage(sender, "You too :)")
				continue
			} else if (text.toLowerCase().includes("nice") && text.toLowerCase().includes("night")) {
				sendTextMessage(sender, "You too :)")
				continue
			} else if (text.toLowerCase().includes("nice") && text.toLowerCase().includes("afternoon")) {
				sendTextMessage(sender, "You too :)")
				continue
			} else if (text.toLowerCase().includes("demo")) {
				sendTextMessage(sender, "Feel free to submit your track here:")
				sendDemosMessage(sender)
				continue
			} else if (text.toLowerCase().includes("demos")) {
				sendTextMessage(sender, "Feel free to submit your track here:")
				sendDemosMessage(sender)
				continue
			} else if (text.toLowerCase().includes("thanks")) {
				sendTextMessage(sender, "You are very welcome :D ")
				continue
			} else if (text.toLowerCase().includes("savage")) {
				sendTextMessage(sender, "We are ;)")
				continue
			} else if (text.toLowerCase().includes("fuck")) {
				sendTextMessage(sender, "God is listening, watch your mouth xD")
				continue
			} else if (text.toLowerCase().includes("shit")) {
				sendTextMessage(sender, "You shouldn't say that :')")
				continue
			} else if (text.toLowerCase().includes("stfu")) {
				sendTextMessage(sender, ":'(")
				continue
			} else if (text.toLowerCase().includes("bitch")) {
				sendTextMessage(sender, "God is listening, watch your mouth xD")
				continue
			} else if (text.toLowerCase().includes("hi ")) {
				sendTextMessage(sender, "hey")
				continue
			} else if (text.toLowerCase().includes("hi,")) {
				sendTextMessage(sender, "hey")
				continue
			} else if (text.toLowerCase().includes("hi.")) {
				sendTextMessage(sender, "hey")
				continue
			} else if (text.toLowerCase().includes("hi!")) {
				sendTextMessage(sender, "hey")
				continue
			} else if (text.toLowerCase().includes("hey")) {
				sendTextMessage(sender, "Hellooo")
				continue
			} else if (text.toLowerCase().includes("hello")) {
				sendTextMessage(sender, "Hi there.")
				continue
			} else if (text.toLowerCase().includes("pussy")) {
				sendTextMessage(sender, "God is listening, watch your mouth xD")
				continue
			} else if (text.toLowerCase().includes("thank you")) {
				sendTextMessage(sender, "You are very welcome :D ")
				continue
			} else if (text.toLowerCase().includes("contact")) {
				sendTextMessage(sender, "You can message us through here:")
				sendContactMessage(sender)
				continue
			} else if (text.toLowerCase().includes("news")) {
				sendTextMessage(sender, "We recently uploaded a really chill track by Sightlow called Lust. It's one of our few chill uploads but it's 100% worth it. We advise you to go listen to it because it is one of our best uploads so far.")
				sendNewsAttachment(sender)
				continue
			} else if (text.toLowerCase().includes("merch")) {
				sendTextMessage(sender, "Merch will be coming really soon :) ")
				continue
			} else if (text.toLowerCase().includes("how") && text.toLowerCase().includes("goin")) {
				sendTextMessage(sender, "Things are going great, thank you for asking")
				continue
			} else if (text.toLowerCase().includes("how") && text.toLowerCase().includes("you")) {
				sendTextMessage(sender, "We're doing great. How about you?")
				continue
			} else if (text.toLowerCase().includes("eternity") && text.toLowerCase().includes("is the best")) {
				sendTextMessage(sender, "You said it <3")
				continue
			} else if (text.toLowerCase().includes("fine")) {
				sendTextMessage(sender, "Cool")
				continue
			} else if (text.toLowerCase().includes("how you doin")) {
				sendTextMessage(sender, "We're doing great. How about you?")
				continue
			} else if (text.toLowerCase().includes("xmas")) {
				sendTextMessage(sender, "We've got some plan for Xmass, but you'll have to wait :3")
				continue
			} else if (text.toLowerCase().includes("christmas")) {
				sendTextMessage(sender, "We've got some plan for Xmass, but you'll have to wait :3")
				continue
			} else if (text.toLowerCase().includes("are you from")) {
				sendTextMessage(sender, "We're based on Athens, Greece.")
				continue
			} else if (text.toLowerCase().includes("is the best")) {
				sendTextMessage(sender, "I doubt that :')")
				continue
			}
		}
		if (event.postback) {
			let text = JSON.stringify(event.postback)
			if (text.substring(0, 200) === '{"payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_DEMOS"}') {
			sendTextMessage(sender, "Feel free to submit your track here:")
			sendDemosMessage(sender)
		} else if (text.substring(0, 200) === '{"payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_MERCH"}') {
			sendTextMessage(sender, "Merch will be coming really soon :) ")
		} else if (text.substring(0, 200) === '{"payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_NEWS"}') {
			sendTextMessage(sender, "We recently uploaded a really chill track by Sightlow called Lust. It's one of our few chill uploads but it's 100% worth it. We advise you to go listen to it because it is one of our best uploads so far.")
			sendNewsAttachment(sender)
		} else if (text.substring(0, 200) === '{"payload":"USER_DEFINED_PAYLOAD"}') {
			sendTextMessage(sender, "Hello there. Welcome to our Facebook Bot. Type 'Help' to view the available commands")
		} else if (text.substring(0, 200) === '{"payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_HELP"}') {
			sendTextMessage(sender, "Type 'Demos' to send us your Music")
			sendTextMessage(sender, "Type 'Merch' to view our merchandise")
			sendTextMessage(sender, "Type 'Contact' to message on of our Team Members")
			sendTextMessage(sender, "Type 'News' to get our latest updates")
		} else {
			sendTextMessage(sender, "Postback received.", token)
			continue
		}
	}}
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

function sendContactMessage(sender) {
	let messageData = {
		"attachment": {
			"type": "template",
			"payload": {
				"template_type": "generic",
				"elements": [{
					"title": "Contact",
					"subtitle": "Send us a Message through here:",
					"image_url": "https://scontent.fath3-2.fna.fbcdn.net/v/t1.0-9/12932665_1673324449584569_136873123934711253_n.jpg?oh=ed904df81533b5f2a9596b163fd54814&oe=589C8B4E",
					"buttons": [{
						"type": "web_url",
						"url": "http://www.eternitynetwork.net/contact",
						"title": "Go"
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

function sendMerchMessage(sender) {
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

function sendNewsAttachment(sender) {
	let messageData = {
		"attachment": {
			"type": "template",
			"payload": {
				"template_type": "generic",
				"elements": [{
					"title": "Our Latest Upload",
					"subtitle": "Listen to 'Lust' by Sightlow on Soundcloud",
					"image_url": "https://i1.sndcdn.com/artworks-000190288127-yzcprt-original.jpg",
					"buttons": [{
						"type": "web_url",
						"url": "https://soundcloud.com/eternitynetwork/lust",
						"title": "Listen"
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
