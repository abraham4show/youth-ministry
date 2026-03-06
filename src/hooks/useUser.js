import { useState } from "react";

export function useUser() {
  // Read localStorage synchronously at initialization
  const [user] = useState(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        localStorage.removeItem("user");
        return null;
      }
    }
    return null;
  });

  return user;
}
