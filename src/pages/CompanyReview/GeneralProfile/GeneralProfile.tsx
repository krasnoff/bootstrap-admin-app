import { AssetProfile, QuoteType } from '../../../Types/Store/QuoteSummery';
import styles from './GeneralProfile.module.scss';

interface MyProps {
    assetProfile: AssetProfile,
    quoteType: QuoteType
  }

function GeneralProfile(props: MyProps) {
    return (
      <>
          {props.assetProfile ? 
          <div>
            <h4>{props.quoteType.longName}</h4>
            <div className={styles.paragraph}>
                <div>{props.assetProfile.address1}, {props.assetProfile.city}, {props.assetProfile.state}, {props.assetProfile.country}</div>
                <div>Tel.: {props.assetProfile.phone}</div>
                <div>URL: <a href={props.assetProfile.website} target="_blank" rel="noopener noreferrer">{props.assetProfile.website}</a></div>
            </div>
            <div className={styles.paragraph}>{props.assetProfile.longBusinessSummary}</div>
            <div className={styles.paragraph}>
                <table className={styles.companyOfficersTable}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Annual Salary</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                    {props.assetProfile.companyOfficers.map((el, index) => 
                        <tr key={index}>
                            <td>{el.name}</td>
                            <td>{el.title}</td>
                            <td>{el.totalPay?.raw.toLocaleString()}</td>
                            <td>{el.age}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
          </div>
          : null }
      </>
    );
}

export default GeneralProfile;