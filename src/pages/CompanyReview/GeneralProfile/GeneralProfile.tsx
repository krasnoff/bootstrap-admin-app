import { AssetProfile } from '../../../Types/Store/QuoteSummery';
import styles from './GeneralProfile.module.scss';

interface MyProps {
    assetProfile: AssetProfile
  }

function GeneralProfile(props: MyProps) {
    

    return (
      <div>General Data</div>
    );
}

export default GeneralProfile;