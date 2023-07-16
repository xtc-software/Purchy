import { NotificationMenu } from "../components/NotificationMenu"
export default function() {
    return (
        <>
            <div className="home-layout">
                <NotificationMenu />
                <div className="welcome-msg">
                    Hi
                </div>
                <div className="dashboard-panels">
                    Welcome
                </div>
                <div className="dashboard-sales-graph">
                    GRAPH GOES HERE
                </div>
            </div>
        </>
    )
}