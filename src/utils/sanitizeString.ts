export default function sanitizeString(string: string) {
  return string.toLowerCase().replace(/[~!@#$%^&*()_\-+=:;'",./?`']*/g, '');
}
