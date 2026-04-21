# 🚀 Next.js Dashboard UI Prompt (Strict Architecture)

## 📌 Objective

Create a **pixel-perfect web application using Next.js (App Router)** that matches the provided UI screenshots exactly.

---

## 🔧 Tech Requirements

* Next.js (App Router)
* Tailwind CSS (preferred) or modular CSS
* Fully responsive (desktop + mobile)
* Clean, scalable architecture

---

## 🎨 UI Requirements

* Sidebar gradient: `#051B16 → #046307`

* Sidebar must include:

  * Logo (top)
  * Navigation sections (Overview, Users, Product, Tools)
  * Active state highlight
  * Bottom profile section
  * Decorative background images from `/public/images`

* Match exactly:

  * Typography
  * Spacing
  * Shadows
  * Border radius
  * Layouts (cards, charts, tables)

---

## 🔥 CRITICAL RULE (DO NOT BREAK)

All pages inside `(private)` must follow this exact structure:

```tsx
'use client';

import SectionExample from '@/components/pages/example/SectionExample';

export default function ExamplePage() {
  return <SectionExample />;
}
```

---

## ❌ What NOT to do

* No UI inside `page.tsx`
* No logic inside `page.tsx`
* No API calls inside `page.tsx`

---

## ✅ What to do

* Only import and render a section component
* Each page = one section component

---

## 📁 Folder Structure (STRICT)

```
/project-name
  /public
    /images
      sidebar-leaf.png
      sidebar-pattern.png
      logo.png

  /src
    /app
      /(public)
        /login
          page.tsx
          layout.tsx

      /(private)
        /affiliates
          page.tsx
        /coupons
          page.tsx
        /users
          page.tsx
        /executive-snapshot
          page.tsx
        /revenue
          page.tsx
        /onboarding
          page.tsx
        /notifications-activity
          page.tsx
        /exercise-lvc
          page.tsx
        /user-lookup
          page.tsx

        layout.tsx

    /components
      /layout
        Sidebar.tsx
        Header.tsx

      /shared
        Card.tsx
        Button.tsx
        Input.tsx
        Table.tsx
        Chart.tsx

      /pages
        /affiliates
          SectionAffiliates.tsx
        /coupons
          SectionCoupons.tsx
        /users
          SectionUsers.tsx
        /executive-snapshot
          SectionExecutiveSnapshot.tsx
        /revenue
          SectionRevenue.tsx
        /onboarding
          SectionOnboarding.tsx
        /notifications-activity
          SectionNotifications.tsx
        /exercise-lvc
          SectionExercise.tsx
        /user-lookup
          SectionUserLookup.tsx

    /lib
      helpers.ts

    /styles
      globals.css
```

---

## 📌 Example Pages

### Affiliates Page

```tsx
'use client';

import SectionAffiliates from '@/components/pages/affiliates/SectionAffiliates';

export default function AffiliatesPage() {
  return <SectionAffiliates />;
}
```

### Coupons Page

```tsx
'use client';

import SectionCoupons from '@/components/pages/coupons/SectionCoupons';

export default function CouponsPage() {
  return <SectionCoupons />;
}
```

---

## 🧱 Component Responsibilities

### Section Components (`SectionXYZ.tsx`)

* Full UI for that page
* Use shared components
* Handle layout, charts, tables, data

---

## 🧼 Code Rules

### ✅ Use absolute imports

```ts
@/components/...
```

### ❌ Avoid relative imports

```ts
../../../components/...
```

---

## ⚙️ Functional Requirements

* Sidebar:

  * Navigation between pages
  * Active route highlighting

* Layout:

  * Sidebar (fixed)
  * Header (top)
  * Dynamic content area

* Login:

  * Inside `(public)`
  * Redirect to dashboard (mock allowed)

---

## 🎯 Goal

Build a **visually identical UI with production-ready architecture**, ensuring:

* Reusability
* Scalability
* Clean separation of concerns

---

## ⚠️ Final Warning

If you:

* Put logic in `page.tsx`
* Mix reusable and page-specific code
* Ignore structure

You will:

* Break scalability
* Create technical debt
* Regret your life choices in ~2 weeks

---
