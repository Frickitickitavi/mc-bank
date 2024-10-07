export default function Canvas({ boxes, config }) {
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