
export interface IModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  modalTitle: string;
  children: JSX.Element[] | JSX.Element;
}
