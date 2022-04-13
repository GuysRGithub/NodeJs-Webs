var timer = setInterval(function(){
    console.log("Hello every 0.5s")
}, 500)
console.log("Hello")
console.log(__filename)
setTimeout(function(){
    clearInterval(timer)
}, 6000)