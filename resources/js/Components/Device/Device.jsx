import React from "react";
import DevicesIcon from '@mui/icons-material/Devices';

function Device({device}) {
    return (<div className="flex flex-col items-center">
            <DevicesIcon/>
            <span className="text-center text-sm">{device.name}</span>
        </div>);
}

export default Device;
