import FloorSelector from './FloorSelector';

export default function Options({ config, updateConfig, activeFloor, setActiveFloor }) {
    function OptionCheckbox({ label, option }) {
        return (
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={config[option]}
                        onChange={() => {
                            const newConfig = { ...config }
                            newConfig[option] = !newConfig[option];
                            updateConfig(newConfig);
                        }}
                    />
                    {label}
                </label>
            </div>
        );
    }

    function NumberIncrementor({ label, option, min, max }) {
        return (
            <div>
                <button onClick={() => {
                    if (config[option] > min) {
                        const newConfig = { ...config }
                        newConfig[option]--;
                        updateConfig(newConfig);
                    }
                }}>-</button>
                <input style={{ width: "10px" }} className="option-incrementor" value={ config[option] } />
                <button onClick={() => {
                    if (config[option] < max) {
                        const newConfig = { ...config }
                        newConfig[option]++;
                        updateConfig(newConfig);
                    }
                }}>+</button> {label}
            </div>
        )
    }

    return (
        <span className="options">
            <FloorSelector config={config} updateConfig={updateConfig} />
            <OptionCheckbox label="Show block grid" option="showBlockGrid" />
            <OptionCheckbox label="Show chunk grid" option="showChunkGrid" />
            <OptionCheckbox label="Show beacons" option="showBeacons" />
            <OptionCheckbox label="Show beacon zones" option="showBeaconZones" />
            <NumberIncrementor label="Layers above" option="layersAbove" min={0} max={6} />
            <NumberIncrementor label="Layers below" option="layersBelow" min={0} max={6} />

        </span>
    );
}

