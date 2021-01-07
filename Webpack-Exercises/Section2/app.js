import Person from './components/person';
import React from 'react';
import { render } from 'react-dom'

class App extends React.Component {
    render() {
        
        return (
            <div>
                <Person name='Bamidele Victor' age='30' hobbies={["Reading", "Tennis", "Clubing"]} />
                <Person name='Adeyemo David' age='18' hobbies={["Farming", "Watching Movie", "Traveling"]} />
                <Person name='Ogunmola Akinwumi' age='25' hobbies={["Shopping", "Surfing", "Singing"]} />
            </div>
        )
    }
}

render(<App />, document.getElementById('app'));