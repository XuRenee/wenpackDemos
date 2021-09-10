
const data = await import("firstDemo/Util");
window.onload = function(){
    let app = document.getElementById('app')
    let p = document.createElement('p')
    p.innerHTML = data.default(1, 11, 300)
    app.appendChild(p)
}
// console.log(data.default);
export default { data }