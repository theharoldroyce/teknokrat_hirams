import { NextResponse } from 'next/server';
import prisma from '@/utils/db';

export async function PATCH(request, { params }) {
  try {
    const id = Number(params.id); // <- this is now correctly received
    const body = await request.json();

    const existingCompany = await prisma.tblcompanies.findUnique({
      where: { nCompanyId: id },
    });

    if (!existingCompany) {
      return NextResponse.json(
        { message: 'Company not found' },
        { status: 404 }
      );
    }

    const updatedCompany = await prisma.tblcompanies.update({
      where: { nCompanyId: id },
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

export async function DELETE(request, { params }) {
  try {
    const id = Number(params.id);

    const existingCompany = await prisma.tblcompanies.findUnique({
      where: { nCompanyId: id },
    });

    if (!existingCompany) {
      return NextResponse.json(
        { message: 'Company not found' },
        { status: 404 }
      );
    }

    await prisma.tblcompanies.delete({
      where: { nCompanyId: id },
    });

    return NextResponse.json(
      { message: 'Company deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('DELETE /api/companies/[id] error:', error);
    return NextResponse.json(
      { message: 'Something went wrong', error: error.message },
      { status: 500 }
    );
  }
}
