import Header from "./Header";
import Footer from "./Footer";
function Defautllayout(children) {
    return <div>
        <Header />
        <div className="wraper">
            <div className="content">{children}</div>
        </div>
        <Footer />
    </div>
}

export default Defautllayout;