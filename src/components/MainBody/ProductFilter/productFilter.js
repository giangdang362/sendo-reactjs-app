import './productFilter.css'
// import {AiOutlineCheck} from 'react-icons/ai';
function ProductFilter() {
    return (
        <div className='product-filter'>
            <label htmlFor="filter">Sắp xếp theo:</label>
            <select name="filter" id="filter">
                <option value="">Đề cử</option>
                <option value="">Bán chạy</option>
                <option value="">Giá thấp</option>
                <option value="">Giá cao</option>
                <option value="">Lượt yêu thích</option>
            </select>
        </div>
    );
}

export default ProductFilter;