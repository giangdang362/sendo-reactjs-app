import { useState, useEffect, useRef } from 'react';
import imgSendoQR from './sendoQR.png'
import './headerTop.css'

function DownloadApp() {
    return (
        <div className='dropTop'>
            <img src={imgSendoQR} />
            <p>Quét để tải ứng dụng</p>
        </div>
    )
}
function CareCustomer() {
    return (
        <div className='dropTop'>
            <p>Trung tâm hỗ trợ</p>
            <p>Trả hàng hoàn tiền</p>
        </div>
    )
}
function CheckOrder() {
    return (
        <div className='dropTop '>
            <input className='inputCheck' type="text" name="code-order" placeholder='Nhập mã đơn hàng' />
            <input className='inputCheck' type="text" name="contact" placeholder='Email/ Số điện thoại' />
            <button className='buttonCheck' type="submit">Kiểm tra</button>
        </div>
    )
}
function HeaderTop() {

    const [showQr, setShowQr] = useState(false)
    const [showCareCustomer, setShowCareCustomer] = useState(false)
    const [showCheckOrder, setShowCheckOrder] = useState(false)
    console.log("Hello")
    const clickOutside = () => {
        setShowQr(false);
        setShowCareCustomer(false);
        setShowCheckOrder(false);
    }

    useEffect(() => {
        document.addEventListener('click', clickOutside, true);
        return document.removeEventListener('click', clickOutside)
    }, [])

    return (
        <div className='listHeaderTop'>
            <ul>
                <li onClick={() => {
                    setShowQr(!showQr);
                }
                }
                    id='downloadApp'
                >
                    Tải ứng dụng
                    {showQr ? <DownloadApp /> : null}
                </li>
                <li
                    onClick={() => {
                        setShowCareCustomer(!showCareCustomer);
                    }
                    }
                    id='careCustomer'
                >
                    Chăm sóc khách hàng
                    {showCareCustomer ? <CareCustomer /> : null}
                </li>
                <li
                    onClick={() => {
                        setShowCheckOrder(!showCheckOrder);
                    }
                    }
                    id='codeOrder'
                >
                    Kiểm tra đơn hàng
                    {showCheckOrder ? <CheckOrder /> : null}
                </li>
            </ul>
        </div>
    )
}
export default HeaderTop;