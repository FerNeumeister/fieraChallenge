export const sum = (n1: number, n2: number) => {
  return n1 + n2;
}
export const rest = (n1: number, n2: number) => {
  return n1 - n2;
}
export const divide = (n1: number, n2: number) => {
  if (n2 === 0) {
    throw 'No es posible dividir por 0';
  }
  return n1 / n2;
}
export const multiplication = (n1: number, n2: number) => {
  return n1 * n2;
}