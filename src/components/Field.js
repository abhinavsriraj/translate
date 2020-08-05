import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
    static contextType = LanguageContext
    render(){
        const text = this.context === 'english' ? 'Name' : 'Naam'
        return(
            <div>
                <div className='ui field'>{text}</div>
                <input/>
            </div>
        )
    }
}

export default Field