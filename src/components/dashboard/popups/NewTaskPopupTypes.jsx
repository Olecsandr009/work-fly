import { useEffect, useState } from "react";
{/*Это окно при создании таска, показывается в том случае, если тип папки 
был выбран кастомный либо если есть сохранненые темплейты тасков.*/}

export default function NewTaskPopupTypes(props) {

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

    const typesObject = {
        "type-radio1": "Template #1",
        "type-radio2": "Template #2"
    }

    let [currentTypeState, setCurrentState] = useState("");
    let [checkedTypeState, setCheckedTypeState] = useState(true);

    function setCurrentStateFunc(e) {
        setCurrentState(typesObject[e.target.id])
        setCheckedTypeState(false);
    }

    function openPopupFunction(e) {

        e.preventDefault();
        props.exitAllPopups();

        const burgerLinkNum = e.target.dataset.burgerLink;

        props.setPopupDataState(burgerLinkNum);

        props.setCurrentObjectTaskState({
            types: currentTypeState,
            status: props.setCurrentObjectTaskState.status,
            name: props.setCurrentObjectTaskState.name,
            idFolderLocation: props.setCurrentObjectTaskState.idFolderLocation,
            asignedTo: props.setCurrentObjectTaskState.asignedTo,
            dueDate: props.setCurrentObjectTaskState.dueDate,
            priority: props.setCurrentObjectTaskState.priority,
            descriptor: props.setCurrentObjectTaskState.descriptor,
            subTask: props.setCurrentObjectTaskState.subTask
        });

    }

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
                    <label data-label-radio="4" htmlFor="type-radio1" className="menu-burger__label">
                        <input onClick={setCurrentStateFunc} data-input-radio="4" id="type-radio1" name="type-radio" type="radio"
                            className="menu-burger__input-type" />
                        <h3 className="menu-burger__label-title">Template #1</h3>
                        <p className="menu-burger__label-text">
                            This is an extreme level of anxiety and will commit autolaunch of the app with a message.
                        </p>
                    </label>
                    <label data-label-radio="4" htmlFor="type-radio2" className="menu-burger__label">
                        <input onClick={setCurrentStateFunc} data-input-radio="4" id="type-radio2" name="type-radio" type="radio"
                            className="menu-burger__input-type" />
                        <h3 className="menu-burger__label-title">Template #2</h3>
                        <p className="menu-burger__label-text">
                            This is an extreme level of anxiety and will commit autolaunch of the app with a message.
                        </p>
                    </label>
                </div>
            </div>
            <div className="menu-burger__content-bottom">
                <button disabled={checkedTypeState} data-burger-link="3" onClick={openPopupFunction} className="menu-burger__folder-type-submit btn-blue">Create task</button>
            </div>
        </form>
    )
}