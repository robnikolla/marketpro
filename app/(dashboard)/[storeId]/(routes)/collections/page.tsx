import prismadb from "@/lib/prismadb";
import { format } from "date-fns";

import { CollectionClient } from "./components/client";
import { CollectionColumn } from "./components/columns";

const CollectionsPage = async ({ params }: { params: { storeId: string } }) => {
  const collections = await prismadb.collection.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      products: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const formattedCollections: CollectionColumn[] = collections.map((item) => ({
    id: item.id,
    name: item.name,
    products: item.products.length,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));
  return (
    <div className="flex-col ">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <CollectionClient data={formattedCollections} />
      </div>
    </div>
  );
};

export default CollectionsPage;
