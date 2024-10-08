export default function FloorSelector({ config, updateConfig }) {

    const activeFloor = config.activeFloor;

    const floorNames = ["A", "B", "C", "D", "E", "F", "G"]

    function setActiveFloor(newFloor) {
        updateConfig({ ...config, activeFloor: newFloor });
    }

    function FloorButton({ floor }) {
        return <button onClick={() => setActiveFloor(floor)}>
            {activeFloor === floor ? "(" : ""}
            {floor}
            {activeFloor === floor ? ")" : ""}
        </button>;
    }

    function decrementFloor(active) {
        if (active === floorNames[0]) {
            setActiveFloor(floorNames[floorNames.length - 1]);
            return;
        }
        setActiveFloor(floorNames[floorNames.indexOf(active) - 1]);
    }

    function incrementFloor(active) {
        if (active === floorNames[floorNames.length - 1]) {
            setActiveFloor(floorNames[0]);
            return;
        }
        setActiveFloor(floorNames[floorNames.indexOf(active) + 1]);
    }

    return (
        <>
            <div>Active Floor:</div>
            <div>
                <button onClick={() => decrementFloor(activeFloor)}>-</button>
                <FloorButton floor="A" />
                <FloorButton floor="B" />
                <FloorButton floor="C" />
                <FloorButton floor="D" />
                <FloorButton floor="E" />
                <FloorButton floor="F" />
                <FloorButton floor="G" />
                <button onClick={() => incrementFloor(activeFloor)}>+</button>
            </div>
        </>
    );
}