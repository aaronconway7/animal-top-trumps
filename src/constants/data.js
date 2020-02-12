import uuid from 'uuid/v4'

export const DEFAULT_CARDS = [
    {
        id: uuid(),
        name: `Lion`,
        type: `mammal`,
        carnivore: true,
        extinct: false
    },
    {
        id: uuid(),
        name: `Snake`,
        type: `reptile`,
        carnivore: true,
        extinct: false
    },
    {
        id: uuid(),
        name: `Sheep`,
        type: `mammal`,
        carnivore: false,
        extinct: false
    },
    {
        id: uuid(),
        name: `Frog`,
        type: `amphibious`,
        carnivore: true,
        extinct: false
    },
    {
        id: uuid(),
        name: `Red Gazelle`,
        type: `mammal`,
        carnivore: false,
        extinct: true
    }
]