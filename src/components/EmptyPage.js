import './EmptyPage.css'
import imgNotFound from './not-found.png'
function EmptyPage() {
    return (
        <div className="not-found">
            <img className='not-found-img' src={imgNotFound} alt="" />
            <div className='not-found-tittle'>
                Tiếc quá! Không thấy sản phẩm này
            </div>
            <div className='not-found-content'>
                Sản phẩm không tồn tại.
            </div>
        </div>
    );
}

export default EmptyPage;