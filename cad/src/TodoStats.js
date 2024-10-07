export default function TodoStats({ floors, todoPath }) {
    const room = todoPath[todoPath.length - 1];

    return <div className="todo-stats">Floor: {determineFloor(todoPath)} || Placed: {isPlaced(room, floors) ? "✅" : "❌"} || Subrooms: {room.subrooms?.filter(sr => isPlaced(sr, floors)).length ?? '0'}/{room.subrooms?.length ?? '0'}</div>
}

function isPlaced(room, floors) {
    for (const floor in [floors.A, floors.B, floors.C, floors.D, floors.E, floors.F, floors.G]) {
        if (floor.includes(r => r.name === room.name)) {
            return true;
        }
    }
    return false;
}

function determineFloor(todoPath) {
    switch (todoPath.length-2) {
        case 0:
            return "A";
        case 1:
            return "B";
        case 2:
            return "C";
        case 3:
            return todoPath[todoPath.length-1].subrooms ? "E" : "D";
        case 4:
            return "F";
        case 5:
            return "G";

    }
}