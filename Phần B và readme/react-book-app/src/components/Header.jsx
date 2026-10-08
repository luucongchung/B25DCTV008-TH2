export default function Header({ favCount }) {
  return (
    <header className="header">
      <h1>Ứng Dụng Quản Lý Sách</h1>
      <div className="fav-badge">
        ❤️ Yêu thích: <span>{favCount}</span>
      </div>
    </header>
  );
}