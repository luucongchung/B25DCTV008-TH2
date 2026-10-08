const FAV_KEY = 'favorite_book_ids';

export function getFavorites() {
  const stored = localStorage.getItem(FAV_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function toggleFavorite(bookId) {
  let favorites = getFavorites();
  if (favorites.includes(bookId)) {
    favorites = favorites.filter(id => id !== bookId);
  } else {
    favorites.push(bookId);
  }
  localStorage.setItem(FAV_KEY, JSON.stringify(favorites));
  return favorites;
}