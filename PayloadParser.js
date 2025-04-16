function ALARMVal(strValue)
{
    switch (strValue)
    {
        case 'FALSE': return 0;
        case 'TRUE': return 1;
    }
}

function LEAKVal(strValue)
{

    switch (strValue)
    {
        case 'NO LEAK': return 0;
        case ' LEAK': return 1;
    }
}



function parseUplink(device, payload)
{

    var parsed = payload.asParsedObject();   
    env.log(parsed); 

    // Store ALARM
    if(parsed.ALARM != null){
        var sensor1 = device.endpoints.byAddress("1");

        if (sensor1 != null)
            sensor1.updateGenericSensorStatus(ALARMVal(parsed.ALARM));
    };

    // Store LAST_WATER_LEAK_DURATION
    if(parsed.LAST_WATER_LEAK_DURATION != null){
        var sensor2 = device.endpoints.byAddress("2");

        if (sensor2 != null)
            sensor2.updateGenericSensorStatus(parsed.LAST_WATER_LEAK_DURATION);
    };

    // Store WATER_LEAK_STATUS
    if(parsed.WATER_LEAK_STATUS != null){
        var sensor3 = device.endpoints.byAddress("3");

        if (sensor3 != null)
            sensor3.updateGenericSensorStatus(LEAKVal(parsed.WATER_LEAK_STATUS));
    }

}

/*
{
        "ALARM": "FALSE", (it should be discrete 1 or 0)
        "LAST_WATER_LEAK_DURATION": 0, (units for time??)
        "TDC": "YES",
        "TIME": "2023-06-02 14:50:23",
        "WATER_LEAK_STATUS": "NO LEAK", (it should be discrete 1 or 0)
        "WATER_LEAK_TIMES": 0
      },

*/


function buildDownlink(device, endpoint, command, payload) 
{ 
	// This function allows you to convert a command from the platform 
	// into a payload to be sent to the device.
	// Learn more at https://wiki.cloud.studio/page/200

	// The parameters in this function are:
	// - device: object representing the device to which the command will
	//   be sent. 
	// - endpoint: endpoint object representing the endpoint to which the 
	//   command will be sent. May be null if the command is to be sent to 
	//   the device, and not to an individual endpoint within the device.
	// - command: object containing the command that needs to be sent. More
	//   information at https://wiki.cloud.studio/page/1195.

	// This example is written assuming a device that contains a single endpoint, 
	// of type appliance, that can be turned on, off, and toggled. 
	// It is assumed that a single byte must be sent in the payload, 
	// which indicates the type of operation.

/*
	 payload.port = 25; 	 	 // This device receives commands on LoRaWAN port 25 
	 payload.buildResult = downlinkBuildResult.ok; 

	 switch (command.type) { 
	 	 case commandType.onOff: 
	 	 	 switch (command.onOff.type) { 
	 	 	 	 case onOffCommandType.turnOn: 
	 	 	 	 	 payload.setAsBytes([30]); 	 	 // Command ID 30 is "turn on" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.turnOff: 
	 	 	 	 	 payload.setAsBytes([31]); 	 	 // Command ID 31 is "turn off" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.toggle: 
	 	 	 	 	 payload.setAsBytes([32]); 	 	 // Command ID 32 is "toggle" 
	 	 	 	 	 break; 
	 	 	 	 default: 
	 	 	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 	 	 break; 
	 	 	 } 
	 	 	 break; 
	 	 default: 
	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 break; 
	 }
*/

}