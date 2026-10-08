export function validateForm(data) {
  const errors = {};
  const currentYear = new Date().getFullYear();

  // Tên từ 3 ký tự
  if (!data.title || data.title.trim().length < 3) {
    errors.title = 'Tên sách phải có ít nhất 3 ký tự.';
  }

  // Tác giả bắt buộc
  if (!data.author || data.author.trim() === '') {
    errors.author = 'Vui lòng nhập tên tác giả.';
  }

  // Bắt buộc chọn thể loại
  if (!data.category) {
    errors.category = 'Vui lòng chọn thể loại.';
  }

  // Năm từ 1900 đến năm hiện tại
  const yearNum = Number(data.year);
  if (!data.year || isNaN(yearNum) || yearNum < 1900 || yearNum > currentYear) {
    errors.year = `Năm xuất bản phải từ 1900 đến ${currentYear}.`;
  }

  return errors;
}

export function displayErrors(errors) {
  document.getElementById('errorTitle').textContent = errors.title || '';
  document.getElementById('errorAuthor').textContent = errors.author || '';
  document.getElementById('errorCategory').textContent = errors.category || '';
  document.getElementById('errorYear').textContent = errors.year || '';
}