//library
import React,{useState} from 'react';

//icons
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { FaFileMedical } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";

// mui components
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import './Home.css'

const Home = () => {
    const [directory, setDirectory] = useState("root/");
    const [open, setOpen] = React.useState(false);
    const [file, setFile] = React.useState(true);

    const handleClickOpen = (file) => {
        setOpen(true);
        setFile(file)
    };

    const handleClose = () => {
        setOpen(false);
    };
    return(  
        <div className='container'>
            <div className="header">
                <div className='flex-row'>
                    <Button><IoArrowBackOutline /></Button>
                    <p>{directory}</p>
                </div>
                <ButtonGroup variant="outlined" aria-label="Basic button group" size='large' sx={{marginRight:"1em"}}>
                    <Button onClick={() => handleClickOpen(false)}><MdOutlineCreateNewFolder /></Button>
                    <Button onClick={() => handleClickOpen(true)}><FaFileMedical /></Button>
                </ButtonGroup>
            </div>

            <Dialog
                    sx={{backgroundColor:"#282c34"}}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                    component: 'form',

                    onSubmit: (event) => {

                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries((formData).entries());
                        const directory_name = formJson.directory_name;
                        const file_name = formJson.file_name;
                        console.log("Directory : ",directory_name);
                        console.log("File : ",file_name);

                        alert(directory_name);
                        handleClose();
                    },
                    }}
                >
                    <Box sx={{ backgroundColor:"#282c34", color: "white"}}>
                        <DialogTitle>{file ? "File Name" : "Directory Name"}</DialogTitle>
                        <DialogContent sx={{color:"white"}}>
                        
                        {file ?
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="file_name"
                                name="file_name"
                                label="Enter File Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                color='primary'
                                
                            />
                            :
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="directory_name"
                                name="directory_name"
                                label="Enter Directory"
                                type="text"
                                fullWidth
                                variant="standard"
                                color='primary'
                                
                            />
                        }
                        </DialogContent>

                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">Create</Button>
                        </DialogActions>

                    </Box>

            </Dialog>
        </div>
    )
}

export default Home;