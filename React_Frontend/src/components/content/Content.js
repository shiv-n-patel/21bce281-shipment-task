import React, { useEffect, useState } from "react";
import './Content.css';

const Content = ({ currentDirectory, setCurrentDirectory, content, currentLevel }) => {
    const [filesAtLevel, setFilesAtLevel] = useState([]);

    useEffect(() => {
        const traverseFileSystem = (content, currentLevel) => {
            let files = [];

            if (currentLevel === currentLevel) {
                content.items.forEach(item => {
                    if (!item.isFolder) {
                        files.push(item);
                    }
                });
            }

            if (currentLevel < currentLevel) {
                content.items.forEach(item => {
                    if (item.isFolder) {
                        files = files.concat(traverseFileSystem(item, currentLevel + 1));
                    }
                });
            }

            return files;
        }

        if (content) {
            setFilesAtLevel(traverseFileSystem(content, 2));
        }
    }, [content, currentLevel]);

    return (
        <div className="content-container">

            {filesAtLevel.map(file => (
                <div key={file.id}>{file.name}</div>
            ))}
            
        </div>
    );
}

export default Content;