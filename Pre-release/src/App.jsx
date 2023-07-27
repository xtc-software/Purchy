import { useState } from "react"
import Modal from "./components/Modal"
export default function() {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <div className="newsletter-container">
                <div className="newsletter-frame">
                <div className="left">
                    <label htmlFor="input">
                    <h1>Want to know when <br /> Purchy releases?</h1>
                    <h3>Be the first to find out by joining our newsletter!</h3></label>
                </div>
                <div className="vl"></div>
                <div className="right">
                    <input id ="input" type="text" size="50" minLength={1} maxLength={100} placeholder="Enter your email" />
                    <button type="button" onClick={() => setOpenModal(true)}>Subscribe!</button>
                </div>
                </div>
                <Modal header="Error" description="This functionality has not been set up yet. Please check back later!" open={ openModal } onClose={ () => setOpenModal(false) } />
            </div>
        </>
    )
}