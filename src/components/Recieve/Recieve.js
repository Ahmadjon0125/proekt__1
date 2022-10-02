import downarrow from "../../assets/images/Arrow.png"
import "./recieve.scss"
import lupa from "../../assets/images/Lupa.png"

export function Recieve() {
  return (
    <div className="recieve">
      <div className="container">
        <ul className="recieve-list">
          <li className="receive-item prinyat">Prinyat zakaz: <span className="recieve-arrow"><img src={downarrow} alt="downarrow" width={21} height={24} /></span></li>
          <li className="receive-item sort">Sort: <span className="srok-span">srok dostavki</span> </li>
          <li className="receive-item search">
            <input className="lupa-input" type="search"  placeholder="  поиск..."/> <span className="lupa-span"><img src={lupa} alt="Lupa" width={18} height={18 } /></span>
          </li>
        </ul>
      </div>
    </div>
  )
}
