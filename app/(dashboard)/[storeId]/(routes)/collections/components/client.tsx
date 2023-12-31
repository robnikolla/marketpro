"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Category } from "@prisma/client";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { CollectionColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface CollectionClientProps {
  data: CollectionColumn[];
}

export const CollectionClient: React.FC<CollectionClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Collections (${data.length})`}
          description="Manage Collections for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/collections/new`)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name" />
      <Heading title="API" description="API calls for collections" />
      <Separator />
      <ApiList entityName="collections" entityIdName="collectionId" />
    </>
  );
};
