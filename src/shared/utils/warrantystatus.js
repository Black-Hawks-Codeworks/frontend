export function getWarrantyStatus(w) {
  if (w.type === 'none') return 'No warranty';

  if (w.expiresAt) {
    const expires = new Date(w.expiresAt);
    const now = new Date();
    return expires >= now ? 'In warranty' : 'Out of warranty';
  }
}
