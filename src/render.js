import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { addFolderFunction, allFoldersArray, allTasksArray } from "./addFolderFunc";

const root = ReactDOM.createRoot(document.getElementById('root'));

export default function rerenderDOM() {

    root.render(
        <App
            allFoldersArray={allFoldersArray}
            addFolderFunction={addFolderFunction}
            allTasksArray={allTasksArray}
        />
    );

}