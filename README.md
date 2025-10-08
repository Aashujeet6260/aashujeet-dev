# 🌐 Aashujeet Dev Portfolio

A modern and responsive personal portfolio website showcasing my skills, projects, and experience as a web developer.

## 🚀 Features

- **Modern UI/UX:** Clean and elegant design.
- **Smooth Animations:** Seamless transitions powered by Framer Motion.
- **Fully Responsive:** Optimized for all screen sizes — mobile, tablet, and desktop.
- **Easy Customization:** All data is centralized for quick updates.
- **Component-Based:** Built using modular and reusable React components.

## 🛠️ Tech Stack

- **Next.js** – React framework for server-side rendering and performance.
- **React.js** – For building dynamic user interfaces.
- **Tailwind CSS** – Utility-first CSS framework for styling.
- **Framer Motion** – For animations and transitions.
- **HeroUI** – Beautiful prebuilt UI components.
- **Iconify** – Wide icon support for consistent design.
- **TypeScript** – Type-safe JavaScript for better scalability.

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Aashujeet6260/aashujeet-dev
   cd aashujeet-dev
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Then open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   # or
   yarn build
   ```
   The production-ready files will be generated in the `dist` directory.

## 📄 CV Integration

1. Place your CV (PDF) inside the `public` folder.
2. Update the **"Download CV"** button in `hero.tsx`:
   ```tsx
   <Link download href="/your-cv-filename.pdf">
     <Button endContent={<Icon icon="lucide:download" />}>Download CV</Button>
   </Link>
   ```

## 📬 Contact Form

This portfolio uses **Email.js** for contact form submissions — no backend required.

1. Create an account at [Email.js](https://www.emailjs.com/).
2. Set up your service, template, and get your **Public Key**.
3. Add these credentials in your `.env.local` file:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```
4. Restart your development server.

## 📚 Sections Overview

- **Home:** Introduction, skills overview, and hero animation.
- **About:** Background, education, and experience details.
- **Projects:** A showcase of my key development projects.
- **Contact:** Direct contact form and location map.

## 🪪 License

This project is licensed under the **MIT License** — you’re free to use and modify it with attribution.
