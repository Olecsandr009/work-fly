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
                    exitAllPopups={props.exitAllPopups}
                    popupDataState={props.popupDataState}
                    setPopupDataState={props.setPopupDataState}
                    allFoldersArray={props.allFoldersArray}
                    addFolderFunction={props.addFolderFunction}
                />

                {/* New Task Popups */}

                <NewTaskPopupTypes
                    popupDataState={props.popupDataState}
                    exitAllPopups={props.exitAllPopups}
                    setPopupDataState={props.setPopupDataState}
                    setCurrentObjectTaskState={props.setCurrentObjectTaskState}
                />
                <NewTaskPopupSetting
                    popupDataState={props.popupDataState}
                    exitAllPopups={props.exitAllPopups}
                    setPopupDataState={props.setPopupDataState}
                    newTaskSetting={props.newTaskSetting}
                    setCurrentObjectTaskState={props.setCurrentObjectTaskState}
                    currentObjectTaskState={props.currentObjectTaskState}
                    allFoldersArray={props.allFoldersArray}
                    currentFolderLocationId={props.currentFolderLocationId}
                    currentFolderLocationState={props.currentFolderLocationState}
                    setCurrentFolderLocationState={props.setCurrentFolderLocationState}
                />
                <NewTaskPopupNotification
                    popupDataState={props.popupDataState}
                    exitAllPopups={props.exitAllPopups}
                    setPopupDataState={props.setPopupDataState}
                    setCurrentObjectTaskState={props.setCurrentObjectTaskState}
                    addTaskFunction={props.addTaskFunction}
                />
                <NewSubTaskPopupSetting
                    popupDataState={props.popupDataState}
                    setCurrentObjectTaskState={props.setCurrentObjectTaskState}
                />
                <PopupAccesses
                    popupDataState={props.popupDataState}
                />
                <PopupTemplates
                    popupDataState={props.popupDataState}
                />
                <ViewTaskInfo
                    popupDataState={props.popupDataState}
                />
            </div>
        </>
    )
}