export default function Beacon({ x, y, config }) {
    const beacon = [];

    if (config.showBeacons) {
        beacon.push(<rect x={x} y={y} width={1} height={1} fill="cyan" />);
    }

    if (config.showBeaconZones) {
        beacon.push(<rect x={x - 50} y={y - 50} width={100} height={100} fill="yellow" fillOpacity="0.1" />);
    }

    return beacon;
}