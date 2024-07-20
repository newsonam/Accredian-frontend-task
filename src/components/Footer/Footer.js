import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css'
export default function Footer() {
  const programs = [
    {
      id: '1',
      name: 'Data Science & AI'
    },
    {
      id: '2',
      name: 'Product Management'
    },
    {
      id: '3',
      name: 'Business Analytics'
    },
    {
      id: '4',
      name: 'Digital Transformation'
    },
    {
      id: '5',
      name: 'Business Management'
    },
    {
      id: '6',
      name: 'Project Management'
    },
    {
      id: '7',
      name: 'Strategy & Leadership'
    },
    {
      id: '8',
      name: 'Senior Management'
    },
    {
      id: '9',
      name: 'Fintech'
    },
  ]
  return (
    <div className="footer">
      <div className='footerfirst'>
        <div className='titlefooter'>
          <h2 className='footertext1'>accredian</h2>
          <h6 className='footertext2'>credentials that matter</h6>
        </div>
        <div>
          <Button variant="contained" size="small" style={{ border: '1px solid white', marginBottom: 0 }}>
            Schedule 1-on-1 Call Now
          </Button>
          <p className='speak'>Speak with our Learning Advisor</p>
        </div>
      </div>
      <hr style={{ width: '70%', marginTop: '30px' }} />
      <div className='footermain'>
        <div>
          <div className='flexcol'>
            <h3>Programs</h3>
            {programs.map((item) => {
              return (
                <div className='flexrow'>
                  <h4 key={item.id}>{item.name}</h4>
                  <AddIcon />
                </div>
              )
            })}
          </div>
        </div>
        <div className='flexcol'>
          <h3>Contact Us</h3>
          <p>Email us (for Data Science Queries):admissions@accredian.com</p>
          <p>Email us (for Product Management Queries):pm@accredian.com</p>
          <p>Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)</p>
          <p>Product Management Admission Helpline:+91 9625811095</p>
          <p>Enrolled Student Helpline:+91 7969322507</p>
          <p>Office Address:4th Floor,250,Phase IV,Udyog Vihar,Sector 18 , Gurugram,Haryana 122015</p>
          <h3>Why Accredian</h3>
          <h3>Follow Us</h3>
          <div className='icons'>
            <FacebookIcon />
            <LinkedInIcon />
            <TwitterIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
        </div>
        <div className='flexcol'>
          <h3>Accredian</h3>
          <a href="#">About</a>
          <a href="#">Career</a>
          <a href="#">Blog</a>
          <a href="#">Admission Policy</a>
          <a href="#">Referral Policy</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Master FAQs</a>

        </div>
      </div>
      <p> &copy; 2024 Accredian A Brand of FullStack Education Pvt. Ltd. All Rights Reserved </p>
    </div>
  );
}

