import React from "react";
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

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
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
                        exitAllPopups={this.props.exitAllPopups}
                        popupDataState={this.props.popupDataState}
                        setPopupDataState={this.props.setPopupDataState}
                        allFoldersArray={this.props.allFoldersArray}
                        addFolderFunction={this.props.addFolderFunction}
                    />

                    {/* New Task Popups */}

                    <NewTaskPopupTypes />
                    <NewTaskPopupSetting />
                    <NewTaskPopupNotification />
                    <NewSubTaskPopupSetting />
                    <PopupAccesses />
                    <PopupTemplates />
                    <ViewTaskInfo />
                </div>
            </>
        )
    }
}