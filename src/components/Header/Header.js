import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Header.css';
function Header() {
    return (
        <div className="header">
            <div className='firstpart'>
                <div className='title'>
                    <h2 className='titletext1'>accredian</h2>
                    <h6 className='titletext2'>credentials that matter</h6>
                </div>

                <Button size="small" variant="contained" endIcon={<ExpandMoreIcon />}>
                    Courses
                </Button>
            </div>
            <div className='secondpart'>
                <p className='boldtext'>Refer & Earn</p>
                <p className='boldtext'>Resources</p>
                <p className='boldtext'>About Us</p>

                <Button variant="contained" size="small" style={{ backgroundColor: '#D3D3D3', color: 'black' }}>
                    Login
                </Button>
                <Button variant="contained" size="small">
                    Try for free
                </Button>
            </div>
        </div>
    );
}

export default Header;
