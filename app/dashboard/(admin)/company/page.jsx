import Company from '@/components/company/company';
import React from 'react';

async function CompanyPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/company`, {
    cache: 'no-store', // ensure fresh data for SSR
  });

  const data = await res.json();

  const companies = data.companies.map((item) => {
    const {
      nCompanyId,
      strCompanyName,
      strCompanyNickName,
      strTIN,
      strAddress,
      bVAT,
      bEWT,
    } = item;
    return {
      id: nCompanyId,
      companyName: strCompanyName,
      companyNickName: strCompanyNickName,
      tin: strTIN,
      address: strAddress,
      vat: bVAT,
      ewt: bEWT,
    };
  });


  return (
    <div>
      <Company companies={companies ?? []} />
    </div>
  );
}

export default CompanyPage;
