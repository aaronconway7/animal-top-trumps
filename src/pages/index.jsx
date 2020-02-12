import React, { useContext } from 'react'
import styled from 'styled-components'

// Context
import { CardsContext } from '../global-state'

// Components
import Card from '../components/Card'
import EditCard from '../components/EditCard'

// Styled Components
const StyledIndexPage = styled.div`
    display: grid;
    grid-gap: 50px;
    width: 80%;
    margin: 0 auto;
    padding: 100px 0px;

    .title {
        text-align: center;
    }

    .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        & > * {
            margin-right: 10px;
            margin-bottom: 10px;

            &:last-child {
                margin-right: 0px;
            }
        }
    }

    .add-card-btn {
        padding: 10px;
    }
`

const IndexPage = () => {
    const { cards, editingCard } = useContext(CardsContext)

    return (
        <StyledIndexPage>
            <h1 className={`title`}>Animal Top Trumps <span role={`img`} aria-label={`Cards`}>📇</span></h1>
            <div className={`cards`}>
                {cards.map(card =>
                    editingCard === card.id ? (
                        <EditCard data={card} editing={true} key={card.id} />
                    ) : (
                        <Card data={card} key={card.id} />
                    )
                )}
                <EditCard />
            </div>
        </StyledIndexPage>
    )
}

export default IndexPage
