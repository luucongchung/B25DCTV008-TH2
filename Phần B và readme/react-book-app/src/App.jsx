import { useState } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import GenreFilter from './components/GenreFilter';
import BookList from './components/BookList';
import Footer from './components/Footer';
import { initialBooks } from './data/books';
import './App.css';

export default function App() {
  const [books] = useState(initialBooks);
  const [favorites, setFavorites] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = Array.from(new Set(books.map((book) => book.category)));

  const handleToggleFavorite = (bookId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(bookId)
        ? prevFavorites.filter((id) => id !== bookId)
        : [...prevFavorites, bookId]
    );
  };

  const filteredBooks = selectedCategory === 'All'
    ? books
    : books.filter((book) => book.category === selectedCategory);

  return (
    <div className="app-container">
      <Header favCount={favorites.length} />

      <main className="main-content">
        <Section title="Bộ Lọc Thể Loại">
          <GenreFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </Section>

        <Section title={`Danh Sách Sách (${filteredBooks.length}/${books.length})`}>
          <BookList
            books={filteredBooks}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        </Section>
      </main>

      <Footer />
    </div>
  );
}