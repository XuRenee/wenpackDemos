const Demo = require('./demo1')
let demo = new Demo("大壮")
console.log(demo.getName());
demo.setName('二壮')
console.log(demo.getName());
import './index.css'
const app = document.getElementById('app')
let text = document.createElement('p')
text.innerHTML = '我是p标签'
text.style.width = '100px'
text.style.height = '50px'
text.style.background = 'orange'
console.log(text, 'text');
app.appendChild(text)
