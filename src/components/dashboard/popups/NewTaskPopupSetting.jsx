export default function NewTaskPopupSetting() {
    return (
        <form data-burger="3" action="#" className="new-task-setting">
            <div className="new-task-setting__header">
                <a href="#" className="new-task-setting__link-left btn-bottom-small blue">Open</a>
                <div className="new-task-setting__header-right">
                    <ul className="new-task-setting__header-list">
                        <li className="new-task-setting__header-item">
                            <a href="#" className="new-task-setting__header-link">
                                <img src="@img/task-setting-icons/ic_subtask.svg" alt="" className="new-task-setting__header-icon" />
                            </a>
                        </li>
                        <li className="new-task-setting__header-item">
                            <a href="#" className="new-task-setting__header-link">
                                <img src="@img/task-setting-icons/ic_attach.svg" alt="" className="new-task-setting__header-icon" />
                            </a>
                        </li>
                        <li className="new-task-setting__header-item">
                            <a href="#" className="new-task-setting__header-link">
                                <img src="@img/task-setting-icons/ic_tag.svg" alt="" className="new-task-setting__header-icon" />
                            </a>
                        </li>
                        <li className="new-task-setting__header-item">
                            <a href="#" className="new-task-setting__header-link">
                                <img src="@img/task-setting-icons/ic_location.svg" alt="" className="new-task-setting__header-icon" />
                            </a>
                        </li>
                    </ul>
                    <a data-burger-link="2" href="#" className="new-task-setting__arrow-exit">
                        <img src="@img/arrow-exit.svg" alt="" className="new-task-setting__arrow-exit-icon" />
                        Back
                    </a>
                </div>
            </div>
            <div className="new-task-setting__center">
                <div className="new-task-setting__bread-crumbs">
                    <p className="new-task-setting__bead-crumbs-current">DFH 24</p>
                </div>
                <input type="text" className="new-task-setting__input-task-name" placeholder="Task" />
                <div className="new-task-setting__informations">
                    <div className="new-task-setting__info">
                        <div className="new-task-setting__info-media folder">
                            <svg style="width:20px;height:20px;">
                                <use xlinkHref="@img/folder-icons/ic_cup.svg#cup"></use>
                            </svg>
                        </div>
                        <div className="new-task-setting__info-content">
                            <h4 className="new-task-setting__info-name-item">Folder location</h4>
                            <a href="#" className="new-task-setting__info-name btn-bottom-small">Inbox folder</a>
                        </div>
                    </div>
                    <div className="new-task-setting__info">
                        <div className="new-task-setting__info-media">
                            <img src="@img/task-setting-icons/ic_user.svg" alt="" className="new-task-setting__info-icon" />
                        </div>
                        <div className="new-task-setting__info-content">
                            <h4 className="new-task-setting__info-name-item">Assigned to</h4>
                            <a href="#" className="new-task-setting__info-name btn-bottom-small no-name">---</a>
                        </div>
                    </div>
                    <div className="new-task-setting__info">
                        <div className="new-task-setting__info-media">
                            <img src="@img/task-setting-icons/ic_date.svg" alt="" className="new-task-setting__info-icon" />
                        </div>
                        <div className="new-task-setting__info-content">
                            <h4 className="new-task-setting__info-name-item">Due date</h4>
                            <a href="#" className="new-task-setting__info-name btn-bottom-small no-name">---</a>
                        </div>
                    </div>
                </div>
                <div className="new-task-setting__priority">
                    <p className="new-task-setting__title">
                        <img src="@img/task-setting-icons/ic_priority.svg" alt="" className="new-task-setting__priority-icon" />
                        Priority
                    </p>
                    <a href="#" className="new-task-setting__priority-link btn-bottom-small">Priority</a>
                </div>
                <div className="new-task-setting__add-more">
                    <a data-add-more="2" href="#" className="new-task-setting__link-add">
                        <img src="@img/task-setting-icons/ic_add.svg" alt="" className="new-task-setting__link-add-icon" />
                        Add more
                    </a>
                    <ul data-add-more="2" className="new-task-setting__add-more-window">
                        <li className="new-task-setting__add-more-window-item">
                            <a href="#" className="new-task-setting__add-more-window-link">
                                <svg style="height:20px;width:20px;">
                                    <use xlinkHref="@img/add-more-icons/ic_company.svg#company"></use>
                                </svg>
                                Departament
                            </a>
                        </li>
                        <li className="new-task-setting__add-more-window-item">
                            <a href="#" className="new-task-setting__add-more-window-link">
                                <svg style="height:20px;width:20px;">
                                    <use xlinkHref="@img/add-more-icons/ic_tag.svg#tag"></use>
                                </svg>
                                Tag
                            </a>
                        </li>
                        <li className="new-task-setting__add-more-window-item">
                            <a href="#" className="new-task-setting__add-more-window-link">
                                <svg style="height:20px;width:20px;">
                                    <use xlinkHref="@img/add-more-icons/ic_location.svg#location"></use>
                                </svg>
                                Location
                            </a>
                        </li>
                        <li className="new-task-setting__add-more-window-item">
                            <a href="#" className="new-task-setting__add-more-window-link">
                                <svg style="height:20px;width:20px;">
                                    <use xlinkHref="@img/add-more-icons/ic_attach.svg#attach"></use>
                                </svg>
                                Attachment
                            </a>
                        </li>
                        <li className="new-task-setting__add-more-window-item">
                            <a href="#" className="new-task-setting__add-more-window-link">
                                <svg style="height:20px;width:20px;">
                                    <use xlinkHref="@img/add-more-icons/ic_reminder.svg#reminder"></use>
                                </svg>
                                Reminder
                            </a>
                        </li>
                        <li className="new-task-setting__add-more-window-item">
                            <a href="#" className="new-task-setting__add-more-window-link">
                                <svg style="height:20px;width:20px;">
                                    <use xlinkHref="@img/add-more-icons/ic_repeat.svg#repeat"></use>
                                </svg>
                                Repeat task
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="new-task-setting__description">
                    <p className="new-task-setting__title">
                        <img src="@img/task-setting-icons/ic_left.svg" alt="" className="new-task-setting__description-icon" />
                        Descriptor
                    </p>
                    <textarea name="description" id="task-description" className="new-task-setting__textarea"
                        placeholder="Add more details to this task..."></textarea>
                </div>
                <div className="new-task-setting__sub-task">
                    <p className="new-task-setting__title">
                        <img src="@img/task-setting-icons/ic_subtask2.svg" alt="" className="new-task-setting__title-icon" />
                        Sub-task
                    </p>
                    <div className="new-task-setting__percent-line">
                        <div className="new-task-setting__line">
                            <span style="flex: 0 0 20%" className="new-task-setting__percent-line-left"></span>
                            <span style="flex: 0 0 80%" className="new-task-setting__percent-line-right"></span>
                        </div>
                        <p className="new-task-setting__percent-line-num">100%</p>
                    </div>
                    <div className="new-task-setting__sub-tasks">
                        <div className="new-task-setting__new-sub-task">
                            <div className="new-task-setting__new-sub-task-top">
                                <label data-check-box-label="1" for="new-sub-task-ckeckbox" className="new-task-setting__new-sub-task-ckeckbox">
                                    <input data-check-box-input="1" type="checkbox" style="display: none" id="new-sub-task-ckeckbox" />
                                </label>
                                <textarea id="new-sub-task" name="new-sub-task" className="new-task-setting__new-sub-task-textarea" placeholder=" New subtask"></textarea>
                                <a href="#" className="new-task-setting__new-sub-task-delete">
                                    <img src="@img/sub-task-icons/ic_delete.svg" alt="" className="new-task-setting__new-sub-task-icon" />
                                </a>
                                <a data-burger-link="4" href="#" className="new-task-setting__new-sub-task-full">
                                    <img src="@img/sub-task-icons/ic_open.svg" alt="" className="new-task-setting__new-sub-task-icon" />
                                </a>
                            </div>
                            <div className="new-task-setting__new-sub-task-bottom">
                                <div className="new-task-setting__new-sub-task-left">
                                    <div className="new-task-setting__new-sub-task-links">
                                        <img src="@img/sub-task-icons/XXS.svg" alt="" className="new-task-setting__new-sub-task-icon" />
                                    </div>
                                    <div href="#" className="new-task-setting__new-sub-task-links">
                                        <img src="@img/sub-task-icons/ic_date.svg" alt="" className="new-task-setting__new-sub-task-icon" />
                                        <span className="new-task-setting__new-sub-task-text">05 Nov</span>
                                    </div>
                                    <div href="#" className="new-task-setting__new-sub-task-links">
                                        <img src="@img/sub-task-icons/ic_reminder.svg" alt="" className="new-task-setting__new-sub-task-icon" />
                                        <span className="new-task-setting__new-sub-task-text">Monday, 14:00</span>
                                    </div>
                                    <div href="#" className="new-task-setting__new-sub-task-links">
                                        <img src="@img/sub-task-icons/ic_attach.svg" alt="" className="new-task-setting__new-sub-task-icon" />
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
                                <label data-check-box-label="1" for="new-sub-task-ckeckbox" className="new-task-setting__new-sub-task-ckeckbox">
                                    <input data-check-box-input="1" type="checkbox" style="display: none" id="new-sub-task-ckeckbox" />
                                </label>
                                <textarea id="new-sub-task" name="new-sub-task" className="new-task-setting__new-sub-task-textarea" placeholder=" New subtask"></textarea>
                                <a href="#" className="new-task-setting__new-sub-task-delete">
                                    <img src="@img/sub-task-icons/ic_delete.svg" alt="" className="new-task-setting__new-sub-task-icon" />
                                </a>
                                <a data-burger-link="4" href="#" className="new-task-setting__new-sub-task-full">
                                    <img src="@img/sub-task-icons/ic_open.svg" alt="" className="new-task-setting__new-sub-task-icon" />
                                </a>
                            </div>
                            <div className="new-task-setting__new-sub-task-bottom">
                                <div className="new-task-setting__new-sub-task-left">
                                    <a href="#" className="new-task-setting__new-sub-task-links">
                                        <img src="@img/sub-task-icons/ic_user.svg" alt="" className="new-task-setting__new-sub-task-icon" />
                                    </a>
                                    <a href="#" className="new-task-setting__new-sub-task-links">
                                        <img src="@img/sub-task-icons/ic_date.svg" alt="" className="new-task-setting__new-sub-task-icon" />
                                    </a>
                                    <a href="#" className="new-task-setting__new-sub-task-links">
                                        <img src="@img/sub-task-icons/ic_reminder.svg" alt="" className="new-task-setting__new-sub-task-icon" />
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
                    <img src="@img/all-icons/add.svg" alt="" className="new-task-setting__add-sub-task-icon" />
                    Add sub-task
                </a>
                <p className="new-task-setting__title">
                    <img src="@img/task-setting-icons/ic_attach2.svg" alt="" className="new-task-setting__title-icon" />
                    Attachments
                </p>
                <div className="new-task-setting__drop-area">
                    <input type="file" id="drop-input" className="new-task-setting__drop-input" />
                    <label for="drop-input" className="new-task-setting__drop-label">
                        <img src="@img/task-setting-icons/ic_add2.svg" alt="" className="new-task-setting__drop-icon" />
                        <p className="new-task-setting__drop-text">Upload file</p>
                    </label>
                </div>
            </div>
            <div className="new-task-setting__content-bottom">
                <p className="new-task-setting__bottom-date">Task created: 24 Nov. 2021, 15:00</p>
                <button data-burger-link="5" className="new-task-setting__folder-type-submit btn-blue">Continue</button>
            </div>
        </form>
    )
}