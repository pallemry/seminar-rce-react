let x = {}
x.then = function(res, rej) {
    const myY = this.y * this.y;
    res(myY);
}
x.y = 10;
const result = await x;
console.log('Result:', result);