// Global footnote registry
let footnoteCounter = 0;
const footnoteRegistry = new Map<string, number>();

export function resetFootnotes() {
  footnoteCounter = 0;
  footnoteRegistry.clear();
}

export function getFootnoteNumber(id: string): number {
  if (!footnoteRegistry.has(id)) {
    footnoteCounter++;
    footnoteRegistry.set(id, footnoteCounter);
  }
  return footnoteRegistry.get(id)!;
}

export function getFootnotesInOrder(footnotes: Array<{ id: string; text: string }>): Array<{ id: string; text: string; number: number }> {
  return footnotes.map(footnote => ({
    ...footnote,
    number: getFootnoteNumber(footnote.id)
  }));
} 