'use client';

import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';

import { labels, priorities, statuses } from '../shared/data-table/data';
import { DataTableColumnHeader } from '../shared/data-table/data-table-column-header';
import { DataTableRowActions } from '../shared/data-table/data-table-row-actions';

export const columns = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue('id')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'companyName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Company Name" />
    ),
    cell: ({ row }) => {
      // const label = labels.find((label) => label.value === row.original.label);

      return (
        <div className="flex gap-2">
          {/* {label && <Badge variant="outline">{label.label}</Badge>} */}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue('companyName')}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'companyNickName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Company Nickname" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center gap-2">
          {row.getValue('companyName')}
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'address',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Address" />
    ),
    cell: ({ row }) => {

      return (
        <div className="flex items-center gap-2">
          <span>{row.getValue('address')}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
   {
    accessorKey: 'vat',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="VAT" />
    ),
    cell: ({ row }) => {

      return (
        <div className="flex items-center gap-2">
          <span>{row.getValue('vat')}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
   {
    accessorKey: 'ewt',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="EWT" />
    ),
    cell: ({ row }) => {

      return (
        <div className="flex items-center gap-2">
          <span>{row.getValue('ewt')}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: 'actions',
    // cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
