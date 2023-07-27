import { useState } from "react"

export default function Modal({ header, description, open, onClose }) {
    if (!open) return null;
    return(
        <>
        <div className="overlay" onClick={onClose}>
            <div className="modal" onClick={ (e) => { e.stopPropagation(); } }>
                <div className="title">{header}</div>
                <div className="description">{description}</div>
                <button className="close-modal" onClick={ onClose }>Close</button>
            </div>
        </div>
        </>
    )
}