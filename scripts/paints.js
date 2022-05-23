import { getPaintColor, setPaintColor } from "./database.js"

const colors = getPaintColor()

//the getter function is then imported, invoked and then assigned to a new variable so that the paint.js file has access to the database.js. 
//we then create a new function which creates a new html variable which is set equal to the h2 header for this paint section.
// we then set the html variable equal to the the <select> tag which has an id of "paint" which the change event listener listens for.
// next we set the html variable equal to the <option> which contains the value for the first item displayed in the drop down menu "Select a paint color"
//we then run the map function for each color in the new colors array that we got from the database. this map returns the <option tag> and uses dot notation to assign the color.id to the value. inside the tag we display the color.color property to display each color name in the drop down menu and we assign each colors string that is returned to the variable arrayOfPaints.
//next we assign the value of arrayOfPaints.join to the html which combines everything into one big string for each color.
//lastly we return our html for this paint section.
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

/*
1. This change event listener accesses the entire document and 
listens for something to be changed that has the id equal to paint.
 
2. Once this occurs we use the id from whatever paint was 
collected to setPaintId() (this function is back in our database.js).
*/
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paint") {
            setPaintColor(parseInt(changeEvent.target.value))
        }
    }
)

