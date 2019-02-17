function create() {
    // 创建一个空的对象
    let obj = new Object()
    // 获得构造函数,取得该方法的第一个参数(并删除第一个参数)，该参数是构造函数
    let Con = [].shift.call(arguments);
    // 链接到原型
    obj.__proto__ = Con.prototype
    // 绑定 this，执行构造函数
    let result = Con.apply(obj, arguments)
    // 确保 new 出来的是个对象，如果return null的话也得返回obj
    return typeof result === 'object' ? result || obj : obj   
}