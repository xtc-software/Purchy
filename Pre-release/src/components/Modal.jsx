import { useState } from "react"

export default function Modal({ header, description, open, agree, onClose }) {
    if (!open) return null;
    return(
        <>
        <div className="overlay" onClick={ onClose } onKeyUp={ onClose }>
            <div className="modal" onClick={ (e) => { e.stopPropagation(); } }>
                <div className="title">{header}</div>
                <div className="description">{description}</div>
                <div className="buttons">
                    <a href="https://discord.com/api/oauth2/authorize?client_id=1119456207128768665&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fdiscord&response_type=code&scope=identify%20email">
                        <button className="agree-btn">Agree</button>
                    </a>
                    <button className="close-modal" onClick={ onClose }>Decline</button>
                </div>
            </div>
        </div>
        </>
    )
}