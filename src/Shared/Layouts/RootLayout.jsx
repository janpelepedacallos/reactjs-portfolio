import Header from "../Components/Header"
import Socials from "../Components/Socials"
import './rootLayout-style.css'

const RootLayout = ( {children} ) => {
    return (
        <div className="root-layout">
            <video src="/src/Assets/Plexus Background White.mp4" autoPlay muted loop>
            </video>

            <div className="container">
                <Header />
                <div className="content-view">
                    <Socials />
                    {children}
                </div>
            </div>
        </div>
    )
}

export default RootLayout;