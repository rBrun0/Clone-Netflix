import "./style.css";
import logoNetflix from "../../assets/logo.png";
import Button from "../../components/Button"

const Header = () => {
  return (
    <header>
     {/* <h1 className="netflixLogo">NETFLIX</h1> */}
     <img src={logoNetflix} alt="" />
     <div className="leftHeaderNav">
     <select name="languages" id="languagesOptions" className="languageOptions">
      <option value="english">English</option>
      <option value="portugues">Portugues</option>
    </select>
    <button>
      Entrar
    </button>
     </div>
    </header>
  )
}

export default Header