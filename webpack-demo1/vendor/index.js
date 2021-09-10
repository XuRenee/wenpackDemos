import Demo from "./demo";
const d = new Demo()
let app = document.getElementById('app')
let div = document.createElement('div')
div.style.width = '300px'
div.style.background = 'green'
div.innerHTML = '我是另一个访问入口'
app.appendChild(div)