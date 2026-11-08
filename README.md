# N Pallavi — Portfolio

A modern, high-performance developer portfolio showcasing data analytics solutions, interactive visualization, and hardware-software architectures.

**Live site:** https://portfolio-ten-olive-51.vercel.app

Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training).

## Tech Stack

- **React 19** – Component-based UI library
- **Vite** – Next-generation frontend build tool
- **Tailwind CSS 4** – Utility-first CSS styling
- **Framer Motion** – Physics-based animations and spring transitions
- **AOS (Animate On Scroll)** – Viewport scroll reveal animations
- **EmailJS** – Client-side email dispatch
- **WebGL** – High-performance fluid simulation splash cursor

## Run Locally

Clone the repository and install the dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Environment Variables

To enable the direct contact form via EmailJS, create a `.env.local` file in the project root with the following variables:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

If these variables are omitted, the contact form automatically falls back to the user's default email client via `mailto`.
