import Header from "../Defautlayout/Header";
function Defautllayout({ children }) {
    return (
        <div>
            <Header />
            <div className="wraper">
                <div className="content">{children}
                </div>
            </div>

        </div>
    )
}

export default Defautllayout;