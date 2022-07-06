import React from "react";
import { Outlet } from "react-router-dom";

import HeaderDashboard from "./headers/HeaderDashboard";
import SaitBar from "./dashboard/SaitBar";

import NewFolderPopup from "./dashboard/popups/NewFolderPopup";

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
                    />
                </div>
            </>
        )
    }
}