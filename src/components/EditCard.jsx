import React, { useState, useContext } from 'react'
import styled from 'styled-components'

import { CardsContext } from '../global-state'

import { StyledCard } from '../constants/styles'

const StyledEditCard = styled(StyledCard)`
    box-shadow: none !important;
    border: 2px ${props => props.editing ? `solid` : `dotted`} black;
    opacity: ${props => props.editing ? `1` : `0.5`};
    grid-auto-rows: max-content;
    align-content: center;
    grid-gap: 20px;

    &:hover {
        opacity: 1;
    }

    .form-group {
        display: grid;
        grid-gap: 5px;

        &.checkbox {
            grid-auto-flow: column;
        }
    }
`

const DEFAULT_CARD = {
    extinct: false,
    name: ``,
    type: ``,
    carnivore: false,
}

const EditCard = ({ data = DEFAULT_CARD, editing = false }) => {
    const { addCard, updateCard } = useContext(CardsContext)
    const [card, setCard] = useState(data)

    const handleChange = e => {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        setCard({
            ...card,
            [name]: value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (editing) {
            updateCard(card)
        } else {
            addCard(card)
        }
        setCard(DEFAULT_CARD)
    }

    return (
        <form onSubmit={handleSubmit} className={`edit-card-form`}>
            <StyledEditCard editing={editing}>
                <div className={`form-group`}>
                    <label htmlFor={`edit-card-name`}>Name</label>
                    <input type={`text`} id={`edit-card-name`} name={`name`} value={card.name} placeholder={`e.g. Elephant`} onChange={handleChange} required />
                </div>
                <div className={`form-group`}>
                    <label htmlFor={`edit-card-type`}>Type</label>
                    <select name={`type`} id={`edit-card-type`} defaultValue={card.type} onBlur={handleChange} required>
                        <option value={``} disabled>Select...</option>
                        <option value={`mammal`}>mammal</option>
                        <option value={`reptile`}>reptile</option>
                        <option value={`fish`}>fish</option>
                        <option value={`amphibious`}>amphibious</option>
                    </select>
                </div>
                <div className={`form-group checkbox`}>
                    <label htmlFor={`edit-card-carnivore`}>Carnivore?</label>
                    <input type={`checkbox`} id={`edit-card-carnivore`} name={`carnivore`} checked={card.carnivore} onChange={handleChange} />
                </div>
                <div className={`form-group checkbox`}>
                    <label htmlFor={`edit-card-extinct`}>Extinct?</label>
                    <input type={`checkbox`} id={`edit-card-extinct`} name={`extinct`} checked={card.extinct} onChange={handleChange} />
                </div>
                <div className={`buttons`}>
                    <button type={`submit`} className={`submit-btn`}>{editing ? <span role={`img`} aria-label={`Save`}>💾</span> : <span role={`img`} aria-label={`Add`}>➕</span>}</button>
                </div>
            </StyledEditCard>
        </form>
    )
}

export default EditCard
