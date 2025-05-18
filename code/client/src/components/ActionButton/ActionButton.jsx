import React from "react";
import "./ActionButton.css";

export const ActionButton = () => {
    return (
        <div className="action-button-wrapper">
            <div className="action-button-hero">
                <div className="action-button-text">
                    <div className="action-button-title">
                        <div className="action-button-heading">Educação criativa e inovadora</div>
                        <p className="action-button-description">
                            O Instituto Criativo é uma ONG que nasceu para transformar a vida das pessoas.
                        </p>
                    </div>
                </div>

                <div className="action-button-buttons">
                    <button className="action-button-event">
                        <div className="action-button-event-text">Eventos</div>
                    </button>

                    <a
                        className="action-button-link"
                        href="#/Signup_ADM"
                        rel="noopener noreferrer"
                    >
                        <div className="action-button-link-text">Quero ser criativo</div>
                    </a>
                </div>
            </div>
        </div>
    );
};
