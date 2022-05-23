import { getOrders, getPaintColor, getInteriors, getTechnologies, getWheels } from "./database.js"

const buildOrder = (order) => {
    const colors = getPaintColor();
    const interiors = getInteriors();
    const technologies = getTechnologies();
    const wheels = getWheels();



    const foundPaint = colors.find(
        (color) => {
            return color.id === order.paintColorId
        }
    )
    const totalCostOfPaint = foundPaint.price

    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const totalCostOfInterior = foundInterior.price

    const foundTechnology = technologies.find(
        (tech) => {
            return tech.id === order.technologyId
        }
    )

    const totalCostOfTechnology = foundTechnology.price

    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelsId
        }
    )

    const totalCostOfWheels = foundWheels.price

    const totalCost = totalCostOfPaint + totalCostOfInterior + totalCostOfTechnology + totalCostOfWheels

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>Car Order #${order.id} contains ${foundPaint.color} paint, ${foundTechnology.tech} for Technology, ${foundInterior.type} interior and ${foundWheels.type} wheels. The total cost is ${costString}.</li>`
}

/*
1. here we create an exportable function which starts out by invoking 
the getOrders function which created a new array for the customCars array located in the database
and then assigning this new array to the variable orders.

2. we then create a new variable (html) and set it equal to an open "<ul>" tag
we then use the map function on the new orders array to create an even newer array with 
buildOrder as an argument (this makes it so every order goes through the build order function which will
eventually return a string to be displayed under the custom orders section for each 
order) and assign its return value to listItems.

3. next we use .join to create one large string for every order and we then add this and set it equal to 
the html. 
4. lastly we close the "</ul>" tag and then return the html 
*/
export const Orders = () => {
    const orders = getOrders()
    let html = "<ul>"

    const listItems = orders.map(buildOrder)

    html += listItems.join("")
    html += "</ul>"

    return html
}
