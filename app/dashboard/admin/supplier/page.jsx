"use client";

import React from "react";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, Pencil, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetFooter,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";

import {
  IconCircleCheckFilled,
  IconLoader,
  IconCirclePlusFilled,
  IconCircleFilled,
} from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

const data = [
  {
    id: "sup001",
    supplierName: "GreenLeaf Supplies Co.",
    nickname: "GreenLeaf",
    address: "123 Palm Street, Makati City",
    email: "info@greenleaf.com",
    phone: "+63 917 123 4567",
    bankAccountName: "GreenLeaf Supplies Co.",
    bankAccountNumber: "123456789012",
    tin: "123-456-789",
    vat: "12%",
    ewt: "2%",
  },
  {
    id: "sup002",
    supplierName: "MetroTech Innovations",
    nickname: "MetroTech",
    address: "45 Tech Park, Quezon City",
    email: "contact@metrotech.ph",
    phone: "+63 927 555 7890",
    bankAccountName: "MetroTech Innovations",
    bankAccountNumber: "234567890123",
    tin: "456-789-123",
    vat: "12%",
    ewt: "1%",
  },
  {
    id: "sup003",
    supplierName: "Sunrise Print House",
    nickname: "SunrisePrint",
    address: "789 Ink Road, Pasig City",
    email: "sunrise@prints.ph",
    phone: "+63 915 321 8765",
    bankAccountName: "Sunrise Print House",
    bankAccountNumber: "345678901234",
    tin: "321-654-987",
    vat: "12%",
    ewt: "2%",
  },
  {
    id: "sup004",
    supplierName: "FreshHarvest Traders",
    nickname: "FreshHarvest",
    address: "567 Agri Lane, Tagaytay",
    email: "orders@freshharvest.com",
    phone: "+63 926 888 3322",
    bankAccountName: "FreshHarvest Traders",
    bankAccountNumber: "456789012345",
    tin: "654-321-789",
    vat: "0%",
    ewt: "2%",
  },
  {
    id: "sup005",
    supplierName: "Bright Lights Electrical",
    nickname: "BrightLights",
    address: "101 Bulb Avenue, Manila",
    email: "sales@brightlights.ph",
    phone: "+63 918 112 3344",
    bankAccountName: "Bright Lights Electrical",
    bankAccountNumber: "567890123456",
    tin: "789-123-456",
    vat: "12%",
    ewt: "1%",
  },
  {
    id: "sup006",
    supplierName: "EcoPack Solutions",
    nickname: "EcoPack",
    address: "32 Recycle Blvd, Caloocan",
    email: "support@ecopack.ph",
    phone: "+63 917 000 8899",
    bankAccountName: "EcoPack Solutions",
    bankAccountNumber: "678901234567",
    tin: "147-258-369",
    vat: "12%",
    ewt: "2%",
  },
  {
    id: "sup007",
    supplierName: "Island Brew Coffee Co.",
    nickname: "IslandBrew",
    address: "12 Bean Street, Cebu City",
    email: "hello@islandbrew.com",
    phone: "+63 922 444 1122",
    bankAccountName: "Island Brew Coffee Co.",
    bankAccountNumber: "789012345678",
    tin: "963-852-741",
    vat: "12%",
    ewt: "2%",
  },
  {
    id: "sup008",
    supplierName: "PureWater Distributors",
    nickname: "PureWater",
    address: "88 Spring Road, Davao",
    email: "delivery@purewater.ph",
    phone: "+63 925 333 4477",
    bankAccountName: "PureWater Distributors",
    bankAccountNumber: "890123456789",
    tin: "321-987-654",
    vat: "12%",
    ewt: "1%",
  },
  {
    id: "sup009",
    supplierName: "SkyNet Logistics",
    nickname: "SkyNet",
    address: "5 Freight Ave, Clark",
    email: "logistics@skynet.com",
    phone: "+63 910 222 3344",
    bankAccountName: "SkyNet Logistics",
    bankAccountNumber: "901234567890",
    tin: "456-321-123",
    vat: "12%",
    ewt: "1%",
  },
  {
    id: "sup010",
    supplierName: "PixelForge Studios",
    nickname: "PixelForge",
    address: "201 Creative Hub, BGC",
    email: "hi@pixelforge.ph",
    phone: "+63 917 666 7788",
    bankAccountName: "PixelForge Studios",
    bankAccountNumber: "112233445566",
    tin: "852-963-741",
    vat: "12%",
    ewt: "2%",
  },
  {
    id: "sup011",
    supplierName: "North Star Textiles",
    nickname: "NorthStar",
    address: "403 Weave St., Ilocos Norte",
    email: "sales@northstartextiles.com",
    phone: "+63 923 555 6655",
    bankAccountName: "North Star Textiles",
    bankAccountNumber: "223344556677",
    tin: "741-852-963",
    vat: "12%",
    ewt: "2%",
  },
  {
    id: "sup012",
    supplierName: "Ace Printing Services",
    nickname: "AcePrint",
    address: "77 Layout Lane, Bacolod",
    email: "contact@aceprint.ph",
    phone: "+63 916 444 7788",
    bankAccountName: "Ace Printing Services",
    bankAccountNumber: "334455667788",
    tin: "159-357-258",
    vat: "12%",
    ewt: "2%",
  },
  {
    id: "sup013",
    supplierName: "Mountain Fresh Produce",
    nickname: "MountainFresh",
    address: "301 Farm Road, Baguio",
    email: "fresh@mountainfresh.com",
    phone: "+63 924 889 6677",
    bankAccountName: "Mountain Fresh Produce",
    bankAccountNumber: "445566778899",
    tin: "753-159-456",
    vat: "0%",
    ewt: "1%",
  },
  {
    id: "sup014",
    supplierName: "SmartTech Gadgets",
    nickname: "SmartTech",
    address: "88 Silicon Ave, Makati",
    email: "info@smarttech.ph",
    phone: "+63 927 123 9876",
    bankAccountName: "SmartTech Gadgets",
    bankAccountNumber: "556677889900",
    tin: "258-369-147",
    vat: "12%",
    ewt: "1%",
  },
  {
    id: "sup015",
    supplierName: "Blue Ocean Seafood",
    nickname: "BlueOcean",
    address: "Seafood Market, Navotas",
    email: "order@blueocean.ph",
    phone: "+63 915 101 2020",
    bankAccountName: "Blue Ocean Seafood",
    bankAccountNumber: "667788990011",
    tin: "369-147-258",
    vat: "0%",
    ewt: "2%",
  },
  {
    id: "sup016",
    supplierName: "UrbanBuild Supplies",
    nickname: "UrbanBuild",
    address: "190 Hardware Zone, QC",
    email: "inquiries@urbanbuild.com",
    phone: "+63 926 505 6060",
    bankAccountName: "UrbanBuild Supplies",
    bankAccountNumber: "778899001122",
    tin: "147-369-258",
    vat: "12%",
    ewt: "2%",
  },
  {
    id: "sup017",
    supplierName: "LuxePaper & Co.",
    nickname: "LuxePaper",
    address: "Stationery Road, Ortigas",
    email: "office@luxepaper.com",
    phone: "+63 911 333 7777",
    bankAccountName: "LuxePaper & Co.",
    bankAccountNumber: "889900112233",
    tin: "951-753-159",
    vat: "12%",
    ewt: "1%",
  },
  {
    id: "sup018",
    supplierName: "Golden Wheat Bakery",
    nickname: "GoldenWheat",
    address: "Bakery Drive, Laguna",
    email: "golden@wheatbakery.com",
    phone: "+63 917 878 9898",
    bankAccountName: "Golden Wheat Bakery",
    bankAccountNumber: "990011223344",
    tin: "654-987-321",
    vat: "12%",
    ewt: "1%",
  },
  {
    id: "sup019",
    supplierName: "CleanAir Filters",
    nickname: "CleanAir",
    address: "10 Airway Blvd, Pampanga",
    email: "clean@airfilters.ph",
    phone: "+63 913 223 4455",
    bankAccountName: "CleanAir Filters",
    bankAccountNumber: "101112131415",
    tin: "963-147-258",
    vat: "12%",
    ewt: "2%",
  },
  {
    id: "sup020",
    supplierName: "QuickFix Repair Center",
    nickname: "QuickFix",
    address: "22 Wrench Ave, Marikina",
    email: "service@quickfix.ph",
    phone: "+63 919 999 1212",
    bankAccountName: "QuickFix Repair Center",
    bankAccountNumber: "121314151617",
    tin: "753-456-852",
    vat: "12%",
    ewt: "2%",
  },
];

export default function SupplierPage() {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [supplierInfo, setSupplierInfo] = React.useState(null);
  const [hasMounted, setHasMounted] = React.useState(false);
  const [deleteSupplier, setDeleteSupplier] = React.useState(null);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  const isEditMode = !!supplierInfo?.id;

  const statusOptions = ["active", "inactive"];

  const columns = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "supplierName",
      header: "Supplier Name",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("supplierName")}</div>
      ),
    },
    {
      accessorKey: "nickname",
      header: "Nickname",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("nickname")}</div>
      ),
    },
    {
      accessorKey: "address",
      header: "Address",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("address")}</div>
      ),
    },

    {
      accessorKey: "email",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Email
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("email")}</div>
      ),
    },
    {
      accessorKey: "phone",
      header: "Phone Number",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("phone")}</div>
      ),
    },
    {
      accessorKey: "bankAccountName",
      header: "Bank Account Name",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("bankAccountName")}</div>
      ),
    },
    {
      accessorKey: "bankAccountNumber",
      header: "Bank Account Number",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("bankAccountNumber")}</div>
      ),
    },
    {
      accessorKey: "tin",
      header: "TIN Number",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("tin")}</div>
      ),
    },
    {
      accessorKey: "vat",
      header: "VAT",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("vat")}</div>
      ),
    },
    {
      accessorKey: "ewt",
      header: "EWT",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("ewt")}</div>
      ),
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const info = row.original;

        return (
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setSupplierInfo(info)}
            >
              <Pencil className="h-4 w-4" />
              <span className="sr-only">Edit</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setDeleteSupplier(info)}
            >
              <Trash2 className="h-4 w-4 text-red-500" />
              <span className="sr-only">Delete</span>
            </Button>
          </div>
        );
      },
    },
  ];
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={table.getColumn("email")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <Button
          variant="outline"
          className="ml-auto"
          onClick={() =>
            setSupplierInfo({
              id: "",
              supplierName: "",
              nickname: "",
              address: "",
              email: "",
              phone: "",
              bankAccountName: "",
              bankAccountNumber: "",
              tin: "",
              vat: "",
              ewt: "",
            })
          }
        >
          <IconCirclePlusFilled /> Add Supplier
        </Button>
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
      <Sheet open={!!supplierInfo} onOpenChange={() => setSupplierInfo(null)}>
        {hasMounted && (
          <Sheet
            open={!!supplierInfo}
            onOpenChange={() => setSupplierInfo(null)}
          >
            <SheetContent side="right" className="w-[400px] sm:w-[540px] ">
              <SheetHeader>
                <SheetTitle>
                  {isEditMode ? "Edit Details" : "Add New Supplier"}
                </SheetTitle>
                <SheetDescription>
                  Update the supplier information below.
                </SheetDescription>
              </SheetHeader>

              {supplierInfo && (
                <div className="mt-4 space-y-4 px-4">
                  <div>
                    <div className="w-full">
                      {supplierInfo.supplierName && (
                        <label className="text-sm font-medium mb-1 block">
                          Supplier Name
                        </label>
                      )}
                      <Input
                        value={supplierInfo.supplierName ?? ""}
                        placeholder={
                          !supplierInfo.supplierName ? "Supplier Name" : ""
                        }
                        onChange={(e) =>
                          setSupplierInfo({
                            ...supplierInfo,
                            supplierName: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <div className="w-full">
                      {supplierInfo.nickname && (
                        <label className="text-sm font-medium mb-1 block">
                          Supplier Nickname
                        </label>
                      )}
                      <Input
                        value={supplierInfo.nickname ?? ""}
                        placeholder={
                          !supplierInfo.nickname ? "Supplier Nickname" : ""
                        }
                        onChange={(e) =>
                          setSupplierInfo({
                            ...supplierInfo,
                            nickname: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <div className="w-full">
                      {supplierInfo.address && (
                        <label className="text-sm font-medium mb-1 block">
                          Supplier Address
                        </label>
                      )}
                      <Input
                        value={supplierInfo.address ?? ""}
                        placeholder={
                          !supplierInfo.address ? "Supplier Address" : ""
                        }
                        onChange={(e) =>
                          setSupplierInfo({
                            ...supplierInfo,
                            address: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <div className="w-full">
                      {supplierInfo.email && (
                        <label className="text-sm font-medium mb-1 block">
                          Email
                        </label>
                      )}
                      <Input
                        value={supplierInfo.email ?? ""}
                        placeholder={!supplierInfo.email ? "Email" : ""}
                        onChange={(e) =>
                          setSupplierInfo({
                            ...supplierInfo,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <div className="w-full">
                      {supplierInfo.phone && (
                        <label className="text-sm font-medium mb-1 block">
                          Phone Number
                        </label>
                      )}
                      <Input
                        value={supplierInfo.phone ?? ""}
                        placeholder={!supplierInfo.phone ? "Phone Number" : ""}
                        onChange={(e) =>
                          setSupplierInfo({
                            ...supplierInfo,
                            phone: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <div className="w-full">
                      {supplierInfo.bankAccountName && (
                        <label className="text-sm font-medium mb-1 block">
                          Bank Account Name
                        </label>
                      )}
                      <Input
                        value={supplierInfo.bankAccountName ?? ""}
                        placeholder={
                          !supplierInfo.bankAccountName
                            ? "Bank Account Name"
                            : ""
                        }
                        onChange={(e) =>
                          setSupplierInfo({
                            ...supplierInfo,
                            bankAccountName: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <div className="w-full">
                      {supplierInfo.bankAccountNumber && (
                        <label className="text-sm font-medium mb-1 block">
                          Bank Account Number
                        </label>
                      )}
                      <Input
                        value={supplierInfo.bankAccountNumber ?? ""}
                        placeholder={
                          !supplierInfo.bankAccountNumber
                            ? "Bank Account Number"
                            : ""
                        }
                        onChange={(e) =>
                          setSupplierInfo({
                            ...supplierInfo,
                            bankAccountNumber: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <div className="w-full">
                      {supplierInfo.tin && (
                        <label className="text-sm font-medium mb-1 block">
                          Tin Number
                        </label>
                      )}
                      <Input
                        value={supplierInfo.tin ?? ""}
                        placeholder={!supplierInfo.tin ? "Tin Number" : ""}
                        onChange={(e) =>
                          setSupplierInfo({
                            ...supplierInfo,
                            tin: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <div className="w-full">
                      {supplierInfo.vat && (
                        <label className="text-sm font-medium mb-1 block">
                          Vat
                        </label>
                      )}
                      <Input
                        value={supplierInfo.vat ?? ""}
                        placeholder={!supplierInfo.vat ? "Vat" : ""}
                        onChange={(e) =>
                          setSupplierInfo({
                            ...supplierInfo,
                            vat: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <div className="w-full">
                      {supplierInfo.ewt && (
                        <label className="text-sm font-medium mb-1 block">
                          EWT
                        </label>
                      )}
                      <Input
                        value={supplierInfo.ewt ?? ""}
                        placeholder={!supplierInfo.ewt ? "EWT" : ""}
                        onChange={(e) =>
                          setSupplierInfo({
                            ...supplierInfo,
                            ewt: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              )}
              <SheetFooter>
                <div className="mt-auto flex flex-col gap-2">
                  <Button type="submit">Save changes</Button>
                  <SheetClose asChild>
                    <Button variant="outline" className="w-full">
                      Close
                    </Button>
                  </SheetClose>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        )}
      </Sheet>

      {deleteSupplier && (
        <AlertDialog
          open={!!deleteSupplier}
          onOpenChange={(open) => !open && setDeleteSupplier(null)}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Supplier</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete{" "}
                <strong>{deleteSupplier.supplierName}</strong>? This action
                cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setDeleteSupplier(null)}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  console.log("Delete confirmed:", deleteSupplier);
                  setDeleteSupplier(null); // close modal
                  // Add actual deletion logic here (API call or local state update)
                }}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
}
