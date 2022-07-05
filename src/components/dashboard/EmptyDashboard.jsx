import React from "react";
import illustration3 from "../../files/img/illustration3.svg";

export default class EmptyDashboard extends React.Component {
    render() {
        return (
            <section className="empty-state-dashboard">
                <h2 className="empty-state-dashboard__title">Hello, Shahav!</h2>
                <div className="empty-state-dashboard__center-content">
                    <div className="empty-state-dashboard__media">
                        <img src={illustration3} alt="Image center" className="empty-state-dashboard__image" />
                    </div>
                    <p className="empty-state-dashboard__text">This folder is empty</p>
                </div>
            </section>
        )
    }
}