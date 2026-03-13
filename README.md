# Yassin Al-Yassin — Personal Finance Portfolio

A professional personal finance portfolio website with a Bloomberg-terminal aesthetic. Built with React, Vite, and Tailwind CSS.

## What This Is

Single-page portfolio showcasing financial modelling projects, experience, skills, and contact information. Designed for finance professionals — dark navy background, gold accents, clean typography.

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Deploy to Vercel

1. Push this repo to GitHub (or connect your Git provider).
2. Go to [vercel.com](https://vercel.com) and sign in.
3. Click **Add New Project** and import your repository.
4. Vercel will auto-detect Vite — no build config needed.
5. Click **Deploy**.

Your site will be live at `your-project.vercel.app`. For a custom domain like `yassinaly.com` or `yassinalyassin.com`, add it in Project Settings → Domains.

## Add New Project Cards

Edit `src/components/Projects.jsx`. Add a new object to the `projects` array:

```jsx
{
  id: 3,
  title: 'Company Name | Model Type',
  ticker: 'LON:XXXX | Sector',
  modelType: 'DCF',  // or LBO, Comps, etc.
  description: '2 to 3 line description of the analysis.',
  metrics: ['Metric 1', 'Metric 2', 'Metric 3'],
  downloadUrl: '/models/Your_Model.xlsx',
  downloadFilename: 'Your_Model.xlsx',
  memoUrl: null,  // or a URL to your memo PDF
  isPlaceholder: false,
},
```

Place the Excel file in `public/models/` and it will be served at `/models/Your_Model.xlsx`.

## Swap Out the CV PDF

1. Replace `public/cv.pdf` with your CV file.
2. Ensure the filename is `cv.pdf` (or update the link in `src/components/Hero.jsx`).
3. The "Download CV" button will use the `download` attribute so users get your filename.

## File Structure

```
yassin-finance-portfolio/
├── public/
│   ├── cv.pdf              # Add your CV here (replace placeholder)
│   └── models/             # Excel files for Download Model buttons
│       ├── Jet2_DCF_v2.xlsx
│       ├── eVTOL_Unit_Economics.xlsx
│       └── Pets_at_Home_LBO.xlsx
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── ...
```

## Domain Suggestions

- **yassinaly.com** — Short, memorable
- **yassinalyassin.com** — Full name, professional

Update your LinkedIn URL in `src/components/Contact.jsx` (currently set to `https://linkedin.com/in/yassinalyassin`).
