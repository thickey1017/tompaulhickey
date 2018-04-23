	function printValue() {
		var slider = document.getElementById("myRange1");
		alert(slider.value);
	}
	//===Initialize===
	// Purpose - defines bridge, user, and hue object; gets bulb current state from slider, updates slider
	// Called - Initialize Button
	//TPH WARNING--------------------------------------------------Not optimized, only works for first light
	function Initialize() {
		for (count=1; count < 7; count++) { //loop over all bulbs
			var elementID='myRange'+count //this probably isn't good code
			initializeSingleBulbHelper(count,elementID)			
		}
	}
	function initializeSingleBulbHelper(bulbID,elementID) {
		var hue = jsHue();
		var bridge = hue.bridge('192.168.0.2');
		var username = '8LqWCl9mNwR7esvuw6OS9JHsvdvGpwZTMclgH8Eb';
		var user = bridge.user(username);
		user.getLight(bulbID).then(bulbInfo => { //create then resolve promise
		var bulbState= new Object() //create new object to hold output
		bulbState=bulbInfo.state //set object to include the state
		if (bulbState.on == false) {document.getElementById(elementID).value =0}
		else {document.getElementById(elementID).value =bulbState.bri;}
		})
	}
	function successCallback(lights) {
		alert('success')
	}
	function failureCallback(count) {
		alert('failure with light :'+count)
	}
	function DiscoverBridges() {
		var hue = jsHue();
		hue.discover().then(bridges => {
		if(bridges.length === 0) {
			console.log('No bridges found. :(');
		}
		else {
			bridges.forEach(b => console.log('Bridge found at IP address %s.', b.internalipaddress));
		}
		}).catch(e => console.log('Error finding bridges', e));
		alert('Output in console.')
	}
	//===TurnOff===
	//Purpose - turn off/on all lights
	//Assumptions - there are only 6 lights total
	//Called By - Turn All On and Turn All Off buttons
	//Accepts - onoff (req) - on/off state
	function TurnAll(onoff) {
		var hue = jsHue();
		var bridge = hue.bridge('192.168.0.2');
		var username = '8LqWCl9mNwR7esvuw6OS9JHsvdvGpwZTMclgH8Eb';
		var user = bridge.user(username);
		var newBulbState = new Object()
		if (onoff == 0) {newBulbState.on = false;}
		else {newBulbState.on = true;}
		newBulbState.bri = 255;
		for (count=0; count < 7; count++) {
			user.setLightState(count, newBulbState).then(data => {})
		}
		Initialize();
	}
	function SingleBulb(bulbID,onoff) {
		var hue = jsHue();
		var bridge = hue.bridge('192.168.0.2');
		var username = '8LqWCl9mNwR7esvuw6OS9JHsvdvGpwZTMclgH8Eb';
		var user = bridge.user(username);
		if (onoff == 0) {
			user.setLightState(bulbID, { on: false }).then(data => {})
		} else if (onoff == 1) {
			user.setLightState(bulbID, { on: true }).then(data => {})
		}
	}
	//===SingleBulbSlider===
	// Purpose - Changes bulb state based on slider input
	// Called - on slider change
	// Accepts - bulbID (req) - the ID of the bulb being changed, hardcoded based on slider used
	//			 elementSlider (req) - the element of the slider that was changed, needed to get value of slider for brightness
	function SingleBulbSlider(bulbID,elementSlider) {
		var hue = jsHue();
		var bridge = hue.bridge('192.168.0.2');
		var username = '8LqWCl9mNwR7esvuw6OS9JHsvdvGpwZTMclgH8Eb';
		var user = bridge.user(username);
		//var slider = document.getElementById("myRange1");
		//var brightness=Number(slider.value)
		var brightness=Number(elementSlider.value)
		//var obj=new Object();
		var newBulbState= new Object(); //Create literal object for second parameter to update bulb
		//obj.bri = brightness;
		newBulbState.bri = brightness;
		if (brightness == 0) {newBulbState.on = false;}
		else {newBulbState.on = true;}
		user.setLightState(bulbID, newBulbState ).then(data => {})
	}