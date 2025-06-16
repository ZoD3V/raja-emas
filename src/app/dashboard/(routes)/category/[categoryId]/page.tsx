import React from "react";
import CategoryForm from "../components/category-form";
import { prisma } from "@/lib/prisma";

const AddCategoryPage = async () => {
  const [category] = await prisma.category.findMany();

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 px-4 py-8 pt-6">
        <CategoryForm initialData={category} />
      </div>
    </div>
  );
};

export default AddCategoryPage;
