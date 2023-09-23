import { GrLanguage } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import {GoPerson } from "react-icons/go";
import { GiSelfLove } from "react-icons/gi";
const Header = () => {
  return (
    <div className="header">
      <div className="headr-buttons">
        <button>SALE</button>
        <button>DOCE</button>
        <button>HOME</button>
      </div>
      <span>SHOPY</span>
      <div className="headr-icons">
        <span><GrLanguage /></span>
        <span><FiSearch /></span>
        <span><GoPerson /></span>
        <span><GiSelfLove /></span>
      </div>
    </div>
  );
};
export default Header;
