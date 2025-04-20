import { Link } from "react-router-dom";
import { 
  Database, 
  Code, 
  Cpu, 
  Network, 
  FileCode,
  Globe,
  CheckCircle,
  GraduationCap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopicCard from "@/components/TopicCard";

const Index = () => {
  const topics = [
    {
      title: "Моделирование и формализация",
      description: "Модели и моделирование, графы, табличные модели, базы данных.",
      icon: Database,
      href: "/topics/modeling"
    },
    {
      title: "Алгоритмизация и программирование",
      description: "Основы программирования на Python, алгоритмические конструкции.",
      icon: Code,
      href: "/topics/programming"
    },
    {
      title: "Обработка числовой информации",
      description: "Электронные таблицы, формулы, функции, графики и диаграммы.",
      icon: FileCode,
      href: "/topics/spreadsheets"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
              Информатика для 9 класса
            </h1>
            <p className="text-lg text-muted-foreground max-w-[700px]">
              Интерактивные уроки, задания и тесты для успешного освоения
              курса информатики в 9 классе
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/topics">Начать обучение</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/practice">Перейти к практике</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 container px-4 md:px-6">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Основные темы курса</h2>
          <p className="text-lg text-muted-foreground max-w-[700px]">
            Изучите ключевые темы информатики, необходимые для успешной сдачи экзаменов и дальнейшего обучения
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <TopicCard
              key={index}
              title={topic.title}
              description={topic.description}
              icon={topic.icon}
              href={topic.href}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link to="/topics">Все темы курса</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Почему наш курс?</h2>
            <p className="text-lg text-muted-foreground max-w-[700px]">
              Современный подход к обучению информатике, разработанный с учетом требований ФГОС и ОГЭ
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Интерактивные уроки</h3>
              <p className="text-muted-foreground">
                Увлекательные уроки с анимациями, видеоматериалами и интерактивными заданиями
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Практические задания</h3>
              <p className="text-muted-foreground">
                Задания различного уровня сложности для закрепления теоретического материала
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Подготовка к ОГЭ</h3>
              <p className="text-muted-foreground">
                Материалы, соответствующие требованиям ОГЭ по информатике
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 container px-4 md:px-6">
        <div className="max-w-[900px] mx-auto bg-accent rounded-lg p-8 flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Готовы начать изучение информатики?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-[600px]">
            Регистрируйтесь на платформе, чтобы отслеживать свой прогресс и получать персонализированные рекомендации
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">
              Зарегистрироваться
            </Button>
            <Button size="lg" variant="outline">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
