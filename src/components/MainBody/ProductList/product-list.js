import { useEffect, useState } from 'react';
import './product-list.css'
import { AiFillStar } from 'react-icons/ai'

function ProductList(props) {

    const { products } = props;

    function formatPrice(number) {
        let str = number.toString();
        return str.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + '.')) + prev
        })
    }

    function checkType(type, data) {
        const result = data?.find((value) => {
            return value.type === type
        })
        return result?.icon ?? null
    }

    return (
        <div className='product-list'>
            {products.map((product) => {
                return (
                    <div className='product-item' key={product.id} id={product.id}>
                        <a href="#" >
                            <div className='product'>
                                <div className='image-zone'>
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <div className='content-zone'>
                                    <div id='tag-discount'>
                                        {checkType('shipping_discount', product?.package_discount) ? <img src={checkType('shipping_discount', product?.package_discount)} alt="" /> : null}
                                        {checkType('sale_event', product?.package_discount) ? <img src={checkType('sale_event', product?.package_discount)} alt="" /> : null}
                                    </div>
                                    <span className='product-title'>
                                        {product.shop.badge_urls.shop_plus ? <img src={product.shop.badge_urls.shop_plus} alt="" /> : null}
                                        {product.name}
                                    </span>
                                    <div className='product-price'>
                                        <span>
                                            {formatPrice(product.sale_price_min)}đ
                                        </span>
                                        <div className='discount-price'>
                                            <span id='default-price'>
                                                {product.default_price_min === product.sale_price_min ? null : product.default_price_min}
                                            </span>
                                            <span id='sale-percent'>
                                                {product.sale_percent ? '-' : null}
                                                {product.sale_percent}
                                                {product.sale_percent ? '%' : null}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='installment'>
                                        <div className='installment-icon'>
                                            <img src={checkType('pay_later', product?.package_discount)} alt="" />
                                        </div>
                                        {product?.package_discount?.[0].icon ? <span>Trả góp Kredivo</span> : null}
                                    </div>
                                    <div className='sold-rate'>
                                        <div id='sold'>
                                            <span style={{ marginRight: '5px' }}>
                                                Đã bán
                                            </span>
                                            <span>{product.sold ? product.sold : 0}</span>
                                        </div>
                                        <div id='rate'>
                                            <span id='icon'>
                                                <AiFillStar id='star-icon' />
                                            </span>
                                            <span id='rate-score' style={{ marginLeft: '5px' }}>
                                                {product.rated.star}/5
                                            </span>
                                            <span style={{ marginLeft: '5px', color: '#6f787e' }}>({product.rated.total})</span>
                                        </div>
                                    </div>
                                    <div style={{ display: 'block', color: '#3f4b53', fontSize: '14px', fontWeight: '400' }}>
                                        {product?.shop?.ware_house_region_name}
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                )
            })}
        </div>
    );
}

export default ProductList;