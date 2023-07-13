import { useEffect } from "react"

export default function() {
    return (
        useEffect(() => {
            document.title = "Dashboard | Purchy"
        }, []),
        <>
            <h1>Dash</h1>
        </>
    )
}