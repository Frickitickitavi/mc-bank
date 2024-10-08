export default function TodoStats({ bankContents, todoPath }) {
    function isPlaced(roomName, floor) {
        return floor.some(r => r.props.room.name === roomName);
    }

    function determineFloor(todoPath) {
        switch (todoPath.length - 2) {
            case 0:
                return 0;
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return todoPath[todoPath.length - 1].subrooms ? 4 : 3;
            case 4:
                return 5;
            case 5:
                return 6;

        }
    }

    function countTotalSubrooms(room, recursivePath) {
        return countSubroomsRecursively(room, false, recursivePath);
    }

    function countPlacedSubrooms(room, recursivePath) {
        return countSubroomsRecursively(room, true, recursivePath);
    }

    function countSubroomsRecursively(room, placedOnly, recursivePath) {
        const filter = placedOnly ? (sr) => isPlaced(sr.name, bankContents.floors[determineFloor(recursivePath.concat(sr))]) : (sr) => true;

        var accum = room.subrooms?.filter(filter).length ?? 0
        for (const sr of (room.subrooms ?? [])) {
            accum += countSubroomsRecursively(sr, placedOnly, recursivePath)
        }
        return accum;
    }


    const room = todoPath[todoPath.length - 1];
    const floor = determineFloor(todoPath);
    const placedSubrooms = countPlacedSubrooms(room, todoPath);
    const totalSubrooms = countTotalSubrooms(room, todoPath);

    return (
        <div>
            <div className="todo-stats">
                Floor: {bankContents.floorNumToName(floor)} ||
                Placed: {isPlaced(room.name, bankContents.floors[floor]) ? "✅" : "❌"} ||
                Subrooms: <span className={`todo-subrooms-${placedSubrooms === totalSubrooms ? 'good' : 'bad'}`}>{placedSubrooms}/{totalSubrooms}</span>
            </div>
            <br/>
            <div className="todo-stats">
                Chests: {room.chests?.length ?? 0} ||
                Utilities: {room.utilities?.length ?? 0} ||
                Silos: {room.chests?.filter(c => c.silo && c.silo > 0).length ?? 0} ||
                Shortcuts: {room.shortcuts?.length ?? 0 }
            </div>
        </div>
    );
}

