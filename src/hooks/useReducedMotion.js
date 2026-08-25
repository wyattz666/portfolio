import { useEffect, useState } from 'react';

/**
 * Trả về true nếu người dùng đã bật "prefers-reduced-motion" trong hệ điều hành.
 * Các component animation nặng (mascot theo chuột, parallax...) nên tắt/giảm
 * hiệu ứng khi giá trị này là true.
 */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(query.matches);
    const handler = (e) => setReduced(e.matches);
    query.addEventListener('change', handler);
    return () => query.removeEventListener('change', handler);
  }, []);

  return reduced;
}
