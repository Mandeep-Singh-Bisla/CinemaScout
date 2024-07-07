import { useState, useEffect } from "react";
export function useLocalStorageState(initialstate, key) {
  const [value, setValue] = useState(function () {
    return initialstate ? JSON.parse(localStorage.getItem(key)) : initialstate;
  });
  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setValue];
}
