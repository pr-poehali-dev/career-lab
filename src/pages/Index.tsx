import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/34b3c021-d3f3-458e-b06d-491a265d0da9/files/d5760191-3ed8-4b2e-8019-468ea59b142a.jpg';
const ABOUT_IMG =
  'https://cdn.poehali.dev/projects/34b3c021-d3f3-458e-b06d-491a265d0da9/files/7c1278d0-e2fa-4815-8850-9426c44c313d.jpg';
const TESTS_IMG =
  'https://cdn.poehali.dev/projects/34b3c021-d3f3-458e-b06d-491a265d0da9/files/0fa6cadb-2ecc-441e-8429-e15abb2aee4b.jpg';

const SERVICE_IMGS = [
  'https://cdn.poehali.dev/projects/34b3c021-d3f3-458e-b06d-491a265d0da9/files/a27159c5-ae7e-4af1-a361-d739a9b0054b.jpg',
  'https://cdn.poehali.dev/projects/34b3c021-d3f3-458e-b06d-491a265d0da9/files/5adddecb-e653-424d-a934-74bdfab160f7.jpg',
  'https://cdn.poehali.dev/projects/34b3c021-d3f3-458e-b06d-491a265d0da9/files/15a1c39c-d899-4719-995b-877cce665405.jpg',
  'https://cdn.poehali.dev/projects/34b3c021-d3f3-458e-b06d-491a265d0da9/files/ef2bf88c-227b-4a5d-af2e-9394ce35a178.jpg',
];

const NAV = [
  { id: 'about', label: 'О компании' },
  { id: 'services', label: 'Услуги' },
  { id: 'tests', label: 'Тесты' },
  { id: 'articles', label: 'Статьи' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'contacts', label: 'Контакты' },
];

const SERVICES = [
  {
    icon: 'Compass',
    title: 'Профориентация подростков',
    text: 'Поможем школьнику выбрать вуз и профессию без давления и стереотипов.',
    color: 'hsl(13 90% 62%)',
  },
  {
    icon: 'RefreshCw',
    title: 'Смена профессии',
    text: 'Разберём ваши сильные стороны и найдём дело, в котором вы расцветёте.',
    color: 'hsl(172 65% 45%)',
  },
  {
    icon: 'TrendingUp',
    title: 'Карьерный рост',
    text: 'Стратегия развития, прокачка навыков и уверенное движение вверх.',
    color: 'hsl(257 70% 45%)',
  },
  {
    icon: 'Users',
    title: 'Профориентация для HR',
    text: 'Командные диагностики и подбор ролей под сильные стороны сотрудников.',
    color: 'hsl(330 80% 58%)',
  },
];

const TESTS = [
  { icon: 'Sparkles', title: 'Тест на сильные стороны', q: '40 вопросов · 10 мин', tone: 'secondary' },
  { icon: 'Brain', title: 'Тип мышления', q: '25 вопросов · 7 мин', tone: 'accent' },
  { icon: 'Heart', title: 'Что вас вдохновляет', q: '30 вопросов · 8 мин', tone: 'primary' },
];

const ARTICLES = [
  { tag: 'Подросткам', title: 'Как выбрать профессию, когда нравится всё', read: '6 мин' },
  { tag: 'Карьера', title: '5 признаков, что пора менять работу', read: '4 мин' },
  { tag: 'Психология', title: 'Синдром самозванца и как с ним жить', read: '7 мин' },
];

const REVIEWS = [
  {
    name: 'Анна К.',
    role: 'мама школьника',
    text: 'Сын год не мог определиться. После двух встреч он сам загорелся идеей поступать на инженера. Спасибо!',
  },
  {
    name: 'Дмитрий В.',
    role: 'сменил профессию в 34',
    text: 'Думал, в моём возрасте поздно. Профориентолог помог увидеть, что мой опыт — это преимущество.',
  },
  {
    name: 'Марина Л.',
    role: 'руководитель отдела',
    text: 'Прошли командную диагностику. Перераспределили роли — продуктивность выросла заметно.',
  },
];

const MARQUEE = ['Призвание', 'Смыслы', 'Таланты', 'Будущее', 'Развитие', 'Уверенность', 'Свой путь'];

function ConsultationDialog({ trigger }: { trigger: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[480px] rounded-3xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Записаться на консультацию</DialogTitle>
          <DialogDescription className="text-base">
            Онлайн-встреча с профориентологом 60 минут. Оставьте контакты — подберём удобное время.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-2">
          <Input placeholder="Ваше имя" className="h-12 rounded-xl" />
          <Input placeholder="Телефон или e-mail" className="h-12 rounded-xl" />
          <Select>
            <SelectTrigger className="h-12 rounded-xl">
              <SelectValue placeholder="Удобное время" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="morning">Утро (9:00–12:00)</SelectItem>
              <SelectItem value="day">День (12:00–17:00)</SelectItem>
              <SelectItem value="evening">Вечер (17:00–21:00)</SelectItem>
            </SelectContent>
          </Select>
          <Textarea placeholder="Коротко о запросе (по желанию)" className="rounded-xl min-h-[90px]" />
        </div>
        <DialogFooter>
          <Button className="w-full h-12 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base font-semibold">
            Отправить заявку
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-secondary selection:text-white">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="container flex items-center justify-between h-[72px]">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 group">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-secondary text-white animate-spin-slow">
              <Icon name="Compass" size={20} />
            </span>
            <span className="font-display font-extrabold text-xl tracking-tight">Путь</span>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="px-4 py-2 rounded-full text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
              >
                {n.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ConsultationDialog
              trigger={
                <Button className="hidden sm:flex rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                  <Icon name="Video" size={16} className="mr-1.5" />
                  Консультация
                </Button>
              }
            />
            <button
              className="lg:hidden grid place-items-center w-10 h-10 rounded-xl bg-muted"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <Icon name={menuOpen ? 'X' : 'Menu'} size={20} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur animate-fade-in">
            <div className="container py-4 flex flex-col gap-1">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className="text-left px-4 py-3 rounded-xl font-medium hover:bg-muted"
                >
                  {n.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative pt-[72px] min-h-screen flex items-center">
        <div className="absolute -top-20 -left-32 w-[480px] h-[480px] bg-secondary/30 blur-3xl rounded-full animate-blob" />
        <div
          className="absolute top-40 -right-40 w-[520px] h-[520px] bg-accent/30 blur-3xl rounded-full animate-blob"
          style={{ animationDelay: '3s' }}
        />
        <div className="grain absolute inset-0 opacity-[0.04] pointer-events-none" />

        <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-16">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-border text-sm font-medium mb-7">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Уже 4 800 человек нашли своё дело
            </span>
            <h1 className="font-display font-black leading-[0.95] text-5xl sm:text-6xl xl:text-7xl tracking-tight">
              Найди дело,
              <br />
              которое <span className="text-gradient">зажигает</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Профориентация для подростков и взрослых. Тесты, статьи и живые встречи с экспертами,
              которые помогут увидеть свой путь.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ConsultationDialog
                trigger={
                  <Button
                    size="lg"
                    className="rounded-full h-14 px-8 text-base font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:scale-105 transition-transform"
                  >
                    <Icon name="Video" size={18} className="mr-2" />
                    Записаться на консультацию
                  </Button>
                }
              />
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo('tests')}
                className="rounded-full h-14 px-8 text-base font-semibold border-2 hover:bg-muted"
              >
                Пройти тест
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white animate-float">
              <img src={HERO_IMG} alt="Поиск призвания" className="w-full h-full object-cover aspect-square" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 border border-border">
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-accent/15 text-accent">
                <Icon name="Award" size={22} />
              </span>
              <div>
                <p className="font-display font-bold text-lg leading-none">12 лет</p>
                <p className="text-xs text-muted-foreground mt-1">в профориентации</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-5 bg-primary text-primary-foreground overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee w-max">
          {[...MARQUEE, ...MARQUEE].map((w, i) => (
            <span key={i} className="font-display font-bold text-2xl mx-8 inline-flex items-center gap-8">
              {w} <Icon name="Sparkle" size={18} className="text-secondary" />
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="py-24 sm:py-32">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-display font-semibold text-secondary uppercase tracking-widest text-sm mb-4">
              О компании
            </p>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl leading-tight">
              Мы верим: у каждого есть призвание
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              «Путь» — команда психологов и карьерных консультантов. Уже 12 лет помогаем людям любого
              возраста услышать себя и выбрать дело по душе. Никаких шаблонов — только вы, ваши
              таланты и честный разговор.
            </p>
            <div className="relative mt-8 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
              <img src={ABOUT_IMG} alt="Команда «Путь»" className="w-full object-cover aspect-[16/10]" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { n: '4 800+', l: 'довольных клиентов' },
              { n: '12 лет', l: 'опыта работы' },
              { n: '40+', l: 'экспертов в команде' },
              { n: '96%', l: 'рекомендуют нас' },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-3xl bg-card border border-border p-7 hover:-translate-y-1 transition-transform shadow-sm"
              >
                <p className="font-display font-black text-4xl text-gradient">{s.n}</p>
                <p className="text-muted-foreground mt-2">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 sm:py-32 bg-muted/40">
        <div className="container">
          <div className="max-w-2xl mb-14">
            <p className="font-display font-semibold text-secondary uppercase tracking-widest text-sm mb-4">
              Услуги
            </p>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl leading-tight">
              С чем мы помогаем
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className="group rounded-3xl bg-card border border-border overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={SERVICE_IMGS[i]}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0" style={{ background: `${s.color}33` }} />
                  <span
                    className="absolute bottom-4 left-4 grid place-items-center w-12 h-12 rounded-2xl text-white shadow-lg"
                    style={{ background: s.color }}
                  >
                    <Icon name={s.icon} size={22} />
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="font-display font-bold text-2xl mb-3">{s.title}</h3>
                  <p className="text-muted-foreground">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTS */}
      <section id="tests" className="py-24 sm:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
            <div className="max-w-2xl">
              <p className="font-display font-semibold text-secondary uppercase tracking-widest text-sm mb-4">
                Тесты
              </p>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl leading-tight">
                Начните с бесплатного теста
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Несколько минут — и вы получите карту своих сильных сторон.
              </p>
            </div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl border-4 border-white animate-float">
              <img src={TESTS_IMG} alt="Профориентационные тесты" className="w-full object-cover aspect-[16/10]" />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTS.map((t, i) => (
              <div
                key={i}
                className={`rounded-3xl p-8 border-2 transition-all hover:-translate-y-2 cursor-pointer ${
                  t.tone === 'secondary'
                    ? 'bg-secondary text-secondary-foreground border-secondary'
                    : t.tone === 'accent'
                    ? 'bg-accent text-accent-foreground border-accent'
                    : 'bg-primary text-primary-foreground border-primary'
                }`}
              >
                <Icon name={t.icon} size={34} className="mb-6" />
                <h3 className="font-display font-bold text-2xl mb-2">{t.title}</h3>
                <p className="opacity-80 mb-7">{t.q}</p>
                <span className="inline-flex items-center gap-2 font-semibold">
                  Пройти <Icon name="ArrowRight" size={18} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section id="articles" className="py-24 sm:py-32 bg-muted/40">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="font-display font-semibold text-secondary uppercase tracking-widest text-sm mb-4">
                Статьи
              </p>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl leading-tight">
                Полезное чтение
              </h2>
            </div>
            <Button variant="outline" className="rounded-full border-2 h-12 px-6 font-semibold">
              Все статьи <Icon name="ArrowRight" size={16} className="ml-1.5" />
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ARTICLES.map((a, i) => (
              <article
                key={i}
                className="group rounded-3xl bg-card border border-border p-8 hover:shadow-xl transition-shadow cursor-pointer flex flex-col"
              >
                <span className="self-start px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-semibold mb-6">
                  {a.tag}
                </span>
                <h3 className="font-display font-bold text-2xl leading-snug mb-6 group-hover:text-secondary transition-colors">
                  {a.title}
                </h3>
                <div className="mt-auto flex items-center gap-2 text-muted-foreground text-sm">
                  <Icon name="Clock" size={15} /> {a.read}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 sm:py-32">
        <div className="container">
          <div className="max-w-2xl mb-14">
            <p className="font-display font-semibold text-secondary uppercase tracking-widest text-sm mb-4">
              Отзывы
            </p>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl leading-tight">
              Истории наших клиентов
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="rounded-3xl bg-card border border-border p-8 shadow-sm">
                <div className="flex gap-1 text-secondary mb-5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Icon key={j} name="Star" size={18} className="fill-current" />
                  ))}
                </div>
                <p className="text-lg leading-relaxed mb-7">«{r.text}»</p>
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center w-11 h-11 rounded-full bg-primary text-primary-foreground font-display font-bold">
                    {r.name[0]}
                  </span>
                  <div>
                    <p className="font-semibold leading-none">{r.name}</p>
                    <p className="text-sm text-muted-foreground mt-1">{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA CONSULTATION */}
      <section className="py-12">
        <div className="container">
          <div className="relative rounded-[2.5rem] bg-primary text-primary-foreground overflow-hidden px-8 sm:px-16 py-16 sm:py-20">
            <div className="absolute -right-16 -top-16 w-72 h-72 bg-secondary/40 blur-3xl rounded-full" />
            <div className="absolute -left-10 bottom-0 w-64 h-64 bg-accent/30 blur-3xl rounded-full" />
            <div className="relative max-w-2xl">
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl leading-tight">
                Готовы найти свой путь?
              </h2>
              <p className="mt-5 text-lg opacity-85">
                Запишитесь на онлайн-консультацию с профориентологом. Первая встреча — знакомство и
                разбор вашего запроса.
              </p>
              <ConsultationDialog
                trigger={
                  <Button
                    size="lg"
                    className="mt-9 rounded-full h-14 px-8 text-base font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:scale-105 transition-transform"
                  >
                    <Icon name="Video" size={18} className="mr-2" />
                    Записаться онлайн
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS / FOOTER */}
      <footer id="contacts" className="pt-24 pb-12 bg-foreground text-background mt-12">
        <div className="container">
          <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-12 pb-14">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="grid place-items-center w-9 h-9 rounded-xl bg-secondary text-white">
                  <Icon name="Compass" size={20} />
                </span>
                <span className="font-display font-extrabold text-xl">Путь</span>
              </div>
              <p className="text-background/60 max-w-sm">
                Помогаем людям любого возраста найти призвание и выстроить карьеру мечты.
              </p>
            </div>
            <div>
              <p className="font-display font-bold mb-5">Разделы</p>
              <ul className="space-y-3 text-background/60">
                {NAV.map((n) => (
                  <li key={n.id}>
                    <button onClick={() => scrollTo(n.id)} className="hover:text-background transition-colors">
                      {n.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-display font-bold mb-5">Контакты</p>
              <ul className="space-y-3 text-background/60">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} /> +7 (900) 000-00-00
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} /> hello@put-career.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} /> Москва · онлайн по всей России
                </li>
              </ul>
              <div className="flex gap-3 mt-6">
                {['Send', 'Instagram', 'Youtube'].map((ic) => (
                  <span
                    key={ic}
                    className="grid place-items-center w-10 h-10 rounded-xl bg-background/10 hover:bg-secondary transition-colors cursor-pointer"
                  >
                    <Icon name={ic} size={18} />
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-background/15 pt-7 flex flex-wrap justify-between gap-4 text-sm text-background/50">
            <p>© 2026 «Путь». Все права защищены.</p>
            <p>Профориентация · Карьера · Призвание</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;