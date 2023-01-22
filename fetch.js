function setErrorDisplay(loaderElm, allNamesElm, errorMessageElm) {
    loaderElm.style.display = "none"
    allNamesElm.style.display = "none"
    errorMessageElm.style.display = "block"
}

let allNamesElm = document.getElementById("allNames")
let loaderElm = document.getElementById("loader")
let errorMessageElm = document.getElementById("errorMessage")

fetch("https://api.apispreadsheets.com/data/fkB8dNLc0Znfg5FF/").then(res => {
    if (res.status === 200) {
        res.json().then(data => {
            const yourData = data["data"]
            for (let i = 0; i < yourData.length; i++) {
                let rowInfo = yourData[i]

                let rowInfoDiv = document.createElement("div")
                rowInfoDiv.classList.add("name-row")

				let rowId = document.createElement("h4")
                let rowIdNode = document.createTextNode(rowInfo["id"])
                rowId.appendChild(rowIdNode)
                rowId.classList.add("id")

                let rowName = document.createElement("p")
                let rowNameNode = document.createTextNode(rowInfo["name"])
                rowName.appendChild(rowNameNode)
                rowName.classList.add("name")

                let rowLocation = document.createElement("p")
                let rowLocationNode = document.createTextNode(rowInfo["location"])
                rowLocation.appendChild(rowLocationNode)
                rowLocation.classList.add("location")

				let rowStars = document.createElement("p")
                let rowStarsNode = document.createTextNode(rowInfo["stars"])
                rowStars.appendChild(rowStarsNode)
                rowStars.classList.add("stars")

                rowInfoDiv.appendChild(rowId)
				rowInfoDiv.appendChild(rowName)
                rowInfoDiv.appendChild(rowLocation)
				rowInfoDiv.appendChild(rowStars)

                allNamesElm.appendChild(rowInfoDiv)
}
            loaderElm.style.display = "none"
            allNamesElm.style.display = "block"
            errorMessageElm.style.display = "none"
        }).catch(err => {
            setErrorDisplay(loaderElm, allNamesElm, errorMessageElm)
})} else {
            setErrorDisplay(loaderElm, allNamesElm, errorMessageElm)
}}).catch(err => {
            setErrorDisplay(loaderElm, allNamesElm, errorMessageElm)
})
