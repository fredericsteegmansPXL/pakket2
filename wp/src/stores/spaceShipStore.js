import { defineStore } from 'pinia'

export const spaceShipStore = defineStore('spaceShipStore', {
    state: () => {
        return {
            ships: []
        }
    },

    actions: {
        addShip(item) {
            this.ships.push(item)
        },
        removeShip(item) {
            this.ships.splice(this.ships.indexOf(item), 1)
        },
        clearStore() {
            this.ships = []
        }

    }
})