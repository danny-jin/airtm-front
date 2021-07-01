export const ROUTES = {
  lang: {
    en: 'en',
    kr: 'kr'
  },
  auth: {
    login: 'login',
    signUp: 'sign-up',
    completeProfile: 'complete-profile'
  },
  landingPages: {
    storeDirectory: 'store-directory',
    virtualCard: 'virtual-card',
    rates: 'rates',
    blog: 'blog',
  },
  client: {
    root: 'app',
    home: 'home',
    add: 'add',
    withdraw: 'withdraw',
    transfers: 'transfers',
    sendRequest: 'send-request',
    virtualCards: {
      root: 'virtual-cards',
      form: 'form'
    },
    activity: 'activity',
    peerTransfers: 'peer-transfers',
    crypto: {
      root: 'crypto',
      buy: 'buy',
      sell: 'sell'
    },
    inviteFriends: 'invite-friends',
    storeDirectory: 'store-directory',
    settings: {
      root: 'settings',
      profile: 'profile',
      verification: 'verification',
      security: 'security',
      paymentMethods: 'payment-methods',
      apps: 'apps'
    }
  },
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
