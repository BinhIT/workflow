import Header from "./Header";
import Footer from "./Footer";
function Defautllayout({ children }) {
    return (
        <div>

            <div className="wraper">
                <Header />
                <div className="content">{children}
                </div>
                <Footer />
            </div>

        </div>
    )
}

export default Defautllayout;