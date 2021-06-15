export enum TwoFactorType {
  Disabled = 'DISABLED',
  Email = 'EMAIL',
  Sms = 'SMS',
  GoogleOtp = 'GOOGLE_OTP'
}

export enum VerificationCodeType {
  Sms = 'SMS',
  Email = 'EMAIL',
  Google = 'GOOGLE'
}

export interface EnableTwoFactorDto {
  phoneNumber?: string;
  smsCode?: string;
  emailCode?: string;
  googleCode?: string;
}
