export default function TodoStats({ floors, todoPath }) {
    function isPlaced(roomName, floor) {
        return floor.some(r => r.props.room.name === roomName);
    }

    function determineFloor(todoPath) {
        switch (todoPath.length - 2) {
            case 0:
                return "A";
            case 1:
                return "B";
            case 2:
                return "C";
            case 3:
                return todoPath[todoPath.length - 1].subrooms ? "E" : "D";
            case 4:
                return "F";
            case 5:
                return "G";

        }
    }

    function countTotalSubrooms(room, recursivePath) {
        return countSubroomsRecursively(room, false, recursivePath);
    }

    function countPlacedSubrooms(room, recursivePath) {
        return countSubroomsRecursively(room, true, recursivePath);
    }

    function countSubroomsRecursively(room, placedOnly, recursivePath) {
        const filter = placedOnly ? (sr) => isPlaced(sr.name, floors[determineFloor(recursivePath.concat(sr))]) : (sr) => true;

        var accum = room.subrooms?.filter(filter).length ?? 0
        for (const sr of (room.subrooms ?? [])) {
            accum += countSubroomsRecursively(sr, placedOnly, recursivePath)
        }
        return accum;
    }


    const room = todoPath[todoPath.length - 1];
    const floorName = determineFloor(todoPath);
    const placedSubrooms = countPlacedSubrooms(room, todoPath);
    const totalSubrooms = countTotalSubrooms(room, todoPath);

    return <div className="todo-stats">Floor: {floorName} || Placed: {isPlaced(room.name, floors[floorName]) ? "✅" : "❌"} || Subrooms: <span className={`todo-subrooms-${placedSubrooms === totalSubrooms ? 'good' : 'bad'}`}>{placedSubrooms}/{totalSubrooms}</span></div>
}

