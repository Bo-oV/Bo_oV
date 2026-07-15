import { useEffect, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Camera,
  CalendarDays,
  Code2,
  Heart,
  Menu,
  PanelsTopLeft,
  Play,
  Search,
  ShieldCheck,
  Sparkles,
  Tags,
  TrendingUp,
  UsersRound,
  WandSparkles,
  X,
} from "lucide-react";
import phones from "./assets/sviato-phones.png";

const links = [["Про нас", "about"], ["Sviato", "sviato"], ["Як працюємо", "process"], ["Зв’язатися", "contact"]];
const values = [[UsersRound, "Люди перш за все", "Ми слухаємо, досліджуємо і створюємо з емпатією."], [Sparkles, "Чистий і продуманий досвід", "Інтерфейси, які допомагають з першого дотику."], [ShieldCheck, "Результат і відповідальність", "Доводимо ідеї до запуску та вимірюваного ефекту."]];
const features = [[CalendarDays, "Події та важливі дати", "Створюйте власні події та додавайте події друзів до календаря."], [Heart, "Wishlist і бронювання", "Зберігайте подарунки й посилання, діліться списком та уникайте однакових подарунків."], [WandSparkles, "AI-підбір подарунків", "Отримуйте ідеї з урахуванням віку, інтересів і стилю людини."], [Tags, "Українські бренди", "Знаходьте цікаві товари локальних брендів, майстрів і крафтярів."]];
const steps = [[Search, "01", "Досліджуємо", "Розуміємо проблему та перевіряємо гіпотезу."], [PanelsTopLeft, "02", "Проєктуємо", "Будуємо зрозумілий сценарій і візуальну систему."], [Code2, "03", "Розробляємо", "Перетворюємо дизайн на стабільний адаптивний продукт."], [TrendingUp, "04", "Розвиваємо", "Аналізуємо використання й покращуємо найважливіше."]];
function Logo() { return <a className="logo" href="#top" aria-label="Bo oV — на головну">Bo_<i>oV</i></a>; }
function Button({ children, href, secondary = false }) { return <a className={`button ${secondary ? "secondary" : ""}`} href={href}>{children}</a>; }

export function App() {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const revealNodes = document.querySelectorAll(".reveal");
    document.documentElement.classList.add("js");
    if (!("IntersectionObserver" in window)) {
      revealNodes.forEach((node) => node.classList.add("shown"));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("shown")), { threshold: .12 });
    revealNodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  useEffect(() => { document.body.style.overflow = menu ? "hidden" : ""; }, [menu]);
  return <div id="top" className="site-shell">
    <header className="header"><Logo /><nav className="nav" aria-label="Головна навігація">{links.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}</nav><button className="menu-button" aria-label={menu ? "Закрити меню" : "Відкрити меню"} aria-expanded={menu} aria-controls="mobile-menu" onClick={() => setMenu(!menu)}>{menu ? <X size={24}/> : <Menu size={24}/>}</button></header>
    {menu && <nav id="mobile-menu" className="mobile-menu" aria-label="Мобільна навігація">{links.map(([label, id], index) => <a onClick={() => setMenu(false)} href={`#${id}`} key={id}><span>0{index + 1}</span>{label}<ArrowRight size={20}/></a>)}<p>Українська продуктова студія</p></nav>}
    <main>
      <section className="hero" aria-labelledby="hero-title"><div className="hero-copy reveal shown"><p className="eyebrow">Українська продуктова студія</p><h1 id="hero-title">Створюємо цифрові продукти, якими хочеться користуватися.</h1><p className="lead">Bo_oV перетворює корисні ідеї на прості, продумані та живі цифрові продукти. Від першої гіпотези — до запуску й розвитку.</p><div className="actions"><Button href="#sviato">Дивитися Sviato</Button><Button href="#about" secondary>Про Bo_oV</Button></div><a className="scroll-note" href="#manifesto"><span/>Прокрутіть, щоб дізнатися більше</a></div><div className="hero-visual reveal shown"><img src={phones} alt="Екрани мобільного застосунку Sviato"/></div><div className="hero-orbit" aria-hidden="true"><b/></div></section>
      <section id="manifesto" className="manifesto reveal"><div><p className="eyebrow">Наш підхід</p><h2>Технології мають спрощувати важливе.</h2><p>Ми будуємо продукти навколо реальних людських потреб: прибираємо зайві кроки, наводимо порядок у складному й залишаємо місце для емоцій.</p></div><div className="value-grid">{values.map(([Icon, title, text]) => <article key={title}><Icon size={24} strokeWidth={1.75} absoluteStrokeWidth aria-hidden="true"/><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section id="sviato" className="sviato reveal"><div className="section-intro"><p className="eyebrow">Продукт 01</p><h2>Sviato — подарунки без стресу, важливі моменти без хаосу.</h2><p>Український застосунок для подій, wishlist і продуманого вибору подарунків. Усе важливе — від ідеї до бронювання — зібране в одному місці.</p><div className="case-links"><a className="text-link" href="https://play.google.com/store/apps/details?id=com.sviato.app" target="_blank" rel="noopener noreferrer">Відкрити в Google Play <ArrowRight size={16}/></a><a className="text-link muted-link" href="https://www.instagram.com/sviato_app/" target="_blank" rel="noopener noreferrer">Дивитися Instagram <Camera size={16}/></a></div></div><div className="feature-grid">{features.map(([Icon, title, text]) => <article key={title}><Icon size={25} strokeWidth={1.75} absoluteStrokeWidth aria-hidden="true"/><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section id="process" className="process reveal"><p className="eyebrow">Як ми працюємо</p><h2>Від корисної ідеї — до продукту в руках користувача.</h2><div className="steps">{steps.map(([Icon, number, title, text]) => <article key={number}><div className="step-top"><Icon size={22} strokeWidth={1.75} absoluteStrokeWidth aria-hidden="true"/><span>{number}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section id="about" className="about reveal"><div><p className="eyebrow">Про Bo_oV</p><h2>Невелика команда. Велика увага до деталей.</h2><p>Bo_oV — українська продуктова студія. Ми створюємо власні цифрові продукти, поєднуючи продуктове мислення, дизайн і розробку.</p></div><div className="founder"><p className="eyebrow">Засновник</p><h3>Павло Махновець</h3><a className="text-link" href="https://www.linkedin.com/in/pavlo-makhnovets-2867a1118" target="_blank" rel="noopener noreferrer">LinkedIn <BriefcaseBusiness size={17}/></a></div></section>
      <section id="contact" className="contact reveal"><div><p className="eyebrow">Почнімо розмову</p><h2>Є ідея, партнерство або просто хочете познайомитися?</h2><p>Напишіть нам — будемо раді обговорити продукт, співпрацю або розвиток Sviato.</p></div><Button href="mailto:giftapp.sviato@gmail.com">Написати Bo_oV <ArrowRight size={18}/></Button></section>
    </main>
    <footer><Logo/><p>Цифрові продукти з України</p><div className="footer-links"><a href="https://play.google.com/store/apps/details?id=com.sviato.app" aria-label="Google Play"><Play size={20}/></a><a href="https://www.instagram.com/sviato_app/" aria-label="Instagram"><Camera size={20}/></a><a href="https://www.linkedin.com/in/pavlo-makhnovets-2867a1118" aria-label="LinkedIn"><BriefcaseBusiness size={20}/></a></div><small>© 2026 Bo_oV. Усі права захищено.</small></footer>
  </div>;
}
