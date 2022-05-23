//Create database with paintColor, interior, technology, wheels. and custom order. Refer to erd
const database = {
    paintColors: [
        {
            id: 1,
            color: "Silver",
            price: 100.00
        },
        {
            id: 2,
            color: "Midnight Blue",
            price: 150.00
        },
        {
            id: 3,
            color: "Firebrick Red",
            price: 250.00
        },
        {
            id: 4,
            color: "Spring Green",
            price: 225.00
        }
    ],
    interiors: [
        {
            id: 1,
            type: "Beige Fabric",
            price: 100.00
        },
        {
            id: 2,
            type: "Charcoal Fabric",
            price: 133.00
        },
        {
            id: 3,
            type: "White Leather",
            price: 250.00
        },
        {
            id: 4,
            type: "Black Leather",
            price: 275.00
        },
    ],
    technologies: [
        {
            id: 1,
            package: "Basic Package (basic sound system)",
            price: 335.00
        },
        {
            id: 2,
            package: "Navigation Package (includes integrated navigation controls)",
            price: 380.00
        },
        {
            id: 3,
            package: "Visibility Package (includes side and rear cameras)",
            price: 400.00
        },
        {
            id: 4,
            package: "Ultra Package (includes navigation and visibility packages)",
            price: 600.00
        },

    ],
    wheels: [
        {
            id: 1,
            type: "17-inch Pair Radial",
            price: 100.00
        },
        {
            id: 2,
            type: "17-inch Pair Radial Black",
            price: 200.00
        },
        {
            id: 3,
            type: "18-inch Pair Spoke Silver",
            price: 300.00
        },
        {
            id: 4,
            type: "18-inch Pair Spoke Black",
            price: 400.00
        },
    ],
    customCars: [
        {
            id: 1,
            paintColorId: 2,
            interiorId: 3,
            technologyId: 4,
            wheelsId: 1
        }
    ],
    orderBuilder: {}
}

//create get functions for the 5 arrays above that uses map to create a new array for the various arguments
// these functions access the database with dot notation and the map method to return a new array of each argument
export const getPaintColor = () => {
    return database.paintColors.map(color => ({ ...color }))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({ ...interior }))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({ ...technology }))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({ ...wheel }))
}

export const getOrders = () => {
    return database.customCars.map(order => ({ ...order }))
}

//use setter functions to put the data in the orderBuilder object
export const setPaintColor = (id) => {
    database.orderBuilder.paintColorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
}


export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = { ...database.orderBuilder }

    // Add a new primary key to the object
    const lastIndex = database.customCars.length - 1
    newOrder.id = database.customCars[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customCars.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}