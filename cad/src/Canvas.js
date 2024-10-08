export default function Canvas({ bankContents, config }) {
    const boxes = [];
    for (const structure of bankContents.floors[config.activeFloor]) {
        boxes.push(structure);
    }

    var floorIdx = config.activeFloor;
    var lowerFloorsToDraw = config.layersBelow;
    while (lowerFloorsToDraw > 0 && ++floorIdx < bankContents.floors.length) {
        for (const structure of bankContents.floors[floorIdx]) {
            boxes.push({ ...structure, props: { ...structure.props, fillOpacity: 1/(2*Math.abs(floorIdx - config.activeFloor)) } });
        }
        lowerFloorsToDraw--;
    }

    floorIdx = config.activeFloor;
    var upperFloorsToDraw = config.layersAbove;
    while (upperFloorsToDraw > 0 && --floorIdx >= 0) {
        for (const structure of bankContents.floors[floorIdx]) {
            boxes.push({ ...structure, props: { ...structure.props, fillOpacity: 1 / (2 * Math.abs(floorIdx - config.activeFloor)) } });
        }
        upperFloorsToDraw--;
    }

    for (const structure of bankContents.global) {
        boxes.push(structure);
    }

    function Grid({ showBlockGrid, showChunkGrid }) {
        const grids = [];

        if (showBlockGrid) {
            grids.push(<rect width="100%" height="100%" fill="url(#blockGrid)" />)
        }

        if (showChunkGrid) {
            grids.push(<rect width="100%" height="100%" fill="url(#chunkGrid)" />)
        }

        return grids;
    }

    return (
        <svg className="canvas" height="600" width="600" viewBox="0 0 160 160">
            <defs>
                <pattern id="blockGrid" width=".625%" height=".625%">
                    <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth=".02" />
                </pattern>

                <pattern id="chunkGrid" width="10%" height="10%">
                    <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth=".04" />
                </pattern>
            </defs>

            
            <Grid showBlockGrid={config.showBlockGrid} showChunkGrid={config.showChunkGrid} />
            {boxes}
        </svg>        
    );
}