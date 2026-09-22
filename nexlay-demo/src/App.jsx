import React, { useState, useMemo } from "react";
import {
  ArrowUpRight, ArrowLeft, MapPin, MessageCircle, Search, Home, LayoutGrid, Info,
  ArrowUpDown, X, Check, Plus, Clock, ShieldCheck, Utensils, Camera, Music2, Palette,
  Sparkles, Inbox, Instagram, Facebook, PlayCircle, Mail, Phone, Compass,
  MessagesSquare, Star, Smartphone, Wallet, ChevronDown, Heart, BookOpen, CakeSlice, Flower2, Video, Gem, Building2, Martini, ChefHat,
} from "lucide-react";

const c = {
  bg: "#FFFFFF", card: "#FFFFFF", cardAlt: "#F4F8FF",
  brand: "#1769E0", green: "#1769E0", greenDark: "#0D3B8E", greenSoft: "rgba(23,105,224,0.09)", greenBorder: "rgba(23,105,224,0.28)",
  text: "#101827", textSoft: "rgba(16,24,39,0.64)", textFaint: "rgba(16,24,39,0.46)",
  border: "rgba(16,24,39,0.14)", gold: "#FFB800", pink: "#F33DB7", sky: "#9BD9FF", orange: "#FF7518", cream: "#FFFFFF",
};

const styleTags = ["Moderne", "Classique", "Rustique", "Minimaliste", "Festif", "Élégant", "Chic", "Convivial"];

const categories = [
  { id: "traiteurs", name: "Traiteurs", icon: Utensils, cover: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=85", tone: "#FFC21A", desc: "Buffets, cocktails et repas assis pour tous vos événements." },
  { id: "photographes", name: "Photographes", icon: Camera, cover: "https://images.unsplash.com/photo-1554044559-3d8e7d6b3c4f?auto=format&fit=crop&w=900&q=85", tone: "#A9D7F8", desc: "Reportages et séances photo pour immortaliser chaque instant." },
  { id: "dj", name: "DJ & Musique", icon: Music2, cover: "https://images.unsplash.com/photo-1571266028243-d220c9c3b0b1?auto=format&fit=crop&w=900&q=85", tone: "#FF7414", desc: "Ambiance sonore et animation pour faire vivre votre soirée." },
  { id: "decoration", name: "Décoration", icon: Palette, cover: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=85", tone: "#244E3D", desc: "Mise en scène florale et scénographie pour sublimer vos lieux." },
  { id: "planners", name: "Wedding Planners", icon: Sparkles, cover: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85", tone: "#F2A7D5", desc: "Organisation et coordination complète de votre événement." },
  { id: "patisserie", name: "Pâtisserie", icon: CakeSlice, cover: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85", tone: "#F6C7B8", desc: "Gâteaux, pièces montées et créations sucrées pour vos célébrations." },
  { id: "fleurs", name: "Fleurs", icon: Flower2, cover: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85", tone: "#B9DCCB", desc: "Bouquets, compositions et décors floraux pour chaque occasion." },
  { id: "video", name: "Vidéo", icon: Video, cover: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=900&q=85", tone: "#B9DDF2", desc: "Films et souvenirs en mouvement pour revivre vos moments forts." },
  { id: "bijoux-beaute", name: "Bijoux & beauté", icon: Gem, cover: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=85", tone: "#E8C4D6", desc: "Bijoux, mise en beauté et détails précieux pour vous accompagner." },
  { id: "lieux", name: "Lieux de réception", icon: Building2, cover: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=900&q=85", tone: "#D8C9B7", desc: "Des lieux singuliers pour accueillir et donner le ton à votre événement." },
  { id: "service-traiteur", name: "Service traiteur", icon: Utensils, cover: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=85", tone: "#F4D58D", desc: "Une cuisine soignée et un service attentif pour recevoir vos invités." },
  { id: "honneur", name: "Fille & garçon d’honneur", icon: Heart, cover: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85", tone: "#EBC4D7", desc: "Des accompagnants élégants pour entourer les mariés et rythmer la cérémonie." },
  { id: "barman", name: "Barman", icon: Martini, cover: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85", tone: "#B9DDF2", desc: "Cocktails, boissons et animation du bar pour faire vivre votre réception." },
  { id: "cuisinier", name: "Cuisinier", icon: ChefHat, cover: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=85", tone: "#F2B59E", desc: "Un cuisinier à votre service pour composer des menus qui vous ressemblent." },
];
const providerServices = [
  { name: "Traiteurs", icon: Utensils, cover: categories[0].cover },
  { name: "Photographes", icon: Camera, cover: categories[1].cover },
  { name: "DJ & Musique", icon: Music2, cover: categories[2].cover },
  { name: "Décoration", icon: Palette, cover: categories[3].cover },
  { name: "Pâtisserie", icon: CakeSlice, cover: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=85" },
  { name: "Fleurs", icon: Flower2, cover: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=85" },
  { name: "Vidéo", icon: Video, cover: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=600&q=85" },
  { name: "Bijoux & beauté", icon: Gem, cover: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=85" },
  { name: "Lieux de réception", icon: Building2, cover: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=600&q=85" },
  { name: "Service traiteur", icon: Utensils, cover: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=85" },
  { name: "Fille & garçon d’honneur", icon: Heart, cover: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=85" },
  { name: "Barman", icon: Martini, cover: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=85" },
  { name: "Cuisinier", icon: ChefHat, cover: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=85" },
];
const zonesDisponibles = ["Sur place", "À distance", "Déplacement possible"];
const providersByCategory = {}; // aucun prestataire factice — catalogue vide tant qu'aucun profil réel n'est publié

const initials = (name) => (name || "").split(" ").map((w) => w[0]).slice(0, 2).join("");
const isValidPhone = (v) => /^\+?[1-9]\d{7,14}$/.test((v || "").replace(/[\s()-]/g, ""));
const isValidEmail = (v) => !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
const errorCls = "font-body text-xs mt-1.5";
const categoryIdFromName = (name) => categories.find((c) => c.name === name)?.id;
const fmt = (n) => (n ? Number(n).toLocaleString("fr-FR") : "");
const providerPrice = (p) => {
  if (p.pricingType === "devis") return "Sur devis";
  if (p.pricingType === "fixe") return `${fmt(p.montant)} FCFA`;
  if (p.pricingType === "partir") return `Dès ${fmt(p.montant)} FCFA`;
  if (p.pricingType === "formules" && p.formules?.length) {
    const min = Math.min(...p.formules.map((f) => Number(f.prix) || Infinity));
    return `Dès ${fmt(min)} FCFA`;
  }
  return "Tarif à définir";
};

const Sprig = ({ size = 16, color = c.brand }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 22V6" stroke={color} strokeWidth="1" strokeLinecap="round" />
    <path d="M12 10c0-3 2.5-5 6-5-1 3-3 5-6 5Z" stroke={color} strokeWidth="1" fill={color} fillOpacity="0.15" strokeLinejoin="round" />
    <path d="M12 15c0-3-2.5-5-6-5 1 3 3 5 6 5Z" stroke={color} strokeWidth="1" fill={color} fillOpacity="0.15" strokeLinejoin="round" />
  </svg>
);
const Eyebrow = ({ children }) => <p className="font-body text-xs tracked uppercase mb-2" style={{ color: c.green, opacity: 0.85 }}>{children}</p>;
const NexlayLogo = ({ size = "text-xl" }) => (
  <div className="inline-flex items-center gap-2.5 px-3.5 py-2" aria-label="Nexlay" style={{ backgroundColor: "#FFFFFF", border: `1.5px solid ${c.brand}`, boxShadow: "0 4px 14px rgba(23,105,224,0.10)" }}>
    <span className="flex h-5 w-5 items-center justify-center" style={{ border: `1px solid ${c.brand}` }}><Sprig size={14} color={c.brand} /></span>
    <span className="h-5 w-px" style={{ backgroundColor: c.brand, opacity: 0.55 }} />
    <span className={`font-display font-semibold ${size}`} style={{ color: c.brand, letterSpacing: "0.01em" }}>Nexlay</span>
  </div>
);

const inputStyle = { backgroundColor: c.card, border: `1px solid ${c.border}`, color: c.text };
const fieldCls = "w-full rounded-xl px-4 py-3.5 font-body text-sm outline-none";
const labelCls = "font-body text-xs tracked uppercase mb-2 block";
function Field({ children, ...rest }) { return <label className={labelCls} style={{ color: c.textFaint }} {...rest}>{children}</label>; }
function Input(props) { return <input {...props} className={`${fieldCls} ${props.className || ""}`} style={{ ...inputStyle, ...(props.style || {}) }} />; }
function TextArea(props) { return <textarea {...props} className={`${fieldCls} resize-none ${props.className || ""}`} style={{ ...inputStyle, ...(props.style || {}) }} />; }
function Card({ children, className = "", style = {} }) { return <div className={`rounded-2xl ${className}`} style={{ backgroundColor: c.card, border: `1px solid ${c.border}`, ...style }}>{children}</div>; }

const EmptyState = ({ onCta }) => (
  <div className="empty-state flex flex-col items-center text-center py-16 px-6 rounded-2xl" style={{ border: `1px dashed ${c.border}`, backgroundColor: c.card }}>
  <div className="empty-state-icon w-14 h-14 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: c.greenSoft }}><Inbox size={20} style={{ color: c.green }} /></div>
  <p className="font-display text-xl mb-2" style={{ color: c.text }}>Les premiers profils arrivent bientôt</p>
  <p className="font-body text-sm font-light leading-relaxed max-w-sm mb-6" style={{ color: c.textSoft }}>Cette catégorie ouvrira dès que des professionnels auront partagé leur univers et leurs services.</p>
  {onCta && <button onClick={onCta} className="font-body text-xs tracked uppercase pb-1" style={{ color: c.pink, borderBottom: `1px solid ${c.pink}` }}>Proposer mes services</button>}
  </div>
);

const PrestaFooter = () => (
  <footer className="presta-footer mt-14 pt-6" style={{ borderTop: `1px solid ${c.border}` }}>
    <NexlayLogo size="text-lg" />
    <p className="font-body text-xs leading-relaxed max-w-sm mb-4" style={{ color: c.textFaint }}>Une vitrine pour votre savoir-faire, une rencontre pour chaque événement.</p>
    <div className="flex flex-wrap gap-x-5 gap-y-2 font-body text-xs" style={{ color: c.textSoft }}><span>Votre activité</span><span>Vos réalisations</span><span>Votre univers</span></div>
    <p className="font-body text-xs mt-6" style={{ color: c.textFaint }}>© Nexlay</p>
  </footer>
);

function TopBar({ onLogo, onCta, onFavorites, favoritesCount = 0 }) {
  return (
    <div className="wide-content flex flex-wrap items-center justify-between gap-3 px-6 pt-6 pb-2 md:px-10 md:pt-8">
      <button onClick={onLogo} className="text-left">
        <NexlayLogo />
        <p className="font-body text-xs tracked mt-1" style={{ color: c.textFaint }}>RÉPERTOIRE ÉVÉNEMENTIEL</p>
      </button>
      <div className="flex items-center gap-2 ml-auto">
        {onFavorites && (
          <button onClick={onFavorites} className="relative w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: c.card, border: `1px solid ${c.border}` }}>
            <Heart size={15} style={{ color: c.green }} fill={favoritesCount > 0 ? c.green : "none"} />
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center font-body" style={{ backgroundColor: c.green, color: c.cream, fontSize: 9 }}>{favoritesCount}</span>
            )}
          </button>
        )}
        {onCta && <button onClick={onCta} className="font-body text-xs tracked uppercase rounded-full px-4 py-2.5" style={{ color: c.green, border: `1px solid ${c.greenBorder}` }}>Devenir prestataire</button>}
      </div>
    </div>
  );
}

function Landing({ onSelect }) {
  return (
    <div className="min-h-screen px-5 py-5 md:px-10 md:py-8 relative overflow-hidden display-grid" style={{ backgroundColor: c.bg }}>
      <header className="wide-content flex items-center justify-between mb-12 md:mb-16">
        <NexlayLogo />
        <div className="hidden items-center gap-3 md:flex"><span className="h-px w-10" style={{ backgroundColor: c.brand, opacity: 0.45 }} /><span className="font-body text-xs tracked uppercase" style={{ color: c.textFaint }}>Inspiration · Organisation · Talents</span></div>
      </header>

      <main className="wide-content grid gap-12 md:grid-cols-[0.92fr_1.08fr] md:items-center md:gap-20">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-5"><span className="h-2 w-2 rounded-full" style={{ backgroundColor: c.brand }} /><Eyebrow>Le répertoire événementiel</Eyebrow></div>
          <h1 className="font-display font-semibold text-5xl leading-[0.94] mb-6 md:text-7xl" style={{ color: c.text }}>Les bons talents,<br /><span style={{ color: c.brand }}>au bon moment.</span></h1>
          <p className="font-body text-base leading-relaxed max-w-md font-light mb-8" style={{ color: c.textSoft }}>Nexlay réunit les professionnels qui donnent une âme à vos moments importants, pour vous aider à créer un événement qui vous ressemble.</p>
          <div className="flex items-center gap-3 mb-8"><span className="h-px w-8 shrink-0" style={{ backgroundColor: c.brand }} /><p className="font-display text-base leading-tight" style={{ color: c.text }}>Une rencontre qui fait la différence.</p></div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 mb-9 font-body text-xs" style={{ color: c.textSoft }}>
            {[{ icon: ShieldCheck, label: "Profils contrôlés" }, { icon: MessageCircle, label: "Contact direct" }, { icon: MapPin, label: "Près de chez vous" }].map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-2"><Icon size={14} style={{ color: c.brand }} />{label}</span>
            ))}
          </div>
          <p className="font-body text-xs tracked uppercase mb-3" style={{ color: c.textFaint }}>Votre point de départ</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <button onClick={() => onSelect("client")} className="group text-left p-5 transition-transform hover:-translate-y-1" style={{ backgroundColor: c.brand, color: c.cream, boxShadow: "0 12px 24px rgba(23,105,224,0.18)" }}>
              <div className="flex items-center justify-between mb-8"><span className="font-display text-xl">Je cherche</span><ArrowUpRight size={18} /></div>
              <span className="font-body text-xs font-light" style={{ opacity: 0.82 }}>Trouver le professionnel idéal</span>
            </button>
            <button onClick={() => onSelect("prestataire")} className="group text-left p-5 transition-transform hover:-translate-y-1" style={{ backgroundColor: c.card, border: `1px solid ${c.border}` }}>
              <div className="flex items-center justify-between mb-8"><span className="font-display text-xl" style={{ color: c.text }}>Je propose</span><ArrowUpRight size={18} style={{ color: c.brand }} /></div>
              <span className="font-body text-xs font-light" style={{ color: c.textSoft }}>Présenter mon savoir-faire</span>
            </button>
          </div>
        </div>

        <div className="relative md:pr-6">
          <div className="absolute -right-2 -top-5 hidden h-24 w-24 md:block" style={{ borderTop: `1px solid ${c.brand}`, borderRight: `1px solid ${c.brand}`, opacity: 0.45 }} />
          <div className="relative overflow-hidden" style={{ height: "min(570px, 64vh)", minHeight: 390, backgroundColor: c.brand, border: `10px solid ${c.card}`, boxShadow: "0 22px 50px rgba(16,24,39,0.14)" }}>
            <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1100&q=85" alt="Décoration élégante pour un événement" className="h-full w-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(16,24,39,0.02) 45%, rgba(16,24,39,0.58) 100%)" }} />
            <div className="absolute bottom-6 left-6 right-6"><p className="font-body text-xs tracked uppercase mb-2" style={{ color: "rgba(255,255,255,0.78)" }}>Nexlay</p><p className="font-display text-2xl leading-tight" style={{ color: c.cream }}>Chaque événement mérite les bonnes personnes.</p></div>
          </div>
        </div>
      </main>

      <footer className="wide-content flex flex-wrap justify-between gap-3 mt-16 md:mt-24 font-body text-xs" style={{ color: c.textFaint }}><span>Nexlay — les bons talents, au bon moment.</span><span>Une plateforme pensée pour les moments qui comptent</span></footer>
    </div>
  );
}

function PrestaAuth({ onCreated, onLogin, onBack, hasExistingProfile }) {
  const [mode, setMode] = useState("signup"); // signup | login
  const [phone, setPhone] = useState(""); const [password, setPassword] = useState("");
  const [touched, setTouched] = useState(false);
  const phoneValid = isValidPhone(phone);
  const canSubmit = phoneValid && password.length > 0;

  const handleSubmit = () => {
    setTouched(true);
    if (!canSubmit) return;
    if (mode === "login" && hasExistingProfile) onLogin();
    else onCreated();
  };

  return (
    <div className="provider-auth-page form-page min-h-screen px-6 pt-7 pb-10 md:px-8 md:py-8" style={{ backgroundColor: c.bg }}>
      <button onClick={onBack} className="auth-back flex items-center gap-2 mb-8 font-body text-xs tracked uppercase" style={{ color: c.textFaint }}><ArrowLeft size={13} /> Retour à l’accueil</button>
      <div className="provider-auth-layout">
        <aside className="provider-auth-visual rounded-2xl overflow-hidden" style={{ backgroundColor: c.green }}>
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1100&q=85" alt="Cérémonie élégante" />
          <div className="provider-auth-overlay" />
          <div className="provider-auth-copy"><div className="mb-10"><NexlayLogo size="text-xl" /></div><span className="auth-visual-kicker font-body text-xs tracked uppercase">Espace prestataire</span><h1 className="font-display text-4xl leading-tight mt-3 mb-4" style={{ color: c.cream }}>Votre univers<br /><span style={{ color: c.gold }}>mérite une scène.</span></h1><p className="font-body text-sm font-light leading-relaxed max-w-sm" style={{ color: "rgba(255,249,242,0.76)" }}>Une présence élégante pour présenter votre travail, vos réalisations et les détails qui rendent votre signature unique.</p><div className="flex flex-wrap gap-2 mt-8"><span className="auth-visual-pill">Portfolio</span><span className="auth-visual-pill">Votre histoire</span><span className="auth-visual-pill">Contact direct</span></div></div>
        </aside>

        <main className="provider-auth-form">
          <div className="flex items-end justify-between gap-4 mb-6 md:hidden"><div><Eyebrow>Espace prestataire</Eyebrow><h1 className="font-display text-3xl leading-tight" style={{ color: c.text }}>Votre univers mérite<br />d’être découvert.</h1></div><span className="auth-mark" style={{ color: c.pink }}>✦</span></div>
          <div className="provider-auth-form-header hidden md:block"><Eyebrow>Rejoindre Nexlay</Eyebrow><h2 className="font-display text-4xl leading-tight mb-3" style={{ color: c.text }}>Donnez une nouvelle<br /><span style={{ color: c.pink }}>dimension à votre activité.</span></h2><p className="font-body text-sm font-light leading-relaxed mb-8" style={{ color: c.textSoft }}>Créez votre espace professionnel en quelques étapes et préparez votre future vitrine.</p></div>
          <div className="auth-tabs flex gap-1 p-1 mb-7 rounded-xl" style={{ backgroundColor: c.cardAlt }}>
        <button onClick={() => setMode("signup")} className="flex-1 font-body text-xs px-3 py-2.5 rounded-lg" style={mode === "signup" ? { backgroundColor: c.card, color: c.text, boxShadow: "0 3px 10px rgba(17,17,15,0.08)" } : { color: c.textSoft }}>Créer un compte</button>
        <button onClick={() => setMode("login")} className="flex-1 font-body text-xs px-3 py-2.5 rounded-lg" style={mode === "login" ? { backgroundColor: c.card, color: c.text, boxShadow: "0 3px 10px rgba(17,17,15,0.08)" } : { color: c.textSoft }}>J'ai déjà un compte</button>
      </div>

      <p className="font-body text-sm font-light mb-7" style={{ color: c.textSoft }}>
        {mode === "signup" ? "Commencez par vos coordonnées. Vous pourrez ensuite raconter votre histoire et montrer vos réalisations." : "Retrouvez votre espace et continuez à faire vivre votre profil."}
      </p>

      <div className="auth-fields flex flex-col gap-4 mb-3">
        <div>
          <Field>Numéro de téléphone WhatsApp</Field>
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+33 6 00 00 00 00" />
          {touched && !phoneValid && <p className={errorCls} style={{ color: "#B54646" }}>Indiquez un numéro international valide.</p>}
        </div>
        <div><Field>Mot de passe</Field><Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" /></div>
      </div>
      <div className="auth-note flex items-start gap-2.5 mb-7 rounded-xl px-3 py-3" style={{ backgroundColor: c.cardAlt }}><ShieldCheck size={14} style={{ color: c.green, flexShrink: 0, marginTop: 2 }} /><p className="font-body text-xs font-light leading-relaxed" style={{ color: c.textFaint }}>Votre mot de passe sera protégé lors de la connexion de la plateforme.</p></div>

      <button onClick={handleSubmit} className="auth-submit w-full flex items-center justify-center gap-2 font-body text-xs tracked uppercase py-4 rounded-xl" style={{ backgroundColor: canSubmit ? c.pink : "#B3ADA8", color: c.cream }}>
        {mode === "signup" ? "Créer mon compte" : "Me connecter"}<ArrowUpRight size={14} />
      </button>

      {mode === "login" && !hasExistingProfile && (
        <p className="font-body text-xs font-light mt-4 text-center" style={{ color: c.textFaint }}>Ce compte sera vérifié avec vos identifiants dès que la plateforme sera connectée.</p>
      )}
          <PrestaFooter />
        </main>
      </div>
    </div>
  );
}
 
function PrestaForm({ formData, setFormData, onSubmit, onBack }) {
  const [step, setStep] = useState(1); const total = 6;
  const update = (patch) => setFormData((f) => ({ ...f, ...patch }));
  const toggleZone = (z) => update({ zones: formData.zones.includes(z) ? formData.zones.filter((x) => x !== z) : [...formData.zones, z] });
  const toggleTag = (t) => update({ tags: formData.tags.includes(t) ? formData.tags.filter((x) => x !== t) : [...formData.tags, t] });
  const onPhotos = (e) => {
    const files = Array.from(e.target.files || []);
    const previews = files.map((f) => ({ url: URL.createObjectURL(f), name: f.name, type: f.type.startsWith("video") ? "video" : "image" }));
    update({ photos: [...formData.photos, ...previews] });
  };
  const removePhoto = (i) => update({ photos: formData.photos.filter((_, idx) => idx !== i) });
  const [touched1, setTouched1] = useState(false);
  const [formuleNom, setFormuleNom] = useState(""); const [formulePrix, setFormulePrix] = useState("");
  const addFormule = () => { if (!formuleNom || !formulePrix) return; update({ formules: [...formData.formules, { nom: formuleNom, prix: formulePrix }] }); setFormuleNom(""); setFormulePrix(""); };
  const removeFormule = (i) => update({ formules: formData.formules.filter((_, idx) => idx !== i) });

  const canNext = () => {
    if (step === 1) return formData.nom.trim().length >= 3 && isValidPhone(formData.telephone) && isValidEmail(formData.email);
    if (step === 2) return formData.specialite && formData.zones.length > 0;
    if (step === 3) return formData.description.trim().length > 0;
    if (step === 4) { if (!formData.pricingType) return false; if (formData.pricingType === "formules") return formData.formules.length > 0; if (formData.pricingType === "devis") return true; return !!formData.montant; }
    return true;
  };
  const pillCls = (active) => "font-body text-xs px-4 py-2.5 rounded-full";
  const pillStyle = (active) => active ? { backgroundColor: c.green, color: c.cream, border: `1px solid ${c.green}` } : { backgroundColor: c.card, color: c.textSoft, border: `1px solid ${c.border}` };

  return (
    <div className="form-page min-h-screen px-6 pt-10 pb-24" style={{ backgroundColor: c.bg }}>
      <button onClick={onBack} className="flex items-center gap-2 mb-8 font-body text-xs tracked uppercase" style={{ color: c.textFaint }}><ArrowLeft size={13} /> Quitter</button>
      <div className="flex items-center gap-1.5 mb-8">
        {Array.from({ length: total }).map((_, i) => <div key={i} className="h-1 flex-1 rounded-full" style={{ backgroundColor: i < step ? c.green : c.border }} />)}
      </div>
      <p className="font-body text-xs tracked uppercase mb-1" style={{ color: c.green }}>Étape {step} / {total}</p>

      {step === 1 && (
        <>
          <h2 className="font-display font-semibold text-2xl leading-none mb-7" style={{ color: c.text }}>Votre identité</h2>
          <div className="flex flex-col gap-4">
            <div>
              <Field>Nom ou nom commercial</Field>
              <Input value={formData.nom} onChange={(e) => update({ nom: e.target.value })} onBlur={() => setTouched1(true)} placeholder="Ex. Atelier Lumière" />
              {touched1 && formData.nom.trim().length > 0 && formData.nom.trim().length < 3 && <p className={errorCls} style={{ color: "#B54646" }}>Le nom doit contenir au moins 3 caractères.</p>}
            </div>
            <div><Field>Nom du responsable (optionnel)</Field><Input value={formData.responsable} onChange={(e) => update({ responsable: e.target.value })} placeholder="Ex. Jean K." /></div>
            <div>
              <Field>Téléphone WhatsApp</Field>
              <Input value={formData.telephone} onChange={(e) => update({ telephone: e.target.value })} onBlur={() => setTouched1(true)} placeholder="+33 6 00 00 00 00" />
              {touched1 && formData.telephone && !isValidPhone(formData.telephone) && <p className={errorCls} style={{ color: "#B54646" }}>Indiquez un numéro international valide.</p>}
            </div>
            <div>
              <Field>Email (optionnel)</Field>
              <Input value={formData.email} onChange={(e) => update({ email: e.target.value })} onBlur={() => setTouched1(true)} placeholder="contact@monactivite.com" />
              {touched1 && formData.email && !isValidEmail(formData.email) && <p className={errorCls} style={{ color: "#B54646" }}>Adresse email invalide.</p>}
              <p className="font-body text-xs font-light mt-1.5" style={{ color: c.textFaint }}>Le format est vérifié ici ; la confirmation réelle de l'adresse se fera par email lors de la mise en place du backend.</p>
            </div>
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <h2 className="font-display font-semibold text-2xl leading-none mb-7" style={{ color: c.text }}>Votre activité</h2>
          <Field>Spécialité</Field>
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((cat) => <button key={cat.id} onClick={() => update({ specialite: cat.name })} className={pillCls()} style={pillStyle(formData.specialite === cat.name)}>{cat.name}</button>)}
          </div>
          <Field>Zones d'intervention</Field>
          <div className="flex flex-wrap gap-2 mb-6">
            {zonesDisponibles.map((z) => <button key={z} onClick={() => toggleZone(z)} className={`flex items-center gap-1.5 ${pillCls()}`} style={pillStyle(formData.zones.includes(z))}>{formData.zones.includes(z) && <Check size={11} />}{z}</button>)}
          </div>
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div><Field>Lieu de travail (optionnel)</Field><Input value={formData.adresse} onChange={(e) => update({ adresse: e.target.value })} placeholder="Ex. Fidjrossè" /></div>
            <div><Field>Années d'expérience</Field><Input type="number" value={formData.experience} onChange={(e) => update({ experience: e.target.value })} placeholder="Ex. 5" /></div>
          </div>
          <Field>Style (optionnel)</Field>
          <div className="flex flex-wrap gap-2">
            {styleTags.map((t) => <button key={t} onClick={() => toggleTag(t)} className={`flex items-center gap-1.5 ${pillCls()}`} style={pillStyle(formData.tags.includes(t))}>{formData.tags.includes(t) && <Check size={11} />}{t}</button>)}
          </div>
        </>
      )}
      {step === 3 && (
        <>
          <h2 className="font-display font-semibold text-2xl leading-none mb-7" style={{ color: c.text }}>Présentez-vous</h2>
          <Field>Description de votre activité</Field>
          <TextArea value={formData.description} onChange={(e) => update({ description: e.target.value })} placeholder="Décrivez votre style, votre approche, votre expérience…" rows={5} className="mb-5" />
          <Field>Votre histoire (optionnel)</Field>
          <TextArea value={formData.histoire} onChange={(e) => update({ histoire: e.target.value })} placeholder="Comment avez-vous commencé ? Qu'est-ce qui vous distingue ?" rows={4} className="mb-5" />
          <Field>Réseaux & liens (optionnel)</Field>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5 rounded-xl px-4 py-3" style={inputStyle}><Instagram size={15} style={{ color: c.textFaint }} /><input value={formData.instagram} onChange={(e) => update({ instagram: e.target.value })} placeholder="@monentreprise" className="bg-transparent outline-none font-body text-sm w-full" style={{ color: c.text }} /></div>
            <div className="flex items-center gap-2.5 rounded-xl px-4 py-3" style={inputStyle}><Facebook size={15} style={{ color: c.textFaint }} /><input value={formData.facebook} onChange={(e) => update({ facebook: e.target.value })} placeholder="facebook.com/monentreprise" className="bg-transparent outline-none font-body text-sm w-full" style={{ color: c.text }} /></div>
            <div className="flex items-center gap-2.5 rounded-xl px-4 py-3" style={inputStyle}><PlayCircle size={15} style={{ color: c.textFaint }} /><input value={formData.videoLink} onChange={(e) => update({ videoLink: e.target.value })} placeholder="Lien vidéo de présentation" className="bg-transparent outline-none font-body text-sm w-full" style={{ color: c.text }} /></div>
          </div>
        </>
      )}
      {step === 4 && (
        <>
          <h2 className="font-display font-semibold text-2xl leading-none mb-2" style={{ color: c.text }}>Votre tarification</h2>
          <p className="font-body text-xs font-light mb-6" style={{ color: c.textSoft }}>Choisissez le fonctionnement le plus adapté à votre activité.</p>
          <div className="flex flex-col gap-2.5 mb-6">
            {[{ id: "fixe", label: "Tarif fixe", desc: "Un prix unique pour votre prestation" }, { id: "partir", label: "À partir de", desc: "Un prix de départ, variable selon la demande" }, { id: "formules", label: "Formules", desc: "Plusieurs offres à prix différents" }, { id: "devis", label: "Sur devis", desc: "Chaque demande fait l'objet d'un devis personnalisé" }].map((opt) => (
              <button key={opt.id} onClick={() => update({ pricingType: opt.id })} className="text-left p-4 rounded-xl flex items-center justify-between" style={{ backgroundColor: c.card, border: `1px solid ${formData.pricingType === opt.id ? c.green : c.border}` }}>
                <div><p className="font-body text-sm font-medium mb-0.5" style={{ color: c.text }}>{opt.label}</p><p className="font-body text-xs font-light" style={{ color: c.textSoft }}>{opt.desc}</p></div>
                {formData.pricingType === opt.id && <Check size={16} style={{ color: c.green }} />}
              </button>
            ))}
          </div>
          {(formData.pricingType === "fixe" || formData.pricingType === "partir") && (<div><Field>Montant (FCFA)</Field><Input type="number" value={formData.montant} onChange={(e) => update({ montant: e.target.value })} placeholder="Ex. 150000" /></div>)}
          {formData.pricingType === "formules" && (
            <div>
              <Field>Vos formules</Field>
              {formData.formules.map((f, i) => (
                <div key={i} className="flex items-center justify-between rounded-xl px-4 py-3 mb-2" style={{ backgroundColor: c.card, border: `1px solid ${c.border}` }}>
                  <span className="font-body text-sm" style={{ color: c.text }}>{f.nom} — <span style={{ color: c.green, fontWeight: 500 }}>{fmt(f.prix)} FCFA</span></span>
                  <button onClick={() => removeFormule(i)}><X size={13} style={{ color: c.textFaint }} /></button>
                </div>
              ))}
              <div className="flex gap-2 mt-2">
                <input value={formuleNom} onChange={(e) => setFormuleNom(e.target.value)} placeholder="Nom (ex. Formule Essentielle)" className="flex-1 rounded-xl px-3 py-3 font-body text-sm outline-none" style={inputStyle} />
                <input type="number" value={formulePrix} onChange={(e) => setFormulePrix(e.target.value)} placeholder="Prix" className="w-24 rounded-xl px-3 py-3 font-body text-sm outline-none" style={inputStyle} />
                <button onClick={addFormule} className="rounded-xl px-3" style={{ backgroundColor: c.green, color: c.cream }}><Plus size={15} /></button>
              </div>
            </div>
          )}
        </>
      )}
      {step === 5 && (
        <>
          <h2 className="font-display font-semibold text-2xl leading-none mb-2" style={{ color: c.text }}>Votre portfolio</h2>
          <p className="font-body text-xs font-light mb-6" style={{ color: c.textSoft }}>Ajoutez des photos ou de courtes vidéos de vos réalisations précédentes.</p>
          <label className="w-full flex flex-col items-center justify-center gap-2 rounded-xl py-8 mb-2 cursor-pointer" style={{ border: `2px dashed ${c.border}`, backgroundColor: "rgba(255,255,255,0.5)" }}>
            <Plus size={18} style={{ color: c.green }} /><span className="font-body text-xs" style={{ color: c.textSoft }}>Ajouter des photos ou vidéos</span>
            <input type="file" accept="image/*,video/*" multiple className="hidden" onChange={onPhotos} />
          </label>
          <p className="font-body text-xs font-light mb-5" style={{ color: c.textFaint }}>Formats acceptés : JPG, PNG pour les photos · MP4, MOV, MPEG pour les vidéos.</p>
          {formData.photos.length > 0 && (
            <div className="grid grid-cols-3 gap-2">
              {formData.photos.map((p, i) => (
                <div key={i} className="relative aspect-square rounded-lg overflow-hidden" style={{ backgroundColor: c.cardAlt }}>
                  {p.type === "video" ? (
                    <video src={p.url} className="w-full h-full object-cover" muted playsInline />
                  ) : (
                    <img src={p.url} alt={p.name} className="w-full h-full object-cover" />
                  )}
                  {p.type === "video" && <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: "rgba(31,31,26,0.25)" }}><PlayCircle size={22} color="#fff" /></div>}
                  <button onClick={() => removePhoto(i)} className="absolute top-1 right-1 rounded-full p-1" style={{ backgroundColor: "rgba(31,31,26,0.6)" }}><X size={11} color="#fff" /></button>
                </div>
              ))}
            </div>
          )}
        </>
      )}
      {step === 6 && (
        <>
          <h2 className="font-display font-semibold text-2xl leading-none mb-2" style={{ color: c.text }}>Récapitulatif</h2>
          <p className="font-body text-xs font-light mb-6" style={{ color: c.textSoft }}>Vérifiez vos informations avant de publier votre demande.</p>
          <div className="flex flex-col gap-3">
            <RecapRow label="Nom" value={formData.nom} />
            {formData.responsable && <RecapRow label="Responsable" value={formData.responsable} />}
            <RecapRow label="Téléphone" value={formData.telephone} />
            {formData.email && <RecapRow label="Email" value={formData.email} />}
            <RecapRow label="Spécialité" value={formData.specialite} />
            <RecapRow label="Zones" value={formData.zones.join(", ")} />
            {formData.adresse && <RecapRow label="Lieu de travail" value={formData.adresse} />}
            {formData.experience && <RecapRow label="Expérience" value={`${formData.experience} ans`} />}
            <RecapRow label="Tarification" value={providerPrice(formData)} />
            <RecapRow label="Photos" value={`${formData.photos.length} ajoutée(s)`} />
          </div>
        </>
      )}

      <div className="form-actions fixed bottom-0 left-0 right-0 px-6 py-4 flex gap-3" style={{ backgroundColor: c.bg, borderTop: `1px solid ${c.border}` }}>
        {step > 1 && <button onClick={() => setStep((s) => s - 1)} className="font-body text-xs tracked uppercase px-6 py-3.5 rounded-full" style={{ border: `1px solid ${c.border}`, color: c.text }}>Précédent</button>}
        {step < total ? (
          <button disabled={!canNext()} onClick={() => setStep((s) => s + 1)} className="flex-1 font-body text-xs tracked uppercase py-3.5 rounded-full" style={{ backgroundColor: c.green, color: c.cream, opacity: canNext() ? 1 : 0.3 }}>Suivant</button>
        ) : (
          <button onClick={onSubmit} className="flex-1 font-body text-xs tracked uppercase py-3.5 rounded-full" style={{ backgroundColor: c.green, color: c.cream }}>Publier ma demande de profil</button>
        )}
      </div>
      <PrestaFooter />
    </div>
  );
}
const RecapRow = ({ label: l, value }) => (
  <div className="flex items-center justify-between rounded-xl px-4 py-3.5" style={{ backgroundColor: c.card, border: `1px solid ${c.border}` }}>
    <span className="font-body text-xs tracked uppercase" style={{ color: c.textFaint }}>{l}</span>
    <span className="font-body text-sm text-right" style={{ color: c.text, maxWidth: "60%" }}>{value || "—"}</span>
  </div>
);

function PrestaDashboard({ formData, status, setStatus, onEdit, onBack }) {
  const statusMap = { pending: { label: "En attente de validation", color: c.gold, icon: Clock }, published: { label: "Profil publié", color: c.green, icon: ShieldCheck } };
  const s = statusMap[status]; const StatusIcon = s.icon;
  return (
    <div className="form-page min-h-screen px-6 pt-10 pb-24" style={{ backgroundColor: c.bg }}>
      <button onClick={onBack} className="flex items-center gap-2 mb-8 font-body text-xs tracked uppercase" style={{ color: c.textFaint }}><ArrowLeft size={13} /> Retour</button>
      <Eyebrow>Espace prestataire</Eyebrow>
      <h2 className="font-display font-semibold text-2xl leading-none mb-7" style={{ color: c.text }}>Mon tableau de bord</h2>
      <div className="flex items-center gap-2 mb-7 px-4 py-3 rounded-full w-fit" style={{ backgroundColor: `${s.color}22` }}><StatusIcon size={14} style={{ color: s.color }} /><span className="font-body text-xs font-medium" style={{ color: s.color }}>{s.label}</span></div>

      <Card className="overflow-hidden mb-6">
        <div className="h-28 relative" style={{ backgroundColor: c.green }}>
          <div className="absolute -bottom-7 left-5 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: "#fff", border: "4px solid #fff" }}><span className="font-display font-semibold text-xl" style={{ color: c.green }}>{formData.nom ? initials(formData.nom) : "—"}</span></div>
        </div>
        <div className="pt-10 px-5 pb-5">
          <div className="flex items-start justify-between mb-1">
            <p className="font-display text-xl leading-tight" style={{ color: c.text }}>{formData.nom || "Nom non renseigné"}</p>
            {formData.experience && <span className="font-body text-xs tracked uppercase px-2.5 py-1 rounded-full" style={{ backgroundColor: c.greenSoft, color: c.green }}>{formData.experience} ans</span>}
          </div>
          <p className="font-body text-xs tracked uppercase mb-3" style={{ color: c.textFaint }}>{formData.specialite || "Spécialité"}</p>
          <div className="flex flex-col gap-1.5 mb-4">
            <div className="flex items-center gap-1.5" style={{ color: c.textSoft }}><MapPin size={12} /><span className="font-body text-xs font-light">{formData.zones.join(", ") || "Zone non renseignée"}</span></div>
            {formData.adresse && <div className="flex items-center gap-1.5" style={{ color: c.textSoft }}><Compass size={12} /><span className="font-body text-xs font-light">{formData.adresse}</span></div>}
            <div className="flex items-center gap-1.5" style={{ color: c.textSoft }}><Phone size={12} /><span className="font-body text-xs font-light">{formData.telephone || "—"}</span></div>
            {formData.email && <div className="flex items-center gap-1.5" style={{ color: c.textSoft }}><Mail size={12} /><span className="font-body text-xs font-light">{formData.email}</span></div>}
          </div>
          {(formData.instagram || formData.facebook || formData.videoLink) && (
            <div className="flex gap-2 mb-4">
              {formData.instagram && <span className="flex items-center gap-1 rounded-full px-2.5 py-1.5" style={{ backgroundColor: "rgba(31,31,26,0.05)" }}><Instagram size={11} style={{ color: c.textSoft }} /><span className="font-body text-xs" style={{ color: c.textSoft }}>{formData.instagram}</span></span>}
              {formData.facebook && <span className="flex items-center gap-1 rounded-full px-2.5 py-1.5" style={{ backgroundColor: "rgba(31,31,26,0.05)" }}><Facebook size={11} style={{ color: c.textSoft }} /></span>}
              {formData.videoLink && <span className="flex items-center gap-1 rounded-full px-2.5 py-1.5" style={{ backgroundColor: "rgba(31,31,26,0.05)" }}><PlayCircle size={11} style={{ color: c.textSoft }} /></span>}
            </div>
          )}
          <p className="font-body text-sm leading-relaxed font-light mb-4 line-clamp-3" style={{ color: c.textSoft }}>{formData.description || "Aucune description renseignée."}</p>
          {formData.pricingType === "formules" && formData.formules.length > 0 && (
            <div className="flex flex-col gap-1.5 mb-4">
              {formData.formules.map((f, i) => <div key={i} className="flex items-center justify-between pt-2" style={{ borderTop: `1px solid ${c.border}` }}><span className="font-body text-xs" style={{ color: c.textSoft }}>{f.nom}</span><span className="font-body text-xs font-medium" style={{ color: c.green }}>{fmt(f.prix)} FCFA</span></div>)}
            </div>
          )}
          {formData.pricingType && formData.pricingType !== "formules" && (
            <div className="flex items-center justify-between pt-2 mb-4" style={{ borderTop: `1px solid ${c.border}` }}><span className="font-body text-xs" style={{ color: c.textSoft }}>Tarif</span><span className="font-body text-xs font-medium" style={{ color: c.green }}>{providerPrice(formData)}</span></div>
          )}
          {formData.photos.length > 0 && <div className="flex gap-1.5">{formData.photos.slice(0, 3).map((p, i) => <div key={i} className="w-full aspect-square rounded-lg overflow-hidden"><img src={p.url} className="w-full h-full object-cover" /></div>)}</div>}
        </div>
      </Card>

      <button onClick={onEdit} className="w-full font-body text-xs tracked uppercase py-4 rounded-full mb-3" style={{ border: `1px solid ${c.border}`, color: c.text }}>Modifier mon profil</button>
      <p className="font-body text-xs font-light text-center mt-3" style={{ color: c.textFaint }}>Votre demande sera examinée par l’équipe Nexlay avant publication.</p>
      <PrestaFooter />
    </div>
  );
}

function BottomNav({ route, setRoute }) {
  const items = [{ id: "home", label: "Accueil", icon: Home }, { id: "prestations", label: "Prestations", icon: LayoutGrid }, { id: "favorites", label: "Favoris", icon: Heart }, { id: "about", label: "À propos", icon: Info }];
  return (
    <div className="bottom-nav sticky bottom-0 px-4 py-3" style={{ backgroundColor: c.bg, borderTop: `1px solid ${c.border}` }}><div className="bottom-nav-inner wide-content flex justify-between">
      {items.map((it) => {
        const Icon = it.icon;
        const active = route === it.id || (route === "providerList" && it.id === "prestations") || (route === "profile" && it.id === "prestations");
        return (
          <button key={it.id} onClick={() => setRoute(it.id)} className="flex flex-col items-center gap-1.5 px-3 py-1.5 rounded-full" style={{ backgroundColor: active ? c.greenSoft : "transparent" }}>
            <Icon size={17} strokeWidth={1.6} style={{ color: active ? c.green : c.textFaint }} />
            <span className="font-body text-xs tracked uppercase" style={{ color: active ? c.green : c.textFaint }}>{it.label}</span>
          </button>
        );
      })}</div>
    </div>
  );
}

function FaqItem({ q, a, open, onClick }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: c.card, border: `1px solid ${c.border}` }}>
      <button onClick={onClick} className="w-full flex items-center justify-between px-4 py-4 text-left">
        <span className="font-body text-sm font-medium" style={{ color: c.text }}>{q}</span>
        <ChevronDown size={16} style={{ color: c.textFaint, transform: open ? "rotate(180deg)" : "none", transition: "transform 0.15s" }} />
      </button>
      {open && <p className="font-body text-xs leading-relaxed font-light px-4 pb-4" style={{ color: c.textSoft }}>{a}</p>}
    </div>
  );
}

export default function NexlayPrototype() {
  const [appMode, setAppMode] = useState("landing");
  const [route, setRoute] = useState("home");
  const [activeCat, setActiveCat] = useState(null);
  const [activeProvider, setActiveProvider] = useState(null);
  const [prestSearch, setPrestSearch] = useState("");
  const [zoneFilter, setZoneFilter] = useState("Toutes");
  const [tarifFilter, setTarifFilter] = useState("Tous");
  const [tagFilter, setTagFilter] = useState("Tous");
  const [sortAsc, setSortAsc] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);
  const [favorites, setFavorites] = useState([]); // noms des prestataires sauvegardés (session uniquement)

  const [prestaRoute, setPrestaRoute] = useState("auth");
  const [profileStatus, setProfileStatus] = useState("pending");
  const [formData, setFormData] = useState({ nom: "", responsable: "", telephone: "", email: "", specialite: "", zones: [], adresse: "", experience: "", description: "", histoire: "", tags: [], instagram: "", facebook: "", videoLink: "", pricingType: "", montant: "", formules: [], photos: [] });

  const goCategory = (cat) => { setActiveCat(cat); setZoneFilter("Toutes"); setTarifFilter("Tous"); setTagFilter("Tous"); setRoute("providerList"); };
  const goProvider = (p) => { setActiveProvider(p); setRoute("profile"); };
  const goPresta = () => { setAppMode("prestataire"); setPrestaRoute("auth"); };
  const toggleFavorite = (name) => setFavorites((f) => (f.includes(name) ? f.filter((n) => n !== name) : [...f, name]));
  const isFavorite = (name) => favorites.includes(name);

  const myProvider = profileStatus === "published" && formData.nom ? formData : null;

  const providerList = useMemo(() => {
    if (!activeCat) return [];
    let list = [...(providersByCategory[activeCat.id] || [])];
    if (myProvider && categoryIdFromName(myProvider.specialite) === activeCat.id) list = [myProvider, ...list];
    if (zoneFilter !== "Toutes") list = list.filter((p) => (p.zones || [p.zone]).includes(zoneFilter));
    if (tarifFilter !== "Tous") list = list.filter((p) => p.pricingType === tarifFilter);
    if (tagFilter !== "Tous") list = list.filter((p) => (p.tags || []).includes(tagFilter));
    list.sort((a, b) => (sortAsc ? a.nom?.localeCompare(b.nom) || a.name?.localeCompare(b.name) : (b.nom || b.name).localeCompare(a.nom || a.name)));
    return list;
  }, [activeCat, zoneFilter, tarifFilter, tagFilter, sortAsc, myProvider]);

  const allProvidersFlat = useMemo(() => {
    const base = Object.values(providersByCategory).flat();
    return myProvider ? [myProvider, ...base] : base;
  }, [myProvider]);
  const favoriteProviders = allProvidersFlat.filter((p) => favorites.includes(p.nom || p.name));

  const zones = ["Toutes", ...zonesDisponibles];
  const tarifOptions = [{ id: "Tous", label: "Tous" }, { id: "fixe", label: "Fixe" }, { id: "partir", label: "À partir de" }, { id: "formules", label: "Formules" }, { id: "devis", label: "Devis" }];
  const waLink = (name, phone) => {
    const whatsappPhone = (phone || "").replace(/[\s+()-]/g, "");
    return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(`Bonjour ${name}, je vous contacte via Nexlay pour mon événement. Seriez-vous disponible ?`)}`;
  };

  const faqs = [
    { q: "Est-ce gratuit pour les clients ?", a: "Oui, la recherche et le contact des prestataires sont entièrement gratuits pour les clients." },
    { q: "Comment devenir prestataire ?", a: "Créez votre compte, complétez votre profil avec vos informations et vos réalisations, puis votre demande est examinée avant publication." },
    { q: "Comment contacter un prestataire ?", a: "Chaque fiche prestataire propose un bouton de contact direct qui ouvre WhatsApp avec un message pré-rempli." },
  ];

  const fontStyles = (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Outfit:wght@300;400;500;600&display=swap');
      .font-display { font-family: 'Fraunces', serif; }
      .font-body { font-family: 'Outfit', sans-serif; }
      .scrollbar-hide::-webkit-scrollbar { display: none; }
      .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      .tracked { letter-spacing: 0.18em; }
      .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
    `}</style>
  );

  if (appMode === "landing") return <div className="app-page font-body">{fontStyles}<Landing onSelect={(m) => { setAppMode(m); if (m === "prestataire") setPrestaRoute("auth"); }} /></div>;

  if (appMode === "prestataire") {
    return (
      <div className="app-page font-body">
        {fontStyles}
        {prestaRoute === "auth" && (
          <PrestaAuth
            hasExistingProfile={!!formData.nom}
            onCreated={() => setPrestaRoute("form")}
            onLogin={() => setPrestaRoute("dashboard")}
            onBack={() => setAppMode("landing")}
          />
        )}
        {prestaRoute === "form" && <PrestaForm formData={formData} setFormData={setFormData} onBack={() => setPrestaRoute("auth")} onSubmit={() => { setProfileStatus("pending"); setPrestaRoute("dashboard"); }} />}
        {prestaRoute === "dashboard" && <PrestaDashboard formData={formData} status={profileStatus} setStatus={setProfileStatus} onEdit={() => setPrestaRoute("form")} onBack={() => setAppMode("landing")} />}
      </div>
    );
  }

  return (
    <div className="app-page min-h-screen flex flex-col" style={{ backgroundColor: c.bg, color: c.text }}>
      {fontStyles}
      <div className="flex-1">
        <TopBar onLogo={() => setAppMode("landing")} onCta={goPresta} onFavorites={() => setRoute("favorites")} favoritesCount={favorites.length} />

        {route === "home" && (
          <section className="content-section px-6 pt-12 pb-16 md:px-10 md:pt-20">
            <div className="wide-content">
              <div className="max-w-2xl mb-10 md:mb-14">
                <Eyebrow>Choisir une prestation</Eyebrow>
                <h1 className="font-display font-semibold text-4xl leading-tight mb-4 md:text-6xl" style={{ color: c.text }}>Trouvez les professionnels<br /><span style={{ color: c.brand }}>de vos moments importants.</span></h1>
                <p className="font-body text-sm leading-relaxed max-w-lg font-light" style={{ color: c.textSoft }}>Découvrez une sélection de savoir-faire pour imaginer votre événement, puis explorez la liste complète quand vous êtes prêt.</p>
              </div>

              <div className="category-mosaic mb-10 md:mb-12">
                {categories.slice(0, 4).map((cat, index) => {
                  const Icon = cat.icon;
                  const featured = index === 0;
                  return (
                    <button key={cat.id} onClick={() => goCategory(cat)} className={`category-tile category-card ${featured ? "category-tile-featured" : ""}`} style={{ backgroundColor: cat.tone, color: featured ? c.cream : c.text }}>
                      <div className="category-tile-copy"><div className="flex items-center justify-between"><span className="category-icon"><Icon size={18} /></span><ArrowUpRight size={16} /></div><p className="font-display text-2xl leading-none mt-5 mb-2">{cat.name}</p><p className="font-body text-xs leading-relaxed" style={{ opacity: 0.72 }}>{cat.desc}</p><span className="font-body text-xs font-medium mt-5 inline-block underline underline-offset-4">Découvrir</span></div>
                      <img src={cat.cover} alt="" className="category-tile-image category-image" />
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-col items-center text-center py-8 px-6" style={{ borderTop: `1px solid ${c.border}` }}>
                <p className="font-display text-2xl mb-2" style={{ color: c.text }}>Vous cherchez autre chose ?</p>
                <p className="font-body text-sm font-light mb-5" style={{ color: c.textSoft }}>Parcourez toutes les spécialités disponibles sur Nexlay.</p>
                <button onClick={() => setRoute("prestations")} className="flex items-center gap-2 font-body text-xs tracked uppercase px-5 py-3 rounded-full" style={{ backgroundColor: c.brand, color: c.cream }}>Voir plus <ArrowUpRight size={14} /></button>
              </div>
            </div>
          </section>
        )}

        {route === "prestations" && (
          <section className="content-section px-6 pt-8 pb-12 md:px-10">
            <div className="directory-heading text-center"><Eyebrow>Explorer les univers</Eyebrow>
            <h2 className="font-display font-semibold text-4xl leading-tight mb-3 md:text-6xl" style={{ color: c.text }}>Trouvez votre<br /><span style={{ color: c.pink }}>ambiance idéale.</span></h2>
            <p className="font-body text-sm font-light max-w-lg mx-auto mb-8" style={{ color: c.textSoft }}>Des professionnels passionnés pour donner forme à vos envies, du premier échange au dernier détail.</p></div>
            <div className="flex items-center gap-2.5 rounded-full px-4 py-3.5 mb-6" style={{ backgroundColor: c.card, border: `1px solid ${c.border}` }}>
              <Search size={15} style={{ color: c.textFaint }} />
              <input value={prestSearch} onChange={(e) => setPrestSearch(e.target.value)} placeholder="Rechercher une catégorie…" className="bg-transparent outline-none font-body text-sm w-full font-light" style={{ color: c.text }} />
              {prestSearch && <button onClick={() => setPrestSearch("")}><X size={14} style={{ color: c.textFaint }} /></button>}
            </div>
            <div className="directory-mosaic">
              {providerServices.filter((service) => service.name.toLowerCase().includes(prestSearch.toLowerCase())).map((service, index) => { const Icon = service.icon; const category = categories.find((cat) => cat.name === service.name) || { ...service, id: service.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"), desc: "Découvrez les professionnels et services associés à cet univers.", tone: c.cardAlt }; const featured = index === 1; return (
                <button key={service.name} onClick={() => goCategory(category)} className={`directory-tile category-card ${featured ? "directory-featured" : ""}`} style={{ backgroundColor: category.tone, color: featured ? c.cream : c.text }}>
                  <img src={service.cover} alt="" className="directory-tile-image category-image" />
                  <span className="directory-tile-shade" />
                  <div className="directory-tile-content"><div className="flex items-center justify-between"><span className="category-icon"><Icon size={18} /></span><ArrowUpRight size={17} /></div><p className="font-display text-2xl leading-tight mt-6 mb-2">{service.name}</p><p className="font-body text-xs leading-relaxed max-w-xs" style={{ opacity: 0.76 }}>{category.desc}</p><span className="font-body text-xs font-medium mt-6 inline-block underline underline-offset-4">Explorer cette spécialité</span></div>
                </button>
              );})}
              {providerServices.filter((service) => service.name.toLowerCase().includes(prestSearch.toLowerCase())).length === 0 && <p className="font-body text-sm font-light py-8 w-full text-center" style={{ color: c.textFaint }}>Aucune spécialité ne correspond à votre recherche.</p>}
            </div>
          </section>
        )}

        {route === "providerList" && activeCat && (
          <section className="content-section px-6 pt-8 pb-10 md:px-10">
            <button onClick={() => setRoute("prestations")} className="flex items-center gap-2 mb-6 font-body text-xs tracked uppercase" style={{ color: c.textFaint }}><ArrowLeft size={13} /> Retour</button>
            <div className="directory-result-heading"><Eyebrow>Explorer les professionnels</Eyebrow><h2 className="font-display font-semibold text-4xl leading-tight mb-3 md:text-5xl" style={{ color: c.text }}>{activeCat.name}<br /><span style={{ color: c.pink }}>pour votre événement.</span></h2><p className="font-body text-sm font-light leading-relaxed max-w-lg mb-7" style={{ color: c.textSoft }}>{activeCat.desc} Comparez les univers, les services et les tarifs avant de prendre contact.</p></div>

            <div className="filter-panel rounded-2xl p-4 mb-5" style={{ backgroundColor: c.card, border: `1px solid ${c.border}` }}>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div><p className="font-body text-xs tracked uppercase mb-1.5" style={{ color: c.textFaint }}>Zone</p>
                  <select value={zoneFilter} onChange={(e) => setZoneFilter(e.target.value)} className="bg-transparent font-body text-sm w-full outline-none pb-2" style={{ color: c.text, borderBottom: `1px solid ${c.border}` }}>
                    {zones.map((z) => <option key={z} value={z}>{z}</option>)}
                  </select>
                </div>
                <div><p className="font-body text-xs tracked uppercase mb-1.5" style={{ color: c.textFaint }}>Trier par</p>
                  <button onClick={() => setSortAsc((s) => !s)} className="flex items-center gap-1.5 font-body text-sm w-full pb-2" style={{ color: c.text, borderBottom: `1px solid ${c.border}` }}>Nom {sortAsc ? "A–Z" : "Z–A"} <ArrowUpDown size={11} style={{ color: c.textFaint }} /></button>
                </div>
              </div>
              <p className="font-body text-xs tracked uppercase mb-1.5" style={{ color: c.textFaint }}>Type de tarif</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {tarifOptions.map((t) => (
                  <button key={t.id} onClick={() => setTarifFilter(t.id)} className="font-body text-xs px-3 py-1.5 rounded-full" style={tarifFilter === t.id ? { backgroundColor: c.green, color: c.cream } : { backgroundColor: c.card, color: c.textSoft, border: `1px solid ${c.border}` }}>{t.label}</button>
                ))}
              </div>
              <p className="font-body text-xs tracked uppercase mb-1.5" style={{ color: c.textFaint }}>Style</p>
              <div className="flex flex-wrap gap-2">
                <button onClick={() => setTagFilter("Tous")} className="font-body text-xs px-3 py-1.5 rounded-full" style={tagFilter === "Tous" ? { backgroundColor: c.green, color: c.cream } : { backgroundColor: c.card, color: c.textSoft, border: `1px solid ${c.border}` }}>Tous</button>
                {styleTags.map((t) => (
                  <button key={t} onClick={() => setTagFilter(t)} className="font-body text-xs px-3 py-1.5 rounded-full" style={tagFilter === t ? { backgroundColor: c.green, color: c.cream } : { backgroundColor: c.card, color: c.textSoft, border: `1px solid ${c.border}` }}>{t}</button>
                ))}
              </div>
            </div>

            {providerList.length === 0 ? <EmptyState /> : (
              <div className="provider-results-grid">
                {providerList.map((p, i) => {
                  const name = p.nom || p.name;
                  const cover = p.photos?.[0]?.url;
                  return (
                    <div key={i} className="relative">
                      <button onClick={() => goProvider(p)} className="provider-result w-full rounded-2xl p-4 flex gap-4 text-left" style={{ backgroundColor: c.card, border: `1px solid ${c.border}` }}>
                        <div className="provider-result-image shrink-0" style={{ backgroundColor: c.green }}>{cover ? <img src={cover} alt="" /> : <span className="font-display font-semibold text-lg" style={{ color: c.cream }}>{initials(name)}</span>}<span className="provider-result-status"><ShieldCheck size={11} /> Vérifié</span></div>
                        <div className="flex-1 min-w-0">
                          <p className="font-display text-xl leading-tight mb-1 pr-6" style={{ color: c.text }}>{name}</p>
                          <p className="font-body text-xs mb-2 font-light" style={{ color: c.textSoft }}>{p.specialite || p.specialty}</p>
                          {p.tags && p.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mb-1.5">
                              {p.tags.slice(0, 2).map((t, ti) => <span key={ti} className="font-body text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: c.greenSoft, color: c.green }}>{t}</span>)}
                            </div>
                          )}
                          <div className="flex flex-wrap items-center justify-between gap-2"><span className="flex items-center gap-1" style={{ color: c.textFaint }}><MapPin size={11} /><span className="font-body text-xs">{(p.zones || [p.zone])[0]}</span></span><span className="font-body text-xs font-medium" style={{ color: c.green }}>{providerPrice(p)}</span></div>
                        </div>
                      </button>
                      <button onClick={() => toggleFavorite(name)} className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.85)" }}>
                        <Heart size={13} style={{ color: c.green }} fill={isFavorite(name) ? c.green : "none"} />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        )}

        {route === "favorites" && (
          <section className="px-6 pt-4 pb-6">
            <Eyebrow>Espace personnel</Eyebrow>
            <h2 className="font-display font-semibold text-2xl mb-1" style={{ color: c.text }}>Mes favoris</h2>
            <p className="font-body text-xs font-light mb-7" style={{ color: c.textSoft }}>Sauvegardés pour cette session — retrouvez-les facilement pour comparer.</p>
            {favoriteProviders.length === 0 ? (
              <div className="flex flex-col items-center text-center py-16 px-6 rounded-2xl" style={{ border: `1px dashed ${c.border}`, backgroundColor: "rgba(255,255,255,0.5)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: c.greenSoft }}><Heart size={18} style={{ color: c.green }} /></div>
                <p className="font-display text-lg mb-1.5" style={{ color: c.text }}>Aucun favori pour l'instant</p>
                <p className="font-body text-xs font-light max-w-xs" style={{ color: c.textSoft }}>Touchez le cœur sur une fiche prestataire pour la retrouver ici.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-3.5">
                {favoriteProviders.map((p, i) => {
                  const name = p.nom || p.name;
                  return (
                    <div key={i} className="relative">
                      <button onClick={() => goProvider(p)} className="provider-result w-full rounded-2xl p-4 flex gap-4 text-left" style={{ backgroundColor: c.card, border: `1px solid ${c.border}` }}>
                        <div className="w-16 h-16 rounded-xl shrink-0 flex items-center justify-center" style={{ backgroundColor: c.green }}><span className="font-display font-semibold text-lg" style={{ color: c.cream }}>{initials(name)}</span></div>
                        <div className="flex-1">
                          <p className="font-display text-lg leading-tight mb-1 pr-6" style={{ color: c.text }}>{name}</p>
                          <p className="font-body text-xs mb-1.5 font-light" style={{ color: c.textSoft }}>{p.specialite || p.specialty}</p>
                          <div className="flex items-center justify-between"><span className="flex items-center gap-1" style={{ color: c.textFaint }}><MapPin size={11} /><span className="font-body text-xs">{(p.zones || [p.zone])[0]}</span></span><span className="font-body text-xs font-medium" style={{ color: c.green }}>{providerPrice(p)}</span></div>
                        </div>
                      </button>
                      <button onClick={() => toggleFavorite(name)} className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.85)" }}>
                        <Heart size={13} style={{ color: c.green }} fill={c.green} />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        )}

        {route === "profile" && activeProvider && (
          <section className="content-section pt-8 pb-10">
            <div className="wide-content px-6 mb-5 md:px-10"><button onClick={() => setRoute("providerList")} className="flex items-center gap-2 font-body text-xs tracked uppercase" style={{ color: c.textFaint }}><ArrowLeft size={13} /> Retour</button></div>
            <div className="wide-content px-6 md:px-10">
              <Card className="overflow-hidden">
                <div className="h-40 relative" style={{ backgroundColor: c.green }}>
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full px-3 py-1.5" style={{ backgroundColor: "rgba(255,255,255,0.9)" }}><ShieldCheck size={12} style={{ color: c.green }} /><span className="font-body text-xs font-medium" style={{ color: c.green }}>Profil vérifié</span></div>
                  <button onClick={() => toggleFavorite(activeProvider.nom || activeProvider.name)} className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.9)" }}>
                    <Heart size={14} style={{ color: c.green }} fill={isFavorite(activeProvider.nom || activeProvider.name) ? c.green : "none"} />
                  </button>
                  <div className="absolute -bottom-8 left-5 w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "#fff", border: "4px solid #fff" }}><span className="font-display font-semibold text-2xl" style={{ color: c.green }}>{initials(activeProvider.nom || activeProvider.name)}</span></div>
                </div>
                <div className="pt-12 px-5 pb-6">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-display text-2xl leading-tight" style={{ color: c.text }}>{activeProvider.nom || activeProvider.name}</h3>
                    {activeProvider.experience && <span className="font-body text-xs tracked uppercase px-2.5 py-1 rounded-full shrink-0 ml-2" style={{ backgroundColor: c.greenSoft, color: c.green }}>{activeProvider.experience} ans</span>}
                  </div>
                  <p className="font-body text-xs tracked uppercase mb-4" style={{ color: c.textFaint }}>{activeProvider.specialite || activeProvider.specialty}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {(activeProvider.zones || [activeProvider.zone]).filter(Boolean).map((z, i) => (
                      <span key={i} className="flex items-center gap-1 rounded-full px-2.5 py-1" style={{ backgroundColor: c.greenSoft }}><MapPin size={10} style={{ color: c.green }} /><span className="font-body text-xs" style={{ color: c.green }}>{z}</span></span>
                    ))}
                  </div>
                  {activeProvider.adresse && <div className="flex items-center gap-1.5 mb-4" style={{ color: c.textSoft }}><Compass size={12} /><span className="font-body text-xs font-light">{activeProvider.adresse}</span></div>}

                  {activeProvider.tags && activeProvider.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {activeProvider.tags.map((t, i) => <span key={i} className="font-body text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: c.cardAlt, color: c.textSoft, border: `1px solid ${c.border}` }}>{t}</span>)}
                    </div>
                  )}

                  <Eyebrow>Présentation</Eyebrow>
                  <p className="font-body text-sm leading-relaxed font-light mb-5" style={{ color: c.textSoft }}>{activeProvider.description || "Présentation du prestataire — renseignée lors de son inscription sur Nexlay."}</p>

                  {activeProvider.histoire && (
                    <>
                      <Eyebrow>Notre histoire</Eyebrow>
                      <p className="font-body text-sm leading-relaxed font-light mb-5" style={{ color: c.textSoft }}>{activeProvider.histoire}</p>
                    </>
                  )}

                  <Eyebrow>Réalisations</Eyebrow>
                  {activeProvider.photos && activeProvider.photos.length > 0 ? (
                    <div className="flex gap-1.5 overflow-x-auto scrollbar-hide mb-6">
                      {activeProvider.photos.map((p, i) => <img key={i} src={p.url} className="w-24 h-32 object-cover rounded-lg shrink-0" />)}
                    </div>
                  ) : (
                    <p className="font-body text-xs font-light mb-6" style={{ color: c.textFaint }}>Aucune photo ajoutée pour le moment.</p>
                  )}

                  <Eyebrow>Tarification</Eyebrow>
                  {activeProvider.pricingType === "formules" && activeProvider.formules?.length > 0 ? (
                    <div className="flex flex-col gap-2 mb-6">
                      {activeProvider.formules.map((f, i) => (
                        <div key={i} className="flex items-center justify-between rounded-xl px-4 py-3" style={{ backgroundColor: c.cardAlt }}>
                          <span className="font-body text-sm" style={{ color: c.text }}>{f.nom}</span>
                          <span className="font-display font-semibold text-base" style={{ color: c.text }}>{fmt(f.prix)} FCFA</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-between py-4 mb-6" style={{ borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}` }}>
                      <span className="font-body text-xs tracked uppercase" style={{ color: c.textFaint }}>{activeProvider.pricingType === "partir" ? "À partir de" : activeProvider.pricingType === "devis" ? "Tarif" : "Tarif fixe"}</span>
                      <span className="font-display font-semibold text-xl" style={{ color: c.text }}>{providerPrice(activeProvider)}</span>
                    </div>
                  )}

                  <div className="rounded-xl p-4 mb-6" style={{ backgroundColor: c.cardAlt }}>
                    <Eyebrow>Avis clients</Eyebrow>
                    <p className="font-body text-xs font-light" style={{ color: c.textFaint }}>Les avis clients apparaîtront ici après les premières expériences partagées sur Nexlay.</p>
                  </div>

                  {(activeProvider.telephone || activeProvider.email) && (
                    <div className="flex flex-col gap-2 mb-5">
                      {activeProvider.telephone && <div className="flex items-center gap-2" style={{ color: c.textSoft }}><Phone size={13} /><span className="font-body text-sm">{activeProvider.telephone}</span></div>}
                      {activeProvider.email && <div className="flex items-center gap-2" style={{ color: c.textSoft }}><Mail size={13} /><span className="font-body text-sm">{activeProvider.email}</span></div>}
                    </div>
                  )}

                  {activeProvider.telephone && <a href={waLink(activeProvider.nom || activeProvider.name, activeProvider.telephone)} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2.5 font-body text-xs tracked uppercase py-4 rounded-full" style={{ backgroundColor: c.green, color: c.cream }}><MessageCircle size={14} /> Contacter sur WhatsApp</a>}
                </div>
              </Card>
            </div>
          </section>
        )}

        {route === "about" && (
          <section className="content-section px-6 pt-8 pb-10 md:px-10">
            <Eyebrow>Le projet</Eyebrow>
            <h2 className="font-display font-semibold text-2xl mb-9" style={{ color: c.text }}>À propos de Nexlay</h2>
            <div className="mb-8"><p className="font-body text-xs tracked uppercase mb-2.5" style={{ color: c.green }}>Le constat</p><p className="font-body text-sm leading-relaxed font-light" style={{ color: c.textSoft }}>Organiser un mariage, un anniversaire ou une cérémonie oblige aujourd'hui à chercher ses prestataires de façon dispersée — entre WhatsApp, Facebook, Instagram et le bouche-à-oreille — sans pouvoir facilement comparer leurs offres ni vérifier leurs réalisations.</p></div>
            <div className="mb-8"><p className="font-body text-xs tracked uppercase mb-2.5" style={{ color: c.green }}>Notre rôle</p><p className="font-body text-sm leading-relaxed font-light" style={{ color: c.textSoft }}>Nexlay facilite la recherche et la mise en relation entre les organisateurs d'événements et les professionnels dont ils ont besoin — un espace pour découvrir, comparer et contacter en toute confiance.</p></div>
            <div className="mb-8"><p className="font-body text-xs tracked uppercase mb-2.5" style={{ color: c.green }}>Notre approche</p><p className="font-body text-sm leading-relaxed font-light" style={{ color: c.textSoft }}>Construire d'abord une version simple et testable auprès de vrais utilisateurs, puis l'améliorer progressivement à partir de leurs retours.</p></div>
            <div className="mb-9"><p className="font-body text-xs tracked uppercase mb-2.5" style={{ color: c.green }}>Comment nous validons les profils</p><p className="font-body text-sm leading-relaxed font-light" style={{ color: c.textSoft }}>Chaque nouveau profil prestataire est examiné manuellement avant sa mise en ligne, afin de garantir un minimum de sérieux et de cohérence dans les premiers profils publiés sur Nexlay.</p></div>

            <Eyebrow>Questions fréquentes</Eyebrow>
            <div className="flex flex-col gap-2.5 mb-9">
              {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} open={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)} />)}
            </div>

            <div className="rounded-2xl p-5" style={{ border: `1px solid ${c.greenBorder}`, backgroundColor: "rgba(255,255,255,0.5)" }}>
              <div className="flex items-center gap-2 mb-2.5"><Sprig size={16} /><span className="font-body text-xs tracked uppercase" style={{ color: c.green }}>Note</span></div>
              <p className="font-body text-xs leading-relaxed font-light" style={{ color: c.textSoft }}>Nexlay rassemble les savoir-faire qui donnent une âme aux événements et facilite une mise en relation plus simple, plus humaine et plus exigeante.</p>
            </div>
          </section>
        )}
      </div>
      <BottomNav route={route} setRoute={setRoute} />
    </div>
  );
}
