'use client';

import { columns } from '@/components/company/columns';
import { DataTable } from '@/components/shared/data-table/data-table';
import { companies as companyList } from '@/components/company/companies';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

import { useState } from 'react';
import { Plus, SquarePen } from 'lucide-react';
import { PageHeader, PageHeaderTitle } from '@/components/shared/page-header';
import { CompanyMutateDrawer } from '@/components/company/company-mutate-drawer';
function Company({companies : companyList}) {
  const [companies, setCompanies] = useState(companyList);
  const [open, setOpen] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleOpenEditDrawer = (row) => {
    setSelectedRow(row.original);
    setOpen('update');
  };

  const newColumns = columns.map((col) => {
    if (col.id === 'actions') {
      return {
        ...col,
        cell: ({ row }) => (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleOpenEditDrawer(row)}
          >
            <SquarePen />
          </Button>
        ),
      };
    }
    return col;
  });

  return (
    <>
      <PageHeader>
        <PageHeaderTitle title="Company" />
        <div className="flex gap-1">
          <Button className="text-slate-50" onClick={() => setOpen('create')}>
            <span>Create</span> <Plus className="mt-[2px]" />
          </Button>
        </div>
      </PageHeader>
      <section>
        <CompanyMutateDrawer
          key="company-create"
          setCompanies={setCompanies}
          open={open === 'create'}
          onOpenChange={(v) => setOpen(v ? 'create' : null)}
        />

        {selectedRow && (
          <CompanyMutateDrawer
            key="company-update"
            open={open === 'update'}
            setCompanies={setCompanies}
            onOpenChange={(v) => {
              setOpen(v ? 'update' : null);
              setTimeout(() => {
                setSelectedRow(null);
              }, 500);
            }}
            currentRow={selectedRow}
          />
        )}
        {/* <Sheet
          open={open}
          onOpenChange={(isOpen) => {
            setOpen(isOpen);
            // if (!isOpen) setSelectedRow(null);
          }}
        >
          <SheetContent
            onInteractOutside={(event) => {
              event.preventDefault(); // Prevents closing on outside click
            }}
            className="w-[350px]"
          >
            <SheetHeader>
              <SheetTitle>Edit Company</SheetTitle>
            </SheetHeader>
            <div className="grid flex-1 auto-rows-min gap-6 px-4">
              <div className="grid gap-3">
                <Label htmlFor="sheet-demo-name">Company Name</Label>
                <Input id="companyName" defaultValue="" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="sheet-demo-username">Company Nick Name</Label>
                <Input id="companyNickName" defaultValue="" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="sheet-demo-username">Address</Label>
                <Input id="address" defaultValue="" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="sheet-demo-username">VAT</Label>
                <Input id="vat" defaultValue="" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="sheet-demo-username">EWT</Label>
                <Input id="ewt" defaultValue="" />
              </div>
            </div>
            <SheetFooter>
              <Button className="text-slate-50" type="submit">
                Save changes
              </Button>
              <SheetClose asChild>
                <Button variant="outline">Close</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet> */}

        <DataTable data={companies} columns={newColumns} />
      </section>
    </>
  );
}

export default Company;
