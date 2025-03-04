import { Link } from "react-router-dom";
import { Logo } from "../../components/logo/logo";

function NotFoundPage() {
  return (
    <div>
      <h1>404</h1>
      <p>Упс! Кажется, страница не найдена.</p>
      <p>Возможно, она была перемещена или удалена.</p>
      <Link to = '/'>Перейти на главную страницу</Link>
    </div>
  );
}

export default NotFoundPage;