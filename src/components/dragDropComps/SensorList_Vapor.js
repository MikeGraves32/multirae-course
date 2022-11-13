import sensor_bl_01 from "../../img/sensor_bl_01.png";
import sensor_br_01 from "../../img/sensor_br_01.png";
import sensor_ctr_01 from "../../img/sensor_ctr_01.png";
import sensor_tl_01 from "../../img/sensor_tl_01.png";
import sensor_tr_01 from "../../img/sensor_tr_01.png";
import { SensorTypes } from "./SensorTypes_Gas.js";
export const SensorList_Vapor = [
  {
    id: 1,
    url: sensor_bl_01,
    name: "Lower Explosive Limit",
    // type: SensorTypes.LEL,
  },
  {
    id: 2,
    url: sensor_br_01,
    name: "Ammonia",
    // type: SensorTypes.SO2,
  },
  {
    id: 3,
    url: sensor_ctr_01,
    name: "Hydrogen Cyanide",
    // type: SensorTypes.O2,
  },
  {
    id: 4,
    url: sensor_tl_01,
    name: "Oxygen",
    // type: SensorTypes.CL2,
  },
  {
    id: 5,
    url: sensor_tr_01,
    name: "Hydrogen Sulfide/Carbon Monoxide",
    // type: SensorTypes.PID,
  },
];
