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
// import "../public/js/app.min"

export default function App(props) {

    let [popupDataState, setPopupDataState] = useState(0);

    let [newFolderId, setNewFolderId] = useState("");

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
    }

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
                            allFoldersArray={props.allFoldersArray}
                            exitAllPopups={exitAllPopups}
                            popupDataState={popupDataState}
                            setPopupDataState={setPopupDataState}
                            addFolderFunction={props.addFolderFunction}
                        />
                    } path="/Dashboard">
                        <Route path="/Dashboard/Empty-state" element={<EmptyDashboard />} />
                        <Route
                            path="/Dashboard/Task-manager"
                            element={
                                <TaskManager
                                    popupDataState={popupDataState}
                                    setPopupDataState={setPopupDataState}
                                    exitAllPopups={exitAllPopups}
                                    allFoldersArray={props.allFoldersArray}
                                    setNewFolderId={setNewFolderId}
                                />
                            }
                        />
                        <Route
                            path="/Dashboard/New-folder"
                            element={<NewFolder allTasksArray={props.allTasksArray} />}
                        />
                    </Route>
                </Routes>
            </Router >
        </>
    );
}

{/* <Link to="/dashboard" component={SignInLink}/> */ }