import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FiBook, FiXCircle } from 'react-icons/fi';
import { Chip } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Chip size="large" color='secondary' icon={<FiBook/>} label=' Rule Book' onClick={handleClickOpen}>

      </Chip>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {props.title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            // color: (theme) => theme.palette.grey[500],
          }}
        >
          <FiXCircle />
        </IconButton>
        <DialogContent dividers style={{ color: "Black" }}>
          <a href={props.description} target='_blank'>
          <Typography gutterBottom>
           {props.description}
          </Typography>
          </a>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Got it
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
