# UDA File Management System Backend

A Node.js backend for file management system built with Express and MongoDB.

## Deployment to Vercel

### Prerequisites
1. Install Vercel CLI: `npm i -g vercel`
2. Have a MongoDB database (MongoDB Atlas recommended)
3. Git repository set up

### Environment Variables
You'll need to set these environment variables in Vercel:

- `MONGODB_URL`: Your MongoDB connection string
- `PORT`: Server port (Vercel will set this automatically)

### Deployment Steps

1. **Login to Vercel:**
   ```bash
   vercel login
   ```

2. **Deploy to Vercel:**
   ```bash
   vercel
   ```

3. **Set Environment Variables:**
   - Go to your Vercel dashboard
   - Select your project
   - Go to Settings > Environment Variables
   - Add `MONGODB_URL` with your MongoDB connection string

4. **Redeploy with Environment Variables:**
   ```bash
   vercel --prod
   ```

### API Endpoints
- `GET /api/files` - Get all files
- `POST /api/files` - Upload a file
- `GET /api/files/:id` - Get a specific file
- `PUT /api/files/:id` - Update a file
- `DELETE /api/files/:id` - Delete a file

### Local Development
```bash
npm install
npm run dev
```

### Production
```bash
npm start
```
