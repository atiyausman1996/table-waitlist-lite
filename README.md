# Table Waitlist Lite

A simple restaurant waitlist prototype built with modern full-stack tools.

---

## Tech Choices

- **Next.js 14 (App Router)** — Leveraged for its support of Server Components, Server Actions, and file-based routing with excellent DX.
- **MongoDB Atlas** — Chosen for flexibility, cloud-first setup, and developer-friendly NoSQL experience.
- **Tailwind CSS** — Provides fast styling and responsive layout control without writing custom CSS.
- **React Hot Toast** — Lightweight notification library to give users immediate feedback.
- **Deployed on Vercel** _(optional)_ — Zero-config deployment + built-in Edge runtime support.

---

## Live App

**[View Live on Vercel](https://table-waitlist-lite.vercel.app)**

---

## ⚙️ Setup

1. Clone this repository or unzip the folder:

   ```bash
   git clone https://github.com/YOUR_USERNAME/table-waitlist-lite.git
   cd table-waitlist-lite

   ```

2. Install dependencies:

```bash
   npm install

```

3. Create a .env.local file with your MongoDB URI:

```bash
   MONGODB_URI=mongodb+srv://<user>:<pass>@<cluster>.mongodb.net/waitlistDB?retryWrites=true&w=majority&tls=true

```

4. Run the app:

```bash
   npm run dev

```
