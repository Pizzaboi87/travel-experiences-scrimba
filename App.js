import React from 'react'
import Card from './Card.js'
import Header from './Header.js'
import data from './data.js'

const App = () => {
    
    const city = data.map(card => {
        return (
                <Card 
                key = {card.id}
                card = {card}
                />
        )
    })
    
    return (
        <div>
            <Header />
            {city}
        </div>
    )
}

export default App;