# Clientflow-v2

Clientflow-v2 is a **CRM Dashboard SaaS project** built with **React**, **TailwindCSS**, and **Vite**.
It demontrates modern frontend engineering practices with responsive layouts, reusable components, and realistic authentication flows.

---

## Features(Current Progress)

- Responsive **Dashboard UI** with charts powered by **Recharts**
- **Client Management Pages** with full CRUD functionality
- **Authentication Flow**: login & registration with realistic UX
- **LocalStorage persistence** for sessions and client data
- API enpoints scaffolded for future backend integration

---

## Tech Stack

- **React 19** (component architecture, hooks)
- **TailwindCSS** (utility-first styling, responsive design)
- **Vite** (fast building and dev server)
- **Recharts** (data visualization)
- **JavaScript (ES6+)**

---

## Project Structure

```Markdown
clientflow-v2/
├── src/
|   ├── assets           # images, icons
|   ├── components/      # Reusable UI components
|   ├── context/         # AuthProvider, global state
|   ├── data/            # Seed, mock data
|   ├── hooks/           # Custom React hooks
|   ├── layouts/         # AppLayouts,MainConetent
|   ├── pages/           # Dashboard, Clients
|   ├── routes/          # ProtectedRoute
|   ├── services/        # Clients CRUD engine
|   ├── utils/           # storage
|   ├── App.jsx
|   ├── Main.jsx         # Entry point
|   └── index.css        # custom CSS (Tailwindcss)
├── index.html
├── .gitignore
├── package.json
└── README.md
```

---

## Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/webwizsharmin/clientflow-v2.git
   ```

2. Navigate into the project:

   ```bash
   cd clientflow-v2
   ```

3. Install dependencies:

```bash
npm install
```

4. Start development server:

```bash
npm run dev
```

---

## Deployment

Clientfow-v2 is deployed via vercel for live demo access.
**Live Demo:** https://clientflow-v2-1sgq.vercel.app/

---

## Roadmap

- integrate real backend authentication(JWT/OAuth)
- Expand dashboard metrics and chart types
- Add Tasks, Invoic pages with CRUD functionality
- Add dark mode toggle
- Role-based access control for users
- optimize for production(API integration, performance tuning)

---

## Contributing

This project is currently under active development. Suggestions, issues, and pull requests are welcome.

---

## License

This project is licensed under the MIT License.

## Contact

Create by **Sharmin Aktar**

- Portfolio: https://portfolio-eta-tawny-32.vercel.app/
- LinkedIn: https://www.linkedin.com/in/webwizsharmin/
- Email: webwizsharmin@gmail.com
