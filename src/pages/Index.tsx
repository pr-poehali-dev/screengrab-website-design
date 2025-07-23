import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Icon name="Gamepad2" size={36} className="text-orange-500" />
              <div className="absolute -inset-1 bg-orange-500/20 blur-sm rounded-full"></div>
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              ORBITRON
            </span>
          </div>
          <div className="hidden lg:flex space-x-8">
            <a href="#" className="relative group text-gray-300 hover:text-white transition-colors duration-300">
              Главная
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="relative group text-gray-300 hover:text-white transition-colors duration-300">
              Обновления
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="relative group text-gray-300 hover:text-white transition-colors duration-300">
              Скачать
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="relative group text-gray-300 hover:text-white transition-colors duration-300">
              О проекте
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
          <Button className="relative group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-6 py-3 shadow-lg shadow-orange-500/25 transition-all duration-300 hover:shadow-orange-500/40">
            <Icon name="Download" size={18} className="mr-2" />
            Скачать лаунчер
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/img/a957f71c-1e76-4a92-a1e7-492b1eab3835.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-bounce"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 pt-20">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg px-6 py-2 shadow-lg shadow-orange-500/25">
              EARLY ACCESS • BETA 2.4
            </Badge>
            <h1 className="text-7xl md:text-9xl font-black mb-8 leading-none">
              <span className="bg-gradient-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent drop-shadow-2xl">
                ORBITRON
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Исследуйте <span className="text-orange-400 font-semibold">бескрайние просторы</span> космоса в эпической многопользовательской игре нового поколения
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="group relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-6 text-xl font-semibold shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 transform hover:scale-105 transition-all duration-300">
                <Icon name="Download" size={24} className="mr-3 group-hover:animate-bounce" />
                Скачать игру
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
              </Button>
              <Button size="lg" variant="outline" className="group border-2 border-gray-400 text-white hover:bg-white/10 hover:border-white px-10 py-6 text-xl font-semibold backdrop-blur-sm bg-white/5 transform hover:scale-105 transition-all duration-300">
                <Icon name="Play" size={24} className="mr-3 group-hover:animate-pulse" />
                Смотреть трейлер
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/60" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Статистика в реальном времени
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="group">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl p-8 text-center border border-white/10 hover:border-white/20 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10">
                <Icon name="Users" size={56} className="text-green-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl font-bold mb-3 text-green-400">24,847</div>
                <div className="text-gray-300 text-lg font-medium">Игроков онлайн</div>
              </div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl p-8 text-center border border-white/10 hover:border-white/20 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10">
                <Icon name="Server" size={56} className="text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl font-bold mb-3 text-blue-400">127</div>
                <div className="text-gray-300 text-lg font-medium">Активных серверов</div>
              </div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl p-8 text-center border border-white/10 hover:border-white/20 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10">
                <Icon name="Globe" size={56} className="text-purple-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl font-bold mb-3 text-purple-400">45</div>
                <div className="text-gray-300 text-lg font-medium">Планет для исследования</div>
              </div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl p-8 text-center border border-white/10 hover:border-white/20 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10">
                <Icon name="Trophy" size={56} className="text-orange-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl font-bold mb-3 text-orange-400">1,250</div>
                <div className="text-gray-300 text-lg font-medium">Достижений</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-900/80 to-black/60">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Системные требования
          </h2>
          <div className="grid lg:grid-cols-2 gap-10">
            <Card className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-white/10 hover:border-orange-500/30 backdrop-blur-md transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
              <CardHeader className="pb-6">
                <CardTitle className="text-white text-2xl font-bold flex items-center">
                  <div className="relative mr-4">
                    <Icon name="Zap" size={32} className="text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute -inset-1 bg-orange-500/20 blur-sm rounded-full group-hover:bg-orange-500/30 transition-colors duration-300"></div>
                  </div>
                  Минимальные требования
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4 text-lg">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="font-semibold text-orange-400">ОС:</span>
                  <span>Windows 10 64-bit</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="font-semibold text-orange-400">Процессор:</span>
                  <span>Intel Core i5-8400</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="font-semibold text-orange-400">Память:</span>
                  <span>8 GB ОЗУ</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="font-semibold text-orange-400">Видеокарта:</span>
                  <span>NVIDIA GTX 1060</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-orange-400">Место на диске:</span>
                  <span>75 GB</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-gradient-to-br from-slate-700/60 to-slate-800/60 border border-white/10 hover:border-blue-500/30 backdrop-blur-md transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
              <CardHeader className="pb-6">
                <CardTitle className="text-white text-2xl font-bold flex items-center">
                  <div className="relative mr-4">
                    <Icon name="Star" size={32} className="text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute -inset-1 bg-blue-400/20 blur-sm rounded-full group-hover:bg-blue-400/30 transition-colors duration-300"></div>
                  </div>
                  Рекомендуемые требования
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4 text-lg">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="font-semibold text-blue-400">ОС:</span>
                  <span>Windows 11 64-bit</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="font-semibold text-blue-400">Процессор:</span>
                  <span>Intel Core i7-10700K</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="font-semibold text-blue-400">Память:</span>
                  <span>16 GB ОЗУ</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="font-semibold text-blue-400">Видеокарта:</span>
                  <span>NVIDIA RTX 3070</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-blue-400">Место на диске:</span>
                  <span>100 GB (SSD)</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Последние обновления
          </h2>
          <div className="space-y-8">
            <Card className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-white/10 hover:border-orange-500/30 backdrop-blur-md transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
              <CardHeader className="pb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white text-2xl font-bold mb-2">
                      Обновление 2.4.1 - "Звездные войны"
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-lg">15 января 2025</CardDescription>
                  </div>
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm px-4 py-2 shadow-lg animate-pulse">
                    НОВОЕ
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="text-gray-300 text-lg leading-relaxed">
                <p className="mb-6">
                  🚀 Добавлены новые космические битвы, улучшена система крафта, исправлены критические баги. 
                  Теперь доступно 5 новых планет для исследования с уникальными биомами и ресурсами.
                </p>
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <div className="flex justify-between text-sm mb-3">
                    <span className="text-orange-400 font-semibold">Прогресс загрузки</span>
                    <span className="text-white">87%</span>
                  </div>
                  <Progress value={87} className="h-3 bg-slate-800" />
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-white/10 hover:border-blue-500/30 backdrop-blur-md transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
              <CardHeader className="pb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white text-2xl font-bold mb-2">
                      Обновление 2.3.8 - "Исследователи"
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-lg">28 декабря 2024</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-gray-300 text-lg leading-relaxed">
                <p>
                  🔬 Улучшена система исследований, добавлены новые виды оружия, оптимизирована производительность игры. 
                  Новые достижения и награды за исследование галактики.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-black to-slate-900 py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Icon name="Gamepad2" size={32} className="text-orange-500" />
                  <div className="absolute -inset-1 bg-orange-500/20 blur-sm rounded-full"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  ORBITRON
                </span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Эпическая космическая игра для исследователей галактики. 
                Откройте для себя бескрайние просторы вселенной.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Игра</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-orange-400 transition-colors duration-300">Скачать</a>
                <a href="#" className="block text-gray-400 hover:text-orange-400 transition-colors duration-300">Системные требования</a>
                <a href="#" className="block text-gray-400 hover:text-orange-400 transition-colors duration-300">Обновления</a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Сообщество</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors duration-300">Discord</a>
                <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors duration-300">Reddit</a>
                <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors duration-300">Форум</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-gray-500">&copy; 2025 Orbitron Games. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;