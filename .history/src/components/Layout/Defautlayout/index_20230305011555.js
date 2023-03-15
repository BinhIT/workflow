import Header from "~/component/Header";
import Footer from "~/component/Footer";
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