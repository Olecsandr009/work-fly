import React, { useEffect, useRef } from "react";

import { useLocation } from "react-router-dom";

import addIcon from "../../files/img/all-icons/add.svg";
import mkIcon from "../../files/img/all-icons/mk.svg";
import plusIcon from "../../files/img/all-icons/plus.svg";
import iconStar from "../../files/img/icon-star.svg";
import elipsesMenuIcon from "../../files/img/all-icons/elipses-menu.svg";
import renameIcon from "../../files/img/more-icons/ic_rename.svg";
import moveIcon from "../../files/img/more-icons/ic_move.svg";
import docIcon from "../../files/img/more-icons/ic_doc.svg";
import contactsIcon from "../../files/img/more-icons/ic_contacts.svg";
import archiveIcon from "../../files/img/more-icons/ic_archive.svg";
import exit from "../../files/img/exit.svg";
import searchIcon from "../../files/img/tasks-icons/ic_search.svg";
import userIcon from "../../files/img/tasks-icons/ic_user.svg";
import statusIcon from "../../files/img/tasks-icons/ic_status.svg";
import priorityIcon from "../../files/img/tasks-icons/ic_priority.svg";
import companyIcon from "../../files/img/tasks-icons/ic_company.svg";
import dateIcon from "../../files/img/tasks-icons/ic_date.svg";
import avaImage from "../../files/img/task-list-icons/ava.png";
import subTaskIcon from "../../files/img/task-list-icons/ic_subtask.svg";
import attachIcon from "../../files/img/task-list-icons/ic_attach.svg";
import messageIcon from "../../files/img/task-list-icons/ic_message.svg";
import moreIcon from "../../files/img/task-list-icons/ic_more.svg";

export default function NewFolder(props) {

    const location = useLocation();
    const arrayData = {};

    location.search.split("?").pop().split("&").forEach(element => {
        let [key, value] = element.split("=");
        arrayData[`${key}`] = value;
    })

    function openPopupFunction(e) {

        props.setCurrentFolderLocationId(arrayData.id);

        if (arrayData.type === "custom") {
            e.preventDefault();
            props.exitAllPopups();

            const burgerLinkNum = e.target.dataset.burgerLink;

            props.setPopupDataState(burgerLinkNum);

        } else {

            e.preventDefault();
            props.exitAllPopups();
            props.setPopupDataState("3");

        }

    }

    function loopAllTasksFunc(array) {
        return (
            <>
                {
                    array[arrayData.id] ?
                        array[arrayData.id].map((object, index) => (
                            <li key={index} className="all-tasks-list__task-item">
                                <a data-burger-link="6" href="#" className="all-tasks-list__task-content">
                                    <div className="all-tasks-list__task-media">
                                        <img src={avaImage} alt="" className="all-tasks-list__task-image" />
                                    </div>
                                    <div className="all-tasks-list__task-info">
                                        <h4 className="all-tasks-list__task-name">
                                            {object.name}
                                        </h4>
                                        <div className="all-tasks-list__task-info-bottom">
                                            <p className="all-tasks-list__task-length">5</p>
                                            <img src={subTaskIcon} alt="" className="all-tasks-list__task-icon" />
                                            <div className="all-tasks-list__task-line">
                                                <span className="all-tasks-list__task-line-left"></span>
                                                <span className="all-tasks-list__task-line-right"></span>
                                            </div>
                                            <p className="all-tasks-list__task-percent">
                                                <span className="all-tasks-list__task-percent-text">30% Complete</span>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                                <div className="all-tasks-list__task-status">
                                    <span className="all-tasks-list__task-status-text">{object.status}</span>
                                </div>
                                <div className="all-tasks-list__task-priority">
                                    <span className="all-tasks-list__task-priority-text">{object.priority}</span>
                                </div>
                                <div className="all-tasks-list__task-date">
                                    <p className="all-tasks-list__task-date-top">4 Jun</p>
                                    <p className="all-tasks-list__task-date-bottom">In 4 Months</p>
                                </div>
                                <div className="all-tasks-list__task-asign">
                                    <a href="#" className="all-tasks-list__task-ava">
                                        <img src={avaImage} alt="" className="all-tasks-list__task-ava-image" />
                                    </a>
                                    <a href="#" className="all-tasks-list__task-ava">
                                        <img src={avaImage} alt="" className="all-tasks-list__task-ava-image" />
                                    </a>
                                    <a href="#" className="all-tasks-list__task-ava">
                                        +3
                                    </a>
                                </div>
                                <div className="all-tasks-list__task-links">
                                    <a href="#" className="all-tasks-list__task-link">
                                        <img src={attachIcon} alt="" className="all-tasks-list__task-link-icon" />
                                        <span className="all-tasks-list__task-link-length"></span>
                                    </a>
                                    <a href="#" className="all-tasks-list__task-link">
                                        <img src={messageIcon} alt="" className="all-tasks-list__task-link-icon" />
                                    </a>
                                    <div className="all-tasks-list__task-more-menu">
                                        <a data-add-more="13" href="#" className="all-tasks-list__task-link more">
                                            <img src={moreIcon} alt="Icon" className="all-tasks-list__task-link-icon" />
                                        </a>

                                        <ul data-add-more="13" className="all-tasks-list__more-menu">
                                            <li className="all-tasks-list__more-menu-item">
                                                <a data-burger-link="3" href="#" className="all-tasks-list__more-menu-link">
                                                    <img src={renameIcon} alt="" className="all-tasks-list__more-menu-image" />
                                                    Edit
                                                </a>
                                            </li>
                                            <li className="all-tasks-list__more-menu-item">
                                                <a href="#" className="all-tasks-list__more-menu-link">
                                                    <img src={moveIcon} alt="" className="all-tasks-list__more-menu-image" />
                                                    Move to..
                                                </a>
                                            </li>
                                            <li className="all-tasks-list__more-menu-item">
                                                <a data-burger-link="8" href="#" className="all-tasks-list__more-menu-link">
                                                    <img src={docIcon} alt="" className="all-tasks-list__more-menu-image" />
                                                    Save as template
                                                </a>
                                            </li>
                                            <li className="all-tasks-list__more-menu-item">
                                                <a data-burger-link="7" href="#" className="all-tasks-list__more-menu-link">
                                                    <img src={contactsIcon} alt="" className="all-tasks-list__more-menu-image" />
                                                    Accesses permissions
                                                </a>
                                            </li>
                                            <li className="all-tasks-list__more-menu-item">
                                                <a data-notification-link="1" href="#" className="all-tasks-list__more-menu-link">
                                                    <img src={archiveIcon} alt="" className="all-tasks-list__more-menu-image" />
                                                    Move to archive
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        )) : undefined
                }
            </>
        )
    }

    return (
        <>
            <div className="bread-crumbs">
                <a href="#" className="bread-crumbs__link-back">Task manager</a>
                <span className="bread-crumbs__slesh"> / </span>
                <p className="bread-crumbs__current-page">{arrayData.name.split("%20").join(" ")}</p>
            </div>

            <div className="new-folder__header">
                <div className="new-folder__left">
                    <div style={{ "backgroundColor": arrayData.color }} className="new-folder__folder-icon">
                        <svg style={{ "width": "24px", "height": "24px" }}>
                            <use xlinkHref={`${arrayData.icon.split(",")[0]}#${arrayData.icon.split(",")[1]}`}></use>
                        </svg>
                    </div>
                    <div className="task-manager-folder__title-content">
                        <h3 className="new-folder__title-folder-name">
                            {arrayData.name.split("%20").join(" ")}
                            <a href="#" className="new-folder__title-folder-star">
                                <img src={iconStar} alt="" className="new-folder__title-folder-icon" />
                            </a>
                        </h3>
                        <div className="task-manager-folder__title-folder-content-bottom">
                            <p className="task-manager-folder__title-folder-owner-name">Owner name</p>
                            <span></span>
                            <p className="task-manager-folder__title-folder-length-tasks">0 tasks</p>
                        </div>
                    </div>
                </div>
                <div className="empty-state-dashboard__buttons-right">
                    <a data-burger-link="1" href="#" className="empty-state-dashboard__button-link">
                        <img src={addIcon} alt="" className="empty-state-dashboard__button-link-icon" />
                        New folder
                    </a>
                    <div className="empty-state-dashboard__view-accounts">
                        <div className="empty-state-dashboard__view-account">
                            <img src={mkIcon} alt="" className="empty-state-dashboard__view-account-img" />
                        </div>
                        <div className="empty-state-dashboard__view-account">
                            <img src={mkIcon} alt="" className="empty-state-dashboard__view-account-img" />
                        </div>
                        <div className="empty-state-dashboard__view-account">
                            +3
                        </div>
                    </div>
                    <a href="#" className="empty-state-dashboard__button-link">
                        <img src={plusIcon} alt="" className="empty-state-dashboard__button-link-icon" />
                        Invite
                    </a>
                    <div className="empty-state-dashboard__more-menu">

                        <a data-add-more="11" href="#" className="empty-state-dashboard__button-link more">
                            <img src={elipsesMenuIcon} alt=""
                                className="empty-state-dashboard__button-link-icon" />
                        </a>

                        <ul data-add-more="11" className="empty-state-dashboard__menu-list">
                            <li className="empty-state-dashboard__menu-item">
                                <a data-burger-link="1" href="#" className="empty-state-dashboard__menu-link">
                                    <img src={renameIcon} alt=""
                                        className="empty-state-dashboard__menu-icon" />
                                    Edit
                                </a>
                            </li>
                            <li className="empty-state-dashboard__menu-item">
                                <a href="#" className="empty-state-dashboard__menu-link">
                                    <img src={moveIcon} alt=""
                                        className="empty-state-dashboard__menu-icon" />
                                    Move to..
                                </a>
                            </li>
                            <li className="empty-state-dashboard__menu-item">
                                <a data-burger-link="8" href="#" className="empty-state-dashboard__menu-link">
                                    <img src={docIcon} alt=""
                                        className="empty-state-dashboard__menu-icon" />
                                    Saved templates
                                </a>
                            </li>
                            <li className="empty-state-dashboard__menu-item">
                                <a data-burger-link="7" href="#" className="empty-state-dashboard__menu-link">
                                    <img src={contactsIcon} alt=""
                                        className="empty-state-dashboard__menu-icon" />
                                    Accesses permissions
                                </a>
                            </li>
                            <li className="empty-state-dashboard__menu-item">
                                <a data-notification-link="1" href="#" className="empty-state-dashboard__menu-link">
                                    <img src={archiveIcon} alt=""
                                        className="empty-state-dashboard__menu-icon" />
                                    Move to archive
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="archive-notification" data-notification="1">
                Task archived
                <a data-notification-close="1" href="#" className="archive-notification__close">
                    <img src={exit} alt="" className="archive-notification__close-icon" />
                </a>
            </div>

            <section className="new-folder-tasks">
                <a href="#" className="new-folder-tasks__spoler-tasks btn-bottom-small grey">Tasks (0)</a>
                <div className="new-folder-tasks__tasks-menu">
                    <form action="#" className="new-folder-tasks__search">
                        <button className="new-folder-tasks__submit">
                            <img src={searchIcon} alt="" className="new-folder-tasks__submit-icon" />
                        </button>
                        <input type="search" className="new-folder-tasks__search-input" placeholder="Search task or tag" />
                    </form>
                    <ul className="new-folder-tasks__menu-list">
                        <li className="new-folder-tasks__menu-item"><a href="#" className="new-folder-tasks__menu-link btn-bottom-small">
                            <img src={userIcon} alt="" className="new-folder-tasks__menu-link-icon" />
                            Assigned to
                        </a></li>
                        <li className="new-folder-tasks__menu-item"><a href="#" className="new-folder-tasks__menu-link btn-bottom-small">
                            <img src={statusIcon} alt="" className="new-folder-tasks__menu-link-icon" />
                            Status
                        </a></li>
                        <li className="new-folder-tasks__menu-item"><a href="#" className="new-folder-tasks__menu-link btn-bottom-small">
                            <img src={priorityIcon} alt="" className="new-folder-tasks__menu-link-icon" />
                            Priority
                        </a></li>
                        <li className="new-folder-tasks__menu-item"><a href="#" className="new-folder-tasks__menu-link btn-bottom-small">
                            <img src={companyIcon} alt="" className="new-folder-tasks__menu-link-icon" />
                            Department
                        </a></li>
                        <li className="new-folder-tasks__menu-item"><a href="#" className="new-folder-tasks__menu-link btn-bottom-small">
                            <img src={dateIcon} alt="" className="new-folder-tasks__menu-link-icon" />
                            Due date
                        </a></li>
                        <li className="new-folder-tasks__menu-item">
                            <a data-burger-link="2" onClick={openPopupFunction} href="#" className="new-folder-tasks__menu-link">
                                <img src={addIcon} alt="" className="new-folder-tasks__menu-link-icon" />
                                New task
                            </a>
                        </li>
                    </ul>
                </div>
                {/* <div className="new-folder-tasks__empty-tasks">openPopupFunction
                    <h4 className="new-folder-tasks__empty-title">No tasks</h4>
                    <a href="#" data-burger-link="2" className="new-folder-tasks__empty-add-link">
                        <img src={addIcon} alt="" className="new-folder-tasks__empty-add-icon" />
                        Add new task
                    </a>
                </div> */}
            </section>
            <section className="all-tasks-list">
                <ul className="all-tasks-list__header">
                    <li className="all-tasks-list__header-item task">Owner</li>
                    <li className="all-tasks-list__header-item">Status</li>
                    <li className="all-tasks-list__header-item">Priority</li>
                    <li className="all-tasks-list__header-item"><a href="#" className="all-tasks-list__header-item-link arrows">Due date</a></li>
                    <li className="all-tasks-list__header-item">Assign to</li>
                </ul>
                <ul className="all-tasks-list__tasks">
                    {loopAllTasksFunc(props.allTasksArray)}
                </ul>
            </section>
        </>
    )
}