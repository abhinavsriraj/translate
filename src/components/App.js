import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';

class App extends React.Component {
    state = {language: ''}

    onLanguageChange = (lang) => {
        this.setState({language: lang})
    }

    render() {
        return(
            <div className="ui container">
                <div>
                    Select a Language:
                    <i className="flag us" onClick={()=> this.onLanguageChange('english')} />
                    <i className= "flag india" onClick={()=> this.onLanguageChange('hindi')} />
                </div>
                <LanguageContext.Provider value = {this.state.language}>
                    <UserCreate/>
                </LanguageContext.Provider>
            </div>
        )
    }
}

export default App