import rerenderDOM from "./render";

export let allFoldersArray = []

export let allTasksArray = {
    // folderId: [
    //              {}
    // ]
}

export function addFolderFunction(object) {
    allFoldersArray.push(object);

    rerenderDOM();
}

export function addIdObject(folderId) {
    allTasksArray[folderId] = [];

    // rerenderDOM();
}

export function addTaskFunction(folderId, object) {
    allTasksArray[folderId].push(object);
}