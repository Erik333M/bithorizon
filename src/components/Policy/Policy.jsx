import React from 'react';
import './policy.css';

const Policy = () => {
  return (
    <div className="aml-policy">
      <h1>AML Policy</h1>

      <section>
        <h2>1. Our Mission: To Promote and Facilitate Access to Virtual Assets</h2>
        <p>
          This Anti-Money Laundering and Counter-Terrorism Financing Policy ("Policy") has been developed by BitHorizon LLC ("Company")...
        </p>
        <p>
          BitHorizon LLC recognizes that fraud, money laundering, terrorism financing, and other financial crimes are harmful...
        </p>
        <p>
          As practice has shown, the most effective method of fighting financial crime is early-stage prevention...
        </p>
        <p>
          Consequently, BitHorizon LLC is committed to planning and delivering its services in a manner that aligns with international standards...
        </p>
      </section>

      <section>
        <h2>2. Identifying Individuals</h2>
        <p>Registration is mandatory. The following data is used to identify individuals:</p>
        <ul>
          <li>Full Name</li>
          <li>Date of Birth</li>
          <li>Personal Number (if available)</li>
          <li>Identification document details</li>
          <li>Gender</li>
          <li>Citizenship</li>
          <li>Place of Birth</li>
          <li>Registered Address</li>
          <li>Residential Address</li>
        </ul>
      </section>

      <section>
        <h2>3. Identifying Legal Entities</h2>
        <p>To identify legal entities, the following data is required:</p>
        <ul>
          <li>Name</li>
          <li>Registration Date</li>
          <li>Legal Address</li>
          <li>Identification Number</li>
          <li>Registration Number</li>
          <li>Legal Form</li>
          <li>Actual Location</li>
        </ul>
        <p>And for founders/beneficial owners:</p>
        <ul>
          <li>Full Name</li>
          <li>Date of Birth</li>
          <li>... (same details as individuals)</li>
        </ul>
      </section>

      <section>
        <h2>4. High- and Low-Risk Factors</h2>
        <p>The Financial Action Task Force (FATF) categorizes risks and issues international ML/FT recommendations...</p>
      </section>

      <section>
        <h2>5. Identifying Politically Exposed Persons</h2>
        <p>PEPs require enhanced due diligence. This includes close associates and family members, with source-of-funds checks.</p>
      </section>

      <section>
        <h2>6. High-Risk Countries and Organizations</h2>
        <p>BitHorizon does not serve clients from high-risk or sanctioned countries including Russia and Belarus...</p>
      </section>

      <section>
        <h2>7. Know Your Customer (KYC)</h2>
        <p>KYC questionnaires are mandatory. Services are withheld until full verification is completed. Screening is done via AML Bot.</p>
      </section>

      <footer>
        <p><strong>Confirmed by:</strong> BitHorizon LLC</p>
        <p><strong>Date:</strong> 2025</p>
      </footer>
    </div>
  );
};

export default Policy;
