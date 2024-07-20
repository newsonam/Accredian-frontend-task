import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProgramTable from './ProgramTable';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 0 }}>
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
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function TabsTable() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 530 , boxShadow:' 0px 0px 20px #aaaaaa' }}
        >
            <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ border: 1, borderColor: 'divider' }}
            >
                <Tab label="All Programs" {...a11yProps(0)} />
                <Tab label="Product Management" {...a11yProps(1)} />
                <Tab label="Strategy & Leadership" {...a11yProps(2)} />
                <Tab label="Business Management" {...a11yProps(3)} />
                <Tab label="Fintech" {...a11yProps(4)} />
                <Tab label="Senior Management" {...a11yProps(5)} />
                <Tab label="Data Science" {...a11yProps(6)} />
                <Tab label="Digital Transformation" {...a11yProps(6)} />
                <Tab label="Business Analytics" {...a11yProps(6)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <ProgramTable />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two12
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
            </TabPanel>
            <TabPanel value={value} index={6}>
                Item Seven
            </TabPanel>
        </Box>
    );
}