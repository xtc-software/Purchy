import { BiBell } from "react-icons/bi"
import { useState, useEffect } from "react"
import NotificationItem from "./NotificationItem"

export default function() {
    const [openNotifications, setOpenNotifications] = useState(false)
    const [getNotifications] = useState([])

    return (
        <>
            <div className="notifications">
                <BiBell />
            </div>
            <div className="notification-dropdown">
                <NotificationItem />
            </div>
        </>
    )
}
