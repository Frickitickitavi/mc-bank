export default function FloorSelector({ floorNumToName, config, updateConfig }) {

    const activeFloor = config.activeFloor;

    function setActiveFloor(newFloor) {
        updateConfig({ ...config, activeFloor: newFloor });
    }

    function FloorButton({ floor }) {
        return <button onClick={() => setActiveFloor(floor)}>
            {activeFloor === floor ? "(" : ""}
            {floorNumToName(floor)}
            {activeFloor === floor ? ")" : ""}
        </button>;
    }

    function decrementFloor(active) {
        setActiveFloor(Math.max(activeFloor - 1, 0));
    }

    function incrementFloor(active) {
        setActiveFloor(Math.min(activeFloor + 1, 6));
    }

    return (
        <>
            <div>Active Floor:</div>
            <div>
                <button onClick={() => decrementFloor(activeFloor)}>-</button>
                <FloorButton floor={0} />
                <FloorButton floor={1} />
                <FloorButton floor={2} />
                <FloorButton floor={3} />
                <FloorButton floor={4} />
                <FloorButton floor={5} />
                <FloorButton floor={6} />
                <button onClick={() => incrementFloor(activeFloor)}>+</button>
            </div>
        </>
    );
}