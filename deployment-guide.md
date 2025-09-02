# Vercel Deployment Guide: Separate Web & Mobile Apps

## 🎯 Goal
Deploy two separate applications:
1. **Web Dashboard** - Admin interface with dashboard, reports, alerts, AI risk
2. **Mobile App** - Community Care mobile interface for field workers

## 📁 Project Structure

### Current Structure:
```
health-surveillance/
├── client/
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── Reports.tsx
│   │   ├── Alerts.tsx
│   │   ├── AIRisk.tsx
│   │   └── mobile/
│   │       ├── Home.tsx
│   │       ├── ReportForm.tsx
│   │       └── WaterTest.tsx
│   └── components/
└── server/
```

### Target Structure:
```
health-surveillance-web/     (Repository 1)
├── src/
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── Reports.tsx
│   │   ├── Alerts.tsx
│   │   └── AIRisk.tsx
│   └── components/
└── package.json

health-surveillance-mobile/  (Repository 2)
├── src/
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── ReportForm.tsx
│   │   └── WaterTest.tsx
│   └── components/
└── package.json
```

## 🔧 Setup Instructions

### 1. Web App Setup

1. **Create new repository: `health-surveillance-web`**
2. **Copy files for web app:**
   ```bash
   # Copy these files/folders:
   client/pages/Dashboard.tsx
   client/pages/Reports.tsx
   client/pages/Alerts.tsx
   client/pages/AIRisk.tsx
   client/pages/Login.tsx
   client/pages/Index.tsx
   client/components/ui/
   client/lib/
   client/global.css
   ```

3. **Create Web App package.json:**
   ```json
   {
     "name": "health-surveillance-web",
     "private": true,
     "type": "module",
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "preview": "vite preview"
     },
     "dependencies": {
       "react": "^18.3.1",
       "react-dom": "^18.3.1",
       "react-router-dom": "^6.30.1",
       "@tanstack/react-query": "^5.84.2",
       "lucide-react": "^0.539.0",
       // ... other dependencies from your current package.json
     },
     "devDependencies": {
       "@vitejs/plugin-react-swc": "^4.0.0",
       "vite": "^7.1.2",
       "typescript": "^5.9.2",
       "tailwindcss": "^3.4.17"
       // ... other dev dependencies
     }
   }
   ```

4. **Create Web App vite.config.ts:**
   ```typescript
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react-swc";
   import path from "path";

   export default defineConfig({
     plugins: [react()],
     resolve: {
       alias: {
         "@": path.resolve(__dirname, "./src"),
       },
     },
     build: {
       outDir: "dist",
     },
   });
   ```

5. **Create Web App.tsx (entry point):**
   ```typescript
   import "./global.css";
   import { BrowserRouter, Routes, Route } from "react-router-dom";
   import Dashboard from "./pages/Dashboard";
   import Reports from "./pages/Reports";
   import Alerts from "./pages/Alerts";
   import AIRisk from "./pages/AIRisk";
   import Login from "./pages/Login";

   function App() {
     return (
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Login />} />
           <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/reports" element={<Reports />} />
           <Route path="/alerts" element={<Alerts />} />
           <Route path="/ai-risk" element={<AIRisk />} />
         </Routes>
       </BrowserRouter>
     );
   }

   export default App;
   ```

### 2. Mobile App Setup

1. **Create new repository: `health-surveillance-mobile`**
2. **Copy files for mobile app:**
   ```bash
   # Copy these files/folders:
   client/pages/mobile/
   client/components/ui/
   client/lib/
   client/global.css
   ```

3. **Create Mobile App package.json:**
   ```json
   {
     "name": "health-surveillance-mobile",
     "private": true,
     "type": "module",
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "preview": "vite preview"
     },
     "dependencies": {
       "react": "^18.3.1",
       "react-dom": "^18.3.1",
       "react-router-dom": "^6.30.1",
       "idb": "^8.0.3",
       "lucide-react": "^0.539.0",
       // ... mobile-specific dependencies
     },
     "devDependencies": {
       "@vitejs/plugin-react-swc": "^4.0.0",
       "vite": "^7.1.2",
       "vite-plugin-pwa": "^1.0.3",
       "typescript": "^5.9.2",
       "tailwindcss": "^3.4.17"
     }
   }
   ```

4. **Create Mobile vite.config.ts with PWA:**
   ```typescript
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react-swc";
   import { VitePWA } from "vite-plugin-pwa";
   import path from "path";

   export default defineConfig({
     plugins: [
       react(),
       VitePWA({
         registerType: "autoUpdate",
         manifest: {
           name: "Community Care Mobile",
           short_name: "CommunityCare",
           description: "Mobile app for health surveillance",
           theme_color: "#0f172a",
           background_color: "#ffffff",
           display: "standalone",
           orientation: "portrait",
           start_url: "/",
           scope: "/",
         },
         workbox: {
           globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
         },
       }),
     ],
     resolve: {
       alias: {
         "@": path.resolve(__dirname, "./src"),
       },
     },
   });
   ```

5. **Create Mobile App.tsx:**
   ```typescript
   import "./global.css";
   import { BrowserRouter, Routes, Route } from "react-router-dom";
   import MobileLayout from "./pages/MobileLayout";
   import Home from "./pages/Home";
   import ReportForm from "./pages/ReportForm";
   import WaterTest from "./pages/WaterTest";
   import Notifications from "./pages/Notifications";

   function App() {
     return (
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<MobileLayout />}>
             <Route index element={<Home />} />
             <Route path="report" element={<ReportForm />} />
             <Route path="water" element={<WaterTest />} />
             <Route path="notifications" element={<Notifications />} />
           </Route>
         </Routes>
       </BrowserRouter>
     );
   }

   export default App;
   ```

## 🚀 Manual Vercel Deployment

### Prerequisites:
1. Install Vercel CLI: `npm i -g vercel`
2. Create accounts: GitHub + Vercel
3. Create two separate GitHub repositories

### Deploy Web App:

1. **Push to GitHub:**
   ```bash
   cd health-surveillance-web
   git init
   git add .
   git commit -m "Initial web app"
   git remote add origin https://github.com/yourusername/health-surveillance-web.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   ```bash
   # Option 1: Using Vercel CLI
   vercel login
   vercel --prod

   # Option 2: Via Vercel Dashboard
   # Go to https://vercel.com/dashboard
   # Click "Import Project"
   # Connect GitHub repo: health-surveillance-web
   # Configure build settings:
   ```

3. **Vercel Configuration (vercel.json):**
   ```json
   {
     "name": "health-surveillance-web",
     "version": 2,
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

### Deploy Mobile App:

1. **Push to GitHub:**
   ```bash
   cd health-surveillance-mobile
   git init
   git add .
   git commit -m "Initial mobile app"
   git remote add origin https://github.com/yourusername/health-surveillance-mobile.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   ```bash
   vercel login
   vercel --prod
   ```

3. **Mobile Vercel Configuration:**
   ```json
   {
     "name": "health-surveillance-mobile",
     "version": 2,
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
     ],
     "headers": [
       {
         "source": "/sw.js",
         "headers": [
           {
             "key": "Cache-Control",
             "value": "no-cache"
           }
         ]
       }
     ]
   }
   ```

## 🌐 Domain Configuration

After deployment, you'll get:
- **Web App**: `https://health-surveillance-web.vercel.app`
- **Mobile App**: `https://health-surveillance-mobile.vercel.app`

### Custom Domains (Optional):
1. **Web**: `admin.yourdomain.com`
2. **Mobile**: `app.yourdomain.com` or `mobile.yourdomain.com`

### Setting Custom Domains:
1. Go to your Vercel project dashboard
2. Click "Domains" tab
3. Add your custom domain
4. Update DNS records as instructed

## 🔧 Environment Variables

Set these in Vercel dashboard for each project:

### Web App:
```
VITE_API_URL=https://your-api-endpoint.com
VITE_MOBILE_APP_URL=https://health-surveillance-mobile.vercel.app
```

### Mobile App:
```
VITE_API_URL=https://your-api-endpoint.com
VITE_WEB_APP_URL=https://health-surveillance-web.vercel.app
```

## 🚀 Quick Deploy Commands

```bash
# Deploy web app
cd health-surveillance-web
vercel --prod

# Deploy mobile app  
cd health-surveillance-mobile
vercel --prod
```

## 📱 Testing

### Web App:
- Test on desktop/laptop browsers
- Check responsive design
- Verify dashboard functionality

### Mobile App:
- Test on mobile devices
- Check PWA installation
- Test offline functionality
- Verify touch interactions

## 🔄 CI/CD (Optional)

Set up automatic deployments:
1. Connect GitHub repos to Vercel
2. Enable auto-deploy on push to main
3. Set up preview deployments for PR branches

Your apps will now deploy automatically when you push to GitHub!
