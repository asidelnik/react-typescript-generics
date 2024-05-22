import { IModalProps } from '../../interfaces/IModalProps';

export default function Modal({ isOpen, onRequestClose, children }: IModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onRequestClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}