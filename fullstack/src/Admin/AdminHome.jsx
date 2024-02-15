import {
  DollarCircleOutlined,
  EyeOutlined,
  ClockCircleOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory, getOrders, getRevenue } from "../API";
import Header from './Header'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import NavBar from '../NavBar'
import NavBar1 from "../NavBar1";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function AdminHome() {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(2563);
      setRevenue(1000);
    });
    getInventory().then((res) => {
      setInventory(2000);
    });
    getCustomers().then((res) => {
      setCustomers(1000);
    });
  }, []);

  return (
  <div className='App1'>
   <NavBar1/>
    <div className="SideMenuAndPageContent">
    <Header/>
    
    <div className="das">
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>UserDetails</Typography.Title>
      <Space direction="horizontal" style={{minWidth:'870px'}}>
        
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Processing"}
          value={customers}
        />
       
        <DashboardCard
              icon={
                <ClockCircleOutlined  // Use ClockCircleOutlined for pending status
                  style={{
                    color: "orange",  // Adjust color as needed
                    backgroundColor: "rgba(255,165,0,0.25)",  // Adjust background color as needed
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                  }}
                />
              }
              title={"Payment"}
              value={revenue}
            />
      </Space>
      <Space  style={{minWidth:'1070px'}}>
        <RecentOrders />
        <DashboardChart />
      </Space>
    </Space>
    </div>
    </div>
    </div>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}
function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const staticDataSource = [
    {
      key: '1',
      title: ' 1',
      quantity: ' Birthday',
      discountedPrice: 'John Doe',
      Booking:'Processing',
      approvalStatus: 'Paid',
    },
    {
      key: '2',
      title: '4',
      quantity: ' Party',
      discountedPrice: 'Jane Doe',
      Booking:'Pending',
      approvalStatus: 'Pending',
    },
    {
      key: '3',
      title: '7',
      quantity: 'Wedding',
      discountedPrice: 'Alice Smith',
      Booking:'Paid',
      approvalStatus: 'Paid',
    },
    {
      key: '3',
      title: '8',
      quantity: 'Summer party',
      discountedPrice: 'Alice Smith',
      Booking:'Unavailable',
      approvalStatus: 'Paid',
    },
    {
      key: '5',
      title: '8',
      quantity: 'Summer party',
      discountedPrice: 'Alice Smith',
      Booking:'Unavailable',
      approvalStatus: 'Paid',
    },
    // Add more static data as needed
  ];
  
  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products.splice(0, 3));
      setLoading(false);
    });
  }, []);

  return (
    <div style={{width:'450px'}}>
    <Typography.Text>Recent Requests</Typography.Text>
      <Space direction="vertical" style={{ marginTop: '16px'}}>
        <Table
          columns={[
            {
              title: 'Id',
              dataIndex: 'title',
            },
            {
              title: 'Event Name',
              dataIndex: 'quantity',
            },
            {
              title: 'UserName',
              dataIndex: 'discountedPrice',
            },
            {
              title: 'Booking Status',
              dataIndex: 'Booking',
            },
            {
              title: 'Payment Status',
              dataIndex: 'approvalStatus',
            },
          ]}
          dataSource={staticDataSource}
          pagination={false}

          style={{width:'550px',height:'200px'}}
          
        />
      </Space>
      </div>
  );
}

function DashboardChart() {
  const [reveneuData, setReveneuData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getRevenue().then((res) => {
      const labels = res.carts.map((cart) => {
        return `User-${cart.userId}`;
      });
      const data = res.carts.map((cart) => {
        return cart.discountedTotal;
      });

      const dataSource = {
        labels,
        datasets: [
          {
            label: "Loan Applied As Of Now",
            data: data,
            backgroundColor: "rgba(255, 0, 0, 1)",
          },
        ],
      };

      setReveneuData(dataSource);
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Most Frequently Loan Applied User",
      },
    },
  };

 
}
export default AdminHome;