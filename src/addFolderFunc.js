import rerenderDOM from "./render";

export let allFoldersArray = [
    // {
    //     name: "new folder",
    //     color: "var(--color-yellow)",
    //     icon: [
    //         "/static/media/ic_apps.ef861be66121c074524640c4852ce20d.svg",
    //         "apps",
    //     ],
    //     type: "default",
    //     author: ""
    // }
]

export function addFolderFunction(object) {
    allFoldersArray.push(object);

    rerenderDOM();
}