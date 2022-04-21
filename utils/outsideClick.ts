import { useEffect } from "react";

interface Props {
  ref: React.MutableRefObject<HTMLUListElement>,
  onOutsideClick: any,
};

export const useOutsideClick = ({ ref, onOutsideClick }: Props) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onOutsideClick]);
};
