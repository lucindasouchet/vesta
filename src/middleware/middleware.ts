import { defineMiddleware } from 'astro:middleware';

const SUPPORTED_LANGS = ['en', 'fr', 'es'];
const DEFAULT_LANG = 'en';

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  // Redirect root to browser's preferred language
  if (url.pathname === '/' || url.pathname === '') {
    const acceptLang = context.request.headers.get('accept-language') || '';
    const preferredLang = acceptLang
      .split(',')
      .map(l => l.split(';')[0].trim().slice(0, 2))
      .find(l => SUPPORTED_LANGS.includes(l));

    const langToUse = preferredLang || DEFAULT_LANG;
    return Response.redirect(`${url.origin}/${langToUse}/`, 302);
  }

  // Redirect /404 to localized 404 page if available
  if (url.pathname === '/404') {
    const acceptLang = context.request.headers.get('accept-language') || '';
    const preferredLang = acceptLang
      .split(',')
      .map(l => l.split(';')[0].trim().slice(0, 2))
      .find(l => SUPPORTED_LANGS.includes(l));

    const langToUse = preferredLang || DEFAULT_LANG;
    return Response.redirect(`${url.origin}/${langToUse}/404/`, 302);
  }

  return next();
});
