import { PasswordStrengthType } from '../models/base';

export function validatePasswordStrength(password: string): string {
  const highRegex = new RegExp('^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$', 'g');
  const mediumRegex = new RegExp('^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$', 'g');
  if (password.length === 0) {
    return PasswordStrengthType.None;
  } else if (highRegex.test(password)) {
    return PasswordStrengthType.High;
  } else if (mediumRegex.test(password)) {
    return PasswordStrengthType.Medium;
  } else if (password.length > 3) {
    return PasswordStrengthType.Weak;
  } else {
    return PasswordStrengthType.Weak;
  }
}
