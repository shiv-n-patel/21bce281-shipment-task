//library
import React,{useState} from 'react';

//icons
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { FaFileMedical } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";


// user components
import Content from '../../components/content/Content';

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
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(true);
    const [currentLevel, setcurrentLevel] = useState(1);
    const [content, setContent] = useState({
        name: 'root',
        files: ['file1.txt', 'file2.txt'],
        subdirectories: [
          {
            name: 'dir1',
            files: ['file3.txt', 'file4.txt'],
            subdirectories: [
              {
                name: 'dir1-1',
                files: ['file5.txt', 'file6.txt'],
                subdirectories: []
              }
            ]
          },
          {
            name: 'dir2',
            files: ['file7.txt', 'file8.txt'],
            subdirectories: []
          }
        ]
      });
    const [currentDirectory, setCurrentDirectory] = useState("root");

    const handleClickOpen = (file) => {
        setOpen(true);
        setFile(file)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const InsertInContent = () => {
    }
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
                       
                        InsertInContent(directory_name, file_name);

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

            <Content currentDirectory = {currentDirectory} setCurrentDirectory={setCurrentDirectory} content={content} currentLevel={currentLevel}/>
        </div>
    )
}

export default Home;