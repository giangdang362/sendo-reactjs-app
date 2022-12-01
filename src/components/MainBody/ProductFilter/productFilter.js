import { useEffect, useState } from 'react';
import './productFilter.css'
// import {AiOutlineCheck} from 'react-icons/ai';
function ProductFilter(props) {
    const { products, setProductsSnapshot } = props;

    const [result, setResult] = useState(products)
    
    const dataSelOptions = [
        {
            id: 1,
            value: "Đề cử"
        },
        {
            id: 2,
            value: "Bán chạy"
        },
        {
            id: 3,
            value: "Giá tăng dần"
        },
        {
            id: 4,
            value: "Giảm dần"
        },
        {
            id: 5,
            value: "Lượt yêu thích"
        },
    ]
    console.log('result',result)

    const handleFilterSort = (options) => {
        const resetResult = [];
        switch (options) {
            case "Đề cử":
                setResult([...result.sort((a, b) => a.sale_percent - b.sale_percent).reverse()]);
                break;
            case "Bán chạy":
                setResult(resetResult);
                setResult([...result.sort((a, b) => a.sold - b.sold)]);
                break;
            case "Giá tăng dần":
                setResult([...result.sort((a, b) => a.sale_price_min - b.sale_price_min)]);
                break;
            case "Giảm dần":
                setResult([...result.sort((a, b) => a.sale_price_min - b.sale_price_min).reverse()]);
                break;
            case "Lượt yêu thích":
                setResult([...result.sort((a, b) => a.rated.total - b.rated.total).reverse()]);
                break;
        }
    }

    useEffect(() => {
        setResult(products);
    }, [products]);

    useEffect(() => {

        setProductsSnapshot(result);
    }, [result]);

    return (
        <div className='product-filter'>
            <label htmlFor="filter">Sắp xếp theo:</label>
            <select
                name="filter"
                id="filter"
                onChange={(e) => {
                    handleFilterSort(e.target.value);
                }}
            >
                <option value="">--Tùy chọn--</option>
                {dataSelOptions.map((dataSeloption,index) => {
                    return (
                        <option
                            value={dataSeloption?.value}
                            key={index}
                        >
                            {dataSeloption.value}
                        </option>
                    )
                })}
            </select>
        </div>
    );
}

export default ProductFilter;