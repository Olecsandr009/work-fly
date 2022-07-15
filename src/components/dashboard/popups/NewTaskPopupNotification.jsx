export default function NewTaskPopupNotification() {

    return (

        <form data-burger="5" action="#" className="new-task-setting notification">
            <div className="new-task-setting__header">
                <a data-burger-exit="5" href="#" className="new-task-setting__arrow-exit notification">
                    <img src="@img/arrow-exit.svg" alt="" className="new-task-setting__arrow-exit-icon" />
                    Back
                </a>
            </div>
            <div className="new-task-setting__center">

                <h2 className="new-task-setting__burger-name">Notification</h2>
                <h3 className="new-task-setting__title notification">Choose type</h3>
                <div data-form-radio-group="5" className="new-task-setting__notification-radio-list">
                    <label data-label-radio="5" for="notification-radio1" className="new-task-setting__notification checked">
                        <input data-input-radio="5" id="notification-radio1" checked name="notification" type="radio"
                            className="new-task-setting__notification-input" />
                        <div className="new-task-setting__noification-media">
                            <img src="@img/new-task-notification/discount.png" alt=""
                                className="new-task-setting__notification-image" />
                        </div>
                        <div className="new-task-setting__notification-content">
                            <h4 className="new-task-setting__notification-title">SOS</h4>
                            <p className="new-task-setting__notification-text">
                                This is an extreme level of anxiety and will commit autolaunch of the app with a message.
                            </p>
                        </div>
                    </label>
                    <label data-label-radio="5" for="notification-radio2" className="new-task-setting__notification">
                        <input data-input-radio="5" id="notification-radio2" name="notification" type="radio"
                            className="new-task-setting__notification-input" />
                        <div className="new-task-setting__noification-media">
                            <img src="@img/new-task-notification/discount2.png" alt=""
                                className="new-task-setting__notification-image" />
                        </div>
                        <div className="new-task-setting__notification-content">
                            <h4 className="new-task-setting__notification-title">Urgent</h4>
                            <p className="new-task-setting__notification-text">
                                This is an extreme level of anxiety and will commit autolaunch of the app with a message.
                            </p>
                        </div>
                    </label>
                    <label data-label-radio="5" for="notification-radio3" className="new-task-setting__notification">
                        <input data-input-radio="5" id="notification-radio3" name="notification" type="radio"
                            className="new-task-setting__notification-input" />
                        <div className="new-task-setting__noification-media">
                            <img src="@img/new-task-notification/discount3.png" alt=""
                                className="new-task-setting__notification-image" />
                        </div>
                        <div className="new-task-setting__notification-content">
                            <h4 className="new-task-setting__notification-title">Default</h4>
                            <p className="new-task-setting__notification-text">
                                Notification is accompanied by sound and has no priority over normal notifications.
                            </p>
                        </div>
                    </label>
                    <label data-label-radio="5" for="notification-radio4" className="new-task-setting__notification">
                        <input data-input-radio="5" id="notification-radio4" name="notification" type="radio"
                            className="new-task-setting__notification-input" />
                        <div className="new-task-setting__noification-media">
                            <img src="@img/new-task-notification/discount4.png" alt=""
                                className="new-task-setting__notification-image" />
                        </div>
                        <div className="new-task-setting__notification-content">
                            <h4 className="new-task-setting__notification-title">Silence</h4>
                            <p className="new-task-setting__notification-text">
                                Same as a normal notification, but without sound.
                            </p>
                        </div>
                    </label>
                </div>
                <h3 className="new-task-setting__title notification">Choose type</h3>
                <div className="new-task-setting__info">
                    <div className="new-task-setting__info-media notification">
                        <img src="@img/task-setting-icons/ic_time.svg" alt="" className="new-task-setting__info-icon" />
                    </div>
                    <div className="new-task-setting__info-content">
                        <h4 className="new-task-setting__info-name-item">When notificate?</h4>
                        <a href="#" className="new-task-setting__info-name btn-bottom-small no-name">---</a>
                    </div>
                </div>
            </div>
            <div className="new-task-setting__content-bottom">
                <button className="new-task-setting__folder-type-submit btn-blue">Create task</button>
            </div>
        </form>
    )
}