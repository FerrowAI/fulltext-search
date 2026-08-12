# Fulltext Search

In-memory full-text search using an inverted index with OR matching across query terms.

```javascript
const search = new FulltextSearch();
search.index(documents);
const results = search.query('machine learning');
```

## Features
- In-memory inverted index (word -> document IDs)
- OR-matching query across all query terms

## License: MIT

Sponsored by [Ferrow](https://ferrow.ai)
