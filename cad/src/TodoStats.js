export default function TodoStats({ floor, floors, room }) {
    

    return <div className="todo-stats">Floor: {floor} || Placed: {isPlaced(room, floors) ? "✅" : "❌"} || Subrooms: {room.subrooms?.filter(sr => isPlaced(sr, floors)).length ?? '0'}/{room.subrooms?.length ?? '0'}</div>
}

function isPlaced(room, floors) {
    for (const floor in [floors.A, floors.B, floors.C, floors.D, floors.E, floors.F, floors.G]) {
        if (floor.includes(r => r.name === room.name)) {
            return true;
        }
    }
    return false;
}