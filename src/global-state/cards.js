import React, { useState, createContext } from 'react'
import uuid from 'uuid/v4'

import { DEFAULT_CARDS } from '../constants/data'

export const CardsContext = createContext()

export const CardsProvider = props => {
    const [cards, setCards] = useState(DEFAULT_CARDS)
    const [editingCard, setEditingCard] = useState(null)

    const removeCard = (id) => {
        setCards(cards.filter(card => card.id !== id))
    }

    const addCard = (card) => {
        setCards([...cards, {id: uuid(), ...card}])
    }

    const updateCard = (cardToUpdate) => {
        const cardIndex = cards.findIndex(card => card.id === cardToUpdate.id)
        const cardsCopy = cards
        cardsCopy[cardIndex] = cardToUpdate
        setCards(cardsCopy)
        setEditingCard(null)
    }

    return (
        <CardsContext.Provider
            value={{
                cards,
                setCards,
                removeCard,
                addCard,
                updateCard,
                editingCard,
                setEditingCard
            }}
        >
            {props.children}
        </CardsContext.Provider>
    )
}
