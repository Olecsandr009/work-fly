import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../files/img/menu-icons/logo.svg";
import icon1 from "../../files/img/menu-icons/icon-1.svg"
import icon2 from "../../files/img/menu-icons/icon-2.svg"
import icon3 from "../../files/img/menu-icons/icon-3.svg"
import icon5 from "../../files/img/menu-icons/icon-5.svg"
import icon6 from "../../files/img/menu-icons/icon-6.svg"
import icon7 from "../../files/img/menu-icons/icon-7.svg"

export default class SaitBar extends React.Component {
    render() {
        return (
            <aside className="saitbar">
                <div className="saitbar__logo">
                    <img src={logo} alt="" className="saitbar__logo-img" />
                </div>
                <ul className="saitbar__menu-list">
                    <ul className="saitbar__menu-items">
                        <li className="saitbar__menu-item">
                            <NavLink to={"/Dashboard/Empty-state"} className="saitbar__menu-item-link">
                                <svg style={{ "width": "20px", "height": "20px" }}>
                                    <use xlinkHref={`${icon1}#icon-1`}></use>
                                </svg>
                                My tasks
                            </NavLink>
                        </li>
                        <li className="saitbar__menu-item">
                            <NavLink to={"/Dashboard/Task-manager"} data-spoler-link="1" className="saitbar__menu-item-link spoler-link">
                                <svg style={{ "width": "20px", "height": "20px" }}>
                                    <use xlinkHref={`${icon2}#icon-2`}></use>
                                </svg>
                                Task Manager
                                <span className="saitbar__menu-item-length">2</span>
                            </NavLink>
                        </li>
                        <ul hidden style={{ "display": "none" }} data-spoler="1" className="saitbar__menu-list spoiler spoler">
                            <li className="saitbar__menu-item">
                                <a href="#" className="saitbar__menu-item-link">
                                    <svg style={{ "width": "20px", "height": "20px" }}>
                                        <use xlinkHref={`${icon2}#icon-2`}></use>
                                    </svg>
                                    Folder
                                    <span className="saitbar__menu-item-length spoiler">2</span>
                                </a>
                            </li>
                            <li className="saitbar__menu-item">
                                <a href="#" className="saitbar__menu-item-link">
                                    <svg style={{ "width": "20px", "height": "20px" }}>
                                        <use xlinkHref={`${icon2}#icon-2`}></use>
                                    </svg>
                                    New folder
                                </a>
                            </li>
                        </ul>
                        <li className="saitbar__menu-item">
                            <a href="#" className="saitbar__menu-item-link">
                                <svg style={{ "width": "20px", "height": "20px" }}>
                                    <use xlinkHref={`${icon3}#icon-3`}></use>
                                </svg>
                                Storage
                                <span className="saitbar__menu-item-length">2</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="saitbar__menu-items">
                        <li className="saitbar__menu-item-title">Favorites (0)</li>
                    </ul>
                    <ul className="saitbar__menu-items">
                        <li className="saitbar__menu-item-title">Team Manage</li>
                        <li className="saitbar__menu-item">
                            <a href="#" className="saitbar__menu-item-link">
                                <svg style={{ "width": "20px", "height": "20px" }}>
                                    <use xlinkHref={`${icon5}#icon-5`}></use>
                                </svg>
                                Work status
                            </a>
                        </li>
                        <li className="saitbar__menu-item">
                            <a href="#" className="saitbar__menu-item-link">
                                <svg style={{ "width": "20px", "height": "20px" }}>
                                    <use xlinkHref={`${icon6}#icon-6`}></use>
                                </svg>
                                Contacts
                            </a>
                        </li>
                        <li className="saitbar__menu-item">
                            <a href="#" className="saitbar__menu-item-link">
                                <svg style={{ "width": "20px", "height": "20px" }}>
                                    <use xlinkHref={`${icon7}#icon-7`}></use>
                                </svg>
                                News board
                                <span className="saitbar__menu-item-length">2</span>
                            </a>
                        </li>
                    </ul>
                </ul>
            </aside>
        )
    }
}