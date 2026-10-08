export default function GenreFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="genre-filter">
      <button
        className={`filter-btn ${selectedCategory === 'All' ? 'active' : ''}`}
        onClick={() => onSelectCategory('All')}
      >
        Tất cả
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}