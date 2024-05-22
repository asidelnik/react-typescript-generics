
export interface IModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: JSX.Element[] | JSX.Element;
}
