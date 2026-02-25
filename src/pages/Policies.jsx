import React, { useEffect } from 'react';
import '../assets/css/policies-premium.css';

const Policies = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="policies-page">
            {/* Hero Section */}
            <section className="policies-hero">
                <div className="container">
                    <h1>STAR Policies</h1>
                    <p>Ensuring transparency, professionalism, and ethical conduct within the business networking ecosystem.</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="policies-content-wrap">
                <div className="container" style={{ maxWidth: '1000px' }}>
                    {/* General Policies */}
                    <div className="policy-block">
                        <h2><i className="fas fa-gavel"></i> General Policies</h2>
                        <div className="policy-text">
                            <p>These General member policies are created and are maintained by the Board of Management. It will remain the responsibility of the Chapter's Core committee to ensure that these policies are upheld in the respective chapters consistently.</p>
                            <ul className="policy-list">
                                <li>STAR is a Business networking forum initiated by M/s. PROMPT TRADE FAIRS (I) PVT LTD., a registered company under the Companies Act, 1956.</li>
                                <li>Prompt Trade Fairs (I) Pvt Ltd., in association with the Builders Line Tamil monthly magazine, have conceptualized the Forum to be a platform for referral sharing among the Members and Participants. This is a premium platform for the Business community.</li>
                                <li>The STAR proposes to organize the congregation of Business Professionals as an Event, exclusively to provide successive and sequential Marketing Services for the Members and the initiative is no way intended to be measured as an Enterprise, Society or Association. STAR is strictly a Marketing Service Provider.</li>
                                <li>The STAR aspires to promote Business connects among a Group of Professionals, with in the Members in a single chapter.</li>
                                <li>The STAR will stringently operate within the boundaries of a Referral Networking Forum facilitator and will no way be held responsible for any Business transactions / Financial agreements between the participating members.</li>
                                <li>All disputes arising out of or relating to the Member's Participation in STAR shall be resolved by binding arbitration in accordance with the laws of the country of India, outside the Forum precincts, subject to the jurisdiction of MADRAS HIGH COURT, between the Members involved. STAR will no way be liable or held responsible.</li>
                                <li>STAR Policies are subject to change. All proposed policy changes will be reviewed and finalised with the consent of Board of Prompt Trade Fairs India Pvt Ltd</li>
                                <li>All payments will have to be made in favour of M/s. PROMPT TRADE FAIRS INDIA PVT LTD., vide Cheque/ Demand draft/ RTGS or UPI Modes, along with the duly filled Application form.</li>
                                <li>STAR Chapter Meetings will be organized in the Banquet facilities of Star Rated Hotels. All expenses incurred towards organising the meet will be shared among the members and chargeable in addition.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Disciplinary Policies */}
                    <div className="policy-block">
                        <h2><i className="fas fa-exclamation-triangle"></i> Disciplinary Policies</h2>
                        <div className="policy-text">
                            <h3 style={{ color: 'var(--primary-color)', fontSize: '1.4rem', marginTop: '1.5rem', marginBottom: '1rem' }}>1) Visiting Cross Chapters</h3>
                            <ul className="policy-list">
                                <li>Members visiting Cross STAR chapters other than their own chapter should clearly announce that they belong to and represent another STAR Chapter.</li>
                                <li>The visiting members must not do or say anything that competes with the business interests of a Member from that particular chapter.</li>
                                <li>Every chapter will have to give the preference of Referrals to their own chapter members</li>
                                <li>Before visiting another Chapter, the visiting Member will have to get the prior permission of the Chapter CEO.</li>
                            </ul>

                            <h3 style={{ color: 'var(--primary-color)', fontSize: '1.4rem', marginTop: '2rem', marginBottom: '1rem' }}>2) Absences and Late Attendance</h3>
                            <p>Absence and Late-coming will mean lesser business conversions for the Members. Therefore taking into consideration the overall performance metrics of the chapter, the Core Committee may give warnings to members who are noted to be consistently late or absent for the meetings. If the problem continues, the respective Member's category may be subject to being re-opened.</p>
                        </div>
                    </div>

                    {/* Meeting Etiquette */}
                    <div className="policy-block">
                        <h2><i className="fas fa-clock"></i> Meeting Etiquette</h2>
                        <div className="policy-text">
                            <ul className="policy-list">
                                <li>Time will remain the quintessence of every STAR Meet</li>
                                <li>A session for networking among the Members will precede the start of any STAR Meeting, which could be accommodated for a minimum time duration of 30mins</li>
                                <li>Each Member is expected to record his attendance physically in the register made available at the venue entrance, which is obligatory for the Member to enter the Meeting Venue.</li>
                                <li>All STAR Meetings will strictly follow a DND (Do-Not-Disturb) Protocol and all Participants will be instructed to turn their Mobile phones to silent modes or requested to switch off their Mobile phones</li>
                                <li>All STAR members are strictly ensure that walk out for mobile phone introduction during the meeting time.</li>
                                <li>Every Member could avail a maximum presentation time of 45 seconds during the meet and the preference will be provided on First-come-First-served Basis, based on the attendance time log.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Attendance Policy */}
                    <div className="policy-block">
                        <h2><i className="fas fa-user-check"></i> Attendance Policy</h2>
                        <div className="policy-text">
                            <ul className="policy-list">
                                <li>Maximum attendance of Members would be one of the critical aspects for the good performance of a STAR Chapter. When a Member is not in regular attendance at the Chapter Meeting, there is less opportunity for him/her to give and ask referrals and networking. It is proven that Chapters with good Member attendance perform the best.</li>
                                <li>When a Member misses a meeting and fails to depute his substitute, an email / sms for an intimation could be sent as a courtesy to Chapter CEO, persuading the Member to depute a suitable substitute when unable to attend the Chapter Meeting.</li>
                                <li>More than 4 absenteeism per year for STAR Meets by the Member, should result in forfeiture of the Membership Fee and Termination of the Member with a letter stating the reason. This policy needs to be followed for the better functioning and performance of the Chapter. The MDC will have to notify the Chapter CEO when it becomes necessary to open a Member's category as a result of his / her termination.</li>
                                <li>It is also recommended that MDC make a phone call to the Member after his/ her uninformed absence in the Chapter Meeting without deputing a substitute. It could be reiterated that continued absence would result in the Member's classification being opened up for new Members.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Termination Policy */}
                    <div className="policy-block">
                        <h2><i className="fas fa-user-slash"></i> Termination Policy</h2>
                        <div className="policy-text">
                            <ul className="policy-list">
                                <li>If a Member acts against the rules of the STAR, acts in a manner that disrupts the unity of the chapter, or behaves erratically in the chapter, he may be expelled from the Chapter as decided by the Core Committee Leaders with the concern of Chapter CEO. The Core Committee holds the authority for initiating the required corrective action to be taken against any Member, in the event of his/ her failure to comply with the policies and / or the code of ethics of STAR.</li>
                                <li>Absenteeism is generally not permitted in STAR. However, for unavoidable reasons absenteeism up to a maximum of 4 instances is permitted per year. In case of more than 4 instances of absenteeism the Chapter Core Committee Leaders will take necessary termination action against the specific member with prior intimation and fill the category by some one member.</li>
                                <li>Once terminated from the chapter, the member willing to rejoin the STAR Chapter He/She should wait for minimum 6 months for further joining process.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Policies;
