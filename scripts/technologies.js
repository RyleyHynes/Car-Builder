import { getTechnologies, setTechnology } from "./database.js"

const technologies = getTechnologies()

export const Technologies = () => {
    let html = "<h2>Technologies</h2>"

    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</option>'

    const arrayOfTechnologies = technologies.map((tech) => {
        return `<option value="${tech.id}">${tech.package}</option>`
    }
    )

    html += arrayOfTechnologies.join("")
    html += "</select>"
    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "tech") {
            setTechnology(parseInt(changeEvent.target.value))
        }
    }
)
