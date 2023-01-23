  import React from 'react';
  import Dialog from '@mui/material/Dialog';
  import DialogTitle from '@mui/material/DialogTitle';


interface ModalProps  {
  title: string,
  children: React.ReactNode,
  open: boolean,
  // modalClose: "signOut" | "singUpOut"
  handleClose: (close: "signOut" | "singUpOut") => void ,
}
  
  const Modal:React.FC<ModalProps> = ({open, handleClose, title, children, }: ModalProps): React.ReactElement => {
    
    return (
      <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{title}</DialogTitle>
          {children}
      </Dialog>
    );
  };


  export default Modal;