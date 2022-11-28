import './listDetail.css'
import { useEffect, useState } from 'react'

function ListDetail(props) {
    const { dataDetail, attributeKey, handleFilterProducts } = props;
    console.log('ListDetail:')

    function formatPrice(number) {
        if (number / 100000 > 1) {
            return (`${number / 1000}K`)
        }
        return number
    }
    const handleRangePrice = ((gtprice, ltprice) => {
        switch (true) {
            case (gtprice === -1):
                return (`Dưới ${formatPrice(ltprice)}`)
            case (ltprice === -1):
                return (`Trên ${formatPrice(gtprice)}`)
            case (gtprice !== -1 && ltprice !== -1):
                return (`${formatPrice(gtprice)} - ${formatPrice(ltprice)}`)
        }
    })

    if (!dataDetail) {
        return null;
    }

    return (
        <ul className='list-option'>
            {dataDetail.map((item, index) => {
                return (
                    <li className='option-item' key={index} >
                        <input
                            type="checkbox"
                            onChange={(e) => handleFilterProducts(e, item, attributeKey)}
                        />
                        {item?.option_name ? item?.option_name : null}
                        {item?.gtprice ? handleRangePrice(item?.gtprice, item?.ltprice) : null}
                        {item?.color_hexRgb ? <td className='color-option' style={{ background: `#${item?.color_hexRgb}` }} title={item?.color_name}></td> : null}
                        {item?.image ? <img className='color-option' title={item?.color_name} src={item?.image} /> : null}
                    </li>
                )
            })}
        </ul>
    );
}

export { ListDetail }