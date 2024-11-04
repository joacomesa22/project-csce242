import React from "react";
import AdminTable from "../../components/AdminTable";

const TableSection = () => {
  return (
    <section class="flex justify-center px-4">
      <div class="relative overflow-x-auto max-w-screen-xl w-full">
        <AdminTable />
      </div>
    </section>
  );
};

export default TableSection;
