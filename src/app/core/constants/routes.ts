export const ROUTES = {
  lang: {
    en: 'en',
    kr: 'kr'
  },
  auth: {
    login: 'login',
    signUp: 'sign-up'
  },
  landingPages: {
    storeDirectory: 'store-directory',
    virtualCard: 'virtual-card',
    rates: 'rates',
    blog: 'blog',
  }
};

export function toAbsolutePath(path: string | string[]): string {
  // this function accepts string or string array
  // CAUTION! - be aware, send only valid array or string
  if (typeof path === 'string') {
    return '/' + path;
  } else {
    return '/' + path.join('/');
  }
}
