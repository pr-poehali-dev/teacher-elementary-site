import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [date, setDate] = useState<Date | undefined>(new Date());

  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'about', label: 'Обо мне', icon: 'User' },
    { id: 'materials', label: 'Материалы', icon: 'BookOpen' },
    { id: 'homework', label: 'Задания', icon: 'PenTool' },
    { id: 'parents', label: 'Родителям', icon: 'Users' },
    { id: 'gallery', label: 'Галерея', icon: 'Image' },
    { id: 'contacts', label: 'Контакты', icon: 'Mail' },
  ];

  const schedule = [
    { day: 'Понедельник', lessons: ['Математика', 'Русский язык', 'Чтение', 'Физкультура'] },
    { day: 'Вторник', lessons: ['Математика', 'Окружающий мир', 'ИЗО', 'Музыка'] },
    { day: 'Среда', lessons: ['Математика', 'Русский язык', 'Чтение', 'Технология'] },
    { day: 'Четверг', lessons: ['Математика', 'Русский язык', 'Английский', 'Физкультура'] },
    { day: 'Пятница', lessons: ['Математика', 'Чтение', 'Окружающий мир', 'Классный час'] },
  ];

  const importantDates = [
    { date: '20 декабря', event: 'Новогодний утренник' },
    { date: '25 декабря', event: 'Родительское собрание' },
    { date: '28 декабря', event: 'Конец четверти' },
  ];

  const materials = [
    { title: 'Математика 4 класс', desc: 'Таблица умножения и деления', icon: 'Calculator' },
    { title: 'Русский язык', desc: 'Словарные слова', icon: 'BookText' },
    { title: 'Чтение', desc: 'Список литературы', icon: 'Book' },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=400&h=300&fit=crop',
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-primary">🌟 4В класс</h1>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'outline'}
                onClick={() => setActiveSection(item.id)}
                className="transition-all hover:scale-105"
              >
                <Icon name={item.icon as any} className="mr-2" size={18} />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <div className="space-y-8 animate-fade-in">
            <Card className="bg-gradient-to-br from-accent to-secondary border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <img
                    src="https://cdn.poehali.dev/projects/ab324976-0249-48fc-9ba9-cd9a6f0d0f37/files/2b6f7f25-ae54-4749-8690-5503ed4160e9.jpg"
                    alt="Учитель"
                    className="w-48 h-48 rounded-full object-cover shadow-xl border-4 border-white"
                  />
                  <div>
                    <h2 className="text-4xl font-bold mb-4 text-accent-foreground">
                      Добро пожаловать! 👋
                    </h2>
                    <p className="text-xl text-accent-foreground mb-2">
                      Здравствуйте, дорогие ученики и родители 4В класса!
                    </p>
                    <p className="text-lg text-accent-foreground/80">
                      Меня зовут Образцова Эвелина Игоревна. Я рада приветствовать вас на сайте нашего класса. 
                      Здесь вы найдете расписание уроков, домашние задания, полезные материалы и многое другое!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 flex items-center text-primary">
                    <Icon name="Calendar" className="mr-2" />
                    Расписание уроков
                  </h3>
                  <div className="space-y-4">
                    {schedule.map((day) => (
                      <div
                        key={day.day}
                        className="p-4 bg-muted rounded-lg hover:bg-secondary transition-colors"
                      >
                        <h4 className="font-semibold text-lg mb-2">{day.day}</h4>
                        <div className="flex flex-wrap gap-2">
                          {day.lessons.map((lesson, idx) => (
                            <Badge key={idx} variant="secondary" className="text-sm">
                              {idx + 1}. {lesson}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 flex items-center text-primary">
                    <Icon name="Bell" className="mr-2" />
                    Важные даты
                  </h3>
                  <div className="space-y-4 mb-6">
                    {importantDates.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-gradient-to-r from-accent to-secondary rounded-lg border-l-4 border-primary"
                      >
                        <p className="font-semibold text-accent-foreground">{item.date}</p>
                        <p className="text-accent-foreground/80">{item.event}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'about' && (
          <div className="animate-fade-in">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-primary">Обо мне</h2>
                <div className="prose max-w-none">
                  <p className="text-lg mb-4 font-semibold text-primary">
                    Добро пожаловать на мою страничку!
                  </p>
                  <p className="text-lg mb-4">
                    Я молодой специалист, с огромным энтузиазмом начинающий свой путь в большой школьной семье в качестве учителя начальных классов. Это совершенно новый, увлекательный этап в моей профессиональной жизни, который я с нетерпением жду наполнить яркими открытиями вместе с моими учениками.
                  </p>
                  <p className="text-lg mb-4">
                    До прихода в школу, я активно занималась репетиторством. Этот опыт стал для меня настоящей педагогической лабораторией. Работая индивидуально с каждым ребенком, я научилась не только находить ключик к пониманию самых сложных тем, но и разрабатывать по-настоящему увлекательные и персонализированные учебные материалы. Именно тогда я освоила создание интерактивных досок, которые превращают урок в захватывающее приключение, и научилась разрабатывать развивающие игры на различных цифровых платформах, делая обучение динамичным и современным. Мне удалось найти эффективные способы вовлечения детей в процесс познания, развивая их любознательность и самостоятельность.
                  </p>
                  <p className="text-lg mb-4">
                    Я верю, что каждый ребенок уникален, и моя задача как учителя – раскрыть его потенциал, поддержать интерес к знаниям и помочь поверить в свои силы. Привнося в класс свежий взгляд и инновационные подходы, я стремлюсь создать такую образовательную среду, где каждый урок будет ожидаемым событием, а путь к знаниям – радостным и вдохновляющим. Я готова учиться и расти вместе со своими учениками, постоянно совершенствуя свои навыки и адаптируя методы под их потребности.
                  </p>
                  <p className="text-lg mb-4 font-semibold text-primary">
                    Давайте вместе строить мир, полный открытий и новых достижений!
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="p-4 bg-accent rounded-lg text-center">
                      <Icon name="Sparkles" size={32} className="mx-auto mb-2 text-primary" />
                      <p className="font-semibold">Молодой специалист</p>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg text-center">
                      <Icon name="Lightbulb" size={32} className="mx-auto mb-2 text-primary" />
                      <p className="font-semibold">Инновационные подходы</p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg text-center">
                      <Icon name="Heart" size={32} className="mx-auto mb-2 text-primary" />
                      <p className="font-semibold">Люблю детей</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'materials' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-primary">Учебные материалы</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {materials.map((material, idx) => (
                <Card
                  key={idx}
                  className="shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={material.icon as any} size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{material.title}</h3>
                    <p className="text-muted-foreground mb-4">{material.desc}</p>
                    <Button className="w-full">
                      <Icon name="Download" className="mr-2" size={16} />
                      Скачать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'homework' && (
          <div className="animate-fade-in">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-primary flex items-center">
                  <Icon name="PenTool" className="mr-3" />
                  Домашние задания
                </h2>
                <div className="space-y-4">
                  <div className="p-6 bg-accent rounded-lg border-l-4 border-primary">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">Математика</h3>
                      <Badge variant="destructive">До 18.12</Badge>
                    </div>
                    <p className="text-lg">Учебник: стр. 45, №3-7. Рабочая тетрадь: стр. 22-23</p>
                  </div>
                  <div className="p-6 bg-secondary rounded-lg border-l-4 border-primary">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">Русский язык</h3>
                      <Badge variant="destructive">До 19.12</Badge>
                    </div>
                    <p className="text-lg">Упражнения 56, 57. Выучить правило на стр. 89</p>
                  </div>
                  <div className="p-6 bg-muted rounded-lg border-l-4 border-primary">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">Чтение</h3>
                      <Badge>До 20.12</Badge>
                    </div>
                    <p className="text-lg">Прочитать рассказ "Волшебное слово", стр. 102-106</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'parents' && (
          <div className="animate-fade-in">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-primary">Родителям</h2>
                <div className="space-y-6">
                  <div className="p-6 bg-accent rounded-lg">
                    <h3 className="text-xl font-bold mb-3 flex items-center">
                      <Icon name="Info" className="mr-2" />
                      Важная информация
                    </h3>
                    <ul className="space-y-2 text-lg">
                      <li>📚 Уроки начинаются в 8:30</li>
                      <li>🍎 Перемены: 10 минут после каждого урока</li>
                      <li>🏫 МБОУ СОШ №36, г. Белгород</li>
                      <li>📞 Часы приема: Вторник 16:00-18:00</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-secondary rounded-lg">
                    <h3 className="text-xl font-bold mb-3 flex items-center">
                      <Icon name="CheckCircle" className="mr-2" />
                      Рекомендации
                    </h3>
                    <p className="text-lg">
                      Пожалуйста, следите за выполнением домашних заданий и наличием всех необходимых
                      учебных материалов. Не забывайте проверять дневник ребенка ежедневно.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'gallery' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-primary">Галерея</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((img, idx) => (
                <Card key={idx} className="overflow-hidden shadow-lg hover:shadow-xl transition-all">
                  <img
                    src={img}
                    alt={`Фото ${idx + 1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform"
                  />
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="animate-fade-in">
            <Card className="shadow-lg max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-primary text-center">Контакты</h2>
                <div className="space-y-6">
                  <div className="flex items-center p-4 bg-accent rounded-lg">
                    <Icon name="Mail" size={32} className="mr-4 text-primary" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-lg">teacher@school.ru</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-secondary rounded-lg">
                    <Icon name="Phone" size={32} className="mr-4 text-primary" />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-lg">+7 (904) 099-26-73</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-muted rounded-lg">
                    <Icon name="MapPin" size={32} className="mr-4 text-primary" />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-lg">МБОУ СОШ №36, г. Белгород</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="bg-primary text-primary-foreground mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">© 2024 4В класс МБОУ СОШ №36. Сделано с ❤️ для учеников и родителей</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;