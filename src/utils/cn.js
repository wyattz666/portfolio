/**
 * Ghép className có điều kiện, bỏ qua giá trị falsy.
 * Dùng: cn('card', isActive && 'card--active', variant && `card--${variant}`)
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
