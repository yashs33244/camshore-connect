import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  Package2,
  PhoneCall,
  ShoppingCart,
  Users,
  Home,
  TrendingUp,
  AlertCircle,
  DollarSign,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

const salesData = [
  { name: "Jan", revenue: 40000, orders: 420, customers: 380 },
  { name: "Feb", revenue: 35000, orders: 380, customers: 350 },
  { name: "Mar", revenue: 48000, orders: 450, customers: 420 },
  { name: "Apr", revenue: 52000, orders: 480, customers: 440 },
  { name: "May", revenue: 58000, orders: 520, customers: 490 },
  { name: "Jun", revenue: 65000, orders: 580, customers: 520 },
];

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) {
        navigate("/login");
      }
    };
    checkAuth();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-primary">
              Executive Dashboard
            </h1>
            <p className="text-gray-500 mt-1">
              Real-time business performance metrics
            </p>
          </div>
          <Button
            className="flex items-center gap-2 text-white"
            onClick={() => navigate("/")}
          >
            <Home className="h-4 w-4 text-white" />
            Return to Landing Page
          </Button>
        </div>

        {/* Enhanced Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Revenue Performance
              </CardTitle>
              <DollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$65,000</div>
              <div className="flex items-center">
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                <p className="text-xs text-green-500">
                  +15.4% from previous month
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Monthly target: $70,000
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Product Performance
              </CardTitle>
              <Package2 className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45</div>
              <div className="flex flex-col">
                <p className="text-xs text-green-500">+3 new products</p>
                <p className="text-xs text-gray-500">85% in stock</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Customer Support
              </CardTitle>
              <PhoneCall className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28</div>
              <div className="flex items-center">
                <AlertCircle className="h-3 w-3 text-yellow-500 mr-1" />
                <p className="text-xs text-yellow-500">5 high priority</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Avg. response time: 2.5 hrs
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Customer Metrics
              </CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.4k</div>
              <div className="flex items-center">
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                <p className="text-xs text-green-500">+18% active users</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                92% satisfaction rate
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Tabs */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="overview">Business Overview</TabsTrigger>
            <TabsTrigger value="orders">Order Analytics</TabsTrigger>
            <TabsTrigger value="products">Product Insights</TabsTrigger>
            <TabsTrigger value="support">Support Metrics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Performance Analytics</CardTitle>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="revenue"
                      name="Revenue ($)"
                      stroke="#1a365d"
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="orders"
                      name="Orders"
                      stroke="#2563eb"
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="customers"
                      name="Customers"
                      stroke="#047857"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((order) => (
                    <div
                      key={order}
                      className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div>
                        <p className="font-medium">Order #{order}23456</p>
                        <p className="text-sm text-gray-500">
                          2 items • Processing
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Customer ID: #CUS-{order}789
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$299.00</p>
                        <p className="text-sm text-gray-500">
                          Today at 2:30 PM
                        </p>
                        <p className="text-xs text-blue-500 mt-1">
                          View Details
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((product) => (
                    <div
                      key={product}
                      className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                        <div>
                          <p className="font-medium">Product {product}</p>
                          <p className="text-sm text-gray-500">
                            SKU: PRD-{product}234
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            Stock: 24 units • Reorder point: 10
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$199.00</p>
                        <p className="text-sm text-green-500">
                          12 sold this week
                        </p>
                        <p className="text-xs text-gray-400">
                          Profit margin: 35%
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="support" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Active Support Tickets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((ticket) => (
                    <div
                      key={ticket}
                      className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div>
                        <p className="font-medium">Ticket #{ticket}45678</p>
                        <p className="text-sm text-gray-500">
                          Product Issue • High Priority
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Assigned to: John Doe
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-yellow-500">
                          Pending
                        </p>
                        <p className="text-sm text-gray-500">2 hours ago</p>
                        <p className="text-xs text-blue-500 mt-1">
                          View Ticket
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
