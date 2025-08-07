import prisma from '@/utils/db';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const companies = await prisma.tblcompanies.findMany();

  return NextResponse.json({ companies }, { status: 200 });
}

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      strCompanyName,
      strCompanyNickName,
      strTIN,
      strAddress,
      bVAT,
      bEWT,
    } = body;

    const newCompany = await prisma.tblcompanies.create({
      data: {
        strCompanyName,
        strCompanyNickName,
        strTIN: strTIN || null,
        strAddress: strAddress || null,
        bVAT,
        bEWT,
      },
    });

    return NextResponse.json({ company: newCompany }, { status: 201 });
  } catch (error) {
    console.error('POST /api/companies error:', error);
    return NextResponse.json(
      { message: 'Something went wrong', error: error.message },
      { status: 500 }
    );
  }
}

export async function PATCH(request, { params }) {
  try {
    const body = await request.json();
    const { id } = params;

    const existingCompany = await prisma.tblcompanies.findUnique({
      where: { companyId: Number(id) },
    });

    if (!existingCompany) {
      return NextResponse.json(
        { message: 'Company not found' },
        { status: 404 }
      );
    }

    const updatedCompany = await prisma.tblcompanies.update({
      where: { companyId: Number(id) },
      data: {
        strCompanyName: body.strCompanyName ?? existingCompany.strCompanyName,
        strCompanyNickName:
          body.strCompanyNickName ?? existingCompany.strCompanyNickName,
        strTIN: body.strTIN ?? existingCompany.strTIN,
        strAddress: body.strAddress ?? existingCompany.strAddress,
        bVAT: body.bVAT ?? existingCompany.bVAT,
        bEWT: body.bEWT ?? existingCompany.bEWT,
      },
    });

    return NextResponse.json({ company: updatedCompany }, { status: 200 });
  } catch (error) {
    console.error('PATCH /api/companies/[id] error:', error);
    return NextResponse.json(
      { message: 'Something went wrong', error: error.message },
      { status: 500 }
    );
  }
}
