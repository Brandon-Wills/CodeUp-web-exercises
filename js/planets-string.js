


(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    //var planetsArray = ["Mercury", "Venus", "Earth", "Mars", "Jupiter","Saturn", "Uranus", "Neptune",]
    var planetsArray = planetsString.split("|")
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = ["Mercury", "Venus", "Earth", "Mars", "Jupiter","Saturn", "Uranus", "Neptune",]
    var planetBreak = planetsArray.join("<br>")
    var planetList = planetsArray.join("<li>")
    var planetUnderLined = planetsArray.join("<ul>")

    console.log(planetsString);
    console.log(planetBreak);
    console.log(planetList);
    console.log(planetUnderLined);


})();
