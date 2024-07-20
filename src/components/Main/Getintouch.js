import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './Main.css';

function Getintouch() {
    return (
        <div className='getmain'>
            <div className="getin">
                <div className='imgtext'>
                    <img src='/img2.png' alt='loading' />
                    <div>
                        <h2>Want to delve deeper into the program?</h2>
                        <h5>Share your details to receive expert insights from our program team!</h5>
                    </div>
                </div>
                <Button size="small" variant="contained" endIcon={<KeyboardArrowRightIcon />} style={{ color: '#1976d2', backgroundColor: 'white', fontWeight: 'bold' }}>
                    Get In Touch
                </Button>
            </div>
        </div>
    );
}

export default Getintouch;