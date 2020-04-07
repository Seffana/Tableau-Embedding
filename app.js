console.log("Hello, from B2S!");
let viz;
const vizContainer = document.getElementById("vizContainer");
const url = "https://public.tableau.com/views/HansZimmerSongs/HansZimmerSongs";
const options = {
  device: "desktop",
};
const exportToPDF = document.getElementById("exportToPDF");
const exportToImage = document.getElementById("exportToImage");
function initViz() {
  console.log("Hello, DS12!");
  viz = new tableau.Viz(vizContainer, url, options);
}

//this is where people would click on the pdf button
exportToPDF.addEventListener("click", function () {
  console.log("Hello, from my export to PDF button!");
  viz.showExportPDFDialog();
});

//this is where people would click on the Image button
exportToImage.addEventListener("click", function () {
  console.log("Hello, from my export to Image button!");
  viz.showExportImageDialog();
});

document.addEventListener("DOMContentLoaded", initViz());
