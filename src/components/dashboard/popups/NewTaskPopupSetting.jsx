import { useEffect } from "react";
import subTaskIcon from "../../../files/img/task-setting-icons/ic_subtask.svg";
import attachIcon from "../../../files/img/task-setting-icons/ic_attach.svg";
import tagIcon from "../../../files/img/task-setting-icons/ic_tag.svg";
import locationIcon from "../../../files/img/task-setting-icons/ic_location.svg";
import arrowExitIcon from "../../../files/img/arrow-exit.svg";
import cupIcon from "../../../files/img/folder-icons/ic_cup.svg";
import userIcon from "../../../files/img/task-setting-icons/ic_user.svg";
import dateIcon from "../../../files/img/task-setting-icons/ic_date.svg";
import priorityIcon from "../../../files/img/task-setting-icons/ic_priority.svg";
import addIcon from "../../../files/img/task-setting-icons/ic_add.svg";
import companyIcon from "../../../files/img/add-more-icons/ic_company.svg";
import tagIconTwo from "../../../files/img/add-more-icons/ic_tag.svg";
import locationIconTwo from "../../../files/img/add-more-icons/ic_location.svg";
import attachIconTwo from "../../../files/img/add-more-icons/ic_attach.svg";
import reminderIcon from "../../../files/img/add-more-icons/ic_reminder.svg";
import repeatIcon from "../../../files/img/add-more-icons/ic_repeat.svg";
import leftIcon from "../../../files/img/task-setting-icons/ic_left.svg";
import subtaskIconTwo from "../../../files/img/task-setting-icons/ic_subtask2.svg";
import deleteIcon from "../../../files/img/sub-task-icons/ic_delete.svg";
import openIcon from "../../../files/img/sub-task-icons/ic_open.svg";
import XXSIcon from "../../../files/img/sub-task-icons/XXS.svg";
import dateIconTwo from "../../../files/img/sub-task-icons/ic_date.svg";
import reminderIconTwo from "../../../files/img/sub-task-icons/ic_reminder.svg";
import attachIconThree from "../../../files/img/sub-task-icons/ic_attach.svg";
import userIconTwo from "../../../files/img/sub-task-icons/ic_user.svg";
import addIconTwo from "../../../files/img/all-icons/add.svg";
import attachIconFor from "../../../files/img/task-setting-icons/ic_attach2.svg";
import addIconThree from "../../../files/img/task-setting-icons/ic_add2.svg";
import { useRef } from "react";
import { useState } from "react";

export default function NewTaskPopupSetting(props) {

    function isEmpty(obj) {
        for (let key in obj) {
            return false;
        }
        return true;
    }

    useEffect(() => {
        if (props.popupDataState) {
            const burger = document.querySelectorAll("[data-burger]");
            for (let i = 0; i < burger.length; i++) {
                if (burger[i].dataset.burger === props.popupDataState) {
                    burger[i].classList.add("open");
                }
            }
        }

        setCurrentFolderLocationFunc()
    })

    const infoMenyFolders = useRef(null);

    const priorityLink = useRef(null);

    const priorityMenu = useRef(null);

    const infoMenyFoldersLink = useRef(null);

    const priorityLinkSpan = useRef(null);

    const addMoreLink = useRef(null);

    const addMoreMenu = useRef(null);

    let [inputNameState, setInputNameState] = useState("");

    let [folderLocationState, setFolderLocationState] = useState(props.currentFolderLocationId)

    let [priorityState, setPriorityState] = useState("Priority");

    let [taskDescriptionState, setTaskDescriptionState] = useState("");

    function setCurrentFolderLocationFunc() {
        if (props.allFoldersArray) {
            for (let i = 0; i < props.allFoldersArray.length; i++) {
                if (isEmpty(props.currentFolderLocationState)) {
                    if (String(props.allFoldersArray[i].id) === props.currentFolderLocationId) {
                        props.setCurrentFolderLocationState(props.allFoldersArray[i])
                        break
                    }
                }
            }
        }
    }

    function onChangeInputName(e) {
        setInputNameState(e.target.value);
    }

    function openPopupFunction(e) {

        e.preventDefault();
        props.exitAllPopups();

        const burgerLinkNum = e.target.dataset.burgerLink;

        props.setPopupDataState(burgerLinkNum);

        props.setCurrentObjectTaskState({
            id: props.currentObjectTaskState.id,
            types: props.currentObjectTaskState.types,
            status: props.currentObjectTaskState.status,
            name: inputNameState,
            idFolderLocation: "",
            asignedTo: props.currentObjectTaskState.asignedTo,
            dueDate: props.currentObjectTaskState.dueDate,
            priority: priorityState,
            descriptor: taskDescriptionState,
            subTask: props.currentObjectTaskState.subTask
        })

        props.setFolderIdNewTaskState(props.currentFolderLocationId)

    }

    function openMenyFolders(e) {
        e.preventDefault();
        infoMenyFolders.current.classList.toggle("active");
    }

    function openAllPriority(e) {
        e.preventDefault();
        priorityMenu.current.classList.toggle("active");
    }

    function openAddMore(e) {
        e.preventDefault();
        addMoreMenu.current.classList.toggle("active");
    }

    function onChangeDescription(e) {
        setTaskDescriptionState(e.target.value);
    }

    props.newTaskSetting.push(document.querySelectorAll("[data-burger='3'].new-task-setting")[0]);

    window.addEventListener("click", e => {
        if (infoMenyFolders.current) {
            if (infoMenyFolders.current.classList.contains("active")) {
                if (!e.target.closest(".new-task-setting__info-meny-folders") && e.target !== infoMenyFoldersLink.current) {
                    infoMenyFolders.current.classList.remove("active");
                }
            }
        }

        if (priorityMenu.current) {
            if (priorityMenu.current.classList.contains("active")) {
                if (!e.target.closest(".new-task-setting__priority-menu")
                    && e.target !== priorityLink.current
                    && e.target !== priorityLinkSpan.current
                ) {
                    priorityMenu.current.classList.remove("active");
                }
            }
        }

        if (addMoreMenu.current) {
            if (addMoreMenu.current.classList.contains("active")) {
                if (!e.target.closest(".new-task-setting__add-more-window") && e.target !== addMoreLink.current) {
                    addMoreMenu.current.classList.remove("active");
                }
            }
        }
    })

    function loopAllFolders(array) {
        if (array) {
            return (
                <>
                    {
                        array.map((object, index) => (
                            <li key={index} className="new-task-setting__info-meny-folders-item">
                                <a href="#" className="new-task-setting__info-meny-folders-folder">{object.name}</a>
                            </li>
                        ))
                    }
                </>
            )
        }
    }

    function setPriorityFunc(e) {

        if (priorityLinkSpan.current.className.split(" ").length >= 2) {
            let classNamePriority = priorityLinkSpan.current.className.split(" ").pop();
            priorityLinkSpan.current.classList.remove(classNamePriority);
        }

        setPriorityState(e.target.id);

        priorityLinkSpan.current.classList.add(e.target.id);

    }

    return (
        <form data-burger="3" action="#" className="new-task-setting">
            <div className="new-task-setting__header">
                <p className="new-task-setting__link-left blue">Open</p>
                <div className="new-task-setting__header-right">
                    <ul className="new-task-setting__header-list">
                        <li className="new-task-setting__header-item">
                            <a href="#" className="new-task-setting__header-link">
                                <img src={subTaskIcon} alt="" className="new-task-setting__header-icon" />
                            </a>
                        </li>
                        <li className="new-task-setting__header-item">
                            <a href="#" className="new-task-setting__header-link">
                                <img src={attachIcon} alt="" className="new-task-setting__header-icon" />
                            </a>
                        </li>
                        <li className="new-task-setting__header-item">
                            <a href="#" className="new-task-setting__header-link">
                                <img src={tagIcon} alt="" className="new-task-setting__header-icon" />
                            </a>
                        </li>
                        <li className="new-task-setting__header-item">
                            <a href="#" className="new-task-setting__header-link">
                                <img src={locationIcon} alt="" className="new-task-setting__header-icon" />
                            </a>
                        </li>
                    </ul>
                    <a data-burger-link="2" href="#" className="new-task-setting__arrow-exit">
                        <img src={arrowExitIcon} alt="" className="new-task-setting__arrow-exit-icon" />
                        Back
                    </a>
                </div>
            </div>
            <div className="new-task-setting__center">
                <div className="new-task-setting__bread-crumbs">
                    <p className="new-task-setting__bead-crumbs-current">DFH 24</p>
                </div>
                <input type="text" onChange={onChangeInputName} value={inputNameState} className="new-task-setting__input-task-name" placeholder="Task" />
                <div className="new-task-setting__informations">
                    <div className="new-task-setting__info">
                        <div style={{ backgroundColor: props.currentFolderLocationState.color }} className="new-task-setting__info-media folder">
                            <svg style={{ "height": "20px", "width": "20px" }}>
                                <use xlinkHref={`${!isEmpty(props.currentFolderLocationState) ? props.currentFolderLocationState.icon[0] : undefined}#${!isEmpty(props.currentFolderLocationState) ? props.currentFolderLocationState.icon[1] : undefined}`}></use>
                            </svg>
                        </div>
                        <div className="new-task-setting__info-content">
                            <h4 className="new-task-setting__info-name-item">Folder location</h4>
                            <a ref={infoMenyFoldersLink} onClick={openMenyFolders} href="#" className="new-task-setting__info-name btn-bottom-small">{props.currentFolderLocationState.name}</a>
                        </div>
                        <div ref={infoMenyFolders} className="new-task-setting__info-meny-folders">
                            <ul className="new-task-setting__info-meny-folders-list">
                                {loopAllFolders(props.allFoldersArray)}
                            </ul>
                        </div>
                    </div>
                    <div className="new-task-setting__info">
                        <div className="new-task-setting__info-media">
                            <img src={userIcon} alt="" className="new-task-setting__info-icon" />
                        </div>
                        <div className="new-task-setting__info-content">
                            <h4 className="new-task-setting__info-name-item">Assigned to</h4>
                            <a href="#" className="new-task-setting__info-name btn-bottom-small no-name">---</a>
                        </div>
                    </div>
                    <div className="new-task-setting__info">
                        <div className="new-task-setting__info-media">
                            <img src={dateIcon} alt="" className="new-task-setting__info-icon" />
                        </div>
                        <div className="new-task-setting__info-content">
                            <h4 className="new-task-setting__info-name-item">Due date</h4>
                            <a href="#" className="new-task-setting__info-name btn-bottom-small no-name">---</a>
                        </div>
                    </div>
                </div>
                <div className="new-task-setting__priority">
                    <p className="new-task-setting__title">
                        <img src={priorityIcon} alt="" className="new-task-setting__priority-icon" />
                        Priority
                    </p>
                    <div className="new-task-setting__priority-wrapper">
                        <a onClick={openAllPriority} ref={priorityLink} href="#" className="new-task-setting__priority-link btn-bottom-small">
                            <span ref={priorityLinkSpan} className="new-task-setting__priority-link-span">{priorityState}</span>
                        </a>
                        <div ref={priorityMenu} className="new-task-setting__priority-menu">
                            <ul className="new-task-setting__priority-list">
                                <li onClick={setPriorityFunc} id="highest" className="new-task-setting__priority-item">
                                    highest
                                </li>
                                <li onClick={setPriorityFunc} id="high" className="new-task-setting__priority-item">
                                    high
                                </li>
                                <li onClick={setPriorityFunc} id="medium" className="new-task-setting__priority-item">
                                    medium
                                </li>
                                <li onClick={setPriorityFunc} id="low" className="new-task-setting__priority-item">
                                    low
                                </li>
                                <li onClick={setPriorityFunc} id="lowest" className="new-task-setting__priority-item">
                                    lowest
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="new-task-setting__add-more">
                    <a onClick={openAddMore} ref={addMoreLink} href="#" className="new-task-setting__link-add">
                        <img src={addIcon} alt="" className="new-task-setting__link-add-icon" />
                        Add more
                    </a>
                    <ul ref={addMoreMenu} className="new-task-setting__add-more-window">
                        <li className="new-task-setting__add-more-window-item">
                            <a href="#" className="new-task-setting__add-more-window-link">
                                <svg style={{ "height": "20px", "width": "20px" }}>
                                    <use xlinkHref={`${companyIcon}#company`}></use>
                                </svg>
                                Departament
                            </a>
                        </li>
                        <li className="new-task-setting__add-more-window-item">
                            <a href="#" className="new-task-setting__add-more-window-link">
                                <svg style={{ "height": "20px", "width": "20px" }}>
                                    <use xlinkHref={`${tagIconTwo}#tag`}></use>
                                </svg>
                                Tag
                            </a>
                        </li>
                        <li className="new-task-setting__add-more-window-item">
                            <a href="#" className="new-task-setting__add-more-window-link">
                                <svg style={{ "height": "20px", "width": "20px" }}>
                                    <use xlinkHref={`${locationIconTwo}#location`}></use>
                                </svg>
                                Location
                            </a>
                        </li>
                        <li className="new-task-setting__add-more-window-item">
                            <a href="#" className="new-task-setting__add-more-window-link">
                                <svg style={{ "height": "20px", "width": "20px" }}>
                                    <use xlinkHref={`${attachIconTwo}#attach`}></use>
                                </svg>
                                Attachment
                            </a>
                        </li>
                        <li className="new-task-setting__add-more-window-item">
                            <a href="#" className="new-task-setting__add-more-window-link">
                                <svg style={{ "height": "20px", "width": "20px" }}>
                                    <use xlinkHref={`${reminderIcon}#reminder`}></use>
                                </svg>
                                Reminder
                            </a>
                        </li>
                        <li className="new-task-setting__add-more-window-item">
                            <a href="#" className="new-task-setting__add-more-window-link">
                                <svg style={{ "height": "20px", "width": "20px" }}>
                                    <use xlinkHref={`${repeatIcon}#repeat`}></use>
                                </svg>
                                Repeat task
                            </a>
                        </li>
                    </ul>
                    <div className="new-task-setting__add-more-list-more">
                        {/* <div className="view-task-info__data">
                            <div className="view-task-info__data-name">
                                <p className="view-task-info__data-name-text">
                                    <img src="@img/view-task-icons/ic_company.svg" alt="" className="view-task-info__data-name-image" />
                                    Department
                                </p>
                            </div>
                            <div className="view-task-info__data-info">
                                <p className="view-task-info__data-tag yellow">
                                    Department
                                    <a href="#" className="view-task-info__data-remove-tag">
                                        <img src="@img/view-task-icons/ic_close2.svg" alt="" className="view-task-info__data-remove-tag-icon" />
                                    </a>
                                </p>
                                <a href="#" className="view-task-info__data-add-tag">Add new tag</a>
                            </div>
                            <div className="view-task-info__data-name">
                                <p className="view-task-info__data-name-text">
                                    <img src="@img/view-task-icons/ic_tag.svg" alt="" className="view-task-info__data-name-image" />
                                    Tags
                                </p>
                            </div>
                            <div className="view-task-info__data-info">
                                <p className="view-task-info__data-tag green">
                                    Label
                                    <a href="#" className="view-task-info__data-remove-tag">
                                        <img src="@img/view-task-icons/ic_close2.svg" alt="" className="view-task-info__data-remove-tag-icon" />
                                    </a>
                                </p>
                                <a href="#" className="view-task-info__data-add-tag">Add new tag</a>
                            </div>
                            <div className="view-task-info__data-name">
                                <p className="view-task-info__data-name-text">
                                    <img src="@img/view-task-icons/ic_location.svg" alt="" className="view-task-info__data-name-image" />
                                    Location
                                </p>
                            </div>
                            <div className="view-task-info__data-info">
                                <p className="view-task-info__data-text">Mantifiori 46, Tel-Aviv, Israel</p>
                            </div>
                            <div className="view-task-info__data-name">
                                <p className="view-task-info__data-name-text">
                                    <img src="@img/view-task-icons/ic_reminder.svg" alt="" className="view-task-info__data-name-image" />
                                    Reminder
                                </p>
                            </div>
                            <div className="view-task-info__data-info">
                                <p className="view-task-info__data-text">Monday, 15:00</p>
                            </div>
                            <div className="view-task-info__data-name">
                                <p className="view-task-info__data-name-text">
                                    <img src="@img/view-task-icons/ic_repeat.svg" alt="" className="view-task-info__data-name-image" />
                                    Repeat
                                </p>
                            </div>
                            <div className="view-task-info__data-info last">
                                <p className="view-task-info__data-text">Every week</p>
                            </div>
                        </div>*/}
                    </div>
                </div>
                <div className="new-task-setting__description">
                    <p className="new-task-setting__title">
                        <img src={leftIcon} alt="" className="new-task-setting__description-icon" />
                        Descriptor
                    </p>
                    <textarea onChange={onChangeDescription} value={taskDescriptionState} name="description" id="task-description" className="new-task-setting__textarea"
                        placeholder="Add more details to this task..."></textarea>
                </div>
                <div className="new-task-setting__sub-task">
                    <p className="new-task-setting__title">
                        <img src={subtaskIconTwo} alt="" className="new-task-setting__title-icon" />
                        Sub-task
                    </p>
                    <div className="new-task-setting__percent-line">
                        <div className="new-task-setting__line">
                            <span style={{ "flex": "0 0 20%" }} className="new-task-setting__percent-line-left"></span>
                            <span style={{ "flex": "0 0 80%" }} className="new-task-setting__percent-line-right"></span>
                        </div>
                        <p className="new-task-setting__percent-line-num">100%</p>
                    </div>
                    <div className="new-task-setting__sub-tasks">
                        <div className="new-task-setting__new-sub-task">
                            <div className="new-task-setting__new-sub-task-top">
                                <label data-check-box-label="1" htmlFor="new-sub-task-ckeckbox" className="new-task-setting__new-sub-task-ckeckbox">
                                    <input data-check-box-input="1" type="checkbox" style={{ "display": "none" }} id="new-sub-task-ckeckbox" />
                                </label>
                                <textarea id="new-sub-task" name="new-sub-task" className="new-task-setting__new-sub-task-textarea" placeholder=" New subtask"></textarea>
                                <a href="#" className="new-task-setting__new-sub-task-delete">
                                    <img src={deleteIcon} alt="" className="new-task-setting__new-sub-task-icon" />
                                </a>
                                <a data-burger-link="4" href="#" className="new-task-setting__new-sub-task-full">
                                    <img src={openIcon} alt="" className="new-task-setting__new-sub-task-icon" />
                                </a>
                            </div>
                            <div className="new-task-setting__new-sub-task-bottom">
                                <div className="new-task-setting__new-sub-task-left">
                                    <div className="new-task-setting__new-sub-task-links">
                                        <img src={XXSIcon} alt="" className="new-task-setting__new-sub-task-icon" />
                                    </div>
                                    <div href="#" className="new-task-setting__new-sub-task-links">
                                        <img src={dateIconTwo} alt="" className="new-task-setting__new-sub-task-icon" />
                                        <span className="new-task-setting__new-sub-task-text">05 Nov</span>
                                    </div>
                                    <div href="#" className="new-task-setting__new-sub-task-links">
                                        <img src={reminderIconTwo} alt="" className="new-task-setting__new-sub-task-icon" />
                                        <span className="new-task-setting__new-sub-task-text">Monday, 14:00</span>
                                    </div>
                                    <div href="#" className="new-task-setting__new-sub-task-links">
                                        <img src={attachIconThree} alt="" className="new-task-setting__new-sub-task-icon" />
                                        <span className="new-task-setting__new-sub-task-text">5</span>
                                    </div>
                                </div>
                                <div className="new-task-setting__new-sub-task-right">
                                    <input type="text" className="new-task-setting__new-sub-task-percent" />
                                    <span className="new-task-setting__new-sub-task-all-percent">/ 100%</span>
                                </div>
                            </div>
                        </div>
                        <div className="new-task-setting__new-sub-task">
                            <div className="new-task-setting__new-sub-task-top">
                                <label data-check-box-label="1" htmlFor="new-sub-task-ckeckbox" className="new-task-setting__new-sub-task-ckeckbox">
                                    <input data-check-box-input="1" type="checkbox" style={{ "display": "none" }} id="new-sub-task-ckeckbox" />
                                </label>
                                <textarea id="new-sub-task" name="new-sub-task" className="new-task-setting__new-sub-task-textarea" placeholder=" New subtask"></textarea>
                                <a href="#" className="new-task-setting__new-sub-task-delete">
                                    <img src={deleteIcon} alt="" className="new-task-setting__new-sub-task-icon" />
                                </a>
                                <a data-burger-link="4" href="#" className="new-task-setting__new-sub-task-full">
                                    <img src={openIcon} alt="" className="new-task-setting__new-sub-task-icon" />
                                </a>
                            </div>
                            <div className="new-task-setting__new-sub-task-bottom">
                                <div className="new-task-setting__new-sub-task-left">
                                    <a href="#" className="new-task-setting__new-sub-task-links">
                                        <img src={userIconTwo} alt="" className="new-task-setting__new-sub-task-icon" />
                                    </a>
                                    <a href="#" className="new-task-setting__new-sub-task-links">
                                        <img src={dateIconTwo} alt="" className="new-task-setting__new-sub-task-icon" />
                                    </a>
                                    <a href="#" className="new-task-setting__new-sub-task-links">
                                        <img src={reminderIconTwo} alt="" className="new-task-setting__new-sub-task-icon" />
                                    </a>
                                </div>
                                <div className="new-task-setting__new-sub-task-right">
                                    <input type="text" className="new-task-setting__new-sub-task-percent" />
                                    <span className="new-task-setting__new-sub-task-all-percent">/ 100%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#" className="new-task-setting__add-sub-task">
                    <img src={addIconTwo} alt="" className="new-task-setting__add-sub-task-icon" />
                    Add sub-task
                </a>
                <p className="new-task-setting__title">
                    <img src={attachIconFor} alt="" className="new-task-setting__title-icon" />
                    Attachments
                </p>
                <div className="new-task-setting__drop-area">
                    <input type="file" id="drop-input" className="new-task-setting__drop-input" />
                    <label htmlFor="drop-input" className="new-task-setting__drop-label">
                        <img src={addIconThree} alt="" className="new-task-setting__drop-icon" />
                        <p className="new-task-setting__drop-text">Upload file</p>
                    </label>
                </div>
            </div>
            <div className="new-task-setting__content-bottom">
                <p className="new-task-setting__bottom-date">Task created: 24 Nov. 2021, 15:00</p>
                <button data-burger-link="5" onClick={openPopupFunction} className="new-task-setting__folder-type-submit btn-blue">Continue</button>
            </div>
        </form>
    )
}