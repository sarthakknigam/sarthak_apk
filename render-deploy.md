# Deploying backend to Render (quick guide)

1. Create a GitHub repo with the `backend/` folder contents.
2. Sign up at https://render.com and create a new Web Service -> Connect to GitHub.
3. Point to the backend repo and set the start command: `node server.js`
4. Under Environment, set:
   - DATABASE_URL (you can add a Render Postgres add-on)
   - UPLOAD_DIR (optional)
5. Deploy. After deployment, copy the service URL and paste into mobile/.env as API_URL.
