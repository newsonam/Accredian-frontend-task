import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Main.css';
function FAQ() {
    const [expanded, setExpanded] = useState(false);
    const handleChange = () => {
        setExpanded(!expanded);
    };
    const [expandedp2, setExpandedp2] = useState(false);
    const handleChangep2 = () => {
        setExpandedp2(!expandedp2);
    };
    return (
        <div className="faq">
            <div>
                <p className='frequenttext'>Frequently Asked&nbsp; <strong className="bluetext">Questions</strong></p>
            </div>
            <div className='faq-main'>
                <div className='btn-grp'>
                    <Button variant="outlined" size="medium" style={{ color: '#1976d2', border: '1px solid transparent', boxShadow: '0px 0px 20px #aaaaaa', fontWeight: 'bold' }}>
                        Eligibility
                    </Button>
                    <Button variant="outlined" size="medium" style={{ color: 'black', border: '1px solid grey' }}>
                        How To Use?
                    </Button>
                    <Button variant="outlined" size="medium" style={{ color: 'black', border: '1px solid grey' }}>
                        Terms & Conditions
                    </Button>
                </div>

                <div className='accordion-ques'>
                    <Accordion expanded={expanded} onChange={handleChange}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            sx={{
                                color: expanded ? '#1976d2' : 'black',
                                fontWeight: 'bold'

                            }}
                        >
                            Do I need to have prior product management experience to enroll in the program?
                        </AccordionSummary>
                        <AccordionDetails>
                            No,the program is designed to be inclusive of all levels of experience.All topics will be covered from the basics , making it suitable for individuals from any field of work.
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expandedp2} onChange={handleChangep2}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                            sx={{
                                color: expandedp2 ? '#1976d2' : 'black',
                                fontWeight: 'bold'

                            }}
                        >
                            What is the minimum system configuration required?
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}

export default FAQ;
