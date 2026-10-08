// Thay URL bằng endpoint mockapi.io của bạn nếu có
const API_URL = './books.json';

export async function fetchBooks() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Không thể tải danh sách sách từ máy chủ.');
  }
  return await response.json();
}

export async function createBookAPI(newBook) {
  // Giả lập gửi POST request nếu dùng MockAPI
  // const response = await fetch(API_URL, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(newBook)
  // });
  // return await response.json();

  return { ...newBook, id: Date.now().toString() };
}