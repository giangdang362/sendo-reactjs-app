import './mainMenu.css'
import { useEffect, useState } from 'react';
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai'
import { ListDetail } from './listDetail.js'

function MainMenu(props) {

    const {handleFilterProducts} = props;

    
    const [options, setOptions] = useState([])
    useEffect(() => {
        fetch('http://localhost:8000/options')
            .then(res => res.json())
            .then(options => setOptions(options))
    }, [])

    const handleDropdown = (index) => {
        const optionBlock = document.getElementsByClassName(`showData-${index}`)[0];
        const btnUp = document.getElementById(`up-icon-${index}`);
        const btnDown = document.getElementById(`down-icon-${index}`);
        

        optionBlock.classList.toggle('noActive');
        btnUp.classList.toggle('noActive');
        btnDown.classList.toggle('noActive');
        
    }

    return (
        <div className='MainOption'>
            {options.map((option, index) => {
                // su dung Detructering de lay [key] la attribute_value trong obj option
                const { attribute_value, attribute_key } = option;
                
                return (
                    <div id = {`wrapperListOption-${index}`} key={attribute_key}>
                        {option.attribute_name ?
                            <>
                                <div className='list-type' key={index}>
                                    <div>{option.attribute_name}</div>
                                    <div onClick={() => handleDropdown(index)} id={`dropdown-icon-${index}`} className='dropdown-icon' key={option.type}>
                                        <AiOutlineDown style={{marginTop:'2px'}} id={`down-icon-${index}`} className='noActive'/>
                                        <AiOutlineUp style={{marginTop:'2px'}} id={`up-icon-${index}`} />
                                    </div>
                                
                                </div>
                                <div className={`showData showData-${index}`}>
                                    <ListDetail  handleFilterProducts={handleFilterProducts} attributeKey={attribute_key} dataDetail={attribute_value}/>
                                </div>
                            </> : null}
                    </div>
                )
            })}
        </div>
    );
}

export default MainMenu