import { getPaintColor, setPaintColor } from "./database.js"

const colors = getPaintColor()

export const Paints = () => {
    let html = "<h2>Paints</h2>"

    html += '<select id="paint">'
    html += '<option value="0">Select a paint color</option>'

    const arrayOfPaints = colors.map((color) => {
        return `<option value="${color.id}">${color.color}</option>`
    }
    )

    html += arrayOfPaints.join("")
    html += "</select>"
    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paint") {
            setPaintColor(parseInt(changeEvent.target.value))
        }
    }
)

