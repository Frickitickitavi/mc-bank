export default function HallwayLimb({ x, y, length, isHoriz }) {
    if (isHoriz) {
        return <rect x={x} y={y} width={length} height={5} fill="blue" />;
    } else {
        return <rect x={x} y={y} width={5} height={length} fill="blue" />;
    }
}