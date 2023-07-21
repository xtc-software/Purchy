import { BiHomeAlt2, BiEnvelope, BiReceipt, BiPackage, BiUserCircle, BiCreditCard, BiLogoDiscord, BiLogoTwitter } from "react-icons/bi"
import { useState } from "react";

export default function() {
    const {openCollapsible, setOpenCollapsible} = useState(false);
    return (
        <>
            <div className="sidebar-container">
                <div className="logo"><h1>Purchy</h1></div>
                <div className="side-menu">
                    <ul className="item">
                        <li><a href="#"><span className="icon"><BiHomeAlt2 /></span><span className="text">Home</span></a></li>
                        <li><a href="#"><span className="icon"><BiPackage /></span><span className="text">Products</span></a></li>
                        <li><a href="#"><span className="icon"><BiReceipt /></span><span className="text">Orders</span></a></li>
                        <li><a href="#"><span className="icon"><BiCreditCard /></span><span className="text">Subscriptions</span></a></li>
                        <li><a href="#" className="collapsible"><span className="icon"><BiUserCircle /></span><span className="text">Username</span></a></li>
                    </ul>
                    </div>
                    <div className="socials">
                        <ul>
                            <li><a href=""><BiEnvelope /></a></li>
                            <li><a href=""><BiLogoTwitter /></a></li>
                            <li><a href=""><BiLogoDiscord /></a></li>
                        </ul>
                    </div>
             </div>
        </>
    )
}
