import React, { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface ModalTypes {
  className?: string;
  children: ReactNode;
}

export default function Modal({ className, children }: ModalTypes) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  // Modal content
  const modalContent = (
    <div className={`absolute w-full ${className}`}>{children}</div>
  );
  return isBrowser
    ? ReactDOM.createPortal(
        modalContent,
        document.getElementById('modal-root') as HTMLDivElement
      )
    : null;
}
