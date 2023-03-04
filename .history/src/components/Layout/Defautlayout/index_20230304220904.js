import Header from "./Header";
import Footer from "./Footer";
function Defautllayout(children) {
    return (
        <div>

            <div className="wraper">
                <Header />
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    )
}

export default Defautllayout;