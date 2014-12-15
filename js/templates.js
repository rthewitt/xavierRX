define(function(){

  this["JST"] = this["JST"] || {};

  this["JST"]["chair-template"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<div id="chair-side" class="mxrx">\n    <form>\n        <div class="tmp-internal"><h3>Side Measures</h3></div>\n        <label for="seat-back-height">Seat Back Height</label>\n        <input type="text" id="seat-back-height" name="seatBackHeight" value="' +((__t = ( seatBackHeight )) == null ? '' : __t) +'" />\n        <label for="seat-depth">Seat Depth</label>\n        <select id="seat-depth" name="seatDepth">\n            '; _.each([12, 13, 14, 15, 16, 17, 18, 19], function(num) { ;__p += '\n            <option value="' +((__t = ( num )) == null ? '' : __t) +'" '; if(seatDepth === num) print('selected') ;__p += ' >' +((__t = ( num )) == null ? '' : __t) +'"</option>\n            '; }); ;__p += '\n            <option value="20" disabled >20"</option>\n        </select>\n        <label for="foam-height">Foam Height</label>\n        <select id="foam-height" name="foamHeight">\n            <option value="0.4" '; if(foamHeight === 0.4) print('selected') ;__p += ' >No Cushion</option>\n            <option value="2" '; if(foamHeight === 2) print('selected') ;__p += ' >2" Cushion</option>\n        </select>\n        <label for="seat-back">Seat Back</label>\n        <select id="seat-back" name="seatBackWidth">\n            <option value="0.4" '; if(seatBackWidth === 0.4) print('selected') ;__p += ' >No Cushion</option>\n            <option value="2" '; if(seatBackWidth === 2) print('selected') ;__p += ' >2" Cushion</option>\n        </select>\n        <label for="wheel-diameter">Wheel Diameter</label>\n        <select id="wheel-diameter" name="wheelDiameter">\n            '; _.each([20, 22, 24, 25, 26], function(num) { ;__p += '\n            <option value="' +((__t = ( num )) == null ? '' : __t) +'" '; if(wheelDiameter === num) print('selected') ;__p += ' >' +((__t = ( num )) == null ? '' : __t) +'"</option>\n            '; }); ;__p += '\n        </select>\n        <!-- This is actually COG -->\n        <label for="axle-distance">Axle Distance</label>\n        <select id="axle-distance" name="axleDistance">\n            <option value="0.0" disabled>0"</option>\n            <option value="0.5" disabled>0.5"</option>\n            '; _.each([1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0], function(num) { ;__p += '\n            <option value="' +((__t = ( num )) == null ? '' : __t) +'" '; if(axleDistance === num) print('selected') ;__p += ' >' +((__t = ( num )) == null ? '' : __t) +'"</option>\n            '; }); ;__p += '\n        </select>\n        <label for="front-wheel-pin">Front Wheel Pin</label>\n        <select id="front-wheel-pin" name="frontWheelPin">\n            '; _.each([1, 2, 3], function(num) { ;__p += '\n            <option value="' +((__t = ( num )) == null ? '' : __t) +'" '; if(frontWheelPin === num) print('selected') ;__p += ' >' +((__t = ( num )) == null ? '' : __t) +'</option>\n            '; }); ;__p += '\n        </select>\n        <label for="ground-clr">Ground Clearance</label>\n        <input type="text" id="ground-clr" name="groundClr" value=\'' +((__t = ( groundClr )) == null ? '' : __t) +'"\' readonly />\n        <label for="dump">Dump</label>\n        <input type="text" id="dump" name="dump" value=\'' +((__t = ( dump )) == null ? '' : __t) +'"\' readonly />\n    </form>\n</div>\n<div id="chair-front" class="mxrx">\n    <form>\n        <div class="tmp-internal"><h3>Front Measures</h3></div>\n        <label for="seat-width">Seating Surface Width</label>\n        <select id="seat-width" name="seatWidth">\n            '; _.each([12, 13, 14, 15, 16, 17, 18, 19], function(num) { ;__p += '\n            <option value="' +((__t = ( num )) == null ? '' : __t) +'" '; if(seatWidth === num) print('selected') ;__p += ' >' +((__t = ( num )) == null ? '' : __t) +'"</option>\n            '; }); ;__p += '\n            <option value="20" disabled >20"</option>\n        </select>\n    </form>\n</div>\n';}return __p};

  this["JST"]["human-template"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div id="human-side" class="mxrx">\n    <div class="tmp-internal"><h3>Side Measures</h3></div>\n    <form>\n        <label for="upper-arm-length">Upper Arm Length</label>\n        <input type="text" id="upper-arm-length" name="upperArmLength" value="' +((__t = ( upperArmLength )) == null ? '' : __t) +'" />\n        <label for="lower-arm-length">Forearm Length</label>\n        <input type="text" id="lower-arm-length" name="lowerArmLength" value="' +((__t = ( lowerArmLength )) == null ? '' : __t) +'" />\n        <label for="torso-length">Torso Length</label>\n        <input type="text" id="torso-length" name="torsoLength" value="' +((__t = ( torsoLength )) == null ? '' : __t) +'" />\n        <label for="trunk-depth">Trunk Depth</label>\n        <input type="text" id="trunk-depth" name="trunkDepth" value="' +((__t = ( trunkDepth )) == null ? '' : __t) +'" />\n        <label for="contact-point">Forward Contact</label>\n        <input type="text" id="contact-point" name="contactPoint" value="' +((__t = ( contactPoint )) == null ? '' : __t) +'" />\n        <label for="thigh-depth">Thigh Depth</label>\n        <input type="text" id="upper-leg-length" name="upperLegLength" value="' +((__t = ( upperLegLength )) == null ? '' : __t) +'" />\n        <label for="lower-leg-length">Lower Leg Length</label>\n        <input type="text" id="lower-leg-length" name="lowerLegLength" value="' +((__t = ( lowerLegLength )) == null ? '' : __t) +'" />\n    </form>\n</div>\n<div id="human-front" class="mxrx">\n    <div class="tmp-internal"><h3>Front Measures</h3></div>\n    <form>\n        <label for="chest-width">Chest Width</label>\n        <input type="text" id="chest-width" name="chestWidth" value="' +((__t = ( chestWidth )) == null ? '' : __t) +'" />\n        <label for="hip-width">Hip Width</label>\n        <input type="text" id="hip-width" name="hipWidth" value="' +((__t = ( hipWidth )) == null ? '' : __t) +'" />\n    </form>\n</div>\n';}return __p};

  this["JST"]["summary-template"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<div id="summary-patient" class="mxrx">\n    <div class="tmp-internal"><h3>Patient</h3></div>\n    <label for="upper-arm-length">Upper Arm Length</label>\n    <span id="upper-arm-length" name="upperArmLength">' +((__t = ( person.upperArmLength )) == null ? '' : __t) +'"</span>\n    <label for="lower-arm-length">Forearm Length</label>\n    <span id="lower-arm-length" name="lowerArmLength">' +((__t = ( person.lowerArmLength )) == null ? '' : __t) +'"</span>\n    <label for="torso-length">Torso Length</label>\n    <span id="torso-length" name="torsoLength">' +((__t = ( person.torsoLength )) == null ? '' : __t) +'"</span>\n    <label for="trunk-depth">Trunk Depth</label>\n    <span id="trunk-depth" name="trunkDepth">' +((__t = ( person.trunkDepth )) == null ? '' : __t) +'"</span>\n    <label for="contact-point">Forward Contact</label>\n    <span id="contact-point" name="contactPoint">' +((__t = ( person.contactPoint )) == null ? '' : __t) +'"</span>\n    <label for="thigh-depth">Thigh Depth</label>\n    <span id="upper-leg-length" name="upperLegLength">' +((__t = ( person.upperLegLength )) == null ? '' : __t) +'"</span>\n    <label for="lower-leg-length">Lower Leg Length</label>\n    <span id="lower-leg-length" name="lowerLegLength">' +((__t = ( person.lowerLegLength )) == null ? '' : __t) +'"</span>\n    <label for="chest-width">Chest Width</label>\n    <span id="chest-width" name="chestWidth">' +((__t = ( person.chestWidth )) == null ? '' : __t) +'"</span>\n    <label for="hip-width">Hip Width</label>\n    <span id="hip-width" name="hipWidth">' +((__t = ( person.hipWidth )) == null ? '' : __t) +'"</span>\n</div>\n<div id="summary-chair" class="mxrx">\n    <div class="tmp-internal"><h3>WheelChair</h3></div>\n    <label for="seat-back-height">Seat Back Height</label>\n    <span id="seat-back-height" name="seatBackHeight">' +((__t = ( chair.seatBackHeight )) == null ? '' : __t) +'</span>\n    <label for="seat-depth">Seat Depth</label>\n    <span id="seat-depth" name="seatDepth">' +((__t = ( chair.seatDepth )) == null ? '' : __t) +'</span>\n    <label for="foam-height">Foam Height</label>\n    '; if(chair.foamHeight === 0.4) { print('selected') ;__p += '\n    <span id="foam-height" name="foamHeight">No Cushion</span>\n    '; } else if(chair.foamHeight === 2) { ;__p += '\n    <span id="foam-height" name="foamHeight">2" Cushion</span>\n    '; } ;__p += '\n    <label for="seat-back">Seat Back</label>\n    '; if(chair.seatBackWidth === 0.4) { print('selected') ;__p += '\n    <span id="seat-back" name="seatBackWidth">No Cushion</span>\n    '; } else if(chair.seatBackWidth === 2) { ;__p += '\n    <span id="seat-back" name="seatBackWidth">2" Cushion</span>\n    '; } ;__p += '\n    <label for="wheel-diameter">Wheel Diameter</label>\n    <span id="wheel-diameter" name="wheelDiameter">' +((__t = ( chair.wheelDiameter )) == null ? '' : __t) +'</span>\n    <!-- This is actually COG -->\n    <label for="axle-distance">Axle Distance</label>\n    <span id="axle-distance" name="axleDistance">' +((__t = ( chair.axleDistance )) == null ? '' : __t) +'"</span>\n    <label for="front-wheel-pin">Front Wheel Pin</label>\n    <span id="front-wheel-pin" name="frontWheelPin">' +((__t = ( chair.frontWheelPin )) == null ? '' : __t) +'</span>\n    <label for="ground-clr">Ground Clearance</label>\n    <span id="ground-clr" name="groundClr" >' +((__t = ( chair.groundClr )) == null ? '' : __t) +'"</span>\n    <label for="dump">Dump</label>\n    <span id="dump" name="dump">' +((__t = ( chair.dump )) == null ? '' : __t) +'"</span>\n    <label for="seat-width">Seating Surface Width</label>\n    <span id="seat-width" name="seatWidth">' +((__t = ( chair.seatWidth )) == null ? '' : __t) +'"</span>\n</div>\n';}return __p};

  return this["JST"];

});