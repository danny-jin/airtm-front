import { ActivateStatusType, Entity } from './base';
import { TwoFactorType } from './verification';

export enum UserRole {
  User = 'USER',
  Admin = 'ADMIN',
  SuperAdmin = 'SUPER_ADMIN'
}

export enum UserType {
  Individual = 'INDIVIDUAL',
  Business = 'BUSINESS'
}

export enum VerifyType {
  Unverified = 'UNVERIFIED',
  Verified = 'VERIFIED'
}

export interface ResetPasswordInfo {
  email: string;
  password: string;
}

export interface TokenResponse {
  accessToken: string;
}

export interface TwoFactorVerifyDto {
  type: TwoFactorType;
  email: string;
  emailCode?: string;
  smsCode?: string;
  googleCode?: string;
}

export interface LoginDto {
  email: string;
  password: string;
  referralId?: string;
}

export interface ChangePasswordDto {
  oldPassword: string;
  password: string;
  confirmPassword: string;
}

export interface User extends Entity {
  email: string;
  type: UserType;
  twoFactorType: TwoFactorType;
  device: string;
  browser: string;
  referralId: string;
  phoneNumber: string;
  googleAuthKey: string;
  activated: ActivateStatusType;
  disabledWithdrawUntil: Date;
  phoneVerified: boolean;
  role: UserRole;
}
