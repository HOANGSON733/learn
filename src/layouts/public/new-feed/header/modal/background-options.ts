export type BackgroundId =
  | "none"
  | "purple"
  | "red"
  | "black"
  | "gradient-red-purple"
  | "gradient-purple-blue"
  | "gradient-yellow-orange"
  | "gradient-dark";

export type BackgroundPreset = {
  id: BackgroundId;
  className: string;
  textClassName: string;
};

export const BACKGROUND_PRESETS: BackgroundPreset[] = [
  {
    id: "purple",
    className: "bg-[#7b3fe4]",
    textClassName: "text-white placeholder:text-white/80",
  },
  {
    id: "red",
    className: "bg-[#e41e3f]",
    textClassName: "text-white placeholder:text-white/80",
  },
  {
    id: "black",
    className: "bg-[#1c1e21]",
    textClassName: "text-white placeholder:text-white/70",
  },
  {
    id: "gradient-red-purple",
    className: "bg-linear-to-b from-[#e41e3f] to-[#7b3fe4]",
    textClassName: "text-white placeholder:text-white/80",
  },
  {
    id: "gradient-purple-blue",
    className: "bg-linear-to-b from-[#7b3fe4] to-[#4fc3f7]",
    textClassName: "text-white placeholder:text-white/80",
  },
  {
    id: "gradient-yellow-orange",
    className: "bg-linear-to-b from-[#f5c518] to-[#e65100]",
    textClassName: "text-white placeholder:text-white/90",
  },
];

export function getBackgroundPreset(id: BackgroundId) {
  return BACKGROUND_PRESETS.find((preset) => preset.id === id);
}

export function hasBackgroundStyle(id: BackgroundId) {
  return id !== "none";
}
