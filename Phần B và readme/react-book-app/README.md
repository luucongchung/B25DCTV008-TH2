# So sánh cách triển khai ứng dụng giữa Phần A và Phần B

## 1. Phần A: HTML / CSS / JavaScript thuần (Vanilla JS)
* **Quản lý dữ liệu & Giao diện:** Sử dụng DOM API (`document.createElement`, `innerHTML`, `querySelector`) để cập nhật giao diện thủ công mỗi khi dữ liệu hoặc trạng thái thay đổi.
* **Cấu trúc mã nguồn:** Tất cả logic HTML, CSS và JavaScript thường nằm chung trong một hoặc vài file script, khó chia nhỏ thành các khối độc lập.
* **Luồng dữ liệu:** Cần chủ động thao tác trực tiếp với DOM để chèn/xóa phần tử.

## 2. Phần B: React (Component-based & State-driven)
* **Quản lý giao diện theo State:** Giao diện tự động cập nhật khi trạng thái (`state`) thay đổi thông qua `useState`, không cần can thiệp trực tiếp vào DOM.
* **Cấu trúc Component:** Chia nhỏ ứng dụng thành các thành phần tái sử dụng (`Header`, `BookCard`, `GenreFilter`, `BookList`, `Section`, `Footer`).
* **Luồng dữ liệu:** Dữ liệu được truyền từ Component cha xuống Component con thông qua `props` một cách rõ ràng và nhất quán.

---

## Kết luận
* **Phần A (Vanilla JS):** Phù hợp với các trang web nhỏ, đơn giản, dễ tiếp cận nhưng mã nguồn dễ bị rối khi bài toán phức tạp hơn.
* **Phần B (React):** Giúp mã nguồn mô-đun hóa, dễ quản lý, dễ mở rộng và tái sử dụng nhờ tư duy phát triển theo Component và State.