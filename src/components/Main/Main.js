
import SectionFirst from "./SectionFirst";
import Refer from "./Refer";
import FAQ from "./FAQ";
import Getintouch from "./Getintouch";
import ReferralBenefits from "./ReferralBenefits";

function Main({showToastMessage}) {
    return (
        <div className="Main">
            <SectionFirst showToastMessage={showToastMessage} />
            <Refer showToastMessage={showToastMessage} />
            <ReferralBenefits showToastMessage={showToastMessage} />
            <FAQ />
            <Getintouch />
        </div>
    );
}

export default Main;
