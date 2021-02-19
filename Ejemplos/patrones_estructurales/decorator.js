// A vehicle constructor
function Vehicle( vehicleType ){
    this.vehicleType = vehicleType || "car";
    this.model = "default";
    this.license = "00000-000";
 }
 // Test instance for a basic vehicle
 var testInstance = new Vehicle( "car" );
 console.log( testInstance ); // vehicle: car, model:default, license: 00000-000
 
 var truck = new Vehicle( "truck" );

 truck.setModel = function( modelName ){
    this.model = modelName;
 };
 truck.setColor = function( color ){
    this.color = color;
 };
 // Test the value setters and value assignment works correctly
 truck.setModel( "CAT" );
 truck.setColor( "blue" );
 console.log( truck );// vehicle:truck, model:CAT, color: blue


 // Demonstrate "vehicle" is still unaltered
 var secondInstance = new Vehicle( "car" );
 console.log( secondInstance ); //vehicle: car, model:default, license: 00000-000
 