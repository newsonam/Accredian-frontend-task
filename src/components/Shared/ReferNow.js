import React, { useState } from 'react';
import Box from '@mui/material/Box';
import axios from 'axios';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import './ReferNow.css';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ReferNow({showToastMessage}) {
  const [open, setOpen] = React.useState(false);
  const [refer, setRefer] = useState({
    referrername: '', referreremail: '', referrerphone: '', referrerlocation: '', refereename: '', refereeemail: '', refereephone: '', refereelocation: ''
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setRefer({ ...refer, [name]: value });

  }

  const postData = async (e) => {
    e.preventDefault();
    try {
      axios.post('/referdata', {
        referrername: refer.referrername,
        referreremail: refer.referreremail,
        referrerphone: refer.referrerphone,
        referrerlocation: refer.referrerlocation,
        refereename: refer.refereename,
        refereeemail: refer.refereeemail,
        refereephone: refer.refereephone,
        refereelocation: refer.refereelocation


      }).then((response) => {
        console.log(response);
        if (response.data) {
          showToastMessage();
        }
        setOpen(false);
        setRefer({});
      })
    } catch (err) {
      console.log(err);
    }

  }

  return (
    <div>
      <Button variant="contained" size="small" onClick={handleOpen}>Refer Now</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" textAlign='center' fontWeight='bold'>
            Referrer and Referee Details
          </Typography>
          <form method='post' id="modal-modal-description">
            <TextField
              style={{ width: "300px", margin: "5px" }}
              type="text"
              label="Referrer Name"
              variant="outlined"
              name="referrername"
              value={refer.referrername}
              onChange={handleInputs}
            />
            <br />
            <TextField
              style={{ width: "300px", margin: "5px" }}
              type="email"
              label="Referrer Email"
              variant="outlined"
              name="referreremail"
              value={refer.referreremail}
              onChange={handleInputs}
            />
            <br />
            <TextField
              style={{ width: "300px", margin: "5px" }}
              type="number"
              label="Referrer Phone No"
              variant="outlined"
              name="referrerphone"
              value={refer.referrerphone}
              onChange={handleInputs}
            />
            <br />
            <TextField
              style={{ width: "300px", margin: "5px" }}
              type="text"
              label="Referrer Location"
              variant="outlined"
              name="referrerlocation"
              value={refer.referrerlocation}
              onChange={handleInputs}
            />
            <br />
            <TextField
              style={{ width: "300px", margin: "5px" }}
              type="text"
              label="Referee Name"
              variant="outlined"
              name="refereename"
              value={refer.refereename}
              onChange={handleInputs}
            />
            <br />
            <TextField
              style={{ width: "300px", margin: "5px" }}
              type="email"
              label="Referee Email"
              variant="outlined"
              name="refereeemail"
              value={refer.refereeemail}
              onChange={handleInputs}
            />
            <br />
            <TextField
              style={{ width: "300px", margin: "5px" }}
              type="number"
              label="Referee Phone No"
              variant="outlined"
              name="refereephone"
              value={refer.refereephone}
              onChange={handleInputs}
            />
            <br />
            <TextField
              style={{ width: "300px", margin: "5px" }}
              type="text"
              label="Referee Location"
              variant="outlined"
              name="refereelocation"
              value={refer.refereelocation}
              onChange={handleInputs}
            />
            <br />
            <div className='submit-btn'>
              <Button variant="contained" size="small" onClick={postData} >
                Submit
              </Button>

            </div>
          </form>

        </Box>

      </Modal>
    </div>
  );
}