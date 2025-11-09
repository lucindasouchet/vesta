// Middleware language redirect works on Server / Edge hosts: Redirect / → user’s preferred locale
// 1. When a user visits /, Astro runs the middleware.
// 2. It reads the browser’s Accept-Language header.
// 3. It picks the first supported language (matching one of ['en', 'fr', 'es']).
// 4. Redirects the user to /fr/, /es/, or /en/.
// 5. If no match is found, falls back to /en/.

import { defineMiddleware } from 'astro:middleware';

const SUPPORTED_LANGS = ['en', 'fr', 'es'];
const DEFAULT_LANG = 'en';

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  // Only redirect from the root path
  if (url.pathname === '/' || url.pathname === '') {
    // Read browser language (e.g. "fr-FR,fr;q=0.9,en;q=0.8")
    const acceptLang = context.request.headers.get('accept-language') || '';
    const preferredLang = acceptLang
      .split(',')
      .map(l => l.split(';')[0].trim().slice(0, 2)) // extract "fr" from "fr-FR"
      .find(l => SUPPORTED_LANGS.includes(l));

    const langToUse = preferredLang || DEFAULT_LANG;

    return Response.redirect(`${url.origin}/${langToUse}/`, 302);
  }

  // For other routes, continue as usual
  return next();
});
