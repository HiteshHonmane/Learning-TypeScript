type pointer = {
    x: number;
    y:number;
}

type userData = {
    name: string;
    Age : number;
    isPaid: boolean;
}

function createPointer(point : pointer){
    console.log(point.x)
    console.log(point.y)

}

createPointer({x:88, y:99})