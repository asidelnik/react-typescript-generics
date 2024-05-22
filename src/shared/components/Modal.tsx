import { IModalProps } from '../../interfaces/IModalProps';

export default function Modal({ isOpen, onRequestClose, modalTitle, children }: IModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onRequestClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <header className='modal-header'>
          <h3>{modalTitle}</h3>
          <button onClick={onRequestClose}>x</button>
        </header>
        <main className='modal-main'>
          {children}
        </main>
      </div>
    </div>
  );
}