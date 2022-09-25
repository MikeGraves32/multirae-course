const Features = [
     {
          id: "1",
          item: "Range",
          description:
               "The normal operating concentration of a sensor. Exceeding the normal operating range may result in erroneous readings and long recovery times but should not permanently damage the sensor as long as the Max Overload is not exceeded.",
     },
     {
          id: "2",
          item: "Max Overload",
          description:
               "The maximum exposure concentration. Exceeding this value will likely give erroneous readings and cause permanent damage to the sensor. This can be viewed as the sensor immediately dangerous to life or health (IDLH) limit.",
     },
     {
          id: "3",
          item: "Resolution",
          description:
               "The minimum amount of chemical that the sensor can “see” (also known as: “Increment of measurement”.)",
     },
     {
          id: "4",
          item: "Bias/Equilibrium",
          description:
               "Some electrochemical sensors (NO, NH3) require a bias voltage to detect the gas, while most do not. Biased sensors require an equilibration time (also known as warm-up time) at least 6 hours after installation for the baseline to become stable enough to calibrate the sensor. Once installed, any sensor bias stays on, even when the meter is off. Therefore, even biased sensors are ready for immediate use when the instrument is turned on again, and the equilibration time is needed only when first installed or if the battery becomes completely drained.",
     },
     {
          id: "5",
          item: "Drift",
          description:
               "The amount the sensor output may change over time, expressed in percentage (%).",
     },
     {
          id: "6",
          item: "Response Time (t90)",
          description:
               "The time for a sensor to reach 90% of its final stable reading. Typically, an exposure of twice the t90 time is required to get a stable reading.",
     },
     {
          id: "7",
          item: "Storage Life",
          description:
               "The recommended maximum time a sensor should be stored in its original packaging before being installed in an instrument.",
     },
     {
          id: "8",
          item: "Operating Life",
          description:
               "The expected useable life of the sensor after it is installed, as long as the “Storage Life” was not exceeded before installation.",
     },
];

export default Features;
