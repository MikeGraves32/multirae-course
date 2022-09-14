import "../../App.css";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { LoremIpsum } from "react-lorem-ipsum";

function TabPanel(props) {
     const { children, value, index, ...other } = props;

     return (
          <div
               role='tabpanel'
               hidden={value !== index}
               id={`simple-tabpanel-${index}`}
               aria-labelledby={`simple-tab-${index}`}
               {...other}
          >
               {value === index && (
                    <Box sx={{ p: 3 }}>
                         <Typography>{children}</Typography>
                    </Box>
               )}
          </div>
     );
}

TabPanel.propTypes = {
     children: PropTypes.node,
     index: PropTypes.number.isRequired,
     value: PropTypes.number.isRequired,
};

function a11yProps(index) {
     return {
          id: `vertical-tab-${index}`,
          "aria-controls": `vertical-tabpanel-${index}`,
     };
}

export default function BasicTabs() {
     const [value, setValue] = React.useState(0);

     const pgTitle = "Sensor Characteristic Definitions";
     const handleChange = (event, newValue) => {
          setValue(newValue);
     };

     return (
          <section className='container'>
               <h2 className='pgTitle'>{pgTitle}</h2>
               <Box
                    sx={{
                         flexGrow: 1,
                         bgcolor: "background.paper",
                         display: "flex",
                         height: 250,
                    }}
               >
                    <Tabs
                         orientation='vertical'
                         variant='scrollable'
                         value={value}
                         onChange={handleChange}
                         aria-label='Vertical tabs example'
                         sx={{ borderRight: 1, borderColor: "divider" }}
                    >
                         <Tab label='Range' {...a11yProps(0)} />
                         <Tab label='Max Overload' {...a11yProps(1)} />
                         <Tab label='Resolution' {...a11yProps(2)} />
                         <Tab label='Bias/Equilibrium' {...a11yProps(3)} />
                         <Tab label='Drift' {...a11yProps(4)} />
                         <Tab label='Response Time' {...a11yProps(5)} />
                         <Tab label='Storage Life' {...a11yProps(6)} />
                         <Tab label='Operating Life' {...a11yProps(7)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                         <h3>Range</h3>
                         <p>
                              The normal operating concentration of a sensor.
                              Exceeding the normal operating range may result in
                              erroneous readings and long recovery times but
                              should not permanently damage the sensor as long
                              as the Max Overload is not exceeded.
                         </p>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                         <h3>Max Overload</h3>
                         <p>
                              The maximum exposure concentration. Exceeding this
                              value will likely give erroneous readings and
                              cause permanent damage to the sensor. This can be
                              viewed as the sensor immediately dangerous to life
                              or health (IDLH) limit.
                         </p>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                         <h3>Resolution</h3>
                         <p>
                              The minimum amount of chemical that the sensor can
                              “see” (also known as: “Increment of measurement”.)
                         </p>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                         <h3>Bias/Equilibrium</h3>
                         <p>
                              Some electrochemical sensors (NO, NH3) require a
                              bias voltage to detect the gas, while most do not.
                              Biased sensors require an equilibration time (also
                              known as warm-up time) at least 6 hours after
                              installation for the baseline to become stable
                              enough to calibrate the sensor. Once installed,
                              any sensor bias stays on, even when the meter is
                              off. Therefore, even biased sensors are ready for
                              immediate use when the instrument is turned on
                              again, and the equilibration time is needed only
                              when first installed or if the battery becomes
                              completely drained.
                         </p>
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                         <h3>Drift</h3>
                         <p>
                              The amount the sensor output may change over time,
                              expressed in percentage (%).
                         </p>
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                         <h3>Response Time (t90)</h3>
                         <p>
                              The time for a sensor to reach 90% of its final
                              stable reading. Typically, an exposure of twice
                              the t90 time is required to get a stable reading.
                         </p>
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                         <h3>Storage Life</h3>
                         <p>
                              The recommended maximum time a sensor should be
                              stored in its original packaging before being
                              installed in an instrument.
                         </p>
                    </TabPanel>
                    <TabPanel value={value} index={7}>
                         <h3>Operating Life</h3>
                         <p>
                              The expected useable life of the sensor after it
                              is installed, as long as the “Storage Life” was
                              not exceeded before installation.
                         </p>
                    </TabPanel>
               </Box>
          </section>
     );
}

// const Div = styled("div")``;
// export default (props) => {
//      const pgTitle = "Sensor Characteristic Definitions";
//      return (
//           <section className='container'>
//                <h2 className='pgTitle'>{pgTitle}</h2>
//                {/* <Typography variant='h5' color='textPrimary' component='h1'>
//                     Novice
//                </Typography> */}
//                {/* <section className='VideoSection'>
//                     <video controls autostart autoPlay src={Video} type="video/mp4" /> */}
//                {/* <Player playsInline poster="../images/poster.png" src={Video} />
//                     <Video />
//                </section>*/}

//                <div className='container-lg'>
//                     <LoremIpsum p={2} />
//                </div>
//           </section>
//      );
// };
