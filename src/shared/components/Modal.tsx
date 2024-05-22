import { IModalProps } from '../../interfaces/IModalProps';
import { IoClose } from "react-icons/io5";


export default function Modal({ isOpen, onRequestClose, modalTitle, children }: IModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onRequestClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <header className='modal-header'>
          <h3>{modalTitle}</h3>
          <button onClick={onRequestClose} className='on-light-bg circle-button'>
            <IoClose />
          </button>
        </header>
        <main className='modal-main'>
          {children}
        </main>
      </div>
    </div>
  );
}