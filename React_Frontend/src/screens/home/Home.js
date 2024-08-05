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
        
        id:"1",
        name: "root",
        isFolder: true,
        level : "1",
        items: [
          {
            id:"2",
            name: "public",
            isFolder: true,
            level : "2",
            items: [
              {
                id:"3",
                name: "public nested 1",
                isFolder: true,
                items: [
                  {
                    id:"4",
                    name: "index.html",
                    isFolder: false,
                    items: []
                  },
                  {
                    id:"5",
                    name: "hello.html",
                    isFolder: false,
                    items: []
                  }
                ]
              },
              {
                id:"6",
                name: "public_nested_file",
                isFolder: false,
                items: []
              }
            ]
          },
          {
            id:"7",
            name: "src",
            isFolder: true,
            level : "2",
            items: [
              {
                id:"8",
                name: "App.js",
                isFolder: false,
                items: []
              },
              {
                id:"9",
                name: "Index.js",
                isFolder: false,
                items: []
              },
              {
                id:"10",
                name: "styles.css",
                isFolder: false,
                items: []
              }
            ]
          },
          {
            id:"11",
            name: "package.json",
            isFolder: false,
            level : "2",
            items: []
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