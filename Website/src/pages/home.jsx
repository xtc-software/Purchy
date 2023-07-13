import { useEffect } from "react"

export default function() {
    return (
        useEffect(() => {
            document.title = "Home | Purchy"
        }, []),
        <>
            <h1>Hi</h1>
        </>
    )
}