
export interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children?: React.ReactNode;
  closeOnOverlayClick?: boolean;
  title?: string;
  size?: 'lg' | 'md' | 'sm' | 'xl' | 'xxl';
  isCloseIconPresent?: boolean;
  closeBtnClass?: string;
}


export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className: string;
  type?: ButtonType;
  title: string;
  disabled?: boolean;
}


export interface Message {
  user: string;
  text: string;
}

export interface ChatScreenProps {
  isOpen: boolean;
  onClose: () => void;
}

