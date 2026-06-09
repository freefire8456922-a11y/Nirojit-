# Project Structure Documentation

## Directory Layout

```
shivam-mobile-shop/
├── frontend/                    # Next.js frontend application
│   ├── src/
│   │   ├── app/
│   │   │   ├── (pages)/
│   │   │   │   ├── page.tsx               # Home page
│   │   │   │   ├── products/
│   │   │   │   │   ├── page.tsx           # Products listing
│   │   │   │   │   └── [id]/
│   │   │   │   │       └── page.tsx       # Product details
│   │   │   │   ├── about/page.tsx
│   │   │   │   ├── offers/page.tsx
│   │   │   │   ├── gallery/page.tsx
│   │   │   │   ├── reviews/page.tsx
│   │   │   │   └── contact/page.tsx
│   │   │   ├── admin/
│   │   │   │   ├── login/page.tsx
│   │   │   │   ├── dashboard/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   ├── products/page.tsx
│   │   │   │   │   ├── offers/page.tsx
│   │   │   │   │   ├── inventory/page.tsx
│   │   │   │   │   ├── queries/page.tsx
│   │   │   │   │   └── analytics/page.tsx
│   │   │   └── layout.tsx
│   │   ├── components/
│   │   │   ├── home/
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   ├── FeaturedProducts.tsx
│   │   │   │   ├── BestSellingAccessories.tsx
│   │   │   │   ├── WhyChooseUs.tsx
│   ��   │   │   ├── CustomerReviews.tsx
│   │   │   │   ├── LatestOffers.tsx
│   │   │   │   ├── StoreLocation.tsx
│   │   │   │   └── ContactCTA.tsx
│   │   │   ├── common/
│   │   │   │   ├── Navbar.tsx
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── MobileMenu.tsx
│   │   │   │   ├── ThemeToggle.tsx
│   │   │   │   ├── FloatingWhatsApp.tsx
│   │   │   │   └── ContactButton.tsx
│   │   │   ├── products/
│   │   │   │   ├── ProductCard.tsx
│   │   │   │   ├── ProductGrid.tsx
│   │   │   │   ├── ProductFilters.tsx
│   │   │   │   ├── SearchBar.tsx
│   │   │   │   ├── ProductModal.tsx
│   │   │   │   └── Pagination.tsx
│   │   │   ├── admin/
│   │   │   │   ├── AdminNav.tsx
│   │   │   │   ├── ProductForm.tsx
│   │   │   │   ├── OfferForm.tsx
│   │   │   │   ├── InventoryTable.tsx
│   │   │   │   ├── QueryTable.tsx
│   │   │   │   └── AnalyticsChart.tsx
│   │   │   └── ui/ (Shadcn components)
│   │   ├── lib/
│   │   │   ├── api.ts                 # API client
│   │   │   ├── auth.ts                # Authentication utilities
│   │   │   ├── utils.ts               # Utility functions
│   │   │   ├── cn.ts                  # Class name utility
│   │   │   └── validation.ts          # Validation schemas
│   │   ├── types/
│   │   │   ├── index.ts               # Type definitions
│   │   │   ├── product.ts
│   │   │   ├── offer.ts
│   │   │   ├── review.ts
│   │   │   ├── user.ts
│   │   │   └── api.ts
│   │   ├── styles/
│   │   │   ├── globals.css
│   │   │   └── variables.css
│   │   ├── hooks/
│   │   │   ├── useAuth.ts
│   │   │   ├── useTheme.ts
│   │   │   ├── useCart.ts
│   │   │   ├── useWishlist.ts
│   │   │   └── useAPI.ts
│   │   └── context/
│   │       ├── AuthContext.tsx
│   │       ├── ThemeContext.tsx
│   │       ├── CartContext.tsx
│   │       └── WishlistContext.tsx
│   ├── public/
│   │   ├── images/
│   │   ├── icons/
│   │   ├── logo.png
│   │   ├── favicon.ico
│   │   ├── sitemap.xml
│   │   └── robots.txt
│   ├── .env.example
│   ├── .env.local
│   ├── tsconfig.json
│   ├── tailwind.config.ts
│   ├── postcss.config.js
│   ├── next.config.js
│   └── package.json
│
├── backend/                     # Express.js backend application
│   ├── src/
│   │   ├── models/
│   │   │   ├── Product.ts
│   │   │   ├── Category.ts
│   │   │   ├── Offer.ts
│   │   │   ├── User.ts
│   │   │   ├── ContactQuery.ts
│   │   │   ├── Review.ts
│   │   │   └── Analytics.ts
│   │   ├── routes/
│   │   │   ├── auth.ts
│   │   │   ├── products.ts
│   │   │   ├── categories.ts
│   │   │   ├── offers.ts
│   │   │   ├── contact.ts
│   │   │   ├── reviews.ts
│   │   │   ├── admin.ts
│   │   │   ├── inventory.ts
│   │   │   └── analytics.ts
│   │   ├── controllers/
│   │   │   ├── authController.ts
│   │   │   ├── productController.ts
│   │   │   ├── offerController.ts
│   │   │   ���── contactController.ts
│   │   │   ├── reviewController.ts
│   │   │   ├── inventoryController.ts
│   │   │   └── analyticsController.ts
│   │   ├── middleware/
│   │   │   ├── auth.ts
│   │   │   ├── errorHandler.ts
│   │   │   ├── validation.ts
│   │   │   ├── imageUpload.ts
│   │   │   └── rateLimiter.ts
│   │   ├── config/
│   │   │   ├── database.ts
│   │   │   ├── cloudinary.ts
│   │   │   └── nodemailer.ts
│   │   ├── utils/
│   │   │   ├── jwt.ts
│   │   │   ├── validators.ts
│   │   │   ├── sendEmail.ts
│   │   │   └── cloudinaryUpload.ts
│   │   └── server.ts
│   ├── .env.example
│   ├── .env
│   ├── tsconfig.json
│   ├── package.json
│   └── nodemon.json
│
├── docs/
│   ├── API_DOCUMENTATION.md
│   ├── DEPLOYMENT.md
│   ├── SETUP_GUIDE.md
│   ├── DATABASE_SCHEMA.md
│   ├── ENVIRONMENT_VARIABLES.md
│   └── SEO_OPTIMIZATION.md
│
├── .gitignore
├── .env.example
└── README.md
```

## Key Directories

### Frontend (`/frontend`)
- **app**: Next.js 15 app router with all pages
- **components**: Reusable React components organized by feature
- **lib**: Utility functions and API client
- **types**: TypeScript type definitions
- **hooks**: Custom React hooks
- **context**: React context providers
- **public**: Static assets and SEO files

### Backend (`/backend`)
- **models**: MongoDB Mongoose schemas
- **routes**: API endpoint definitions
- **controllers**: Business logic for each route
- **middleware**: Authentication, validation, error handling
- **config**: Database, Cloudinary, email configuration
- **utils**: Helper functions and utilities

### Documentation (`/docs`)
- API routes and endpoints
- Deployment instructions
- Database schema
- Environment setup
- SEO optimization guide

## File Naming Conventions

- **Components**: PascalCase (e.g., `ProductCard.tsx`)
- **Utilities/Hooks**: camelCase (e.g., `useAuth.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.ts`)
- **Types/Interfaces**: PascalCase (e.g., `Product.ts`)
- **Routes**: kebab-case (e.g., `/products/[id]`)

## Import Aliases

Configure in `tsconfig.json`:
- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/types` → `src/types`
- `@/hooks` → `src/hooks`
- `@/context` → `src/context`
- `@/styles` → `src/styles`
