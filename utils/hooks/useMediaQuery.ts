// React
import { useState, useEffect } from "react";

/**
 * Custom hook to determine the current window so we can fiddle with it in our component
 * @param {string | boolean} query
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) setMatches(media.matches);

    const listener = () => {
      setMatches(media.matches);
    };

    media.addListener(listener);

    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}
