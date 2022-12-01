import './Contact.css'
import contact1 from './image-contact-1.png'
import contact2 from './image-contact-2.png'
import { AiOutlineWechat, AiOutlineArrowUp } from 'react-icons/ai'
import {useState,useEffect} from 'react'

function Contact() {
    const [showGotoTop, setShowGoToTop] = useState(false);
    
    const GoToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 200)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll',handleScroll)
    }, [])
    return (
        <div className="contact">
            <div className='main-contact'>
                <div className='contact-detail'>
                    <span className='detail-title'>Công ty Cổ phần Công nghệ Sen Đỏ, thành viên của Tập đoàn FPT</span>
                    <span className='content'>Số ĐKKD: 0312776486 - Ngày cấp: 13/05/2014, được sửa đổi lần thứ 20, ngày 26/04/2022.</span>
                    <span className='content'>Cơ quan cấp: Sở Kế hoạch và Đầu tư TPHCM.</span>
                    <span className='content'>Địa chỉ: Tầng 5, Tòa nhà A, Vườn Ươm Doanh Nghiệp, Lô D.01, Đường Tân Thuận, Khu chế xuất Tân Thuận, Phường Tân Thuận Đông, Quận 7, Thành phố Hồ Chí Minh, Việt Nam.</span>
                    <span className='content'>Email: lienhe@sendo.vn</span>
                    <div className='contact-img'>
                        <img src={contact1} alt="" />
                        <img src={contact2} alt="" />
                    </div>
                </div>
                <div className='subcribe-email'>
                    <div className='subcribe-title'>
                        <span >Đăng ký nhận bản tin ưu đãi khủng từ Sendo</span>
                    </div>
                    <form>
                        <div id='sub-input'>
                            <input type="text" name="" value="" placeholder='Email của bạn là...' />
                        </div>
                        <div >
                            <button id='sub-button' type="submit">
                                <span>Đăng ký</span>
                            </button>
                        </div>
                    </form>
                </div>

            </div>
            {showGotoTop? <button  id='scroll-up' onClick={GoToTop}>
                <AiOutlineArrowUp />
            </button> : null}
            <div id='chat-button'>
                <div>
                    <AiOutlineWechat />
                </div>
                <span style={{ marginLeft: '5px' }}>Chat</span>
            </div>
        </div>
    );
}

export default Contact;