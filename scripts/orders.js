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


export const Orders = () => {
    const orders = getOrders()
    let html = "<ul>"

    const listItems = orders.map(buildOrder)

    html += listItems.join("")
    html += "</ul>"

    return html
}
