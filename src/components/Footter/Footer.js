import './Footer.css'
import img1 from './image-1.png'
import img2 from './image-2.png'
import img3 from './image-3.png'
import img4 from './image-4.png'
import imgdownload1 from './image-download-1.png'
import imgdownload2 from './image-download-2.png'
import imgdownload3 from './image-download-3.png'
function Footer() {
    return (
        <div className='wrap-footer'>
            <div className='main-footer'>
                <div className='moreinfor-tag'>
                    <a className='image-tag'>
                        <img src={img1} alt='' />
                        <div className='text-tag'>
                            <span className='title'>Siêu nhiều hàng tốt</span>
                            <span className='content'>Cần gì cũng có 26 ngành hàng & 10 triệu sản phẩm</span>
                        </div>
                    </a>
                </div>
                <div className='moreinfor-tag'>
                    <a className='image-tag'>
                        <img src={img2} alt='' />
                        <div className='text-tag'>
                            <span className='title'>Siêu yên tâm</span>
                            <span className='content'>Miễn phí đổi trả 48h</span>
                        </div>
                    </a>
                </div>
                <div className='moreinfor-tag'>
                    <a className='image-tag'>
                        <img src={img3} alt='' />
                        <div className='text-tag'>
                            <span className='title'>Siêu tiện lợi</span>
                            <span className='content'>Mang thế giới mua sắm của Sendo trong tầm tay bạn</span>
                        </div>
                    </a>
                </div>
                <div className='moreinfor-tag'>
                    <a className='image-tag'>
                        <img src={img4} alt='' />
                        <div className='text-tag'>
                            <span className='title'>Siêu tiết kiệm</span>
                            <span className='content'>Giá hợp lý, vừa túi tiền. Luôn có nhiều chương trình khuyến mãi</span>
                        </div>
                    </a>
                </div>
            </div>
            <div className='about'>
                <div className='about-type'>
                    <span>VỀ CHÚNG TÔI</span>
                    <a href="#">Giới thiệu Sendo.vn</a>
                    <a href="#">Giới thiệu SenMall</a>
                    <a href="#">Quy chế hoạt động</a>
                    <a href="#">Chính sách bảo mật</a>
                    <a href="#">Giao hàng và Nhận hàng</a>
                </div>
                <div className='about-type'>
                    <span>DÀNH CHO NGƯỜI MUA</span>
                    <a href="#">Giải quyết khiếu nại</a>
                    <a href="#">Hướng dẫn mua hàng</a>
                    <a href="#">Chính sách đổi trả</a>
                    <a href="#">Chăm sóc khách hàng</a>
                    <a href="#">Nạp tiền điện thoại</a>
                </div>
                <div className='about-type'>
                    <span>DÀNH CHO NGƯỜI BÁN</span>
                    <a href="#">Quy định đối với người bán</a>
                    <a href="#">Chính sách bán hàng</a>
                    <a href="#">Hệ thống tiêu chí kiểm duyệt</a>
                    <a href="#">Mở shop trên Sendo</a>
                </div>
                <div className='about-type'>


                    <span>TẢI ỨNG DỤNG SENDO</span>
                    <a href="#">Mang thế giới mua sắm của Sendo trong tầm tay bạn</a>
                    <div className='downloadApp'>
                        <div>
                            <div className='img-downloadApp'>
                                <a href="#">
                                    <img src={imgdownload1} alt="" />
                                </a>
                            </div>
                            <div className='img-downloadApp'>
                                <a href="#">
                                    <img src={imgdownload2} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className='img-downloadApp'>
                            <a href="#">
                                <img src={imgdownload3} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;