import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LinkPage = () => {
  // Ссылка на демо-версию сайта (в реальности здесь был бы актуальный URL)
  const demoUrl = "https://infoclass9.example.com";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container py-12 px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h1 className="text-3xl font-bold">Доступ к образовательной платформе</h1>
            <p className="text-muted-foreground">
              Здесь вы можете получить доступ к полной версии нашего сайта по информатике для 9 класса
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Ссылка на образовательную платформу</CardTitle>
              <CardDescription>
                Перейдите по ссылке, чтобы начать обучение информатике
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 bg-muted rounded-md">
                <span className="font-medium truncate">{demoUrl}</span>
                <Button size="sm" variant="outline" asChild>
                  <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Открыть
                  </a>
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <p className="text-sm text-muted-foreground">
                Платформа содержит все материалы для подготовки к занятиям, практические задания и тесты для закрепления материала
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link to="/">Вернуться на главную</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                    Перейти к полной версии
                  </a>
                </Button>
              </div>
            </CardFooter>
          </Card>
          
          <div className="bg-accent p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">Что вы получите на полной версии?</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Полный доступ ко всем обучающим материалам</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Интерактивные задания с проверкой решений</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Тренажеры для подготовки к ОГЭ</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Онлайн-консультации с преподавателем</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LinkPage;
