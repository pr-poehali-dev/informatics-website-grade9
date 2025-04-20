import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted py-8 mt-20 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="text-lg font-bold">ИнфоКласс 9</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Образовательный портал по информатике для учеников 9 класса
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Разделы</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/topics" className="text-sm text-muted-foreground hover:text-foreground">
                  Темы курса
                </Link>
              </li>
              <li>
                <Link to="/practice" className="text-sm text-muted-foreground hover:text-foreground">
                  Практика
                </Link>
              </li>
              <li>
                <Link to="/tests" className="text-sm text-muted-foreground hover:text-foreground">
                  Тесты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Ресурсы</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/glossary" className="text-sm text-muted-foreground hover:text-foreground">
                  Глоссарий
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground">
                  Частые вопросы
                </Link>
              </li>
              <li>
                <Link to="/updates" className="text-sm text-muted-foreground hover:text-foreground">
                  Обновления
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Контакты</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                info@infoclass9.ru
              </li>
              <li className="text-sm text-muted-foreground">
                +7 (XXX) XXX-XX-XX
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-4 text-center text-sm text-muted-foreground">
          © 2023 ИнфоКласс 9. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
