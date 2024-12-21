This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm add @tanstack/react-query @tanstack/react-query-devtools axios @radix-ui/react-dialog
pnpm dlx shadcn-ui@latest add dialog
pnpm add clsx tailwind-merge
pnpm add @radix-ui/react-dialog lucide-react clsx tailwind-merge class-variance-authority tailwindcss-animate

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

This is responsive phone catalog that:

- Fetches data from the API using TanStack Query
- Displays phones in a responsive grid
- Shows loading and error states
- Includes proper TypeScript types
- Uses Tailwind CSS for styling
- Implements proper data fetching with axios
- Includes React Query DevTools for debugging

The application will be available at http://localhost:3000.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
