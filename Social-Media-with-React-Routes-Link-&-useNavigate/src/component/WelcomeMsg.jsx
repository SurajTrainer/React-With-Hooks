
const WelcomeMsg = ({getPostbyClick}) => {
    return (
        <>
            <center>
                <h2 className="welcome-msg">Hey Please upload some posts</h2>
                <button type="button" onClick={getPostbyClick} className="btn btn-outline-warning">Get post from server</button>
            </center>
        </>
    )

}

export default WelcomeMsg