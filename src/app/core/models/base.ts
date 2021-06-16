export enum WindowSize {
  xs = 'XS',
  sm = 'SM',
  md = 'MD',
  lg = 'LG',
  xl = 'XL',
  xxl = 'XXL'
}

export enum PasswordStrengthType {
  None = 'NONE',
  Weak = 'WEAK',
  Medium = 'MEDIUM',
  High = 'HIGH'
}

export enum ActivateStatusType {
  Deactivated = 'DEACTIVATED',
  Activated = 'ACTIVATED',
  Suspended = 'SUSPENDED'
}

export enum StatusType {
  Available = 'AVAILABLE',
  Unavailable = 'UNAVAILABLE'
}

export enum TradingType {
  FiatAndSpot = 'FIAT_AND_SPOT',
  P2P = 'P2P'
}

export enum AccountVerifyStep {
  RegisterAccount = 'REGISTER_ACCOUNT',
  TwoFa = 'TWO_FA',
  DepositFunds = 'DEPOSIT_FUNDS'
}

export enum MenuType {
  Markets= 'MARKETS',
  User = 'USER',
  Trade = 'TRADE',
  Wallet = 'WALLET',
  Order = 'ORDER'
}

export enum SideMenuType {
  User = 'USER',
  Main = 'Main'
}

export interface MobileNumberDetail {
  number: string;
  internationalNumber: string;
  nationalNumber: string;
  e164Number: string;
  countryCode: string;
  dialCode: string;
}

export interface SuccessResponse {
  success: boolean;
  message?: string;
}

export interface Entity {
  id?: string;
  deletedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface SidebarItem {
  displayName: string;
  description?: string;
  disabled?: boolean;
  iconName?: string;
  route?: string;
  children?: SidebarItem[];
}

export interface FooterItem {
  name: string;
  route: string;
}

export interface FooterItemList {
  title: string;
  show: boolean;
  children: FooterItem[];
}

export interface AccountVerifyDetail {
  isVerified: boolean;
  title: string;
  description?: string;
  step: AccountVerifyStep;
  actionLabel?: string;
}

