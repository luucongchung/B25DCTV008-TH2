import { fetchBooks, createBookAPI } from './api.js';
import { toggleFavorite } from './storage.js';
import { createBookCard, populateCategories, updateFavCount } from './ui.js';
import { validateForm, displayErrors } from './validation.js';

let booksData = [];

// DOM Elements
const bookGrid = document.getElementById('bookGrid');
const statusText = document.getElementById('statusText');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const addBookForm = document.getElementById('addBookForm');

// 1. Tải dữ liệu ban đầu
async function initApp() {
  try {
    statusText.textContent = 'Đang tải...';
    booksData = await fetchBooks();
    populateCategories(booksData, categoryFilter);
    renderBooks();
    updateFavCount();
  } catch (error) {
    statusText.textContent = `Lỗi: ${error.message}`;
    statusText.style.color = 'red';
  }
}

// 2. Lọc & Hiển thị sách + dòng trạng thái
function renderBooks() {
  const keyword = searchInput.value.toLowerCase().trim();
  const selectedCat = categoryFilter.value;

  const filteredBooks = booksData.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(keyword);
    const matchesCat = selectedCat === '' || book.category === selectedCat;
    return matchesSearch && matchesCat;
  });

  bookGrid.innerHTML = '';
  filteredBooks.forEach(book => {
    bookGrid.appendChild(createBookCard(book));
  });

  statusText.style.color = '#555';
  statusText.textContent = `Đang hiển thị ${filteredBooks.length} / ${booksData.length} cuốn`;
}

// 3. Xử lý Event Delegation cho nút Yêu thích và Xóa
bookGrid.addEventListener('click', (e) => {
  const target = e.target;
  const card = target.closest('.book-card');
  if (!card) return;

  const bookId = card.dataset.id;

  // Nút Yêu thích
  if (target.classList.contains('btn-fav')) {
    toggleFavorite(bookId);
    updateFavCount();
    renderBooks(); // Cập nhật lại giao diện thẻ
  }

  // Nút Xóa (Hỏi xác nhận trước khi xóa)
  if (target.classList.contains('btn-delete')) {
    const confirmDelete = confirm('Bạn có chắc chắn muốn xóa cuốn sách này không?');
    if (confirmDelete) {
      booksData = booksData.filter(b => String(b.id) !== String(bookId));
      populateCategories(booksData, categoryFilter);
      renderBooks();
    }
  }
});

// 4. Tìm kiếm & Lọc thời gian thực
searchInput.addEventListener('input', renderBooks);
categoryFilter.addEventListener('change', renderBooks);

// 5. Validation realtime khi gõ
addBookForm.addEventListener('input', () => {
  const formData = {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
    category: addBookForm.category.value,
    year: addBookForm.year.value
  };
  const errors = validateForm(formData);
  displayErrors(errors);
});

// 6. Xử lý gửi Form Thêm Sách
addBookForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
    category: addBookForm.category.value,
    year: addBookForm.year.value
  };

  const errors = validateForm(formData);
  displayErrors(errors);

  if (Object.keys(errors).length === 0) {
    try {
      const newBook = await createBookAPI({
        ...formData,
        year: Number(formData.year)
      });

      // Thêm vào đầu danh sách
      booksData.unshift(newBook);
      
      populateCategories(booksData, categoryFilter);
      renderBooks();
      addBookForm.reset();
      displayErrors({}); // Xóa các thông báo lỗi cũ
    } catch (err) {
      alert('Không thể thêm sách: ' + err.message);
    }
  }
});

// Khởi chạy ứng dụng
initApp();