# Database Schema - MongoDB

## Collections

### 1. Users

```javascript
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["email", "password", "createdAt"],
      properties: {
        _id: { bsonType: "objectId" },
        email: {
          bsonType: "string",
          pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
          description: "User email (unique)"
        },
        password: {
          bsonType: "string",
          description: "Hashed password"
        },
        name: {
          bsonType: "string",
          description: "User full name"
        },
        phone: {
          bsonType: "string",
          description: "User phone number"
        },
        role: {
          enum: ["admin", "customer"],
          description: "User role"
        },
        avatar: {
          bsonType: "string",
          description: "User avatar URL"
        },
        isActive: {
          bsonType: "bool",
          description: "Account active status"
        },
        createdAt: { bsonType: "date" },
        updatedAt: { bsonType: "date" }
      }
    }
  }
});
```

### 2. Products

```javascript
db.createCollection("products", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "category", "price", "createdAt"],
      properties: {
        _id: { bsonType: "objectId" },
        name: {
          bsonType: "string",
          description: "Product name"
        },
        slug: {
          bsonType: "string",
          description: "URL-friendly slug (unique)"
        },
        description: {
          bsonType: "string",
          description: "Product description"
        },
        category: {
          bsonType: "objectId",
          description: "Reference to Category"
        },
        brand: {
          bsonType: "string",
          description: "Brand name"
        },
        price: {
          bsonType: "double",
          description: "Original price"
        },
        discountPrice: {
          bsonType: "double",
          description: "Discounted price"
        },
        discount: {
          bsonType: "int",
          description: "Discount percentage"
        },
        images: {
          bsonType: "array",
          items: { bsonType: "string" },
          description: "Array of image URLs"
        },
        specifications: {
          bsonType: "array",
          items: {
            bsonType: "object",
            properties: {
              key: { bsonType: "string" },
              value: { bsonType: "string" }
            }
          }
        },
        stock: {
          bsonType: "int",
          description: "Available stock"
        },
        minStock: {
          bsonType: "int",
          description: "Minimum stock alert level"
        },
        rating: {
          bsonType: "double",
          minimum: 0,
          maximum: 5,
          description: "Average rating"
        },
        reviews: {
          bsonType: "int",
          description: "Number of reviews"
        },
        tags: {
          bsonType: "array",
          items: { bsonType: "string" }
        },
        isAvailable: {
          bsonType: "bool",
          description: "Availability status"
        },
        isFeatured: {
          bsonType: "bool",
          description: "Featured on homepage"
        },
        createdAt: { bsonType: "date" },
        updatedAt: { bsonType: "date" }
      }
    }
  }
});
```

### 3. Categories

```javascript
db.createCollection("categories", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "createdAt"],
      properties: {
        _id: { bsonType: "objectId" },
        name: {
          bsonType: "string",
          description: "Category name",
          enum: [
            "Smartphones",
            "Feature Phones",
            "Chargers",
            "Earphones",
            "Neckbands",
            "Smartwatches",
            "Speakers",
            "Power Banks",
            "Mobile Covers",
            "Tempered Glass"
          ]
        },
        slug: {
          bsonType: "string",
          description: "URL-friendly slug"
        },
        description: {
          bsonType: "string"
        },
        icon: {
          bsonType: "string",
          description: "Icon URL or Lucide icon name"
        },
        image: {
          bsonType: "string",
          description: "Category image URL"
        },
        productCount: {
          bsonType: "int",
          description: "Number of products in category"
        },
        order: {
          bsonType: "int",
          description: "Display order"
        },
        isActive: {
          bsonType: "bool"
        },
        createdAt: { bsonType: "date" },
        updatedAt: { bsonType: "date" }
      }
    }
  }
});
```

### 4. Offers

```javascript
db.createCollection("offers", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "type", "startDate", "endDate", "createdAt"],
      properties: {
        _id: { bsonType: "objectId" },
        title: {
          bsonType: "string",
          description: "Offer title"
        },
        description: {
          bsonType: "string"
        },
        type: {
          enum: ["discount", "festival", "emi", "cashback"],
          description: "Offer type"
        },
        discountType: {
          enum: ["percentage", "fixed"],
          description: "Discount calculation type"
        },
        discountValue: {
          bsonType: "double",
          description: "Discount percentage or amount"
        },
        applicableCategories: {
          bsonType: "array",
          items: { bsonType: "objectId" },
          description: "Applicable category IDs"
        },
        applicableProducts: {
          bsonType: "array",
          items: { bsonType: "objectId" },
          description: "Applicable product IDs"
        },
        startDate: {
          bsonType: "date"
        },
        endDate: {
          bsonType: "date"
        },
        minPurchaseAmount: {
          bsonType: "double",
          description: "Minimum purchase to apply offer"
        },
        maxDiscount: {
          bsonType: "double",
          description: "Maximum discount amount"
        },
        couponCode: {
          bsonType: "string",
          description: "Optional coupon code"
        },
        usageLimit: {
          bsonType: "int",
          description: "Total times coupon can be used"
        },
        usageCount: {
          bsonType: "int",
          description: "Times coupon has been used"
        },
        isActive: {
          bsonType: "bool"
        },
        image: {
          bsonType: "string",
          description: "Offer banner image"
        },
        createdAt: { bsonType: "date" },
        updatedAt: { bsonType: "date" }
      }
    }
  }
});
```

### 5. ContactQueries

```javascript
db.createCollection("contactQueries", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "phone", "message", "createdAt"],
      properties: {
        _id: { bsonType: "objectId" },
        name: {
          bsonType: "string"
        },
        email: {
          bsonType: "string"
        },
        phone: {
          bsonType: "string"
        },
        message: {
          bsonType: "string"
        },
        status: {
          enum: ["new", "replied", "resolved"],
          description: "Query status"
        },
        subject: {
          bsonType: "string"
        },
        queryType: {
          enum: ["inquiry", "complaint", "feedback", "support"],
          description: "Type of query"
        },
        attachments: {
          bsonType: "array",
          items: { bsonType: "string" }
        },
        adminReply: {
          bsonType: "string",
          description: "Admin response"
        },
        repliedAt: {
          bsonType: "date"
        },
        createdAt: { bsonType: "date" },
        updatedAt: { bsonType: "date" }
      }
    }
  }
});
```

### 6. Reviews

```javascript
db.createCollection("reviews", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["productId", "rating", "createdAt"],
      properties: {
        _id: { bsonType: "objectId" },
        productId: {
          bsonType: "objectId",
          description: "Reference to Product"
        },
        userId: {
          bsonType: "objectId",
          description: "Reference to User"
        },
        name: {
          bsonType: "string",
          description: "Reviewer name (for non-registered users)"
        },
        email: {
          bsonType: "string",
          description: "Reviewer email"
        },
        rating: {
          bsonType: "int",
          minimum: 1,
          maximum: 5,
          description: "Product rating"
        },
        title: {
          bsonType: "string",
          description: "Review title"
        },
        comment: {
          bsonType: "string",
          description: "Review comment"
        },
        pros: {
          bsonType: "array",
          items: { bsonType: "string" },
          description: "Positive aspects"
        },
        cons: {
          bsonType: "array",
          items: { bsonType: "string" },
          description: "Negative aspects"
        },
        images: {
          bsonType: "array",
          items: { bsonType: "string" },
          description: "Review images"
        },
        isVerified: {
          bsonType: "bool",
          description: "Verified purchase"
        },
        isApproved: {
          bsonType: "bool",
          description: "Admin approved"
        },
        helpfulCount: {
          bsonType: "int",
          description: "Marked as helpful count"
        },
        createdAt: { bsonType: "date" },
        updatedAt: { bsonType: "date" }
      }
    }
  }
});
```

### 7. Analytics

```javascript
db.createCollection("analytics", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["date", "createdAt"],
      properties: {
        _id: { bsonType: "objectId" },
        date: {
          bsonType: "date",
          description: "Analytics date"
        },
        totalVisits: {
          bsonType: "int"
        },
        uniqueVisitors: {
          bsonType: "int"
        },
        pageViews: {
          bsonType: "object",
          additionalProperties: { bsonType: "int" },
          description: "Views per page"
        },
        productViews: {
          bsonType: "int"
        },
        cartAdditions: {
          bsonType: "int"
        },
        inquiries: {
          bsonType: "int"
        },
        topProducts: {
          bsonType: "array",
          items: {
            bsonType: "object",
            properties: {
              productId: { bsonType: "objectId" },
              views: { bsonType: "int" }
            }
          }
        },
        deviceType: {
          bsonType: "object",
          properties: {
            desktop: { bsonType: "int" },
            mobile: { bsonType: "int" },
            tablet: { bsonType: "int" }
          }
        },
        createdAt: { bsonType: "date" },
        updatedAt: { bsonType: "date" }
      }
    }
  }
});
```

## Indexes

```javascript
// Users indexes
db.users.createIndex({ email: 1 }, { unique: true });
db.users.createIndex({ createdAt: -1 });

// Products indexes
db.products.createIndex({ slug: 1 }, { unique: true });
db.products.createIndex({ category: 1 });
db.products.createIndex({ brand: 1 });
db.products.createIndex({ isFeatured: 1 });
db.products.createIndex({ createdAt: -1 });
db.products.createIndex({ price: 1 });
db.products.createIndex({ "$**": "text" }); // Full-text search

// Categories indexes
db.categories.createIndex({ slug: 1 }, { unique: true });

// Offers indexes
db.offers.createIndex({ startDate: 1, endDate: 1 });
db.offers.createIndex({ couponCode: 1 });
db.offers.createIndex({ isActive: 1 });

// ContactQueries indexes
db.contactQueries.createIndex({ status: 1 });
db.contactQueries.createIndex({ createdAt: -1 });
db.contactQueries.createIndex({ email: 1 });

// Reviews indexes
db.reviews.createIndex({ productId: 1 });
db.reviews.createIndex({ isApproved: 1 });
db.reviews.createIndex({ createdAt: -1 });

// Analytics indexes
db.analytics.createIndex({ date: -1 });
db.analytics.createIndex({ createdAt: -1 });
```

## Data Types Reference

- **ObjectId**: MongoDB's unique identifier
- **String**: Text data
- **Int**: 32-bit integer
- **Double**: Floating point number
- **Date**: JavaScript Date object
- **Boolean**: true/false
- **Array**: Collection of items
- **Object**: Nested document

## Relationships

```
Users
  ├── Reviews (many-to-many via Review.userId)
  └── ContactQueries

Products
  ├── Category (many-to-one)
  ├── Reviews (one-to-many)
  └── Offers (many-to-many)

Categories
  └── Products (one-to-many)

Offers
  ├── Products (many-to-many via applicableProducts)
  └── Categories (many-to-many via applicableCategories)
```
