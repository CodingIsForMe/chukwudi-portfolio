/**
 * Site-wide atmosphere — editorial, not glowing. A single faint film-grain
 * gives the page a printed-matter texture. Fixed behind all content (-z-10);
 * pure CSS, no animation cost. (No full-height column guides — they read as
 * stray lines through the content.)
 */
export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grain opacity-[0.04]" />
    </div>
  );
}
