"use client";

import { useEffect, useState } from "react";

// Types each word, pauses, deletes it, then moves to the next one.
export default function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let delay = deleting ? 45 : 90;
    if (!deleting && text === word) delay = 1400;
    if (deleting && text === "") delay = 300;

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return (
    <span>
      {text}
      <span className="animate-blink ml-0.5 inline-block w-[2px] bg-lime align-middle">&nbsp;</span>
    </span>
  );
}
