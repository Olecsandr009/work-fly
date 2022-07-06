import React, { useEffect } from "react";

import appsIcon from "../../../files/img/folder-icons/ic_apps.svg";
import cloudIcon from "../../../files/img/folder-icons/ic_cloud.svg";
import cupIcon from "../../../files/img/folder-icons/ic_cup.svg";
import fireIcon from "../../../files/img/folder-icons/ic_fire.svg";
import flagIcon from "../../../files/img/folder-icons/ic_flag.svg";
import folderIcon from "../../../files/img/folder-icons/ic_folder.svg";
import hartIcon from "../../../files/img/folder-icons/ic_hart.svg";
import homeIcon from "../../../files/img/folder-icons/ic_home.svg";
import imageIcon from "../../../files/img/folder-icons/ic_image.svg";
import layoutIcon from "../../../files/img/folder-icons/ic_layout.svg";
import lightBulbIcon from "../../../files/img/folder-icons/ic_lightbulb.svg";
import locationIcon from "../../../files/img/folder-icons/ic_location.svg";
import lockIcon from "../../../files/img/folder-icons/ic_lock.svg";
import newIcon from "../../../files/img/folder-icons/ic_new.svg";
import paintBrushIcon from "../../../files/img/folder-icons/ic_paint-brush.svg";
import pencilIcon from "../../../files/img/folder-icons/ic_pencil.svg";
import pieIcon from "../../../files/img/folder-icons/ic_pie.svg";
import plantIcon from "../../../files/img/folder-icons/ic_plant.svg";
import pushpinIcon from "../../../files/img/folder-icons/ic_pushpin.svg";
import rocketIcon from "../../../files/img/folder-icons/ic_rocket.svg";
import saveIcon from "../../../files/img/folder-icons/ic_save.svg";
import sendIcon from "../../../files/img/folder-icons/ic_send.svg";
import settingIcon from "../../../files/img/folder-icons/ic_settings.svg";
import slideShowIcon from "../../../files/img/folder-icons/ic_slideshow.svg";
import toolsIcon from "../../../files/img/folder-icons/ic_tools.svg";
import walletIcon from "../../../files/img/folder-icons/ic_wallet.svg";

import image1 from "../../../files/img/folder-type/image1.webp";
import image2 from "../../../files/img/folder-type/image2.webp";
import addIcon from "../../../files/img/folder-type/add.svg";

import arrowExitIcon from "../../../files/img/arrow-exit.svg";

import * as radio from "../../ui-components/radio";


export default function NewFolderPopup(props) {

    useEffect(() => {
        if (props.popupDataState) {
            const burger = document.querySelectorAll("[data-burger]");
            for (let i = 0; i < burger.length; i++) {
                if (burger[i].dataset.burger === props.popupDataState) {
                    burger[i].classList.add("open");
                }
            }
        }
    })

    radio.radio();

    return (
        <form data-burger="1" action="#" className="menu-burger">
            <div className="menu-burger__content-top">
                <a data-burger-exit="1" onClick={props.exitAllPopups} href="#" className="menu-burger__arrow-exit">
                    <img src={arrowExitIcon} alt="" className="menu-burger__arrow-exit-icon" />
                </a>
            </div>

            <div className="menu-burger__content-center">

                <div className="menu-burger__title-top">
                    <div className="menu-burger__result-setting">
                        <svg style={{ "width": "20px", "height": "20px" }}>
                            <use xlinkHref={`${appsIcon}#apps`}></use>
                        </svg>
                    </div>
                    <input type="text" className="menu-burger__input-name" placeholder="Folder name" autoFocus="autofocus" />
                </div>
                <h3 className="menu-burger__title">Apperience</h3>
                <div data-form-radio-group="1" className="menu-burger__folder-colors">
                    <label data-label-radio="1" htmlFor="color-folder1" className="menu-burger__folder-color-label checked yellow">
                        <input data-input-radio="1" type="radio" id="color-folder1" name="color"
                            className="menu-burger__folder-color-input" />
                    </label>
                    <label data-label-radio="1" htmlFor="color-folder2" className="menu-burger__folder-color-label cornflower">
                        <input data-input-radio="1" type="radio" id="color-folder2" name="color"
                            className="menu-burger__folder-color-input" />
                    </label>
                    <label data-label-radio="1" htmlFor="color-folder3" className="menu-burger__folder-color-label pink">
                        <input data-input-radio="1" type="radio" id="color-folder3" name="color"
                            className="menu-burger__folder-color-input" />
                    </label>
                    <label data-label-radio="1" htmlFor="color-folder4" className="menu-burger__folder-color-label fringy">
                        <input data-input-radio="1" type="radio" id="color-folder4" name="color"
                            className="menu-burger__folder-color-input" />
                    </label>
                    <label data-label-radio="1" htmlFor="color-folder5" className="menu-burger__folder-color-label spindle">
                        <input data-input-radio="1" type="radio" id="color-folder5" name="color"
                            className="menu-burger__folder-color-input" />
                    </label>
                    <label data-label-radio="1" htmlFor="color-folder6" className="menu-burger__folder-color-label beauty-bush">
                        <input data-input-radio="1" type="radio" id="color-folder6" name="color"
                            className="menu-burger__folder-color-input" />
                    </label>
                    <label data-label-radio="1" htmlFor="color-folder7" className="menu-burger__folder-color-label blizzard">
                        <input data-input-radio="1" type="radio" id="color-folder7" name="color"
                            className="menu-burger__folder-color-input" />
                    </label>
                    <label data-label-radio="1" htmlFor="color-folder8" className="menu-burger__folder-color-label deco">
                        <input data-input-radio="1" type="radio" id="color-folder8" name="color"
                            className="menu-burger__folder-color-input" />
                    </label>
                    <label data-label-radio="1" htmlFor="color-folder9" className="menu-burger__folder-color-label fringy">
                        <input data-input-radio="1" type="radio" id="color-folder9" name="color"
                            className="menu-burger__folder-color-input" />
                    </label>
                </div>
                <div data-form-radio-group="2" className="menu-burger__folder-icons">
                    <label data-label-radio="2" htmlFor="icon-folder1" className="menu-burger__folder-icon-label checked">
                        <svg style={{ "width": "20px", "height": "20px" }}>
                            <use xlinkHref={`${appsIcon}#apps`}></use>
                        </svg>
                        <input data-input-radio="2" type="radio" id="icon-folder1" name="icon"
                            className="menu-burger__folder-icon-input" />
                    </label>
                    <label data-label-radio="2" htmlFor="icon-folder2" className="menu-burger__folder-icon-label">
                        <svg style={{ "width": "20px", "height": "20px" }}>
                            <use xlinkHref={`${cloudIcon}#cloud`}></use>
                        </svg>
                        <input data-input-radio="2" type="radio" id="icon-folder2" name="icon"
                            className="menu-burger__folder-icon-input" />
                    </label>
                    <label data-label-radio="2" htmlFor="icon-folder3" className="menu-burger__folder-icon-label">
                        <svg style={{ "width": "20px", "height": "20px" }}>
                            <use xlinkHref={`${cupIcon}#cup`}></use>
                        </svg>
                        <input data-input-radio="2" type="radio" id="icon-folder3" name="icon"
                            className="menu-burger__folder-icon-input" />
                    </label>
                    <label data-label-radio="2" htmlFor="icon-folder4" className="menu-burger__folder-icon-label">
                        <svg style={{ "width": "20px", "height": "20px" }}>
                            <use xlinkHref={`${fireIcon}#fire`}></use>
                        </svg>
                        <input data-input-radio="2" type="radio" id="icon-folder4" name="icon"
                            className="menu-burger__folder-icon-input" />
                    </label>
                    <label data-label-radio="2" htmlFor="icon-folder5" className="menu-burger__folder-icon-label">
                        <svg style={{ "width": "20px", "height": "20px" }}>
                            <use xlinkHref={`${flagIcon}#flag`}></use>
                        </svg>
                        <input data-input-radio="2" type="radio" id="icon-folder5" name="icon"
                            className="menu-burger__folder-icon-input" />
                    </label>
                    <label data-label-radio="2" htmlFor="icon-folder6" className="menu-burger__folder-icon-label">
                        <svg style={{ "width": "20px", "height": "20px" }}>
                            <use xlinkHref={`${folderIcon}#folder`}></use>
                        </svg>
                        <input data-input-radio="2" type="radio" id="icon-folder6" name="icon"
                            className="menu-burger__folder-icon-input" />
                    </label>
                    <label data-label-radio="2" htmlFor="icon-folder7" className="menu-burger__folder-icon-label">
                        <svg style={{ "width": "20px", "height": "20px" }}>
                            <use xlinkHref={`${hartIcon}#hart`}></use>
                        </svg>
                        <input data-input-radio="2" type="radio" id="icon-folder7" name="icon"
                            className="menu-burger__folder-icon-input" />
                    </label>
                    <label data-label-radio="2" htmlFor="icon-folder8" className="menu-burger__folder-icon-label">
                        <svg style={{ "width": "20px", "height": "20px" }}>
                            <use xlinkHref={`${homeIcon}#home`}></use>
                        </svg>
                        <input data-input-radio="2" type="radio" id="icon-folder8" name="icon"
                            className="menu-burger__folder-icon-input" />
                    </label>
                    <label data-label-radio="2" htmlFor="icon-folder9" className="menu-burger__folder-icon-label">
                        <svg style={{ "width": "20px", "height": "20px" }}>
                            <use xlinkHref={`${imageIcon}#image`}></use>
                        </svg>
                        <input data-input-radio="2" type="radio" id="icon-folder9" name="icon"
                            className="menu-burger__folder-icon-input" />
                    </label>
                    <label data-label-radio="2" htmlFor="icon-folder10" className="menu-burger__folder-icon-label">
                        <svg style={{ "width": "20px", "height": "20px" }}>
                            <use xlinkHref={`${layoutIcon}#layout`}></use>
                        </svg>
                        <input data-input-radio="2" type="radio" id="icon-folder10" name="icon"
                            className="menu-burger__folder-icon-input" />
                    </label>
                    <label data-label-radio="2" htmlFor="icon-folder11" className="menu-burger__folder-icon-label">
                        <svg style={{ "width": "20px", "height": "20px" }}>
                            <use xlinkHref={`${lightBulbIcon}#lightbulb`}></use>
                        </svg>
                        <input data-input-radio="2" type="radio" id="icon-folder11" name="icon"
                            className="menu-burger__folder-icon-input" />
                    </label>
                    <label data-label-radio="2" htmlFor="icon-folder12" className="menu-burger__folder-icon-label">
                        <svg style={{ "width": "20px", "height": "20px" }}>
                            <use xlinkHref={`${locationIcon}#location`}></use>
                        </svg>
                        <input data-input-radio="2" type="radio" id="icon-folder12" name="icon"
                            className="menu-burger__folder-icon-input" />
                    </label>
                    <label data-label-radio="2" htmlFor="icon-folder13" className="menu-burger__folder-icon-label">
                        <svg style={{ "width": "20px", "height": "20px" }}>
                            <use xlinkHref={`${lockIcon}#lock`}></use>
                        </svg>
                        <input data-input-radio="2" type="radio" id="icon-folder13" name="icon"
                            className="menu-burger__folder-icon-input" />
                    </label>
                    <label data-label-radio="2" htmlFor="icon-folder14" className="menu-burger__folder-icon-label">
                        <svg style={{ "width": "20px", "height": "20px" }}>
                            <use xlinkHref={`${newIcon}#new`}></use>
                        </svg>
                        <input data-input-radio="2" type="radio" id="icon-folder14" name="icon"
                            className="menu-burger__folder-icon-input" />
                    </label>
                    <label data-label-radio="2" htmlFor="icon-folder15" className="menu-burger__folder-icon-label">
                        <svg style={{ "width": "20px", "height": "20px" }}>
                            <use xlinkHref={`${paintBrushIcon}#paint`}></use>
                        </svg>
                        <input data-input-radio="2" type="radio" id="icon-folder15" name="icon"
                            className="menu-burger__folder-icon-input" />
                    </label>
                    <label data-label-radio="2" htmlFor="icon-folder16" className="menu-burger__folder-icon-label">
                        <svg style={{ "width": "20px", "height": "20px" }}>
                            <use xlinkHref={`${pencilIcon}#pencil`}></use>
                        </svg>
                        <input data-input-radio="2" type="radio" id="icon-folder16" name="icon"
                            className="menu-burger__folder-icon-input" />
                    </label>
                    <label data-label-radio="2" htmlFor="icon-folder17" className="menu-burger__folder-icon-label">
                        <svg style={{ "width": "20px", "height": "20px" }}>
                            <use xlinkHref={`${pieIcon}#pie`}></use>
                        </svg>
                        <input data-input-radio="2" type="radio" id="icon-folder17" name="icon"
                            className="menu-burger__folder-icon-input" />
                    </label>
                    <label data-label-radio="2" htmlFor="icon-folder18" className="menu-burger__folder-icon-label">
                        <svg style={{ "width": "20px", "height": "20px" }}>
                            <use xlinkHref={`${plantIcon}#plant`}></use>
                        </svg>
                        <input data-input-radio="2" type="radio" id="icon-folder18" name="icon"
                            className="menu-burger__folder-icon-input" />
                    </label>
                    <label data-label-radio="2" htmlFor="icon-folder19" className="menu-burger__folder-icon-label">
                        <svg style={{ "width": "20px", "height": "20px" }}>
                            <use xlinkHref={`${pushpinIcon}#pushpin`}></use>
                        </svg>
                        <input data-input-radio="2" type="radio" id="icon-folder19" name="icon"
                            className="menu-burger__folder-icon-input" />
                    </label>
                    <label data-label-radio="2" htmlFor="icon-folder20" className="menu-burger__folder-icon-label">
                        <svg style={{ "width": "20px", "height": "20px" }}>
                            <use xlinkHref={`${rocketIcon}#rocket`}></use>
                        </svg>
                        <input data-input-radio="2" type="radio" id="icon-folder20" name="icon"
                            className="menu-burger__folder-icon-input" />
                    </label>
                    <label data-label-radio="2" htmlFor="icon-folder21" className="menu-burger__folder-icon-label">
                        <svg style={{ "width": "20px", "height": "20px" }}>
                            <use xlinkHref={`${saveIcon}#save`}></use>
                        </svg>
                        <input data-input-radio="2" type="radio" id="icon-folder21" name="icon"
                            className="menu-burger__folder-icon-input" />
                    </label>
                    <label data-label-radio="2" htmlFor="icon-folder22" className="menu-burger__folder-icon-label">
                        <svg style={{ "width": "20px", "height": "20px" }}>
                            <use xlinkHref={`${sendIcon}#send`}></use>
                        </svg>
                        <input data-input-radio="2" type="radio" id="icon-folder22" name="icon"
                            className="menu-burger__folder-icon-input" />
                    </label>
                    <label data-label-radio="2" htmlFor="icon-folder23" className="menu-burger__folder-icon-label">
                        <svg style={{ "width": "20px", "height": "20px" }}>
                            <use xlinkHref={`${settingIcon}#setting`}></use>
                        </svg>
                        <input data-input-radio="2" type="radio" id="icon-folder23" name="icon"
                            className="menu-burger__folder-icon-input" />
                    </label>
                    <label data-label-radio="2" htmlFor="icon-folder24" className="menu-burger__folder-icon-label">
                        <svg style={{ "width": "20px", "height": "20px" }}>
                            <use xlinkHref={`${slideShowIcon}#slideshow`}></use>
                        </svg>
                        <input data-input-radio="2" type="radio" id="icon-folder24" name="icon"
                            className="menu-burger__folder-icon-input" />
                    </label>
                    <label data-label-radio="2" htmlFor="icon-folder25" className="menu-burger__folder-icon-label">
                        <svg style={{ "width": "20px", "height": "20px" }}>
                            <use xlinkHref={`${toolsIcon}#tools`}></use>
                        </svg>
                        <input data-input-radio="2" type="radio" id="icon-folder25" name="icon"
                            className="menu-burger__folder-icon-input" />
                    </label>
                    <label data-label-radio="2" htmlFor="icon-folder26" className="menu-burger__folder-icon-label">
                        <svg style={{ "width": "20px", "height": "20px" }}>
                            <use xlinkHref={`${walletIcon}#wallet`}></use>
                        </svg>
                        <input data-input-radio="2" type="radio" id="icon-folder26" name="color"
                            className="menu-burger__folder-icon-input" />
                    </label>
                    <label data-label-radio="2" htmlFor="icon-folder27" className="menu-burger__folder-icon-label">
                        <svg style={{ "width": "20px", "height": "20px" }}>
                            <use xlinkHref={`${appsIcon}#apps`}></use>
                        </svg>
                        <input data-input-radio="2" type="radio" id="icon-folder27" name="color"
                            className="menu-burger__folder-icon-input" />
                    </label>
                </div>
                <h3 className="menu-burger__title">Folder type</h3>
                <div data-form-radio-group="3" className="menu-burger__folder-types">
                    <label data-label-radio="3" htmlFor="folder-type1" className="menu-burger__folder-type-label">
                        <div className="menu-burger__folder-type-media">
                            <img src={image1} alt="" className="menu-burger__folder-type-image" />
                        </div>
                        <h4 className="menu-burger__folder-type-title">Default</h4>
                        <p className="menu-burger__folder-type-text">
                            You can add any type of task to this folder.
                        </p>
                        <input data-input-radio="3" id="folder-type1" type="radio" name="folder-type"
                            className="menu-burger__folder-type-input" />
                    </label>
                    <label data-label-radio="3" htmlFor="folder-type2" className="menu-burger__folder-type-label">
                        <div className="menu-burger__folder-type-media">
                            <img src={image2} alt="" className="menu-burger__folder-type-image" />
                        </div>
                        <h4 className="menu-burger__folder-type-title">Purchase</h4>
                        <p className="menu-burger__folder-type-text">
                            You can add any type of task to this folder.
                        </p>
                        <input data-input-radio="3" id="folder-type2" type="radio" name="folder-type"
                            className="menu-burger__folder-type-input" />
                    </label>
                    <label data-label-radio="3" htmlFor="folder-type3" className="menu-burger__folder-type-label">
                        <div className="menu-burger__folder-type-media custom">
                            <img src={addIcon} alt="" className="menu-burger__folder-type-image" />
                        </div>
                        <h4 className="menu-burger__folder-type-title">Custom</h4>
                        <p className="menu-burger__folder-type-text">
                            You can add only specified task templates.
                        </p>
                        <input data-input-radio="3" id="folder-type3" type="radio" name="folder-type"
                            className="menu-burger__folder-type-input" />
                    </label>
                </div>
            </div>

            <div className="menu-burger__content-bottom">
                <button disabled className="menu-burger__folder-type-submit btn-blue">Create folder</button>
            </div>
        </form>
    )
}