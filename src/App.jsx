import { useState } from 'react'
import './App.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const orders = [
  {
    id: 1,
    name: "John Doe",
    deliveryType: "Regular",
    address: "123 Main St",
    date: "2023-06-20",
  },
  {
    id: 2,
    name: "Jane Smith",
    deliveryType: "Express",
    address: "456 Elm St",
    date: "2023-06-21",
  },
  {
    id: 3,
    name: "Alice Johnson",
    deliveryType: "Regular",
    address: "789 Oak St",
    date: "2023-06-22",
  },
  {
    id: 3,
    name: "Alice Johnson",
    deliveryType: "Regular",
    address: "789 Oak St",
    date: "2023-06-22",
  },
  {
    id: 3,
    name: "Alice Johnson",
    deliveryType: "Regular",
    address: "789 Oak St",
    date: "2023-06-22",
  },
  {
    id: 3,
    name: "Alice Johnson",
    deliveryType: "Regular",
    address: "789 Oak St",
    date: "2023-06-22",
  },
];
function App() {

  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

  const filteredOrders =
    activeTab === "All"
      ? orders
      : orders.filter((order) => order.deliveryType === activeTab);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
       <h1 className='text-2xl text-center'>Order Management System</h1>

<Tabs>
  <TabList>
  <Tab className={activeTab === "All" ? "active-tab" : ""}
          onClick={() => setActiveTab("All")}>All Orders</Tab>
      <Tab className={activeTab === "Regular" ? "active-tab" : ""}
          onClick={() => setActiveTab("Regular")}>Regular Delivery</Tab>
      <Tab className={activeTab === "Express" ? "active-tab" : ""}
          onClick={() => setActiveTab("Express")}>Express Delivery</Tab>
  </TabList>
</Tabs>

<h2>{activeTab} Orders</h2>

<table>
 <thead>
   <tr>
     <th>ID</th>
     <th>Name</th>
     <th>Delivery Type</th>
     <th>Address</th>
     <th>Date</th>
   </tr>
 </thead>
 <tbody>
 {currentOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.name}</td>
              <td>{order.deliveryType}</td>
              <td>{order.address}</td>
              <td>{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {filteredOrders.length > ordersPerPage && (
        <div className="pagination">
          {Array(Math.ceil(filteredOrders.length / ordersPerPage))
            .fill()
            .map((_, index) => (
              <button
                key={index}
                className={currentPage === index + 1 ? "active-page" : ""}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
        </div>
      )}
    </>
  )
}

export default App
