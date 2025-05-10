# Simple Blog with Next.js

## ✨ Updated Features

This project demonstrates a **Blog Website** using Next.js **App Router**, now with real-time data fetching from [JSONPlaceholder](https://jsonplaceholder.typicode.com):

### 🔄 Dynamic Data from API:

- Users act as **Categories**
  - URL: `https://jsonplaceholder.typicode.com/users`
- Each user has their **Posts**
  - URL: `https://jsonplaceholder.typicode.com/posts?userId=USER_ID`
- Each post displays **Comments**
  - URL: `https://jsonplaceholder.typicode.com/comments?postId=POST_ID`

### 💡 Core Features:

- Dynamic Routes: `/users`, `/users/[id]`, `/posts/[id]`
- **Loading state** using `loading.js` files with MUI Spinner
- **Error handling** for failed fetches
- **Reusable layouts** for navigation and design
- Styled using TailwindCSS & MUI

---

## 🚀 Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Then, open [http://localhost:3000](http://localhost:3000) to view it in your browser.

You can start editing the app by modifying files inside the `app/` directory (e.g. `app/page.js`).

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) – Features and API
- [Learn Next.js](https://nextjs.org/learn) – Official tutorial
- [Next.js GitHub Repository](https://github.com/vercel/next.js)

---

## ☁️ Deploy on Vercel

You can deploy this app using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

For full instructions:  
📄 [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying)
