export function useLang(Astro: any) {
  return Astro.props.lang || 'en';
}