// Global footnote registry
let footnoteCounter = 0;
const footnoteRegistry = new Map<string, number>();
const footnoteOrder: string[] = [];

export function resetFootnotes() {
  footnoteCounter = 0;
  footnoteRegistry.clear();
  footnoteOrder.length = 0;
}

export function getFootnoteNumber(id: string): number {
  if (!footnoteRegistry.has(id)) {
    footnoteCounter++;
    footnoteRegistry.set(id, footnoteCounter);
    footnoteOrder.push(id);
  }
  return footnoteRegistry.get(id)!;
}

export function getFootnotesInOrder(footnotes: Array<{ id: string; text: string }>): Array<{ id: string; text: string; number: number }> {
  // Create a map for quick lookup
  const footnotesMap = new Map(footnotes.map(f => [f.id, f]));
  
  // Return footnotes in the order they were referenced
  return footnoteOrder
    .map(id => {
      const footnote = footnotesMap.get(id);
      if (!footnote) {
        console.warn(`Footnote with id "${id}" was referenced but not defined`);
        return null;
      }
      return {
        ...footnote,
        number: getFootnoteNumber(id)
      };
    })
    .filter((footnote): footnote is NonNullable<typeof footnote> => footnote !== null);
} 