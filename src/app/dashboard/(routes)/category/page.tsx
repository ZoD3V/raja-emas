import React from "react";
import { CategoryColumn } from "./components/columns";
import { format } from "date-fns";
import CategoryClient from "./components/client";
import { prisma } from "@/lib/prisma";

const CategoryPage = async () => {
  const category = await prisma.category.findMany();

  const formattedCategory: CategoryColumn[] = category.map((item) => ({
    id: item.id,
    name: item.name,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 px-4 py-8 pt-6">
        <CategoryClient data={formattedCategory} />
      </div>
    </div>
  );
};

export default CategoryPage;
