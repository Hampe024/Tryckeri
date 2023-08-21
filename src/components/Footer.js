import Plusprint from "../style/img/pluslogo.png";

import "../style/css/components/footer.css"

export default function Footer() {
    return (
        <div className="footer">
            <div>
                <h3>Kontakt</h3>
            </div>
            <img src={Plusprint} />
            <div>
                <h3>Adress</h3>
            </div>
        </div>
    )
}