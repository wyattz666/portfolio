import { useEffect, useState } from 'react';

/**
 * Theo dõi vị trí con trỏ chuột trên toàn trang.
 * Dùng cho các hiệu ứng "mắt/mascot dõi theo chuột".
 */
export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return position;
}
