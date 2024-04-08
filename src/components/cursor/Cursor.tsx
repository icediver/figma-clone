import CursorSVG from "@/src/assets/CursorSVG";

type Props = {
  color: string;
  x: number;
  y: number;
  message: string;
};
export function Cursor({ color, x, y, message }: Props) {
  return (
    <div
      className="pointer-events-none absolute top-0 left-0"
      style={{ transform: `translate(${x}px, ${y}px)` }}
    >
      <CursorSVG color={color} />
      {message && (
        <div
          className="absolute top-5 left-2  px-4 py-2   rounded-3xl"
          style={{ backgroundColor: color }}
        >
          <p className="text-white whitespace-nowrap text-sm leading-relaxed">
            {message}
          </p>
        </div>
      )}
    </div>
  );
}
