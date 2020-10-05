export function removeWordDash(word: string): string {
  return word.replace('-', ' ');
}

export function removeWordUnderline(word: string): string {
  return word.replace('_', ' ');
}
