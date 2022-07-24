import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import HeaderDashboard from "./headers/HeaderDashboard";
import SaitBar from "./dashboard/SaitBar";

import NewFolderPopup from "./dashboard/popups/NewFolderPopup";

import NewTaskPopupTypes from "./dashboard/popups/NewTaskPopupTypes";
import NewTaskPopupSetting from "./dashboard/popups/NewTaskPopupSetting";
import NewTaskPopupNotification from "./dashboard/popups/NewTaskPopupNotification";
import NewSubTaskPopupSetting from "./dashboard/popups/NewSubTaskPopupSetting";
import PopupAccesses from "./dashboard/popups/PopupAccesses";
import PopupTemplates from "./dashboard/popups/PopupTemplates";
import ViewTaskInfo from "./dashboard/popups/ViewTaskInfo";

export default function Dashboard(props) {

    let [folderIdNewTaskState, setFolderIdNewTaskState] = useState("")

    return (
        <>
            <div className="grid-wrapper">
                <SaitBar />
                <div className="wrapper dashboard">
                    <HeaderDashboard />
                    <div className="main dashboard">
                        <Outlet />
                    </div>
                </div>
                <NewFolderPopup

                    // Функція для закриття модальних вікон
                    exitAllPopups={props.exitAllPopups}

                    // Стан модального вікна
                    popupDataState={props.popupDataState}

                    // Функція для зміни стану вікна
                    setPopupDataState={props.setPopupDataState}

                    // Масив з всіма папками
                    allFoldersArray={props.allFoldersArray}

                    // Функція для створення нової папки
                    addFolderFunction={props.addFolderFunction}

                    // Функція для створення нового таска
                    addTaskFunction={props.addTaskFunction}

                    // Функція для створення нового масиву тасків по ідентифікатору папки
                    addIdObject={props.addIdObject}
                />

                {/* New Task Popups */}

                <NewTaskPopupTypes

                    // Стан модального вікна
                    popupDataState={props.popupDataState}

                    // Функція для закриття модальних вікон
                    exitAllPopups={props.exitAllPopups}

                    // Функція для зміни стану вікна
                    setPopupDataState={props.setPopupDataState}

                    // Функція для зміни даних поточного таска (який зараз створюється)
                    setCurrentObjectTaskState={props.setCurrentObjectTaskState}
                />
                <NewTaskPopupSetting

                    // Стан модального вікна
                    popupDataState={props.popupDataState}

                    // Функція для закриття модальних вікон
                    exitAllPopups={props.exitAllPopups}

                    // Функція для зміни стану вікна
                    setPopupDataState={props.setPopupDataState}

                    newTaskSetting={props.newTaskSetting}

                    // Функція для зміни даних поточного таска (який зараз створюється)
                    setCurrentObjectTaskState={props.setCurrentObjectTaskState}

                    // Дані таска що зараз створюється
                    currentObjectTaskState={props.currentObjectTaskState}

                    // Масив з всіма папками
                    allFoldersArray={props.allFoldersArray}

                    // ID поточної папки
                    currentFolderLocationId={props.currentFolderLocationId}

                    // Дані поточної папки
                    currentFolderLocationState={props.currentFolderLocationState}

                    // Функція для зміни даних поточної папки
                    setCurrentFolderLocationState={props.setCurrentFolderLocationState}

                    // Функція для зміни ID папки для створення таска
                    setFolderIdNewTaskState={setFolderIdNewTaskState}
                />
                <NewTaskPopupNotification

                    // Стан модального вікна
                    popupDataState={props.popupDataState}

                    // Функція для закриття модальних вікон
                    exitAllPopups={props.exitAllPopups}

                    // Функція для зміни стану вікна
                    setPopupDataState={props.setPopupDataState}

                    // Дані таска що зараз створюється
                    currentObjectTaskState={props.currentObjectTaskState}

                    // Функція для зміни даних поточного таска (який зараз створюється)
                    setCurrentObjectTaskState={props.setCurrentObjectTaskState}

                    // Функція для створення нового таска
                    addTaskFunction={props.addTaskFunction}

                    // Дані поточної папки
                    currentFolderLocationState={props.currentFolderLocationState}

                    // Функція для зміни даних поточної папки
                    setCurrentFolderLocationState={props.setCurrentFolderLocationState}

                    // ID папки в яку створювати таск
                    folderIdNewTaskState={folderIdNewTaskState}
                />
                <NewSubTaskPopupSetting

                    // Стан модального вікна
                    popupDataState={props.popupDataState}

                    // Функція для зміни даних поточного таска (який зараз створюється)
                    setCurrentObjectTaskState={props.setCurrentObjectTaskState}
                />
                <PopupAccesses

                    // Стан модального вікна
                    popupDataState={props.popupDataState}
                />
                <PopupTemplates

                    // Стан модального вікна
                    popupDataState={props.popupDataState}
                />
                <ViewTaskInfo

                    // Стан модального вікна
                    popupDataState={props.popupDataState}
                />
            </div>
        </>
    )
}