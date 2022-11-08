import BaseImage from "../../img/main-content-bg.png";
import PanelImage from "../../img/sensors/configuration/configuration_SO2.png";

export const ConfigMultiRae = [
  {
    title: "Positive Cross Sensitivity",
    description:
      "Positive cross sensitivity means this sensor will read HIGHER than the concentration of the cross sensitive gas, causing EARLY alarms and HIGHER readings than the actual level of the present cross sensitive gas.",
    button: "More Information",
    image: BaseImage,
    panelImage: PanelImage,
    imgAlt: "MultiRAE Yellow Boot",
    slideClass: "multiRae-yellow",
  },
  {
    title: "Negative Cross Sensitivity",
    description:
      "Negative cross sensitivity means the sensor will read LOWER than the concentration of the cross sensitive gas, causing LATE alarms and LOWER readings than the actual level of the cross sensitive gas. This can be dangerous if the user does not have a sensor specific to the cross sensitive gas, as the concentration could be hazardous to the user before the alarm goes off. See the Cross Sensitivity Table.",
    button: "Discover",
    image: BaseImage,
    panelImage: PanelImage,
    imgAlt: "MultiRAE Yellow Boot",
    slideClass: "multiRae-yellow",
  },
];
