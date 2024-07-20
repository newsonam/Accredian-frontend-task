import './Main.css'
import ReferNow from '../Shared/ReferNow';
export default function Refer({showToastMessage}) {
    return (
        <div className="refer">
            <div>
                <p className='how'>How Do I &nbsp;<strong className="bluetext"> Refer? </strong></p>

            </div>
            <img src='/img3.png' alt="loading" className='img3' />
            <ReferNow showToastMessage={showToastMessage} />
        </div>
    );
}