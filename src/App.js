import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useLocation
} from "react-router-dom";

import SignIn from "./components/authentification/Sign-in";
import SignUp from "./components/authentification/Sign-up";
import VerificationCode from "./components/authentification/Verification-code-page";
import Registration from "./components/authentification/Registration";
import Dashboard from "./components/Dashboard";
import TaskManager from "./components/dashboard/TaskManager";
import NewFolder from "./components/dashboard/NewFolder";

import "./files/css/style.css";
import Authentication from "./components/Authentication";
import EmptyDashboard from "./components/dashboard/EmptyDashboard";

export default function App(props) {

    /* ========================== State ========================= */

    // Стан нашого модального вікна
    let [popupDataState, setPopupDataState] = useState(0);

    // Дані при створенні нового таска
    let [currentObjectTaskState, setCurrentObjectTaskState] = useState({
        id: "",
        types: "",
        status: "open",
        name: "",
        idFolderLocation: "",
        asignedTo: "",
        dueDate: "",
        priority: {},
        descriptor: "",
        subTask: [],
        notification: "Default"
    });

    // ID нашої поточної папки в якій ми створюємо таск
    let [currentFolderLocationId, setCurrentFolderLocationId] = useState("");

    // Поточна папка в якій ми будемо створювати таск
    let [currentFolderLocationState, setCurrentFolderLocationState] = useState({});

    let newTaskSetting = [];

    /* ========================== Functions ============================= */

    // Фукція для закриття всіх модальних вікон
    function exitAllPopups(e) {
        if (e) {
            e.preventDefault()
        }

        setPopupDataState(0);

        const burger = document.querySelectorAll("[data-burger]");
        const burgerLink = document.querySelectorAll("[data-burger-link]");

        for (let i = 0; i < burger.length; i++) {
            burger[i].classList.remove("open");
        }

        for (let i = 0; i < burgerLink.length; i++) {
            burgerLink[i].classList.remove("active");
        }

        setCurrentFolderLocationState({});
    }

    // Функція для закриття модальних вікон при кліку за межами вікна
    window.addEventListener("click", e => {
        const burger = document.querySelectorAll("[data-burger]");

        if (burger) {
            for (let i = 0; i < burger.length; i++) {
                if (burger[i].classList.contains("open")) {
                    const burgerLink = document.querySelectorAll("[data-burger-link]");
                    if (burgerLink) {
                        // console.log(1)
                        let notBurgerLink = true;
                        for (let a = 0; a < burgerLink.length; a++) {


                            if (e.target === burgerLink[a]) {
                                notBurgerLink = false;
                                break
                            }
                        }
                        if (notBurgerLink) {

                            if (!e.target.closest("[data-burger]")) {
                                // console.log(3)
                                exitAllPopups();
                            }
                        }
                    }
                }
            }
        }
    })

    return (

        <>
            <Router>
                <Routes>
                    <Route element={<Authentication />} path="/Authentication">
                        <Route path="/Authentication/Signin" element={<SignIn />} />
                        <Route path="/Authentication/Register" element={<SignUp />} />
                        <Route path="/Authentication/Register/Verification-code" element={<VerificationCode />} />
                        <Route path="/Authentication/Register/Registration" element={<Registration />} />
                    </Route>
                    <Route element={
                        <Dashboard
                            // Масив з всіма папками
                            allFoldersArray={props.allFoldersArray}

                            // Функція для закриття модальних вікон
                            exitAllPopups={exitAllPopups}

                            // Стан модального вікна
                            popupDataState={popupDataState}

                            // Функція для зміни стану вікна
                            setPopupDataState={setPopupDataState}

                            // Функція для створення нової папки
                            addFolderFunction={props.addFolderFunction}

                            newTaskSetting={newTaskSetting}

                            // Функція для створення нового таска
                            addTaskFunction={props.addTaskFunction}

                            // Функція для зміни даних поточного таска (який зараз створюється)
                            setCurrentObjectTaskState={setCurrentObjectTaskState}

                            // Дані таска що зараз створюється
                            currentObjectTaskState={currentObjectTaskState}

                            // ID поточної папки
                            currentFolderLocationId={currentFolderLocationId}

                            // Дані поточної папки
                            currentFolderLocationState={currentFolderLocationState}

                            // Функція для зміни даних поточної папки
                            setCurrentFolderLocationState={setCurrentFolderLocationState}

                            // Функція для створення нового масиву тасків по ідентифікатору папки
                            addIdObject={props.addIdObject}
                        />
                    } path="/Dashboard">
                        <Route path="/Dashboard/Empty-state" element={<EmptyDashboard />} />
                        <Route
                            path="/Dashboard/Task-manager"
                            element={
                                <TaskManager

                                    // Стан модального вікна
                                    popupDataState={popupDataState}

                                    // Функція для зміни стану вікна
                                    setPopupDataState={setPopupDataState}

                                    // Функція для закриття модальних вікон
                                    exitAllPopups={exitAllPopups}

                                    // Масив з всіма папками
                                    allFoldersArray={props.allFoldersArray}
                                />
                            }
                        />
                        <Route
                            path="/Dashboard/New-folder"
                            element={
                                <NewFolder

                                    // Функція для зміни стану вікна
                                    setPopupDataState={setPopupDataState}

                                    // Функція для закриття модальних вікон
                                    exitAllPopups={exitAllPopups}

                                    // Масив всіх тасків
                                    allTasksArray={props.allTasksArray}

                                    newTaskSetting={newTaskSetting}

                                    // Функція для встановлення ID папки в яку створювати таск
                                    setCurrentFolderLocationId={setCurrentFolderLocationId}
                                />
                            }
                        />
                    </Route>
                </Routes>
            </Router >
        </>
    );
}

{/* <Link to="/dashboard" component={SignInLink}/> */ }