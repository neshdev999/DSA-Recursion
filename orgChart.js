const orgChart = [
    "Zuckerberg", "Schroepfer", "Bosworth", "Steve", "Kyle", "Andra", "Zhao", "Richie", "Sofia", "Jen", "Schrage", "VanDyck", "Sabrina", "Michelle", "Josh", "Swain", "Blanch", "Tom", "Joe",
    "Sandberg", "Goler", "Eddie", "Julie", "Annie", "Hernandez", "Rowi", "Inga", "Morgan", "Moissinac", "Amy", "Chuck", "Vinni", "Kelley", "Eric", "Ana", "Wes"
];
let storageString = "";
let tracker = orgChart.length;
let counter = 0;
const createOrgChart = function(orgChart) {
    if (counter >= tracker) {
        return 1;
    } else if (counter === 27) {
        return "\t\t" + orgChart[counter = counter + 1] + "\n" + "\t\t\t" + orgChart[counter = counter + 1] + "\n" + "\t\t\t" + orgChart[counter = counter + 1] + "\n" + "\t\t\t" + orgChart[counter = counter + 1] + "\n" + "\t\t" + orgChart[counter = counter + 1] + "\n" + "\t\t\t" + orgChart[counter = counter + 1] + "\n" + "\t\t\t" + orgChart[counter = counter + 1] + "\n" + "\t\t\t" + orgChart[counter = counter + 1] + "\n";
    } else {
        storageString = "\t" + orgChart[counter = counter + 1] + "\n" + "\t\t" + orgChart[counter = counter + 1] + "\n" + "\t\t\t" + orgChart[counter = counter + 1] + "\n" + "\t\t\t" + orgChart[counter = counter + 1] + "\n" + "\t\t\t" + orgChart[counter = counter + 1] + "\n" + "\t\t" + orgChart[counter = counter + 1] + "\n" + "\t\t\t" + orgChart[counter = counter + 1] + "\n" + "\t\t\t" + orgChart[counter = counter + 1] + "\n" + "\t\t\t" + orgChart[counter = counter + 1] + "\n";
        return storageString + createOrgChart(orgChart);
    }
}

let output = "Zuckerberg" + "\n" + createOrgChart(orgChart);
console.log(output);