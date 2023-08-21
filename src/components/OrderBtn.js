import "../style/css/components/orderBtn.css";

export default function OrderBtn({width, children}) {
    const divStyle = {
        width: width
    }
    return (
        <div className="btn" style={divStyle}>
            <a href="mailto:tryck@plusprint.se?Subject=Beställning av Kuvert">{children}</a>
        </div>
    )
}