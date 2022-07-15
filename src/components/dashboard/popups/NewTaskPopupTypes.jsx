{/*Это окно при создании таска, показывается в том случае, если тип папки 
был выбран кастомный либо если есть сохранненые темплейты тасков.*/}

export default function NewTaskPopupTypes() {
    return (
        <form data-burger="2" action="#" className="menu-burger">
            <div className="menu-burger__content-top">

                <a data-burger-exit="2" href="#" className="menu-burger__arrow-exit">
                    <img src="@img/arrow-exit.svg" alt="" className="menu-burger__arrow-exit-icon" />
                    Back
                </a>
            </div>
            <div className="menu-burger__content-center">

                <h2 className="menu-burger__burger-name">Task type</h2>
                <h3 className="menu-burger__title">Saved templates</h3>
                <div data-form-radio-group="4" className="menu-burger__radio-list">
                    <label data-label-radio="4" for="type-radio1" className="menu-burger__label">
                        <input data-input-radio="4" id="type-radio1" name="type-radio" type="radio"
                            className="menu-burger__input-type" />
                        <h3 className="menu-burger__label-title">Template #1</h3>
                        <p className="menu-burger__label-text">
                            This is an extreme level of anxiety and will commit autolaunch of the app with a message.
                        </p>
                    </label>
                    <label data-label-radio="4" for="type-radio2" className="menu-burger__label">
                        <input data-input-radio="4" id="type-radio2" name="type-radio" type="radio"
                            className="menu-burger__input-type" />
                        <h3 className="menu-burger__label-title">Template #2</h3>
                        <p className="menu-burger__label-text">
                            This is an extreme level of anxiety and will commit autolaunch of the app with a message.
                        </p>
                    </label>
                </div>
            </div>
            <div className="menu-burger__content-bottom">
                <button data-burger-link="3" className="menu-burger__folder-type-submit btn-blue">Create task</button>
            </div>
        </form>
    )
}