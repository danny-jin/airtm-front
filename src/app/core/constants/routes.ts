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
    home: 'home',
    add: 'add',
    withdraw: 'withdraw',
    transfers: 'transfers',
    sendRequest: 'send-request',
    virtualCards: 'virtual-cards',
    activity: 'activity',
    peerTransfers: 'peer-transfers',
    crypto: 'crypto',
    inviteFriends: 'invite-friends',
    storeDirectory: 'store-directory',
    settings: 'settings',
    help: 'help'
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
