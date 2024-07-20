import ReferNow from '../Shared/ReferNow';
import './Main.css';

function SectionFirst({showToastMessage}) {
    return (
        <div className="section">
            <div className='group'>
                <p className='texthover'>Refer</p>
                <p className='texthover'>Benefits</p>
                <p className='texthover'>FAQs</p>
                <p className='texthover'>Support</p>
            </div>
            <div className='firstsecond'>
                <div className='first'>
                    <p className='learntext'>Let's Learn & Earn </p>
                    <p className='wintext'>Get a chance to win up-to <strong className='bluetext'>Rs.15,000</strong></p>
                    <ReferNow showToastMessage={showToastMessage}/>
                </div>
                <div className='second'>
                    <img src='/img1.png' alt='loading' />
                </div>
            </div>
        </div>
    );
}

export default SectionFirst;
