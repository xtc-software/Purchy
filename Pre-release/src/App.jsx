export default function() {
    return (
        <>
            <div className="newsletter-container">
                <div className="newsletter-frame">
                <div className="left">
                    <h1>Want to know when <br /> Purchy releases?</h1>
                    <h3>Be the first to find out by joining our Newsletter!</h3>
                </div>
                <div className="vl"></div>
                <div className="right">
                    <input type="text" size="50" minLength={1} maxLength={100} placeholder="Enter your email" />
                    <button type="button">Subscribe!</button>
                </div>
                </div>
            </div>
        </>
    )
}