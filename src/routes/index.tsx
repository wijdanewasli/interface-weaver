import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Bell,
  BookOpen,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  FileCheck2,
  GraduationCap,
  Menu,
  MessageSquare,
  Search,
  UsersRound,
} from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";
import orbitImage from "@/assets/edutek-orbit.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tableau de bord enseignant | EduTek" },
      { name: "description", content: "Pilotez cours, devoirs, présence et annonces depuis votre espace EduTek." },
      { property: "og:title", content: "Tableau de bord enseignant | EduTek" },
      { property: "og:description", content: "L'espace pédagogique centralisé des enseignants EduTek." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type PanelProps = { children: ReactNode; className?: string };

function Panel({ children, className = "" }: PanelProps) {
  return <section className={`panel-reveal overflow-hidden rounded-[1.35rem] border-2 border-foreground bg-card ${className}`}>{children}</section>;
}

const navItems = ["Vue d'ensemble", "Mes cours", "Classes", "Devoirs", "Présence"];

function Index() {
  const [activeNav, setActiveNav] = useState("Vue d'ensemble");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background p-2 text-foreground sm:p-3">
      <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[1.7rem] border-[3px] border-foreground bg-card shadow-[0_5px_0_var(--foreground)]">
        <header className="flex min-h-14 items-center gap-2 border-b-2 border-foreground px-3 py-2 sm:px-4">
          <a href="#dashboard" className="font-display text-xl font-bold">EduTek<span className="text-muted-foreground">®</span></a>
          <nav className="ml-4 hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
            {navItems.map((item) => (
              <button key={item} onClick={() => setActiveNav(item)} className={`rounded-full border border-foreground px-3 py-1.5 text-xs font-semibold transition-colors ${activeNav === item ? "bg-primary text-primary-foreground" : "bg-card hover:bg-muted"}`}>{item}</button>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <button aria-label="Rechercher" className="grid size-9 place-items-center rounded-full border border-foreground bg-card hover:bg-muted"><Search size={16} /></button>
            <button aria-label="Notifications" className="relative grid size-9 place-items-center rounded-full border border-foreground bg-card hover:bg-muted"><Bell size={16} /><span className="absolute right-1 top-1 size-2 rounded-full bg-accent ring-1 ring-foreground" /></button>
            <button onClick={() => setMenuOpen((open) => !open)} className="flex items-center gap-2 rounded-full border border-foreground px-3 py-1.5 text-xs font-semibold"><Menu size={15} /> Menu</button>
          </div>
        </header>

        {menuOpen && <div className="flex flex-wrap gap-2 border-b-2 border-foreground bg-muted p-3 lg:hidden">{navItems.map((item) => <button key={item} onClick={() => { setActiveNav(item); setMenuOpen(false); }} className="rounded-full border border-foreground bg-card px-3 py-1.5 text-xs font-semibold">{item}</button>)}</div>}

        <div id="dashboard" className="grid gap-2 p-2 lg:grid-cols-12">
          <Panel className="relative min-h-[325px] bg-panel-dark text-primary-foreground lg:col-span-6">
            <img src={orbitImage} alt="Visualisation abstraite de l'écosystème EduTek" width={1200} height={700} className="absolute inset-0 h-full w-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-panel-dark via-panel-dark/70 to-transparent" />
            <div className="relative flex h-full min-h-[325px] flex-col p-5 sm:p-7">
              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest"><span>Mercredi 07 octobre</span><span>08:32</span></div>
              <div className="my-auto max-w-md py-8">
                <p className="mb-3 text-xs font-medium text-primary-foreground/70">Bonjour, Prof. Amine</p>
                <h1 className="font-display text-4xl font-semibold leading-[1.02] sm:text-5xl">Votre journée pédagogique, en un coup d’œil.</h1>
              </div>
              <button className="flex w-fit items-center gap-3 rounded-full border border-primary-foreground px-4 py-2 text-xs font-bold hover:bg-primary-foreground hover:text-primary">Voir mon planning <ArrowUpRight size={14} /></button>
            </div>
          </Panel>

          <Panel className="flex min-h-[325px] flex-col bg-sun p-5 lg:col-span-3">
            <div className="flex items-start justify-between"><span className="rounded-full border border-foreground px-2 py-1 text-[10px] font-bold uppercase">Prochain cours</span><ArrowUpRight size={19} /></div>
            <div className="mt-auto">
              <div className="mb-6 grid size-12 place-items-center rounded-full border-2 border-foreground bg-card"><BookOpen size={21} /></div>
              <h2 className="font-display text-3xl font-semibold">Algorithmique</h2>
              <p className="mt-1 text-sm">L2 Informatique · Groupe A</p>
              <div className="mt-5 flex items-center justify-between border-t-2 border-foreground pt-3 text-sm font-semibold"><span className="flex items-center gap-2"><Clock3 size={15} /> 09:00</span><span>Salle B12</span></div>
            </div>
          </Panel>

          <Panel className="flex min-h-[325px] flex-col bg-sage p-5 lg:col-span-3">
            <div className="flex items-start justify-between"><span className="rounded-full border border-foreground px-2 py-1 text-[10px] font-bold uppercase">Présence</span><ArrowUpRight size={19} /></div>
            <div className="mt-auto">
              <p className="text-sm font-semibold">Taux cette semaine</p>
              <div className="font-display text-6xl font-semibold">94<span className="text-3xl">%</span></div>
              <div className="mt-6 flex h-24 items-end gap-2 border-b-2 border-foreground pb-1">{["h-[44%]", "h-[62%]", "h-[55%]", "h-[78%]", "h-[90%]"].map((heightClass, i) => <div key={heightClass} className={`flex-1 rounded-t-md border border-foreground ${heightClass} ${i === 4 ? "bg-primary" : "bg-card"}`} />)}</div>
              <div className="mt-2 flex justify-between text-[10px] font-bold uppercase"><span>Lun</span><span>Mar</span><span>Mer</span><span>Jeu</span><span>Ven</span></div>
            </div>
          </Panel>

          <Panel className="p-5 lg:col-span-6">
            <div className="flex items-center justify-between"><div><span className="rounded-full border border-foreground px-2 py-1 text-[10px] font-bold uppercase">À corriger</span><h2 className="mt-3 font-display text-3xl font-semibold">Travaux récents</h2></div><button aria-label="Voir tous les devoirs" className="grid size-9 place-items-center rounded-full border border-foreground"><ChevronRight size={18} /></button></div>
            <div className="mt-5 space-y-3">
              {[{ title: "Structures de données", meta: "18 / 24 rendus", due: "Aujourd'hui", value: 75, width: "w-3/4" }, { title: "Modèle relationnel", meta: "21 / 26 rendus", due: "Demain", value: 81, width: "w-4/5" }].map((work) => <button key={work.title} className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-3 border-t border-rule py-3 text-left"><span className="grid size-10 place-items-center rounded-full bg-muted"><FileCheck2 size={18} /></span><span><strong className="block text-sm">{work.title}</strong><small className="text-muted-foreground">{work.meta} · {work.due}</small></span><span className="w-20"><span className="mb-1 block text-right text-xs font-bold">{work.value}%</span><span className="block h-2 overflow-hidden rounded-full bg-muted"><span className={`block h-full rounded-full bg-primary ${work.width}`} /></span></span></button>)}
            </div>
          </Panel>

          <Panel className="bg-lilac p-5 lg:col-span-3">
            <div className="flex items-center justify-between"><span className="rounded-full border border-foreground px-2 py-1 text-[10px] font-bold uppercase">Mes cours</span><GraduationCap size={21} /></div>
            <h2 className="mt-8 font-display text-4xl font-semibold">06</h2><p className="text-sm font-semibold">cours actifs</p>
            <div className="mt-6 space-y-2 text-sm">{["Algorithmique", "Bases de données", "Développement web"].map((course, index) => <div key={course} className="flex items-center justify-between border-t border-foreground/50 pt-2"><span>{course}</span><span className="rounded-full bg-card px-2 py-0.5 text-[10px] font-bold">{index === 2 ? "BROUILLON" : "PUBLIÉ"}</span></div>)}</div>
          </Panel>

          <Panel className="p-5 lg:col-span-3">
            <div className="flex items-center justify-between"><span className="rounded-full border border-foreground px-2 py-1 text-[10px] font-bold uppercase">Messages</span><MessageSquare size={20} /></div>
            <h2 className="mt-8 font-display text-4xl font-semibold">08</h2><p className="text-sm font-semibold">non lus</p>
            <div className="mt-6 flex -space-x-2">{["SA", "MK", "RB", "+5"].map((name, i) => <span key={name} className={`grid size-10 place-items-center rounded-full border-2 border-card text-xs font-bold ${i === 3 ? "bg-primary text-primary-foreground" : "bg-muted"}`}>{name}</span>)}</div>
            <button className="mt-5 flex items-center gap-2 text-xs font-bold">Ouvrir la messagerie <ArrowUpRight size={14} /></button>
          </Panel>

          <Panel className="p-5 lg:col-span-8">
            <div className="flex flex-wrap items-center justify-between gap-3"><div><span className="rounded-full border border-foreground px-2 py-1 text-[10px] font-bold uppercase">Planning du jour</span><h2 className="mt-3 font-display text-3xl font-semibold">4 séances programmées</h2></div><button className="flex items-center gap-2 rounded-full border border-foreground px-4 py-2 text-xs font-bold"><CalendarDays size={15} /> Semaine</button></div>
            <div className="mt-5 grid gap-2 sm:grid-cols-3">{[{ time: "09:00", title: "Algorithmique", room: "B12" }, { time: "11:00", title: "Bases de données", room: "Lab 02" }, { time: "14:30", title: "Développement web", room: "A08" }].map((slot, i) => <div key={slot.time} className={`rounded-xl border border-foreground p-3 ${i === 0 ? "bg-primary text-primary-foreground" : "bg-card"}`}><span className="text-xs font-bold">{slot.time}</span><h3 className="mt-5 font-display text-lg font-semibold">{slot.title}</h3><p className="text-xs opacity-70">L2 · Salle {slot.room}</p></div>)}</div>
          </Panel>

          <Panel className="bg-primary p-5 text-primary-foreground lg:col-span-4">
            <div className="flex items-center justify-between"><span className="rounded-full border border-primary-foreground px-2 py-1 text-[10px] font-bold uppercase">Annonce</span><UsersRound size={20} /></div>
            <h2 className="mt-8 font-display text-2xl font-semibold">Réunion pédagogique</h2><p className="mt-2 text-sm text-primary-foreground/70">Jeudi à 16:00 · Salle des conseils</p>
            <div className="mt-8 flex items-center gap-2 text-xs font-bold"><span className="grid size-6 place-items-center rounded-full bg-accent text-accent-foreground"><Check size={13} /></span> Ajouté à votre calendrier</div>
          </Panel>
        </div>
      </div>
    </main>
  );
}
