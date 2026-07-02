# 🌊 FlowBoard

FlowBoard ist ein hochperformanter, modularer Kanban-Board-Klon. Das Projekt fokussiert sich auf eine saubere, skalierbare Systemarchitektur und verzichtet bewusst auf "Vibe Coding". 

Entwickelt mit einem strikten Layer-Design, um Logik, UI und Datenbankzugriffe im Next.js App Router absolut sauber zu trennen.

## 🛠 Tech Stack

Das Fundament der Anwendung bildet ein moderner TypeScript-Stack:

* **Framework:** Next.js (App Router, Server Actions)
* **Frontend:** React 18, Tailwind CSS, shadcn/ui
* **State Management / Drag & Drop:** @dnd-kit/core (mit Optimistic UI Updates)
* **Datenbank:** PostgreSQL (Cloud-hosted via Supabase/Neon)
* **ORM:** Drizzle ORM
* **Deployment:** Vercel

## 🏛 Architektur-Prinzipien

Dieses Projekt folgt strikten Architektur-Vorgaben:
1. **Separation of Concerns:** UI-Komponenten (Client) wissen nichts von der Datenbank.
2. **Server-First:** Mutationen werden ausschließlich über typsichere Next.js Server Actions abgewickelt.
3. **No Magic:** Drizzle ORM wird verwendet, um nahe an nativem SQL zu bleiben und N+1-Query-Probleme zu vermeiden.

## 🚀 Lokales Setup

Das Projekt kann direkt lokal über Node.js ausgeführt werden. Eine laufende Cloud-Datenbank wird vorausgesetzt.

1. Repository klonen: 
```bash
   git clone https://github.com/ObaiAlbek/flowboard.git
```

2. In das Projektverzeichnis wechseln und Abhängigkeiten installieren:
```bash
npm install

```


3. Umgebungsvariablen einrichten:
Erstelle eine `.env.local` Datei im Hauptverzeichnis und füge deinen Datenbank-String hinzu:
```env
DATABASE_URL="postgres://dein-user:dein-passwort@deine-cloud-db.com/kanban"

```


4. Development-Server starten:
```bash
npm run dev

```


## 👤 Lead Developer

Das gesamte Systemdesign, die Architektur und die Fullstack-Entwicklung werden zentral gesteuert von:

* **Obai** - System Architecture & Development

---

*Gebaut mit Fokus auf Struktur und Code-Qualität.*
