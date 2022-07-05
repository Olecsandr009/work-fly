import React from "react";
import {
    Link,
} from "react-router-dom";

import searchIcon from "../../files/img/all-icons/search.svg";
import deleteIcon from "../../files/img/all-icons/delete.svg";
import checkIcon from "../../files/img/all-icons/check.svg";
import pdfIcon from "../../files/img/all-icons/pdf.svg";
import xlsxIcon from "../../files/img/all-icons/xlsx.svg";
import userIcon from "../../files/img/all-icons/user.svg";
import playBtnicon from "../../files/img/play-btn.svg";
import notificationIcon from "../../files/img/all-icons/notif.svg";
import avatar from "../../files/img/avatar.webp";

export default class Header extends React.Component {

    render() {
        return (
            <header className="header-dashboard">
                <div className="header-dashboard__search">
                    <form className="header-dashboard__search-form">
                        <button className="header-dashboard__search-button">
                            <img src={searchIcon} alt="" className="header-dashboard__search-button-icon" />
                        </button>
                        <input type="search" className="header-dashboard__search-input" placeholder="Search folders, tasks, document" />
                        <button className="header-dashboard__search-close">
                            <img src={deleteIcon} alt="" className="header-dashboard__search-close-icon" />
                        </button>
                        <div className="header-dashboard__all-types">All types
                            <div className="header-dashboard__all-types-menu">
                                <ul className="header-dashboard__all-types-list">
                                    <li className="header-dashboard__all-types-item"><a href="#" className="header-dashboard__all-types-link">Task</a></li>
                                    <li className="header-dashboard__all-types-item"><a href="#" className="header-dashboard__all-types-link">Folder</a></li>
                                    <li className="header-dashboard__all-types-item"><a href="#" className="header-dashboard__all-types-link">Files</a></li>
                                    <li className="header-dashboard__all-types-item"><a href="#" className="header-dashboard__all-types-link">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="header-dashboard__search-result">
                            <p className="header-dashboard__result-title">Recent</p>
                            <ul className="header-dashboard__result-list">
                                <li className="header-dashboard__result-item"><a href="#" className="header-dashboard__result-link">
                                    <img src={checkIcon} alt="" className="header-dashboard__result-image" />
                                    Create new folder
                                </a></li>
                                <li className="header-dashboard__result-item"><a href="#" className="header-dashboard__result-link">
                                    <img src={pdfIcon} alt="" className="header-dashboard__result-image" />
                                    File name
                                </a></li>
                                <li className="header-dashboard__result-item"><a href="#" className="header-dashboard__result-link">
                                    <img src={xlsxIcon} alt="" className="header-dashboard__result-image" />
                                    File name
                                </a></li>
                                <li className="header-dashboard__result-item"><a href="#" className="header-dashboard__result-link">
                                    <img src={userIcon} alt="" className="header-dashboard__result-image" />
                                    Contact name
                                </a></li>
                            </ul>
                        </div>
                    </form>
                </div>
                <div className="header-dashboard__links-right">
                    <div className="header-dashboard__header-timer">
                        <button className="header-dashboard__button-play">
                            <img src={playBtnicon} alt="" className="header-dashboard__button-play-icon" />
                        </button>
                        <span className="header-dashboard__timer">00:00:00</span>
                    </div>
                    <a href="#" className="header-dashboard__notification">
                        <img src={notificationIcon} alt="" className="header-dashboard__notification-icon" />
                    </a>
                    <a href="#" className="header-dashboard__avatar">
                        <img src={avatar} alt="" className="header-dashboard__avatar-image" />
                    </a>
                </div>
            </header>
        )
    }
}