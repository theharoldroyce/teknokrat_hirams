import { boolean, z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

const formSchema = z.object({
  companyName: z.string().min(1, 'Company Name is required.'),
  companyNickName: z.string(),
  address: z.string().min(1, 'Address is required'),
  vat: z.preprocess((val) => {
    if (typeof val === 'string') return val === 'true';
    return Boolean(val);
  }, z.boolean()),
  ewt: z.preprocess((val) => {
    if (typeof val === 'string') return val === 'true';
    return Boolean(val);
  }, z.boolean()),
});

export const CompanyMutateDrawer = ({
  open,
  onOpenChange,
  currentRow,
  setCompanies,
}) => {
  const isUpdate = !!currentRow;

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: currentRow?.companyName ?? '',
      companyNickName: currentRow?.companyNickName ?? '',
      address: currentRow?.address ?? '',
      vat: currentRow?.vat ?? false,
      ewt: currentRow?.ewt ?? false,
    },
  });

  const onSubmit = async (data) => {
    onOpenChange(false);

    if (!currentRow) {
      // Call your POST API route
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/company`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            strCompanyName: data.companyName,
            strCompanyNickName: data.companyNickName,
            strTIN: null,
            strAddress: data.address,
            bVAT: data.vat,
            bEWT: data.ewt,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to create company');
      }

      const { company: newCompany } = await response.json();

      const {
        nCompanyId,
        strCompanyName,
        strCompanyNickName,
        strTIN,
        strAddress,
        bVAT,
        bEWT,
      } = newCompany;

      // Update local state with the new company
      setCompanies((prev) => [
        ...prev,
        {
          id: nCompanyId,
          companyName: strCompanyName,
          companyNickName: strCompanyNickName,
          // tin: strTIN,
          address: strAddress,
          vat: bVAT,
          ewt: bEWT,
        },
      ]);
    } else {
      setCompanies((prev) =>
        prev.map((company) =>
          company.id === currentRow.id
            ? { ...company, ...data, id: currentRow.id } // keep id
            : company
        )
      );
    }
    console.log('data', data);

    form.reset();
  };

  return (
    <Sheet
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        form.reset();
      }}
    >
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>{isUpdate ? 'Update' : 'Create'}</SheetTitle>
        </SheetHeader>
        <SheetDescription />
        <Form {...form}>
          <form
            id="company-form"
            className="flex-1 space-y-5 px-4"
            onSubmit={form.handleSubmit(onSubmit, (err) => {
              console.log(err);
            })}
          >
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter a company name" />
                    </FormControl>
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="companyNickName"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Company Nickname</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter company nickname" />
                    </FormControl>
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter company address" />
                    </FormControl>
                  </FormItem>
                );
              }}
            />

            {/* <FormField
              control={form.control}
              name="vat"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>VAT</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        onChange={(e) => field.onChange(e.target.value)}
                        placeholder="Enter VAT"
                      />
                    </FormControl>
                  </FormItem>
                );
              }}
            /> */}

            {/* <FormField
              control={form.control}
              name="ewt"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>EWT</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        onChange={(e) => field.onChange(e.target.value)}
                        placeholder="Enter EWT"
                      />
                    </FormControl>
                  </FormItem>
                );
              }}
            /> */}
          </form>
        </Form>
        <SheetFooter className="gap-2">
          <Button className="text-slate-50" form="company-form" type="submit">
            Save changes
          </Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
