// this example is for eductional purposes, but it is not to work.
var imgElement = document.createElement("img");
imgElement.src = "image.png";
imgElement.alt = "My Image";
if (imgElement.complete) {
    console.log("Image dimensions: ".concat(imgElement.naturalWidth, "x").concat(imgElement.naturalHeight));
}
else {
    imgElement.addEventListener("load", function () {
        console.log("Image dimensions: ".concat(imgElement.naturalWidth, "x").concat(imgElement.naturalHeight));
    });
}
