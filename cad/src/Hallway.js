export default function Hallway({ hallway, limbs, floor, upperDepth }) {
    const boxes = [];

    for (const limb in limbs) {
        boxes.push(<rect x={limb.x} y={limb.y} width={limb.w} height={limb.h} />);
    }

    return boxes;
}