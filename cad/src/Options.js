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

    return (
        <span className="options">
            <FloorSelector activeFloor={activeFloor} setActiveFloor={setActiveFloor} />
            <OptionCheckbox label="Show block grid" option="showBlockGrid" />
            <OptionCheckbox label="Show chunk grid" option="showChunkGrid" />
            <OptionCheckbox label="Show beacons" option="showBeacons" />
            <OptionCheckbox label="Show beacon zones" option="showBeaconZones" />
        </span>
    );
}

