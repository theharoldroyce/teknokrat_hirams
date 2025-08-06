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
    id: "m5gr84i9",
    name: "Isabella Morgan Reyes",
    email: "ken99@example.com",
    company: "Tech Solutions Inc.",
    role: "admin",
    status: "active",
  },
  {
    id: "3u1reuv4",
    name: "Ethan Alexander Cruz",
    email: "Abe45@example.com",
    company: "Innovatech Solutions",
    role: "procurement team lead",
    status: "inactive",
  },
  {
    id: "derv1ws0",
    name: "Sofia Gabrielle Mendoza",
    email: "Monserrat44@example.com",
    company: "Creative Solutions",
    role: "procurement officer",
    status: "active",
  },
  {
    id: "5kma53ae",
    name: "Noah Emmanuel Garcias",
    email: "Silas22@example.com",
    company: "Tech Solutions Inc.",
    role: "account officer",
    status: "active",
  },
  {
    id: "bhqecj4p",
    name: "Benjamin Elijah Flores",
    email: "carmella@example.com",
    company: "Creative Solutions",
    role: "account officer",
    status: "inactive",
  },
];

export default function DataTableDemo() {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [userInfo, setUserInfo] = React.useState(null);
  const [hasMounted, setHasMounted] = React.useState(false);
  const [deleteUser, setDeleteUser] = React.useState(null);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  const isEditMode = !!userInfo?.id;

  const statusOptions = ["active", "inactive"];

  const roleOptions = [
    "admin",
    "procurement team lead",
    "procurement officer",
    "account officer",
  ];

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
      accessorKey: "name",
      header: "Fullame",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("name")}</div>
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
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.original.status?.toLowerCase();

        const isActive = status === "active";

        return (
          <Badge
            variant="outline"
            className="text-muted-foreground px-1.5 gap-1 inline-flex items-center"
          >
            {isActive ? (
              <IconCircleCheckFilled className="w-4 h-4 fill-green-500 dark:fill-green-400" />
            ) : (
              <IconCircleFilled className="w-4 h-4 fill-red-500 dark:fill-red-400" />
            )}
            <span className="capitalize">{row.original.status}</span>
          </Badge>
        );
      },
    },
    {
      accessorKey: "role",
      header: "Role",
      cell: ({ row }) => (
        <div className="capitalize">
          <Badge variant="outline" className="text-muted-foreground px-1.5">
            {row.getValue("role")}
          </Badge>
        </div>
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
              onClick={() => setUserInfo(info)}
            >
              <Pencil className="h-4 w-4" />
              <span className="sr-only">Edit</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setDeleteUser(info)}
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
            setUserInfo({
              id: "",
              name: "",
              email: "",
              company: "",
              role: "",
              status: "",
            })
          }
        >
          <IconCirclePlusFilled /> Add new user
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
      <Sheet open={!!userInfo} onOpenChange={() => setUserInfo(null)}>
        {hasMounted && (
          <Sheet open={!!userInfo} onOpenChange={() => setUserInfo(null)}>
            <SheetContent side="right" className="w-[400px] sm:w-[540px] ">
              <SheetHeader>
                <SheetTitle>
                  {isEditMode ? "Edit Details" : "Add New User"}
                </SheetTitle>
                <SheetDescription>
                  Update the user information below.
                </SheetDescription>
              </SheetHeader>

              {userInfo && (
                <div className="mt-4 space-y-4 px-4">
                  <div>
                    <div className="w-full">
                      {userInfo.name && (
                        <label className="text-sm font-medium mb-1 block">
                          Fullname
                        </label>
                      )}
                      <Input
                        value={userInfo.name ?? ""}
                        placeholder={!userInfo.name ? "Fullname" : ""}
                        onChange={(e) =>
                          setUserInfo({ ...userInfo, name: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <div className="w-full">
                      {userInfo.email && (
                        <label className="text-sm font-medium mb-1 block">
                          Email
                        </label>
                      )}
                      <Input
                        value={userInfo.email ?? ""}
                        placeholder={!userInfo.email ? "Email" : ""}
                        onChange={(e) =>
                          setUserInfo({ ...userInfo, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <div className="w-full">
                      {userInfo.status && (
                        <label className="text-sm font-medium mb-1 block">
                          Status
                        </label>
                      )}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="outline"
                            className={`w-full justify-start capitalize font-medium ${
                              !userInfo.status ? "text-muted-foreground" : ""
                            }`}
                          >
                            {userInfo.status || "Status"}
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="min-w-[var(--radix-dropdown-menu-trigger-width)] font-medium">
                          {statusOptions.map((status) => (
                            <DropdownMenuItem
                              key={status}
                              onClick={() =>
                                setUserInfo({ ...userInfo, status })
                              }
                              className="capitalize"
                            >
                              {status}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                  <div className="w-full">
                    {userInfo.role && (
                      <label className="text-sm font-medium mb-1 block">
                        User role
                      </label>
                    )}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          className={`w-full justify-start capitalize ${
                            !userInfo.role ? "text-muted-foreground" : ""
                          }`}
                        >
                          {userInfo.role || "User Role"}
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent
                        className="min-w-[var(--radix-dropdown-menu-trigger-width)]"
                        align="start"
                        sideOffset={4}
                      >
                        {roleOptions.map((role) => (
                          <DropdownMenuItem
                            key={role}
                            onClick={() => setUserInfo({ ...userInfo, role })}
                            className="capitalize"
                          >
                            {role}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              )}
              <SheetFooter>
                <div className="mt-auto flex flex-col gap-2">
                  <Button type="submit">Save changes</Button>
                  <SheetClose>
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

        
      {deleteUser && (
        <AlertDialog
          open={!!deleteUser}
          onOpenChange={(open) => !open && setDeleteUser(null)}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete User</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete{" "}
                <strong>{deleteUser.name}</strong>? This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setDeleteUser(null)}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  console.log("Delete confirmed:", deleteUser);
                  setDeleteUser(null); // close modal
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
