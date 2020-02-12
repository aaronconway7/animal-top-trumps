import React, { useContext } from 'react'

// Context
import { CardsContext } from '../global-state'

import { StyledCard } from '../constants/styles'

const Card = ({ data: card }) => {
    const { removeCard, setEditingCard } = useContext(CardsContext)
    return (
    <StyledCard>
        {card.extinct && <span className={`extinct-status`}>extinct</span>}
        <div>
            <h3 className={`name`}>{card.name}</h3>
            <span className={`type`}>{card.type}</span>
        </div>
        <span className={`diet`}>
            {card.carnivore ? `Carnivore` : `Herbivore`}
        </span>
        <div className={`buttons`}>
            <button onClick={() => removeCard(card.id)}><span role={`img`} aria-label={`Remove`}>🗑️</span></button>
            <button onClick={() => setEditingCard(card.id)}><span role={`img`} aria-label={`Edit`}>✏️</span></button>
        </div>
    </StyledCard>
    )
}

export default Card
