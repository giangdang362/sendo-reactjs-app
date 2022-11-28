import './mainMenu.css'
import { useEffect, useState } from 'react';
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai'
import { ListDetail } from './listDetail.js'

function MainMenu(props) {

    const {handleFilterProducts} = props;
    console.log('MainMenu')

    const [options, setOptions] = useState([])
    useEffect(() => {
        fetch('http://localhost:8000/options')
            .then(res => res.json())
            .then(options => {console.log(options);setOptions(options)})
            console.log('endUseff')
    }, [])

    const [show, setShow] = useState(true)

    return (
        <div className='MainOption'>
            {console.log('MainOption')}
            {options.map((option, index) => {
                // su dung Detructering de lay [key] la attribute_value trong obj option
                const { attribute_value, attribute_key } = option;
                
                return (
                    <div id='wrapperListOption' key={attribute_key}>
                        {console.log('Helo wrapperListOption')}
                        {option.attribute_name ?
                            <>
                                <div className='list-type' key={index}>
                                    {option.attribute_name}
                                    <div onClick={() => setShow(!show)} className='dropdown-icon' key={option.type}>
                                        <AiOutlineDown />
                                    </div>
                                </div>
                                <div className='showData'>
                                    {show && <ListDetail handleFilterProducts={handleFilterProducts} attributeKey={attribute_key} dataDetail={attribute_value}/>}
                                </div>
                            </> : null}
                    </div>
                )
            })}
        </div>
    );
}

export default MainMenu