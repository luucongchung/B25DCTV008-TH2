import { getFavorites } from './storage.js';

// Dùng createElement và textContent theo đúng yêu cầu đề bài
export function createBookCard(book) {
  const card = document.createElement('div');
  card.className = 'book-card';
  card.dataset.id = book.id;

  const title = document.createElement('h3');
  title.textContent = book.title;

  const author = document.createElement('p');
  author.textContent = `Tác giả: ${book.author}`;

  const category = document.createElement('p');
  category.textContent = `Thể loại: ${book.category}`;

  const year = document.createElement('p');
  year.textContent = `Năm xuất bản: ${book.year}`;

  const actions = document.createElement('div');
  actions.className = 'card-actions';

  const favBtn = document.createElement('button');
  favBtn.className = 'btn-fav';
  
  const favorites = getFavorites();
  const isFav = favorites.includes(String(book.id));
  if (isFav) {
    favBtn.classList.add('active');
    favBtn.textContent = 'Đã thích ❤️';
  } else {
    favBtn.textContent = 'Yêu thích ♡';
  }

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn-delete';
  deleteBtn.textContent = 'Xóa';

  actions.appendChild(favBtn);
  actions.appendChild(deleteBtn);

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(category);
  card.appendChild(year);
  card.appendChild(actions);

  return card;
}

// Tạo danh sách thể loại động bằng Set
export function populateCategories(books, selectElement) {
  const categories = new Set(books.map(book => book.category));
  selectElement.innerHTML = '<option value="">Tất cả thể loại</option>';
  
  categories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = cat;
    selectElement.appendChild(option);
  });
}

export function updateFavCount() {
  const favCountEl = document.getElementById('favCount');
  const favorites = getFavorites();
  favCountEl.textContent = favorites.length;
}