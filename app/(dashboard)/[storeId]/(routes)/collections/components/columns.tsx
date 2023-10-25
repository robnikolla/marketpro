"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Product } from "@prisma/client";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type CollectionColumn = {
  id: string;
  name: string;
  products: Product[];
  createdAt: string;
};

export const columns: ColumnDef<CollectionColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "products",
    header: "Products",
    cell: ({ row }) => row.original.products.length,
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
