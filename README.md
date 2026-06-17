# Al Imran Enterprises Website

Next.js 15 App Router TypeScript project for `alimranenterprises.com`.

## Scripts

- `npm run dev` - local development
- `npm run build` - production build
- `npm run typecheck` - TypeScript validation

## Cloudflare Pages

Use the Cloudflare Pages Next.js preset or `@cloudflare/next-on-pages`.

Recommended build command:

```bash
npx @cloudflare/next-on-pages
```

Build output:

```text
.vercel/output/static
```

Required environment variables:

- `NEXT_PUBLIC_SITE_URL=https://alimranenterprises.com`
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
- `TURNSTILE_SECRET_KEY`
- `QUOTE_TO_EMAIL=aiepk286@gmail.com`
