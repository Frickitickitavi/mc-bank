export default function Room({ x, y, w, h, fillOpacity, room, floor, logicalDepth }) {
    return <rect x={x} y={y} width={w} height={h} fillOpacity={fillOpacity} />;
}