import './headerBot.css'
import { AiOutlineQrcode } from "react-icons/ai";
import { AiOutlineSearch,AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Login from '../Login/Login';
import { useState } from 'react';

function HeaderBot(props) {
    const {setSearchInput} = props;

    // const [dataInput, setDataInput] = useState('')

    // console.log('dataInput', dataInput)

    const [showLogin, setShowLogin] = useState(false)

    return (

        <div className='listHeaderBot'>
            <div className='logo-sendo'>
                <a>Sendo</a>
            </div>
            <div id="qr-code">
                <AiOutlineQrcode className='navbar-icon qr-icon' />
            </div>
            <div className='back-space'>
                <AiOutlineArrowLeft />
            </div>
            <div className='search-input'>
                <input
                    type="text"
                    placeholder="Tìm kiếm Sendo..."
                    onChange={(e) => { setSearchInput(e?.target?.value) }}
                />
                <AiOutlineSearch className='search-icon navbar-icon' />
            </div>
            <div className='cart-shop'>
                <AiOutlineShoppingCart className='cart-icon navbar-icon' />
            </div>
            <div className='login-btn'>
                <button onClick={() => { setShowLogin(!showLogin) }}>Đăng nhập</button>
                {/* {showLogin ? <Login /> : null} */}
            </div>
        </div>
    )
}
export default HeaderBot;