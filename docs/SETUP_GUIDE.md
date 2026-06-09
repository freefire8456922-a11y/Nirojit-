# Shivam Mobile Shop - Setup Guide

## Prerequisites

- **Node.js**: v18 or higher
- **npm** or **yarn**: Latest version
- **Git**: For version control
- **MongoDB Atlas Account**: For database
- **Cloudinary Account**: For image storage
- **Gmail Account**: For email notifications

## Step 1: Clone Repository

```bash
git clone https://github.com/freefire8456922-a11y/Nirojit-.git
cd Nirojit-
```

## Step 2: Frontend Setup

### Install Dependencies

```bash
cd frontend
npm install
```

### Configure Environment Variables

1. Copy the example file:
```bash
cp .env.example .env.local
```

2. Update `.env.local` with your values:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_BUSINESS_NAME=Shivam Mobile Shop
NEXT_PUBLIC_BUSINESS_PHONE=+917637014699
NEXT_PUBLIC_BUSINESS_WHATSAPP=917637014699
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_name
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### Run Development Server

```bash
npm run dev
```

Frontend will be available at `http://localhost:3000`

## Step 3: Backend Setup

### Install Dependencies

```bash
cd ../backend
npm install
```

### Configure Environment Variables

1. Copy the example file:
```bash
cp .env.example .env
```

2. Update `.env` with your values:

#### MongoDB Setup
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/shivam_mobile_shop`

#### Cloudinary Setup
1. Go to [Cloudinary](https://cloudinary.com/)
2. Sign up and get your credentials
3. Add to `.env`:
```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

#### Email Setup (Gmail)
1. Enable 2-Factor Authentication
2. Generate App Password: https://myaccount.google.com/apppasswords
3. Add to `.env`:
```env
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_specific_password
ADMIN_EMAIL=admin@shivammobileshop.com
```

#### JWT Configuration
```env
JWT_SECRET=generate_a_random_secret_string
JWT_EXPIRE=7d
```

Generate JWT secret:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Run Development Server

```bash
npm start
```

Backend will be available at `http://localhost:5000`

## Step 4: Verify Setup

### Frontend Check
```bash
curl http://localhost:3000
```

### Backend Check
```bash
curl http://localhost:5000/api/health
```

## Step 5: Admin User Creation

### Option 1: Via API

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@shivammobileshop.com",
    "password": "AdminPassword123!",
    "role": "admin"
  }'
```

### Option 2: Via MongoDB Compass

1. Connect to MongoDB Atlas
2. Create document in `users` collection:
```json
{
  "email": "admin@shivammobileshop.com",
  "password": "hashed_password",
  "role": "admin",
  "createdAt": new Date(),
  "updatedAt": new Date()
}
```

## Step 6: Access Admin Dashboard

1. Go to `http://localhost:3000/admin/login`
2. Login with admin credentials
3. Access dashboard at `http://localhost:3000/admin/dashboard`

## Troubleshooting

### Port Already in Use

**Frontend (Port 3000):**
```bash
lsof -i :3000
kill -9 <PID>
```

**Backend (Port 5000):**
```bash
lsof -i :5000
kill -9 <PID>
```

### MongoDB Connection Failed

- Verify connection string
- Check IP whitelist in MongoDB Atlas
- Ensure database exists

### Cloudinary Upload Failed

- Verify API credentials
- Check account limits
- Ensure folder exists

### Email Not Sending

- Verify Gmail App Password
- Check Admin Email in `.env`
- Review logs: `tail -f backend/logs/error.log`

## Development Workflow

### Start All Services

```bash
# Terminal 1 - Frontend
cd frontend && npm run dev

# Terminal 2 - Backend
cd backend && npm start

# Terminal 3 - MongoDB (if local)
mongod
```

### Code Style

- ESLint configuration included
- Prettier formatting enabled
- Run linter:
```bash
npm run lint
npm run lint:fix
```

### Database Seeding

Seed initial data:
```bash
cd backend
npm run seed
```

## Next Steps

1. Configure Netlify/Vercel for deployment
2. Setup CI/CD pipeline
3. Configure domain and SSL
4. Setup Google Analytics
5. Optimize images for production
6. Setup monitoring and logging

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Atlas Guide](https://docs.atlas.mongodb.com/)
- [Cloudinary Documentation](https://cloudinary.com/documentation)
- [Tailwind CSS](https://tailwindcss.com/docs)
