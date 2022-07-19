import { useEffect } from "react";

export default function ViewTaskInfo(props) {

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

    return (
        <form data-burger="6" action="#" className="view-task-info no-admin task-close">
            <div className="view-task-info__content-top">
                <p className="view-task-info__text-left">To check</p>
                <div className="view-task-info__links-right">
                    <div className="view-task-info__setting-links">
                        <a href="#" className="view-task-info__setting-link">
                            <img src="@img/view-task-icons/ic_share.svg" alt="" className="view-task-info__setting-icon" />
                        </a>
                        <div className="all-tasks-list__task-more-menu">
                            <a data-add-more="12" href="#" className="all-tasks-list__task-link more">
                                <img src="@img/view-task-icons/ic_more.svg" alt="" className="view-task-info__setting-icon" />
                            </a>
                            <ul data-add-more="12" className="all-tasks-list__more-menu">
                                <li className="empty-state-dashboard__menu-item">
                                    <a data-burger-link="1" href="#" className="empty-state-dashboard__menu-link">
                                        <img src="@img/more-icons/ic_rename.svg" alt="" className="empty-state-dashboard__menu-icon" />
                                        Edit
                                    </a>
                                </li>
                                <li className="empty-state-dashboard__menu-item">
                                    <a href="#" className="empty-state-dashboard__menu-link">
                                        <img src="@img/more-icons/ic_move.svg" alt="" className="empty-state-dashboard__menu-icon" />
                                        Move to..
                                    </a>
                                </li>
                                <li className="empty-state-dashboard__menu-item">
                                    <a data-burger-link="8" href="#" className="empty-state-dashboard__menu-link">
                                        <img src="@img/more-icons/ic_doc.svg" alt="" className="empty-state-dashboard__menu-icon" />
                                        Saved templates
                                    </a>
                                </li>
                                <li className="empty-state-dashboard__menu-item">
                                    <a data-burger-link="7" href="#" className="empty-state-dashboard__menu-link">
                                        <img src="@img/more-icons/ic_contacts.svg" alt="" className="empty-state-dashboard__menu-icon" />
                                        Accesses permissions
                                    </a>
                                </li>
                                <li className="empty-state-dashboard__menu-item">
                                    <a data-notification-link="1" href="#" className="empty-state-dashboard__menu-link">
                                        <img src="@img/more-icons/ic_archive.svg" alt="" className="empty-state-dashboard__menu-icon" />
                                        Move to archive
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <a data-burger-exit="6" href="#" className="view-task-info__link-exit">
                        <img src="@img/view-task-icons/ic_close.svg" alt="" className="view-task-info__link-icon" />
                    </a>
                </div>
            </div>
            <div className="view-task-info__content-center">
                <div className="view-task-info__bread-crumbs">
                    <a className="view-task-info__bread-crumbs-current">DFH 23</a>
                </div>
                <h2 className="view-task-info__title">
                    Search references for multicolored background
                </h2>
                <div className="view-task-info__user-info">
                    <div className="view-task-info__block-info">
                        <div className="view-task-info__info-media folder">
                            <svg style={{ "height": "20px", "width": "20px" }}>
                                <use xlinkHref="@img/folder-icons/ic_home.svg#home"></use>
                            </svg>
                        </div>
                        <div className="view-task-info__info-content">
                            <h4 className="view-task-info__info-name">Folder location</h4>
                            <p className="view-task-info__info-bottom btn-bottom-small">Inbox folder</p>
                        </div>
                    </div>
                    <div className="view-task-info__block-info">
                        <div className="view-task-info__info-media">
                            <img src="@img/view-task-icons/ic_user.svg" alt="" className="view-task-info__info-img" />
                        </div>
                        <div className="view-task-info__info-content">
                            <h4 className="view-task-info__info-name">Assigned to</h4>
                            <p className="view-task-info__info-bottom btn-bottom-small no-content">---</p>
                        </div>
                    </div>
                    <div className="view-task-info__block-info">
                        <div className="view-task-info__info-media">
                            <img src="@img/view-task-icons/ic_date.svg" alt="" className="view-task-info__info-img" />
                        </div>
                        <div className="view-task-info__info-content">
                            <h4 className="view-task-info__info-name">Due date</h4>
                            <p className="view-task-info__info-bottom btn-bottom-small no-content">---</p>
                        </div>
                    </div>
                </div>
                <div className="view-task-info__data">
                    <div className="view-task-info__data-name">
                        <p className="view-task-info__data-name-text">
                            <img src="@img/view-task-icons/ic_priority.svg" alt="" className="view-task-info__data-name-image" />
                            Priority
                        </p>
                    </div>
                    <div className="view-task-info__data-info">
                        <p className="view-task-info__data-tag red">Highest</p>
                    </div>
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
                    <div className="view-task-info__data-name">
                        <p className="view-task-info__data-name-text">
                            <img src="@img/view-task-icons/ic_left.svg" alt="" className="view-task-info__data-name-image" />
                            Descriptor
                        </p>
                    </div>
                    <div className="view-task-info__data-info">
                        <p className="view-task-info__data-text">
                            It is a long established fact that a reader will be distracted by the
                            readable content. Fact that a reader will be distracted by
                        </p>
                    </div>
                </div>
                <h4 className="view-task-info__item">
                    <img src="@img/view-task-icons/ic_subtask.svg" alt="" className="view-task-info__item-icon" />
                    Sub-task
                </h4>
                <div className="view-task-info__percent-line">
                    <div className="view-task-info__line">
                        <span className="view-task-info__line-left"></span>
                        <span className="view-task-info__line-right"></span>
                    </div>
                    <p className="view-task-info__all-percent">100%</p>
                </div>
                <ul className="view-task-info__sub-tasks-list">
                    <li className="view-task-info__sub-task-item">
                        <div className="view-task-info__sub-task-content-top">
                            <label data-check-box-label="2" htmlFor="view-task-checkbox" className="view-task-info__sub-task-checkbox">
                                <input data-check-box-input="2" id="view-task-checkbox" type="checkbox" className="view-task-info__sub-task-checkbox-input" />
                            </label>
                            <p className="view-task-info__sub-task-name">
                                It is a long established fact that a reader will be distracted by the readable content.
                            </p>
                            <a href="#" className="view-task-info__sub-task-delete">
                                <img src="@img/view-task-icons/ic_delete.svg" alt="" className="view-task-info__sub-task-icon" />
                            </a>
                            <a href="#" className="view-task-info__sub-task-open">
                                <img src="@img/view-task-icons/ic_open.svg" alt="" className="view-task-info__sub-task-icon" />
                            </a>
                        </div>
                        <div className="view-task-info__sub-task-content-bottom">
                            <div className="view-task-info__sub-task-ava">
                                <img src="@img/view-task-icons/XXS.svg" alt="" className="view-task-info__sub-task-image" />
                            </div>
                            <p className="view-task-info__sub-task-data">
                                <img src="@img/view-task-icons/ic_date2.svg" alt="" className="view-task-info__sub-task-icon" />
                                05 Nov
                            </p>
                            <p className="view-task-info__sub-task-data">
                                <img src="@img/view-task-icons/ic_reminder2.svg" alt="" className="view-task-info__sub-task-icon" />
                                Monday, 14:00
                            </p>
                            <p className="view-task-info__sub-task-data">
                                <img src="@img/view-task-icons/ic_attach.svg" alt="" className="view-task-info__sub-task-icon" />
                                5
                            </p>
                            <p className="view-task-info__sub-task-input-percent">20%</p>
                            <p className="view-task-info__sub-task-all-percent">/100%</p>
                        </div>
                    </li>
                </ul>
                <a href="" className="view-task-info__add-sub-task">
                    <img src="@img/view-task-icons/ic_add2.svg" alt="" className="view-task-info__add-sub-task-icon" />
                    Add sub-task
                </a>
                <h4 className="view-task-info__item">
                    <img src="@img/view-task-icons/ic_subtask.svg" alt="" className="view-task-info__item-icon" />
                    Attachments
                </h4>
                <div data-form-radio-group="6" className="view-task-info__file-list">
                    <label data-label-radio="6" htmlFor="file-info-area1" className="view-task-info__file-item file">
                        <input type="file" name="view-task-file" id="file-info-area1" className="view-task-info__drag-and-drop" />
                        <input data-input-radio="6" type="radio" name="view-task-file" id="file-info-area1" defaultChecked className="view-task-info__drag-and-drop checked" />
                        <img src="@img/view-task-icons/ic_add3.svg" alt="" className="view-task-info__drag-and-drop-icon" />
                        Upload file
                    </label>
                    <label data-label-radio="6" htmlFor="file-info-area2" className="view-task-info__file-item">
                        <input data-input-radio="6" type="radio" name="view-task-file" id="file-info-area2" className="view-task-info__drag-and-drop" />
                        <img src="@img/view-task-icons/file.png" alt="" className="view-task-info__file-image" />
                    </label>
                    <label data-label-radio="6" htmlFor="file-info-area3" className="view-task-info__file-item">
                        <input data-input-radio="6" type="radio" name="view-task-file" id="file-info-area3" className="view-task-info__drag-and-drop" />
                        <img src="@img/view-task-icons/file.png" alt="" className="view-task-info__file-image" />
                    </label>
                </div>
                <p className="view-task-info__data-date">Task created: 24 Nov. 2021, 15:00</p>
                <p className="view-task-info__data-close-date">Task closed: Mon, 24 Dec. 2021</p>
            </div>
            <div className="view-task-info__content-bottom">
                <a href="#" className="view-task-info__submit-button btn-blue">Approve</a>
                <div className="view-task-info__comment">
                    <div className="view-task-info__comment-media">
                        <img src="@img/view-task-icons/ava.png" alt="" className="view-task-info__comment-image" />
                    </div>
                    <input type="text" className="view-task-info__comment-input" placeholder="Comment" />
                </div>
            </div>
        </form>
    )
}