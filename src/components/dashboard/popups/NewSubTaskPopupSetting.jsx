export default function NewSubTaskPopupSetting() {

    return (
        <form data-burger="4" action="#" className="new-task-setting">
            <div className="new-task-setting__header">
                <a href="#" className="new-task-setting__link-left btn-bottom-small blue">Open</a>
                <div className="new-task-setting__header-right">
                    <ul className="new-task-setting__header-list">
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
                    <a data-burger-link="3" href="#" className="new-task-setting__arrow-exit">
                        <img src="@img/arrow-exit.svg" alt="" className="new-task-setting__arrow-exit-icon" />
                        Back
                    </a>
                </div>
            </div>
            <div className="new-task-setting__center">
                <div className="new-task-setting__bread-crumbs">
                    <a data-burger-link="3" href="#" className="new-task-setting__bread-crumbs-back">DFH 23</a>
                    <span className="new-task-setting__bread-crumbs-symbol"></span>
                    <p className="new-task-setting__bead-crumbs-current">DFH 24</p>
                </div>
                <input type="text" className="new-task-setting__input-task-name" placeholder="Sub-Task name" />
                <div className="new-task-setting__informations">
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
                    <a data-add-more="1" href="#" className="new-task-setting__link-add">
                        <img src="@img/task-setting-icons/ic_add.svg" alt="" className="new-task-setting__link-add-icon" />
                        Add more
                    </a>
                    <ul data-add-more="1" className="new-task-setting__add-more-window">
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
                <button disabled className="new-task-setting__folder-type-submit btn-blue">Continue</button>
            </div>
        </form>
    )
}