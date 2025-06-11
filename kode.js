console.log("Hello World!");

const endpoint = "http://192.168.1.5";

function setAtas()
{
    fetch(endpoint + "/atas", {
        method: "POST"
    }).then(reponse=> reponse.text()).then(result => console.log(result))
}

function getAtas()
{
    fetch(endpoint + "/atas", {
        method: "GET"
    }).then(reponse=> reponse.text()).then(result => {console.log(result)})
}

function setBawah()
{
    fetch(endpoint + "/bawah", {
        method: "POST"
    }).then(reponse=> reponse.text()).then(result => console.log(result))
}

function getBawah()
{
    fetch(endpoint + "/bawah", {
        method: "GET"
    }).then(reponse=> reponse.text()).then(result => console.log(result))
}

getAtas();
getBawah();
