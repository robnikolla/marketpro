"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Image as ImageProps } from "@prisma/client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ProductColumn = {
  id: string;
  name: string;
  price: string;
  size: string;
  category: string;
  color: string;
  isFeatured: boolean;
  isArchived: boolean;
  createdAt: string;
  image: string;
};

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="flex flex-row items-center gap-x-5">
        <div className="flex items-center justify-center p-2 border rounded-lg ">
          <Image
            src={row?.original?.image}
            alt="Product"
            width={30}
            height={30}
          />
        </div>
        <p>{row.original.name}</p>
      </div>
    ),
  },
  {
    accessorKey: "isFeatured",
    header: "Status",
    cell: ({ row }) => {
      if (row.original.isFeatured && !row.original.isArchived) {
        return (
          <div className="flex ">
            <p className="px-3 py-1 text-xs font-semibold text-center text-green-900 bg-green-200 rounded-lg ">
              Active
            </p>
          </div>
        );
      } else {
        return (
          <div className="flex">
            <p className="px-3 py-1 text-xs font-semibold text-center rounded-lg text-slate-900 bg-slate-200">
              Disabled
            </p>
          </div>
        );
      }
    },
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "size",
    header: "Size",
  },
  {
    accessorKey: "color",
    header: "Color",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        {row.original.color}
        <div
          className="w-6 h-6 border rounded-lg"
          style={{ backgroundColor: row.original.color }}
        ></div>
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
