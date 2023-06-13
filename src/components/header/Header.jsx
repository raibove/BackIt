import logo from '../../logo.svg'
import './Header.css'
const Header = ()=>{
    return (
        <div class="u-padding-12 u-flex header ">
        <img src={logo} className="logo" alt="logo" />    
        <h3 className='heading-level-3 header-title'>BackIt</h3>
        </div>
    )
}

export default Header;