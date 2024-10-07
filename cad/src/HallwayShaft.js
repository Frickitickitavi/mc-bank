export default function HallwayShaft({ x, y, isHoriz }) {

    if (isHoriz) {
        return <rect x={x} y={y} width={9} height={3} />;
    } else {
        return <rect x={x} y={y} width={3} height={9} />;
    }
}