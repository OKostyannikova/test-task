export default function filterByExpiration(items) {
  const now = Date.now();

  return items.filter(element => {
    const date = Date.parse(element.expirationDate);
    return date > now;
  });
}
