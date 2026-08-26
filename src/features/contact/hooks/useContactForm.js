import { useState } from 'react';
import { useLanguage } from '../../../contexts';

const initialValues = { name: '', email: '', message: '' };

/**
 * Quản lý state + validate cơ bản cho form liên hệ.
 * Hiện tại submit chỉ mô phỏng (chưa nối API thật) — thay hàm `submit`
 * bằng lời gọi tới services/ khi có backend.
 */
const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzGQo5qj9Pza5jQTb9xHQajG2eSl0a2nrsqijoWZbnyRkCFfcTQ0TZpdTGjdf1Br-gn/exec';

export function useContactForm() {
  const { t } = useLanguage();
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function validate() {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = t('val_name');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = t('val_email');
    }
    if (!values.message.trim()) nextErrors.message = t('val_msg');
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function submit(e) {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(values),
      });
      setStatus('success');
      setValues(initialValues);
    } catch {
      setStatus('error');
    }
  }

  return { values, errors, status, handleChange, submit };
}
