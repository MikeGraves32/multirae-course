import BaseImage from "../../img/main-content-bg.png";
import PanelImage from "../../img/sensors/configuration/configuration_LEL.png";
import Sensor_LEL from "../../img/sensors/sensor_LEL.png";
import LEL_Characteristics from "../../img/sensors/configuration/lel_characteristics.png";
export const ConfigMultiRae = [
  {
    title: "Lower Explosive Limit (LEL)",
    description:
      "<ul><li>1. Lower Explosive Limit (LEL)</li><li>2. Sulfur Dioxide (SO2)</li><li>3. Oxygen (O2)</li><li>4. Chlorine (Cl2)</li><li>5. Photo Ionization Detector (PID)</li></ul>",
    button: "",
    image: BaseImage,
    panelImage: PanelImage,
    imgAlt:
      "Lower Explosive Limit (LEL) Sensor; Top of Yellow Boot Multi-RAE showing five slots, with the bottom right sensor slot highlighted in red.",
    slideClass: "multiRae-yellow",
  },
  {
    title: "Lower Explosive Limit (LEL)",
    description:
      "LEL stands for Lower Explosive limit. In laymen’s terms, what does this mean to you? LEL measures explosivity, not toxicity. LEL is the lowest concentration (in air) that is needed for gas to ignite and explode.",
    button: "",
    image: BaseImage,
    panelImage: Sensor_LEL,
    imgAlt: "Lower Explosive Limit (LEL) Sensor",
    slideClass: "multiRae-yellow",
  },
  {
    title: "Lower Explosive Limit (LEL)",
    description: "Lower Explosive Limit Characteristics.",
    button: "",
    image: BaseImage,
    panelImage: LEL_Characteristics,
    imgAlt: "Lower Explosive Limit (LEL) Sensor",
    slideClass: "multiRae-yellow",
  },
];
