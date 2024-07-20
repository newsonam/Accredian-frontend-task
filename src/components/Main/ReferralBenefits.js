import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import TabsTable from './TabsTable';
import ReferNow from "../Shared/ReferNow";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Main.css';

const label = { inputProps: { 'aria-label': 'Size switch demo' } };

function ReferralBenefits({showToastMessage}) {
    return (
        <div className='referalmain'>
            <div className="referal">
                <div>
                    <p className='whattext'>What are the &nbsp; <strong className="bluetext"> Referral Benefits? </strong></p>

                </div>
                <div className='switch'>Enrolled <Switch {...label} defaultChecked size="small" /></div>
              <div className='tabstable'> <TabsTable /></div> 

                <div className='show'> <Button size="small" variant="outlined" endIcon={<ExpandMoreIcon />} style={{ color: 'black', border: '1px solid grey',marginTop:'80px' }}>
                    Show More
                </Button></div>
            </div>
            <ReferNow showToastMessage={showToastMessage}/>
        </div>
    );
}

export default ReferralBenefits;