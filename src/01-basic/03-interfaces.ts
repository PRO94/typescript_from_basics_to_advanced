// ---------- Interfaces
interface IRect {
    readonly id: string,    // readonly value can't be modified
    color?: string,         // optional parameter
    size: {
        width: number,
        height: number
    }
}

const rect1: IRect = {
    id: "readonlyId",       // can't be modified after the initialization
    size: {
        width: 10,
        height: 20
    },
    color: '#ccc'           // optional. Can be skipped
};
// rect1.id = "hi";            // error - because of readonly property

const rect2: IRect = {
    id: "someAnotherId",
    size: {
        width: 5,
        height: 7
    }
};
rect2.color = 'black';

// Converting to some type
const rect3 = {} as IRect;
const rect4 = <IRect>{};


// ---------- Interfaces inheritance
interface IRectWithArea extends IRect {
    getArea: () => number
}

const rect5: IRectWithArea = {
    id: "123",
    size: {
        width: 7,
        height: 8
    },
    getArea(): number {
        return this.size.width * this.size.height;
    }
}
console.log(rect5.getArea());


// ---------- Interfaces and their implementations by classes
interface IClock {
    time: Date,
    setTime(date: Date): void
}

class Clock implements IClock{
    time: Date = new Date();

    setTime(date: Date): void {
        this.time = date;
    }
}


// ---------- Another way to describe interfaces
interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}