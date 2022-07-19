import { useEffect } from "react";

export default function PopupTemplates(props) {

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
        <form data-burger="8" action="#" className="more-item-burger">
            <div className="more-item-burger__content-top">
                <a href="#" data-burger-exit="8" className="more-item-burger__link-exit">
                    <img src="@img/arrow-exit.svg" alt="" className="more-item-burger__link-icon" />
                </a>
            </div>
            <div data-form-radio-group="21" className="more-item-burger__content-center">
                <h2 className="more-item-burger__burger-name">Templates</h2>
                <label htmlFor="input-search" className="more-item-burger__label-search">
                    <button className="more-item-burger__search">
                        <img src="@img/search.svg" alt="" className="more-item-burger__icon-search" />
                    </button>
                    <input id="input-search" type="text" className="more-item-burger__input-search" placeholder="Search template" />
                </label>
                <h3 className="more-item-burger__title">Corrent folder</h3>
                <label data-label-radio="21" htmlFor="template-radio1" className="more-item-burger__label">
                    <input data-input-radio="21" type="radio" id="template-radio1" name="template-radio" className="more-item-burger__input-radio" />
                    <h4 className="more-item-burger__template-name">Template #1</h4>
                    <p className="more-item-burger__template-text">
                        This is an extreme level of anxiety and will commit autolaunch of the app with a message.
                    </p>
                </label>
                <label data-label-radio="21" htmlFor="template-radio2" className="more-item-burger__label">
                    <input data-input-radio="21" type="radio" id="template-radio2" name="template-radio" className="more-item-burger__input-radio" />
                    <h4 className="more-item-burger__template-name">Template #2</h4>
                    <p className="more-item-burger__template-text">
                        This is an extreme level of anxiety and will commit autolaunch of the app with a message.
                    </p>
                </label>
                <h3 className="more-item-burger__title">Other default folders</h3>
                <label data-label-radio="21" htmlFor="template-radio3" className="more-item-burger__label">
                    <input data-input-radio="21" type="radio" id="template-radio3" name="template-radio" className="more-item-burger__input-radio" />
                    <h4 className="more-item-burger__template-name">Template #1</h4>
                    <p className="more-item-burger__template-text">
                        This is an extreme level of anxiety and will commit autolaunch of the app with a message.
                    </p>
                </label>
            </div>
            <div className="more-item-burger__content-bottom">
                <a href="#" className="more-item-burger__button-submit btn-blue">Save changes</a>
            </div>
        </form>
    )
}