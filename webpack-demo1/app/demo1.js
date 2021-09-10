class Demo {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name || '当前name未定义'
    }
    setName(name) {
        this.name = name
        console.log('name修改成功');
    }
}

module.exports = Demo