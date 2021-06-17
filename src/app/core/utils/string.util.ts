export function validateEmail(email: string): boolean {
  let valid = true;
  if (email.indexOf('@') === -1) {
    valid = false;
  } else {
    const parts = email.split('@');
    const domain = parts[1];
    if (domain.indexOf('.') === -1) {
      valid = false;
    } else {
      const domainParts = domain.split('.');
      const ext = domainParts[1];
      if (ext.length > 4 || ext.length < 2) {
        valid = false;
      }
    }
  }
  return valid;
}
