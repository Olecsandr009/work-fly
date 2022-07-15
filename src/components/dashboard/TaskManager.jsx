import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import addIcon from "../../files/img/all-icons/add.svg";
import mkIcon from "../../files/img/all-icons/mk.svg";
import plusIcon from "../../files/img/all-icons/plus.svg";
import elipseIcon from "../../files/img/all-icons/elipses-menu.svg";
import illustrantion4 from "../../files/img/illustration4.svg";

// More icons

import renameIcon from "../../files/img/more-icons/ic_rename.svg";
import moveIcon from "../../files/img/more-icons/ic_move.svg";
import docIcon from "../../files/img/more-icons/ic_doc.svg";
import contactsIcon from "../../files/img/more-icons/ic_contacts.svg";
import archiveIcon from "../../files/img/more-icons/ic_archive.svg";
import add from "../../files/img/all-icons/add.svg";

export default function TaskManager(props) {

    function openPopupFunction(e) {

        e.preventDefault();
        props.exitAllPopups();

        const burgerLinkNum = e.target.dataset.burgerLink;

        props.setPopupDataState(burgerLinkNum);

    }

    function returnAllFolders(array) {
        if (array) {
            return (
                <>
                    {
                        array.map((object, index) => (
                            <Link
                                key={index}
                                to={{
                                    pathname: "/Dashboard/New-folder",
                                    search: `?id=${object.id}&name=${object.name}&color=${object.color}&icon=${object.icon}&type=${object.type}`
                                }}
                                className="task-manager-folder"
                            >
                                <div style={{ "backgroundColor": object.color }} className="task-manager-folder__title-top">
                                    <div className="task-manager-folder__title-icon">
                                        <svg style={{ "width": "44px", "height": "44px" }}>
                                            <use xlinkHref={`${object.icon[0]}#${object.icon[1]}`}></use>
                                        </svg>
                                    </div>
                                    <div className="task-manager-folder__title-content">
                                        <h3 className="task-manager-folder__title-folder-name">{object.name}</h3>
                                        <div className="task-manager-folder__title-folder-content-bottom">
                                            <p className="task-manager-folder__title-folder-owner-name">{object.author}</p>
                                            <span></span>
                                            <p className="task-manager-folder__title-folder-length-tasks">0 tasks</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="task-manager-folder__content-bottom">
                                    <div className="task-manager-folder__members">
                                        <p className="task-manager-folder__members-text">Members</p>
                                        <div className="task-manager-folder__members-avatars">
                                            <img src="@img/avatar2.svg" alt=""
                                                className="task-manager-folder__members-avatars-image" />
                                            <img src="@img/avatar2.svg" alt=""
                                                className="task-manager-folder__members-avatars-image" />
                                            <p className="task-manager-folder__members-avatar-length">+3</p>
                                        </div>
                                    </div>
                                    <div className="task-manager-folder__feedbacks">
                                        <p className="task-manager-folder__feedback-length">2 new</p>
                                        <p className="task-manager-folder__feedback-length red">2 alert</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </>
            )
        }
    }

    let [isEmptyState, setIsEmptyState] = useState("");

    function isEmptyFolders() {

        if (document.querySelector(".task-manager-folders .task-manager-folder")) {
            if (isEmptyState !== "no-empty") {
                setIsEmptyState("no-empty");
            }
        } else {
            if (isEmptyState !== "") {
                setIsEmptyState("");
            }
        }
    }

    function onClickMenu(e) {
        const menu = document.querySelector(".empty-state-dashboard__menu-list");

        e.preventDefault();

        if (menu) {
            menu.classList.toggle("active");
        }
    }

    window.addEventListener("click", e => {
        if (!e.target.closest(".empty-state-dashboard__menu-list") && !e.target.closest("[data-more-menu]")) {
            if (document.querySelector(".empty-state-dashboard__menu-list.active")) {
                document.querySelector(".empty-state-dashboard__menu-list").classList.remove("active");
            }
        }
    })

    useEffect(() => {
        isEmptyFolders()
    })

    return (
        <>
            <section className={`empty-state-dashboard ${isEmptyState}`}>
                <div className="empty-state-dashboard__header">
                    <h2 className="empty-state-dashboard__title">Task manager</h2>
                    <div className="empty-state-dashboard__buttons-right">
                        <a onClick={openPopupFunction} data-burger-link="1" href="#" className="empty-state-dashboard__button-link">
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

                            <a onClick={onClickMenu} data-more-menu href="#" className="empty-state-dashboard__button-link more">
                                <img src={elipseIcon} alt="" className="empty-state-dashboard__button-link-icon" />
                            </a>

                            <ul className="empty-state-dashboard__menu-list">
                                <li className="empty-state-dashboard__menu-item">
                                    <a href="#" className="empty-state-dashboard__menu-link">
                                        <img src={renameIcon} alt="" className="empty-state-dashboard__menu-icon" />
                                        Edit
                                    </a>
                                </li>
                                <li className="empty-state-dashboard__menu-item">
                                    <a href="#" className="empty-state-dashboard__menu-link">
                                        <img src={moveIcon} alt="" className="empty-state-dashboard__menu-icon" />
                                        Move to..
                                    </a>
                                </li>
                                <li className="empty-state-dashboard__menu-item">
                                    <a href="#" className="empty-state-dashboard__menu-link">
                                        <img src={docIcon} alt="" className="empty-state-dashboard__menu-icon" />
                                        Saved templates
                                    </a>
                                </li>
                                <li className="empty-state-dashboard__menu-item">
                                    <a href="#" className="empty-state-dashboard__menu-link">
                                        <img src={contactsIcon} alt="" className="empty-state-dashboard__menu-icon" />
                                        Accesses permissions
                                    </a>
                                </li>
                                <li className="empty-state-dashboard__menu-item">
                                    <a href="#" className="empty-state-dashboard__menu-link">
                                        <img src={archiveIcon} alt="" className="empty-state-dashboard__menu-icon" />
                                        Move to archive
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="empty-state-dashboard__center-content">
                    <div className="empty-state-dashboard__media">
                        <img src={illustrantion4} alt="Image" className="empty-state-dashboard__image" />
                    </div>
                    <p className="empty-state-dashboard__text">This folder is empty</p>
                    <a onClick={openPopupFunction} data-burger-link="1" href="#" className="empty-state-dashboard__button-link">
                        <img src={addIcon} alt="Icon" className="empty-state-dashboard__button-link-icon" />
                        Add new folder
                    </a>
                </div>
            </section>

            <div className="task-manager-folders">
                {returnAllFolders(props.allFoldersArray)}
            </div>
        </>
    )
}