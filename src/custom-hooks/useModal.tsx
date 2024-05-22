import { useCallback, useEffect, useState } from "react";
export default function useModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModal = useCallback(() => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  }, []);

  const handleEsc = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return { isOpen, toggleModal };
}