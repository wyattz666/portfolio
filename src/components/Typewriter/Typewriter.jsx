import { useState, useEffect } from 'react';

export default function Typewriter({ words, typeSpeed = 100, deleteSpeed = 50, delayDuration = 1500 }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  // Typing effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), delayDuration);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, typeSpeed, deleteSpeed, delayDuration]);

  return (
    <>
      {words[index].substring(0, subIndex)}
      <span style={{ opacity: blink ? 1 : 0, transition: 'opacity 0.1s' }}>|</span>
    </>
  );
}
