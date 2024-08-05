import React, { useEffect, useState } from "react";
import './Content.css';

const Content = ({ currentDirectory, setCurrentDirectory, content, currentLevel }) => {
    
    const [filesAtLevel, setFilesAtLevel] = useState([]);

    useEffect(() =>
    {
    
        function getFilesAtLevel(directoryObject, level) {
            
            if (level === 1) {
                return directoryObject.files;
            }
            
            
            const files = [];
            directoryObject.subdirectories.forEach(subdirectory => {
                if (level > 1) {
                files.push(...getFilesAtLevel(subdirectory, level - 1));
                }
            });
            return files;
            }
        

        setFilesAtLevel(getFilesAtLevel(content,1));
        console.log(getFilesAtLevel(content,2));
        
    }
    , [content, currentLevel]);

    return (
        <div className="content-container">

            {filesAtLevel.map((file,index) => (
                <div key={index}>{file}</div>
            ))}

        </div>
    );
}

export default Content;
