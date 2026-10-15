// Shared colour cycle for cards. Full class names are spelled out so Tailwind picks them up.
export const palette = [
  { bg: "bg-lime", text: "text-lime" },
  { bg: "bg-pink", text: "text-pink" },
  { bg: "bg-sun", text: "text-sun" },
  { bg: "bg-aqua", text: "text-aqua" },
  { bg: "bg-tang", text: "text-tang" },
  { bg: "bg-grape", text: "text-grape" },
];

export const color = (i: number) => palette[i % palette.length];

// Staggers the pop-in animation so cards appear one after another
export const popDelay = (i: number, base = 0.1, step = 0.09) => ({
  animationDelay: `${base + i * step}s`,
});

// Alternating slight tilts give the sticker-board look
const tilts = ["-rotate-1", "rotate-1", "rotate-0", "-rotate-[0.5deg]", "rotate-[0.5deg]"];
export const tilt = (i: number) => tilts[i % tilts.length];
