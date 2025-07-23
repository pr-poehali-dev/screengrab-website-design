import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#16213E] text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <Icon name="Gamepad2" size={32} className="text-[#FF6B35]" />
          <span className="text-2xl font-bold">ORBITRON</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-[#FF6B35] transition-colors">Главная</a>
          <a href="#" className="hover:text-[#FF6B35] transition-colors">Обновления</a>
          <a href="#" className="hover:text-[#FF6B35] transition-colors">Скачать</a>
          <a href="#" className="hover:text-[#FF6B35] transition-colors">О проекте</a>
          <a href="#" className="hover:text-[#FF6B35] transition-colors">Контакты</a>
        </div>
        <Button className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white">
          <Icon name="Download" size={16} className="mr-2" />
          Скачать лаунчер
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: 'url(/img/9c640690-9c62-4021-848a-80f21af7ce6c.jpg)' }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-[#FF6B35] text-white">EARLY ACCESS</Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            ORBITRON
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Исследуйте бескрайние просторы космоса в этой эпической многопользовательской игре
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-8 py-4 text-lg">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать игру
            </Button>
            <Button size="lg" variant="outline" className="border-gray-400 text-white hover:bg-white/10 px-8 py-4 text-lg">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть трейлер
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
              <Icon name="Users" size={48} className="text-[#FF6B35] mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">24,847</div>
              <div className="text-gray-400">Игроков онлайн</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
              <Icon name="Server" size={48} className="text-[#FF6B35] mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">127</div>
              <div className="text-gray-400">Активных серверов</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
              <Icon name="Globe" size={48} className="text-[#FF6B35] mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">45</div>
              <div className="text-gray-400">Планет для исследования</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
              <Icon name="Trophy" size={48} className="text-[#FF6B35] mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">1,250</div>
              <div className="text-gray-400">Достижений</div>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Системные требования</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon name="Zap" size={24} className="text-[#FF6B35] mr-2" />
                  Минимальные
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <div><strong>ОС:</strong> Windows 10 64-bit</div>
                <div><strong>Процессор:</strong> Intel Core i5-8400 / AMD Ryzen 5 2600</div>
                <div><strong>Память:</strong> 8 GB ОЗУ</div>
                <div><strong>Видеокарта:</strong> NVIDIA GTX 1060 / AMD RX 580</div>
                <div><strong>DirectX:</strong> Версии 12</div>
                <div><strong>Место на диске:</strong> 75 GB</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon name="Star" size={24} className="text-[#FF6B35] mr-2" />
                  Рекомендуемые
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <div><strong>ОС:</strong> Windows 11 64-bit</div>
                <div><strong>Процессор:</strong> Intel Core i7-10700K / AMD Ryzen 7 3700X</div>
                <div><strong>Память:</strong> 16 GB ОЗУ</div>
                <div><strong>Видеокарта:</strong> NVIDIA RTX 3070 / AMD RX 6700 XT</div>
                <div><strong>DirectX:</strong> Версии 12</div>
                <div><strong>Место на диске:</strong> 100 GB (SSD)</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Последние обновления</h2>
          <div className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white">Обновление 2.4.1 - "Звездные войны"</CardTitle>
                    <CardDescription className="text-gray-400">15 января 2025</CardDescription>
                  </div>
                  <Badge className="bg-[#FF6B35] text-white">НОВОЕ</Badge>
                </div>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>Добавлены новые космические битвы, улучшена система крафта, исправлены критические баги. Теперь доступно 5 новых планет для исследования.</p>
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Прогресс загрузки</span>
                    <span>87%</span>
                  </div>
                  <Progress value={87} className="h-2" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white">Обновление 2.3.8 - "Исследователи"</CardTitle>
                    <CardDescription className="text-gray-400">28 декабря 2024</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>Улучшена система исследований, добавлены новые виды оружия, оптимизирована производительность игры.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Gamepad2" size={24} className="text-[#FF6B35]" />
                <span className="text-xl font-bold">ORBITRON</span>
              </div>
              <p className="text-gray-400">Эпическая космическая игра для исследователей галактики.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Игра</h3>
              <div className="space-y-2 text-gray-400">
                <div>Скачать</div>
                <div>Системные требования</div>
                <div>Обновления</div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Сообщество</h3>
              <div className="space-y-2 text-gray-400">
                <div>Discord</div>
                <div>Reddit</div>
                <div>Форум</div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Поддержка</h3>
              <div className="space-y-2 text-gray-400">
                <div>FAQ</div>
                <div>Техподдержка</div>
                <div>Баг-репорты</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Orbitron Games. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;