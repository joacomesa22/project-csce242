import React from "react";

const AdminTable = () => {
  return (
    <table class="w-full text-sm text-left rtl:text-right text-[var(--light)] ">
      <thead class="text-xs text-[var(--gold)] uppercase bg-[var(--dark)] border-2 border-[var(--gold)]">
        <tr>
          <th scope="col" class="px-6 py-3">
            Full Name
          </th>
          <th scope="col" class="px-6 py-3">
            Gender
          </th>
          <th scope="col" class="px-6 py-3">
            Country
          </th>
          <th scope="col" class="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="odd:bg-[#2c2c2c] even:bg-[var(--dark)]  border-b ">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Martin Peterson
          </th>
          <td class="px-6 py-4">Male</td>
          <td class="px-6 py-4">Scotland</td>
          <td class="flex items-center px-6 py-4">
            <a
              href="#"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </a>
            <a
              href="#"
              class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
            >
              Delete
            </a>
          </td>
        </tr>
        <tr class="odd:bg-[#2c2c2c] even:bg-[var(--dark)]  border-b ">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Carlos Rodriguez
          </th>
          <td class="px-6 py-4">Male</td>
          <td class="px-6 py-4">Mexico</td>
          <td class="flex items-center px-6 py-4">
            <a
              href="#"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </a>
            <a
              href="#"
              class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
            >
              Delete
            </a>
          </td>
        </tr>
        <tr class="odd:bg-[#2c2c2c] even:bg-[var(--dark)]  border-b ">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Taylor Hamilton
          </th>
          <td class="px-6 py-4">Female</td>
          <td class="px-6 py-4">Germany</td>
          <td class="flex items-center px-6 py-4">
            <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              Edit
            </button>
            <button class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default AdminTable;
