On Vercel: New Project → Import your GitHub repo → Set Framework: Vite, Install: pnpm install, Build: pnpm build, Output: dist/spa.
Add vercel.json with SPA fallback: { "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }.
If you need APIs, move Express to Vercel Functions (api/*.ts) or wrap createServer() with serverless-http in api/index.ts; don’t use a custom server.
Redeploy; NOT_FOUND/ROUTER_CANNOT_MATCH = missing rewrite/output dir; 5xx on Function = bug in api code (check Vercel logs).On Vercel: New Project → Import your GitHub repo → Set Framework: Vite, Install: pnpm install, Build: pnpm build, Output: dist/spa.
Add vercel.json with SPA fallback: { "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }.
If you need APIs, move Express to Vercel Functions (api/*.ts) or wrap createServer() with serverless-http in api/index.ts; don’t use a custom server.
Redeploy; NOT_FOUND/ROUTER_CANNOT_MATCH = missing rewrite/output dir; 5xx on Function = bug in api code (check Vercel logs).
