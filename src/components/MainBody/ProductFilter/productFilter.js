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

    const OPTIONS = {
        RECOMMENDATION: "Đề cử",
        SELLING : "Bán chạy",
        LOWEST_PRICE: "Giá tăng dần",
        HIGHTEST_PRICE: "Giảm dần",
        HIGHTEST_FAVORITE: "Lượt yêu thích",

    }
    const handleFilterSort = (options) => {
        const resetResult = [];
        switch (options) {
            case "Đề cử":
                setResult([...result.sort((a, b) => a.sale_percent - b.sale_percent).reverse()]);
                break;
            case "Bán chạy":
                setResult(resetResult);
                setResult([...result.sort((a, b) => a.sold - b.sold).reverse()]);
                break;
            case "Giá tăng dần":
                setResult([...result.sort((a, b) => a.sale_price_min - b.sale_price_min)]);
                break;
            case "Giảm dần":
                setResult([...result.sort((a, b) => a.sale_price_min - b.sale_price_min).reverse()]);
                break;
            case "Lượt yêu thích":
                setResult([...result.sort((a, b) => a.rated.star - b.rated.star).reverse()]);
                break;
        }
        // const result = new Map();
        // options === OPTIONS.RECOMMENDATION ? result= result.set(OPTIONS.RECOMMENDATION,result.sort((a, b) => a.sale_percent - b.sale_percent).reverse()): null;
        // options === OPTIONS.SELLING ? result= result.set(OPTIONS.SELLING,result.sort((a, b) => a.sold - b.sold).reverse()): null;
        // options === OPTIONS.LOWEST_PRICE ? result= result.set(OPTIONS.LOWEST_PRICE,result.sort((a, b) => a.sale_price_min - b.sale_price_min)): null;
        // options === OPTIONS.HIGHTEST_PRICE ? result= result.set(OPTIONS.HIGHTEST_PRICE,result.sort((a, b) => a.sale_price_min - b.sale_price_min).reverse()): null;
        // options === OPTIONS.HIGHTEST_FAVORITE ? result= result.set(OPTIONS.HIGHTEST_FAVORITE,result.sort((a, b) => a.rated.star - b.rated.star).reverse()): null;
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