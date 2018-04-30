let form = document.getElementById("urlForm")

let qrContainer = document.getElementById("qrContainer")

let qrGenerator = new QRCode(document.getElementById("qr"), {
    width: 256,
    height: 256,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.M
})

function onUrlFormSubmit() {
    let url = document.getElementById("url").value
    
    if (url.length == 0) {
        return false
    }

    qrContainer.style.display = "block"
    
    qrGenerator.clear()
    qrGenerator.makeCode(getUrlConfig(url))

    qrContainer.scrollIntoView()

    return false
}

function getUrlConfig(root) {
    return `{"api":"${root}/_/api/","storage":"${root}/_/storage/api","kyc":"http://example.com","terms":"https://demo.tokend.io/terms"}`
}

form.onsubmit = onUrlFormSubmit