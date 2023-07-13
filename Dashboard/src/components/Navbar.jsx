import { BiBell, BiHomeAlt2, BiDesktop, BiPackage, BiUserCircle, BiDollarCircle} from "react-icons/bi"

export default function() {
    return (
        <>
            <div className="notifications">
                <BiBell />
                <div className="notification-dropdown">

                </div>
            </div>
            <div className="sidebar">
                <div className="logo">Purchy</div>
                <div className="side-menu">
                    <ul>
                        <li><a href="#"><span className="icon"><BiHomeAlt2 /></span><span className="text">Home</span></a></li>
                        <li><a href="#"><span className="icon"><BiPackage /></span><span className="text">Products</span></a></li>
                        <li><a href="#"><span className="icon"><BiDesktop /></span><span className="text">Orders</span></a></li>
                        <li><a href="#"><span className="icon"><BiDollarCircle /></span><span className="text">Subscriptions</span></a></li>
                        <li><a href="#" className="collapsible"><span className="icon"><BiUserCircle /></span><span className="text">Username</span></a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
