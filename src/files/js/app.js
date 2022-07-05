
// Функція для провірки браузера на підтримке плагина для сборки gulp
import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

// Функція для адаптивного меню. Меню при зменшенні екрану складується в меню бургер
// import * as adaptiveMenu from "./modules/adaptiveMenu.js";

// adaptiveMenu.adaptiveMenu(); меню в стадії розробки

/*--=============================== BURGER ==================================--*/
/*--========================= Функція бургер меню ===========================--*/

// Інструкція:
// даємо силкам на меню дата атрибут [data-burger-link]
// даємо меню дата атрибут [data-burger]
// даємо кнопці (закрити) дата атрибут [data-burger-exit]
// всі значення дата атрибутів повинні бути однаковими
import * as burger from "./modules/burger.js";

burger.burger();

/*--============================== CHECKBOX =================================--*/
/*--=================== Функція для стилізації чекбоксов ====================--*/

// Інструкція:
// даємо лабелам дата атрибут [data-check-box-label]
// даємо інпутам дата атрибут [data-check-box-input]
// всі значення дата атрибутів повинні бути однаковими
import * as checkBox from "./modules/check-box.js";

checkBox.checkBox();

//	Функція для зміни типу інпута що призначений для введення паполя
import * as lookPassword from "./modules/lookPassword.js";

lookPassword.lookPassword();

// Функція для модального вікна
// import * as popup from "./modules/popup.js";

// popup.popup();

// Функція для лічильника кількості покупки
import * as quantity from "./modules/quantity.js";

quantity.quantity();

/*--================================ RADIO ==================================--*/
/*--================== Функція для стилізації радіо-кнопок ==================--*/

// Інструкція:
// даємо Input дата атрибут [data-input-radio]
// так само Label даємо дата атрибут [data-label-radio]
// і обгортці всіх Label даємо дата атрибут [data-form-radio-group]
// всі значення дата атрибутів повинні бути однаковими
import * as radio from "./modules/radio.js";

radio.radio();

// Функція для плавного зникнення і появлення блоку
// import * as slideToggle from "./modules/slideToggle.js";

// slideToggle.slideToggle();

// Функція для сполерів
import * as spoler from "./modules/spoler.js";

spoler.spoler();

// Функція для табів
// import * as tabs from "./modules/tabs.js";

// tabs.tabs();

// Бібліотека для слайдерів SWIPER
// import Swiper from 'swiper';

// const swiper = new Swiper( "class", {
// 	// Пагінація
// 	pagination: { 
// 		// Елемент пагінації
// 		el: '.swiper-pagination', 
// 		// Тип
// 		type: 'bullets',
// 		// Можна керувати кліками по пагінації
// 		clickable: true
// 	},
// 	// Відступи між слайдами
// 	spaceBetween: 60,
// 	// Кількість слайдів
// 	slidesPerView: 3,
// 	// Нескінченне гортання
// 	loop: true,
// 	// Авто гортання
// 	autoplay: {
// 		// Кількість мілісекунд
// 		delay: 2000
// 	},
// 	// Брейкпоінти
// 	breakpoints: {
// 	},
// } )

// Бібліотека для фільтрів
// import mixitup from 'mixitup';

// const mixer = mixitup(".block-gallery__blocks", {
// 	animation: {
// 		enable: true,
// 		duration: 250,
// 		nudge: false,
// 		reverseOut: false,
// 		effects: "fade translateY(20%)"
//   }
// });

const allTypesButton = document.querySelector(".header-dashboard__all-types");
const allTypesList = document.querySelector(".header-dashboard__all-types-menu");

if (allTypesButton) {
    allTypesButton.addEventListener('click', e => {
        e.preventDefault();

        if (allTypesList) {
            allTypesList.classList.toggle("active");
            allTypesButton.classList.toggle("active");
        }

    })
}

const searchInput = document.querySelector(".header-dashboard__search-input");
const searchInputList = document.querySelector(".header-dashboard__search-result");
const searchInputClose = document.querySelector(".header-dashboard__search-close");

if (searchInput) {
    searchInput.addEventListener("input", e => {
        if (searchInputClose) {
            searchInputClose.classList.add("active");
        }
        if (!searchInput.value) {
            searchInputClose.classList.remove("active");
        }
    })
}

searchInput.addEventListener("focusin", e => {
    if (searchInputList) {
        searchInputList.classList.add("active")
    }
})

searchInput.addEventListener("focusout", e => {
    if (searchInputList) {
        searchInputList.classList.remove("active")
    }
})

searchInputClose.addEventListener("click", e => {
    e.preventDefault();
    searchInput.value = "";
    searchInputClose.classList.remove("active");
})

addEventListener("click", e => {
    if (document.querySelector(".header-dashboard__all-types")) {
        const allTypesButtonParent = document.querySelector(".header-dashboard__all-types");

        if (!e.target.closest(".header-dashboard__all-types")) {
            allTypesList.classList.remove("active");
            allTypesButton.classList.remove("active");
        }
    }
})

const taskManagerFoldersList = document.querySelector(".task-manager-folders > a");

addEventListener("DOMContentLoaded", e => {

    if (taskManagerFoldersList) {
        const emptyContentCenter = document.querySelector(".empty-state-dashboard");

        if (emptyContentCenter) {
            emptyContentCenter.classList.add("no-empty");
        } else {
            emptyContentCenter.classList.remove("no-empty");
        }
    }

})

const taskTextArea = document.querySelector(".new-task-setting__textarea");

if (taskTextArea) {

    taskTextArea.addEventListener('keyup', function (e) {
        if (this.scrollTop > 0) {
            this.style.height = this.scrollHeight + "px";
        }
    });
}

const addMoreButton = document.querySelectorAll(".new-task-setting__link-add");
const addMoreList = document.querySelectorAll(".new-task-setting__add-more-window");

if (addMoreButton.length > 0) {

    for (let i = 0; i < addMoreButton.length; i++) {

        addMoreButton[i].addEventListener('click', e => {
            e.preventDefault();

            for (let a = 0; a < addMoreList.length; a++) {
                if (addMoreButton[i].dataset.addMore === addMoreList[a].dataset.addMore) {
                    addMoreList[a].classList.toggle("active");
                    addMoreButton[i].classList.toggle("active");

                    addEventListener("click", e => {
                        if (document.querySelector(".new-task-setting__add-more")) {
                            if (!e.target.closest(".new-task-setting__add-more")) {
                                addMoreList[a].classList.remove("active");
                                addMoreButton[i].classList.remove("active");
                            }
                        }
                    })
                }
            }

        })
    }
}

const taskTextArea2 = document.querySelector("#new-sub-task");

if (taskTextArea2) {

    taskTextArea2.addEventListener('keyup', function (e) {
        if (this.scrollTop > 0) {
            this.style.height = this.scrollHeight + "px";
        }
    });
}

const taskManagerTasksList = document.querySelector(".all-tasks-list__tasks > li");

addEventListener("DOMContentLoaded", e => {

    if (taskManagerTasksList) {
        const emptyContent = document.querySelector(".new-folder-tasks__empty-tasks");
        const emptyParent = document.querySelector(".new-folder-tasks");

        if (emptyContent) {
            emptyContent.classList.add("no-empty");
            emptyParent.classList.add("no-empty");
        } else {
            emptyContent.classList.remove("no-empty");
            emptyParent.classList.remove("no-empty");
        }
    }

})

const addMoreButton2 = document.querySelectorAll(".empty-state-dashboard__button-link.more");
const addMoreList2 = document.querySelectorAll(".empty-state-dashboard__menu-list");

if (addMoreButton2) {
    for (let i = 0; i < addMoreButton2.length; i++) {

        addMoreButton2[i].addEventListener('click', e => {
            e.preventDefault();

            for (let a = 0; a < addMoreList2.length; a++) {
                if (addMoreButton2[i].dataset.addMore === addMoreList2[a].dataset.addMore) {
                    addMoreList2[a].classList.toggle("active");
                    addMoreButton2[i].classList.toggle("active");

                    addEventListener("click", e => {
                        if (document.querySelector(".empty-state-dashboard__more-menu")) {
                            if (!e.target.closest(".empty-state-dashboard__more-menu")) {
                                addMoreList2[a].classList.remove("active");
                                addMoreButton2[i].classList.remove("active");
                            }
                        }
                    })
                }
            }

        })
    }
}

const addMoreButton3 = document.querySelectorAll(".all-tasks-list__task-link.more");
const addMoreList3 = document.querySelectorAll(".all-tasks-list__more-menu");

if (addMoreButton2) {
    for (let i = 0; i < addMoreButton3.length; i++) {

        addMoreButton3[i].addEventListener('click', e => {
            e.preventDefault();

            for (let a = 0; a < addMoreList3.length; a++) {
                if (addMoreButton3[i].dataset.addMore === addMoreList3[a].dataset.addMore) {
                    addMoreList3[a].classList.toggle("active");
                    addMoreButton3[i].classList.toggle("active");

                    addEventListener("click", e => {
                        if (document.querySelector(".all-tasks-list__task-more-menu")) {
                            if (!e.target.closest(".all-tasks-list__task-more-menu")) {
                                addMoreList3[a].classList.remove("active");
                                addMoreButton3[i].classList.remove("active");
                            }
                        }
                    })
                }
            }

        })
    }
}

const notificationLink = document.querySelectorAll("[data-notification-link]");
const notificationWindow = document.querySelectorAll("[data-notification]");
const notificationClose = document.querySelectorAll("[data-notification-close]");

if (notificationLink) {
    for (let i = 0; i < notificationLink.length; i++) {
        notificationLink[i].addEventListener("click", e => {
            e.preventDefault();
            for (let a = 0; a < notificationWindow.length; a++) {
                if (notificationLink[i].dataset.notificationLink === notificationWindow[a].dataset.notification) {
                    notificationWindow[a].classList.add("active");

                    setTimeout(() => {
                        notificationWindow[a].classList.remove("active")
                    }, 8000)
                }
            }
            for (let a = 0; a < notificationClose.length; a++) {
                notificationClose[a].addEventListener("click", e => {
                    e.preventDefault();

                    if (notificationLink[i].dataset.notificationLink === notificationClose[a].dataset.notificationClose) {
                        notificationWindow[a].classList.remove("active")
                    }
                })
            }
        })
    }
}

const searchInput2 = document.querySelector(".new-task-setting__input-task-name.product");
const searchInputClose2 = document.querySelector(".new-task-setting__purchase-search");

if (searchInput2) {
    searchInput2.addEventListener("input", e => {
        if (searchInputClose2) {
            searchInputClose2.classList.add("active");
        }
        if (!searchInput2.value) {
            searchInputClose2.classList.remove("active");
        }
    })
}

const storageEmpty = document.querySelector(".empty-state-dashboard__center-content.storage");

if (storageEmpty) {

}