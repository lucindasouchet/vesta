export function getLocalizedPaths() {
  const languages = ['en', 'fr', 'es'];
  return languages.map((lang) => ({
    params: { lang },
    props: { lang },
  }));
}
