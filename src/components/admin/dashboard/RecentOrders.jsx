"use client";
import React, { useEffect, useState } from "react";

const RecentOrders = () => {
  const [orders, setOrders] = useState([]);
  const pageSize = 2;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.orders);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Pagination for Orders Table
  const index = (currentPage - 1) * pageSize;
  const lastIndex = index + pageSize;
  const currentOrders = orders.slice(index, lastIndex);

  const totalPages = Math.ceil(orders.length / pageSize);
  const startItemIndex = index + 1;
  const lastItemIndex = Math.min(index + pageSize, orders.length);
  const totalOrders = orders.length;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalOrders / pageSize); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="py-10">
      <h2 className="text-xl text-black dark:text-white mb-3">Recent Orders</h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg pb-2 lg:px-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200">
          <thead className="bg-gray-50 dark:bg-gray-700 text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Order ID
              </th>
              <th scope="col" className="px-6 py-3">
                Customer
              </th>
              <th scope="col" className="px-6 py-3">
                Order Date
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Total Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Payment Method
              </th>
              <th scope="col" className="px-6 py-3">
                Shipping Method
              </th>
              <th scope="col" className="px-6 py-3">
                Products
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order, i) => (
              <tr
                key={order.orderId}
                className="hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-table-search-${i}`}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor={`checkbox-table-search-${i}`}
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <td className="px-6 py-4">{order.orderId}</td>
                <td className="px-6 py-4">
                  {order.customer.name}
                  <br />
                  <a
                    href={`mailto:${order.customer.email}`}
                    className="text-blue-600 dark:text-blue-500"
                  >
                    {order.customer.email}
                  </a>
                </td>
                <td className="px-6 py-4">
                  {new Date(order.orderDate).toLocaleString()}
                </td>
                <td className="px-6 py-4">{order.status}</td>
                <td className="px-6 py-4">${order.totalAmount.toFixed(2)}</td>
                <td className="px-6 py-4">{order.paymentMethod}</td>
                <td className="px-6 py-4">{order.shippingMethod}</td>
                <td className="px-6 py-4">
                  {order.products.map((product) => (
                    <div key={product.productId} className="mb-2">
                      {product.name} - {product.quantity} pcs @ $
                      {product.price.toFixed(2)} each
                    </div>
                  ))}
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav
          className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Showing{" "}
            <span className="font-semibold text-black dark:text-white">
              {startItemIndex}-{lastItemIndex}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-black dark:text-white">
              {totalOrders}
            </span>
          </span>
          <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            {currentPage > 1 && <li>
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                href="#"
                className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
              >
                Previous
              </button>
            </li>}
            {pageNumbers.map((number) => (
              <li>
                <button
                  key={number}
                  onClick={()=> setCurrentPage(number)}
                  className={`${currentPage == number ? "text-white bg-blue-600 border border-blue-600 hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" } flex items-center justify-center px-3 h-8 leading-tight `}
                >
                  {number}
                </button>
              </li>
            ))}
            {currentPage !== totalPages && <li>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </button>
            </li>}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default RecentOrders;
