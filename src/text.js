// Furigana markup: {漢字|かんじ}. HTML shows it as ruby; canvas text shows just the reading.
const MARK = /\{([^{}|]+)\|([^{}|]+)\}/g;
export const plain = s => String(s ?? "").replace(MARK, "$2");
export const ruby = html => String(html ?? "").replace(MARK, "<ruby>$1<rt>$2</rt></ruby>");
// every canvas in the app draws signs, labels and wall text: show the reading there
for (const fn of ["fillText", "strokeText", "measureText"]) {
  const orig = CanvasRenderingContext2D.prototype[fn];
  CanvasRenderingContext2D.prototype[fn] = function (t, ...a) { return orig.call(this, typeof t === "string" && t.includes("{") ? plain(t) : t, ...a); };
}
