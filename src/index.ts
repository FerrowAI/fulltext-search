export class FulltextSearch {
  private invertedIndex = new Map<string, Set<number>>();

  index(documents: Array<{ id: number; text: string }>): void {
    for (const doc of documents) {
      const words = doc.text.toLowerCase().split(/\s+/);
      for (const word of words) {
        if (!this.invertedIndex.has(word)) this.invertedIndex.set(word, new Set());
        this.invertedIndex.get(word)!.add(doc.id);
      }
    }
  }

  query(text: string): number[] {
    const words = text.toLowerCase().split(/\s+/);
    const results = new Set<number>();
    for (const word of words) {
      const ids = this.invertedIndex.get(word) || new Set();
      ids.forEach(id => results.add(id));
    }
    return Array.from(results);
  }
}
