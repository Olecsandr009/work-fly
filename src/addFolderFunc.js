import rerenderDOM from "./render";

export let allFoldersArray = []

export let allTasksArray = [
    // {
    //     "id": "",
    //     [
    //         {}
    //     ]
    // }
]

export function addFolderFunction(object) {
    allFoldersArray.push(object);

    rerenderDOM();
}