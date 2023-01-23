  import React from 'react';
  import { styled } from '@mui/material/styles';
  import Dialog from '@mui/material/Dialog';

  import DialogTitle from '@mui/material/DialogTitle';


interface ModalProps  {
  title: string,
  children: React.ReactNode,
  open: boolean,
  handleClose: () => void ,
}
  
  const Modal:React.FC<ModalProps> = ({open, handleClose, title, children }: ModalProps): React.ReactElement => {
    
    return (
      <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{title}</DialogTitle>
          {children}
      </Dialog>
    );
  };


  export default Modal;