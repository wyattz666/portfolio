/**
 * Định dạng ngày theo kiểu Việt Nam: dd/mm/yyyy
 */
export function formatDate(date) {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

/**
 * Rút gọn chuỗi và thêm dấu "..." nếu vượt quá độ dài cho phép.
 */
export function truncate(str, maxLength = 120) {
  if (!str || str.length <= maxLength) return str;
  return `${str.slice(0, maxLength).trimEnd()}…`;
}

/**
 * Chuyển chuỗi thành dạng slug (không dấu, gạch ngang).
 */
export function slugify(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
