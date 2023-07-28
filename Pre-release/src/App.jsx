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
                        <button type="button" onClick={ (() => setOpenModal(true)) }>Subscribe with Discord!</button>
                    </div>
                </div>
                <Modal 
                    header="Are you sure?" 
                    description="By clicking accept you agree to be added to our mailing list using the email attached to your Discord account." 
                    open={ openModal } 
                    onClose={ () => { setOpenModal(false) }}
                />
            </div>
        </>
    )
}