# Essential Root Directory Structure for Vercel

## 🎯 Minimum Required Files

### For ANY Vercel deployment, your root MUST contain:

```
your-project/                       (Repository Root)
├── package.json                    ✅ REQUIRED - Vercel reads this first
├── index.html                      ✅ REQUIRED - Entry point for SPA
├── vite.config.ts                  ✅ REQUIRED - Build configuration
└── src/                            ✅ REQUIRED - Source code
    ├── App.tsx                     ✅ REQUIRED - Main component
    ├── main.tsx                    ✅ REQUIRED - React entry point
    └── ...
```

## 📋 Recommended Root Files

```
your-project/
├── package.json                    ✅ REQUIRED
├── index.html                      ✅ REQUIRED  
├── vite.config.ts                  ✅ REQUIRED
├── vercel.json                     ⭐ RECOMMENDED - Deployment config
├── tsconfig.json                   ⭐ RECOMMENDED - TypeScript
├── tailwind.config.ts              ⭐ RECOMMENDED - If using Tailwind
├── postcss.config.js               ⭐ RECOMMENDED - If using PostCSS
├── .env.example                    ⭐ RECOMMENDED - Environment template
├── .gitignore                      ⭐ RECOMMENDED - Git ignore rules
├── README.md                       ⭐ RECOMMENDED - Documentation
└── src/                            ✅ REQUIRED
    ├── App.tsx
    ├── main.tsx
    ├── global.css
    ├── pages/
    ├── components/
    └── lib/
```

## 🔧 Key Configuration Files

### 1. package.json (REQUIRED)
```json
{
  "name": "your-app",
  "scripts": {
    "build": "vite build",
    "dev": "vite",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "vite": "^7.1.2",
    "@vitejs/plugin-react": "^4.0.0"
  }
}
```

### 2. index.html (REQUIRED)
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### 3. vite.config.ts (REQUIRED)
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
```

### 4. vercel.json (RECOMMENDED)
```json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

## 🚀 Vercel Import Process

### What happens when you click "Import Project":

1. **Framework Detection**
   - Vercel scans `package.json`
   - Detects Vite + React
   - Auto-configures build settings

2. **Build Configuration**
   - **Build Command**: `npm run build` (from package.json)
   - **Output Directory**: `dist` (from vite.config.ts)
   - **Install Command**: `npm install`

3. **Environment Variables**
   - You can add these in Vercel dashboard
   - Or create `.env.local` (not committed to git)

4. **Domain Assignment**
   - Gets auto-generated URL: `your-project-hash.vercel.app`
   - You can add custom domain later

## 📁 Folder Structure Examples

### Current Monolithic App (Import as-is):
```
health-surveillance/
├── package.json                    ← Points to client build
├── index.html                      ← Points to /client/App.tsx
├── vite.config.ts                  ← Configured for client folder
├── client/                         ← Source code here
├── server/                         ← Ignored by Vercel
└── shared/                         ← Shared utilities
```

### Separate Web App:
```
health-surveillance-web/
├── package.json                    ← Web dependencies only
├── index.html                      ← Points to /src/main.tsx
├── vite.config.ts                  ← Clean web config
└── src/                            ← Clean structure
    ├── App.tsx                     ← Web routes only
    ├── main.tsx
    ├── pages/
    │   ├── Dashboard.tsx
    │   ├── Reports.tsx
    │   ├── Alerts.tsx
    │   └── AIRisk.tsx
    └── components/
```

### Separate Mobile App:
```
health-surveillance-mobile/
├── package.json                    ← Mobile + PWA dependencies
├── index.html                      ← Mobile-optimized
├── vite.config.ts                  ← PWA + mobile config
├── manifest.json                   ← PWA manifest
└── src/
    ├── App.tsx                     ← Mobile routes only
    ├── main.tsx
    ├── pages/
    │   ├── Home.tsx
    │   ├── ReportForm.tsx
    │   └── WaterTest.tsx
    └── components/
```

## ⚡ Quick Import Tips

### Before importing to Vercel:

1. **Test build locally**:
   ```bash
   npm run build
   npm run preview
   ```

2. **Check package.json scripts**:
   - `build` command exists
   - `dev` command exists
   - Dependencies are correct

3. **Verify output**:
   - `dist/` folder is created
   - `dist/index.html` exists
   - Assets are bundled

4. **Push to GitHub**:
   - All files committed
   - `.env` not committed (use `.env.example`)
   - Repository is public or Vercel has access

### Vercel will automatically:
- Detect your framework
- Run `npm install`
- Run `npm run build`
- Deploy the `dist/` folder
- Assign a URL

That's it! Your root directory structure determines how smoothly Vercel import works.
