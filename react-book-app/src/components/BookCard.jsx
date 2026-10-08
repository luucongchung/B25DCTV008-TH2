export default function BookCard({ book, isFavorite, onToggleFavorite }) {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p><strong>Tác giả:</strong> {book.author}</p>
      <p><strong>Thể loại:</strong> {book.category}</p>
      <p><strong>Năm XB:</strong> {book.year}</p>
      <div className="card-actions">
        <button
          className={`btn-fav ${isFavorite ? 'active' : ''}`}
          onClick={() => onToggleFavorite(book.id)}
        >
          {isFavorite ? 'Đã thích ❤️' : 'Yêu thích ♡'}
        </button>
      </div>
    </div>
  );
}