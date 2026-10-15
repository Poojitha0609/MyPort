"use client";

import { useEffect } from "react";

// A template re-mounts on every navigation, so each page replays its entrance
// animation — and starts at the top instead of keeping the last page's scroll.
export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return <div className="animate-page">{children}</div>;
}
