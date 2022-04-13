var event = require('events')
var util = require('util')

var myEventEmitter = new event.EventEmitter()
myEventEmitter.on("someEvent", function(msg){
    console.log(msg)
})

myEventEmitter.emit("someEvent", "Hello Rosie")


class Person {
    constructor(name) {
        this.name = name
    }
}

util.inherits(Person, event.EventEmitter)

var Rosie = new Person("Rosie")
var Lisa = new Person("Lisa")
var Jisoo = new Person("Jisoo")
var Jennie = new Person("Jennie")
Rosie.on("Speak", function(msg){
    console.log(msg)
})
// Rosie.emit("Speak", Rosie.name + " said Hello")
var unnie = [Rosie, Lisa, Jisoo, Jennie]

unnie.forEach(function(person, idx){
    person.on("Speak", function(msg){
        console.log(msg)
    })
    person.emit("Speak", person.name + " said Hello " + idx + " times")
})
