export class FulltextSearch {
  private index = new Map<string, Set<number>>();
  
  index(documents: Array<{ id: number; text: string }>): void {
    for (const doc of documents) {
      const words = doc.text.toLowerCase().split(/\s+/);
      for (const word of words) {
        if (!this.index.has(word)) this.index.set(word, new Set());
        this.index.get(word)!.add(doc.id);
      }
    }
  }
  
  query(text: string): number[] {
    const words = text.toLowerCase().split(/\s+/);
    const results = new Set<number>();
    for (const word of words) {
      const ids = this.index.get(word) || new Set();
      ids.forEach(id => results.add(id));
    }
    return Array.from(results);
  }
}
