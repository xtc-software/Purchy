import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function() {
    const navigate = useNavigate();
    const doRedirect = () => {
        navigate("/");
    }

    useEffect(() => {
        document.title = "Authentication | Purchy"
        setTimeout(() => {
            doRedirect();
        }, 2000)
    }, [])
    
    return (
        <>
            <h1>Authenticating</h1>
            <p>You should be redirected to your dashboard automatically once we were able to verify your request.</p>
        </>
    )
}