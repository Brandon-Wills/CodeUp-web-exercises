(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 5,

        getArea: function (radius) {
        let area = Math.PI * (radius * radius);
        return area;
        console.log(area1);
        console.log(Math.round(area*100)/100);
    },
        logInfo: function (doRounding) {
            // TODO: complete this method.
           if (doRounding === true){
               console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(this.getArea()));
           }else {
               console.log("Area of a circle with radius: " + this.radius + ", is: " + Number(this.getArea()));
           }
        }
    };
console.log("testing get area: " + circle.getArea(circle.radius));
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
