var rect1 = {
    id: "readonlyId",
    size: {
        width: 10,
        height: 20
    },
    color: '#ccc' // optional. Can be skipped
};
// rect1.id = "hi";            // error - because of readonly property
var rect2 = {
    id: "someAnotherId",
    size: {
        width: 5,
        height: 7
    }
};
rect2.color = 'black';
// Converting to some type
var rect3 = {};
var rect4 = {};
var rect5 = {
    id: "123",
    size: {
        width: 7,
        height: 8
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
console.log(rect5.getArea());
var Clocl = /** @class */ (function () {
    function Clocl() {
        this.time = new Date();
    }
    Clocl.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clocl;
}());
var css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};
