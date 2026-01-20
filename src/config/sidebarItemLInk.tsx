import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingCart,
  Settings,
  Hammer,
  List,
  PlusCircle,
  Layers,
  Ruler,
  Boxes,
  UserPlus,
  FileText,
  CreditCard,
  Truck,
  DollarSign,
  TrendingUp,
  UserCog,
  Calculator,
  PackageCheck,
  Briefcase,
  HelpCircle,
} from "lucide-react";
import Dashboard from "../pages/dashboard/Dashboard";
import Products from "../pages/products/Products";
import CreateProduct from "@/pages/products/create";
import ProductCategories from "@/pages/products/categories";
import StockManagement from "@/pages/products/stock";
import Customers from "@/pages/customer/Customers";
import AddCustomer from "@/pages/customer/AddCustomer";
import EditCustomerPage from "@/pages/customer/EditCustomerPage";
import CustomerViewPage from "@/pages/customer/CustomerViewPage";
import PosOrder from "@/pages/salesOrders/pos/PosOrder";
import Orders from "@/pages/salesOrders/order/OrderList";
import CreateOrderPage from "@/pages/salesOrders/order/createOrder";
import EditOrderPage from "@/pages/salesOrders/order/editOrder";
import OrderDetails from "@/pages/salesOrders/order/OrderDetails";
import Invoices from "@/pages/salesOrders/invoices";
import InvoiceDetailsPage from "@/pages/salesOrders/invoices/InvoiceDetails";
import Payments from "@/pages/salesOrders/payments/Payments";
import PaymentDetails from "@/pages/salesOrders/payments/PaymentDetails";
import CreatePaymentPage from "@/pages/salesOrders/payments/createPayment";
import DeliveryPage from "@/pages/salesOrders/delivery/DeliveryPage";
import ProductDetailsPage from "@/pages/products/ProductDetails";
import EditProductPage from "@/pages/products/edit";
import UnitsPage from "@/pages/unit";
import RepairsList from "@/pages/repairs/RepairsList";
import CreateRepair from "@/pages/repairs/CreateRepair";
import RepairDetails from "@/pages/repairs/RepairDetails";
import SettingsSidebarLayout from "@/pages/Settings/Settings";
import SuppliersList from "@/pages/suppliers/supplier/suppliersList";
import AddSupplierPage from "@/pages/suppliers/supplier/AddSupplier";
import EditSupplierPage from "@/pages/suppliers/supplier/EditSupplier";
import PurchaseOrdersList from "@/pages/suppliers/purchaseOrder/PurchaseOrdersList";
import CreatePurchaseOrderPage from "@/pages/suppliers/purchaseOrder/CreatePurchaseOrderPage";
import ViewPurchaseOrderPage from "@/pages/suppliers/purchaseOrder/ViewPurchaseOrderPage";
import EditPurchaseOrderPage from "@/pages/suppliers/purchaseOrder/EditPurchaseOrderPage";
import PurchaseInvoicesList from "@/pages/suppliers/purchaseOrderInvoices/PurchaseInvoicesList";
import PurchaseInvoicesDetails from "@/pages/suppliers/purchaseOrderInvoices/PurchaseInvoicesDetails";
import PurchaseInvoicePrintPreview from "@/pages/suppliers/purchaseOrderInvoices/PurchaseInvoicePrintPreview";
import PurchasePayments from "@/pages/suppliers/purchasePayments/PurchasePayments";
import PurchasePaymentsDetails from "@/pages/suppliers/purchasePayments/PurchasePaymentsDetails";
import CreatePurchasePayments from "@/pages/suppliers/purchasePayments/CreatePurchasePayments";
import SalesReportsPage from "@/pages/reports/SalesReports";
import InventoryReports from "@/pages/reports/InventoryReports";
import StaffsList from "@/pages/staffs";
import AddStaffPage from "@/pages/staffs/add";
import EditStaffPage from "@/pages/staffs/edit";
import StaffDetailsPage from "@/pages/staffs/StaffDetails";
import HrPayrollOverview from "@/pages/HrAndPayroll/HrPayrollOverview";
import PayrollRuns from "@/pages/HrAndPayroll/PayrollRuns";
import Payslips from "@/pages/HrAndPayroll/Payslips";
import PayrollReports from "@/pages/HrAndPayroll/PayrollReports";
import Accounting from "@/pages/accounting/Accounting";
import ChartOfAccounts from "@/pages/accounting/ChartOfAccounts";
import Transactions from "@/pages/accounting/Transactions";
import Income from "@/pages/accounting/Income";
import Expenses from "@/pages/accounting/Expenses";
import AddIncomePage from "@/pages/accounting/AddIncomePage";
import AddExpanse from "@/pages/accounting/AddExpanse";
import TrialBalance from "@/pages/accounting/TrialBalance";
import ProfitAndLoss from "@/pages/accounting/ProfitAndLoss";
import ProductWiseProfitLoss from "@/pages/accounting/ProductWiseProfitLoss";
import JournalReport from "@/pages/accounting/JournalReport";
import LedgerReport from "@/pages/accounting/LedgerReport";
import Help from "@/pages/help/Help";
import {
  SuperAdminPermission,
  ProductPermission,
  CustomerPermission,
  SalesPermission,
  SettingsPermission,
  SupplierPermission,
  ReportPermission,
  StaffPermission,
  AccountingPermission,
} from "./permissions";

export const sidebarItemLink = [
  // DASHBOARD
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
    element: <Dashboard />,
    allowedPermissions: [
      SuperAdminPermission.ACCESS_ALL,
    ],
  },

  // PRODUCTS (Gold Inventory)
  {
    title: "Products",
    url: "#",
    icon: Package,
    allowedPermissions: [
      ProductPermission.VIEW,
      SuperAdminPermission.ACCESS_ALL,
    ],
    items: [
      {
        title: "All Products",
        url: "/dashboard/products",
        element: <Products />,
        icon: List,
        allowedPermissions: [
          ProductPermission.LIST,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "",
        url: "/dashboard/products/:productId",
        element: <ProductDetailsPage />,
        allowedPermissions: [
          ProductPermission.DETAILS,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "Add Product",
        url: "/dashboard/products/create",
        element: <CreateProduct />,
        icon: PlusCircle,
        allowedPermissions: [
          ProductPermission.CREATE,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "",
        url: "/dashboard/products/:productId/edit",
        element: <EditProductPage />,
        allowedPermissions: [
          ProductPermission.EDIT,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "Categories",
        url: "/dashboard/products/categories",
        element: <ProductCategories />,
        icon: Layers,
        allowedPermissions: [
          ProductPermission.VIEW_CATEGORIES,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "Units",
        url: "/dashboard/products/unit",
        element: <UnitsPage />,
        icon: Ruler,
        allowedPermissions: [
          ProductPermission.VIEW_UNITS,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "Stock Management",
        url: "/dashboard/products/stock",
        element: <StockManagement />,
        icon: Boxes,
        allowedPermissions: [
          ProductPermission.MANAGE_STOCK,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
    ],
  },

  // SUPPLIERS & PURCHASES
  {
    title: "Purchase",
    url: "#",
    icon: Truck,
    allowedPermissions: [
      SupplierPermission.VIEW,
      SuperAdminPermission.ACCESS_ALL,
    ],
    items: [
      {
        title: "Suppliers",
        url: "/dashboard/suppliers",
        element: <SuppliersList />,
        icon: List,
        allowedPermissions: [
          SupplierPermission.LIST,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "Add Supplier",
        url: "/dashboard/suppliers/create",
        element: <AddSupplierPage />,
        icon: UserPlus,
        allowedPermissions: [
          SupplierPermission.CREATE,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "",
        url: "/dashboard/suppliers/:supplierId/edit",
        element: <EditSupplierPage />,
        allowedPermissions: [
          SupplierPermission.EDIT,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "Purchase Orders",
        url: "/dashboard/purchase-orders",
        element: <PurchaseOrdersList />,
        icon: FileText,
        allowedPermissions: [
          SupplierPermission.LIST,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "New Purchase Order",
        url: "/dashboard/purchase-orders/create",
        element: <CreatePurchaseOrderPage />,
        icon: PlusCircle,
        allowedPermissions: [
          SupplierPermission.CREATE_PURCHASE_ORDER,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "",
        url: "/dashboard/purchase-orders/:purchaseId",
        element: <ViewPurchaseOrderPage />,
        allowedPermissions: [
          SupplierPermission.VIEW_PURCHASE_ORDER_DETAILS,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "",
        url: "/dashboard/purchase-orders/:purchaseId/edit",
        element: <EditPurchaseOrderPage />,
        allowedPermissions: [
          SupplierPermission.EDIT_PURCHASE_ORDER,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "Purchase Invoices",
        url: "/dashboard/purchase-invoices",
        element: <PurchaseInvoicesList />,
        icon: FileText,
        allowedPermissions: [
          SupplierPermission.VIEW_PURCHASE_INVOICES,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "",
        url: "/dashboard/purchase-invoices/:id",
        element: <PurchaseInvoicesDetails />,
        allowedPermissions: [
          SupplierPermission.VIEW_PURCHASE_INVOICE_DETAILS,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "",
        url: "/dashboard/purchase-invoices/:id/preview",
        element: <PurchaseInvoicePrintPreview />,
        allowedPermissions: [
          SupplierPermission.PREVIEW_PURCHASE_INVOICE,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "Purchase Payments",
        url: "/dashboard/purchase-payments",
        element: <PurchasePayments />,
        icon: CreditCard,
        allowedPermissions: [
          SupplierPermission.VIEW_PURCHASE_PAYMENTS,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "",
        url: "/dashboard/purchase-payments/create",
        element: <CreatePurchasePayments />,
        allowedPermissions: [
          SupplierPermission.CREATE_PURCHASE_PAYMENT,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "",
        url: "/dashboard/purchase-payments/:id",
        element: <PurchasePaymentsDetails />,
        allowedPermissions: [
          SupplierPermission.VIEW_PURCHASE_PAYMENT_DETAILS,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
    ],
  },

  // CUSTOMERS
  {
    title: "Customers",
    url: "#",
    icon: Users,
    allowedPermissions: [
      CustomerPermission.VIEW,
      SuperAdminPermission.ACCESS_ALL,
    ],
    items: [
      {
        title: "All Customers",
        url: "/dashboard/customers",
        element: <Customers />,
        icon: List,
        allowedPermissions: [
          CustomerPermission.LIST,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "",
        url: "/dashboard/customers/:customerId",
        element: <CustomerViewPage />,
        allowedPermissions: [
          CustomerPermission.DETAILS,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "Add Customer",
        url: "/dashboard/customers/create",
        element: <AddCustomer />,
        icon: UserPlus,
        allowedPermissions: [
          CustomerPermission.CREATE,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "",
        url: "/dashboard/customers/:customerId/edit",
        element: <EditCustomerPage />,
        allowedPermissions: [
          CustomerPermission.EDIT,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
    ],
  },

  // SALES & ORDERS
  {
    title: "Sales",
    url: "#",
    icon: ShoppingCart,
    allowedPermissions: [SalesPermission.VIEW, SuperAdminPermission.ACCESS_ALL],
    items: [
      {
        title: "POS",
        url: "/dashboard/sales/pos",
        element: <PosOrder />,
        icon: DollarSign,
        allowedPermissions: [
          SalesPermission.POS_ORDER,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "Orders",
        url: "/dashboard/sales/orders",
        element: <Orders />,
        icon: List,
        allowedPermissions: [
          SalesPermission.ORDERS,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "New Order",
        url: "/dashboard/sales/orders/create",
        icon: PlusCircle,
        element: <CreateOrderPage />,
        allowedPermissions: [
          SalesPermission.CREATE_ORDER,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "",
        url: "/dashboard/sales/orders/:orderId",
        element: <OrderDetails />,
        allowedPermissions: [
          SalesPermission.ORDER_DETAILS,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "",
        url: "/dashboard/sales/orders/:orderId/edit",
        element: <EditOrderPage />,
        allowedPermissions: [
          SalesPermission.EDIT_ORDER,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "Delivery",
        url: "/dashboard/sales/delivery",
        element: <DeliveryPage />,
        icon: PackageCheck,
        allowedPermissions: [
          SalesPermission.DELIVERY,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "Invoices",
        url: "/dashboard/sales/invoices",
        element: <Invoices />,
        icon: FileText,
        allowedPermissions: [
          SalesPermission.INVOICES,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "",
        url: "/dashboard/sales/invoices/:invoiceId",
        element: <InvoiceDetailsPage />,
        allowedPermissions: [
          SalesPermission.INVOICE_DETAILS,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "Payments",
        url: "/dashboard/sales/payments",
        element: <Payments />,
        icon: CreditCard,
        allowedPermissions: [
          SalesPermission.PAYMENTS,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "",
        url: "/dashboard/sales/payments/:paymentId",
        element: <PaymentDetails />,
        allowedPermissions: [
          SalesPermission.PAYMENT_DETAILS,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "",
        url: "/dashboard/sales/payments/create",
        element: <CreatePaymentPage />,
        allowedPermissions: [
          SalesPermission.CREATE_PAYMENT,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
    ],
  },

  // REPAIRS
  {
    title: "Repairs",
    url: "#",
    icon: Hammer,
    allowedPermissions: [
      SuperAdminPermission.ACCESS_ALL,
    ],
    items: [
      {
        title: "All Repairs",
        url: "/dashboard/repairs",
        element: <RepairsList />,
        icon: List,
        allowedPermissions: [
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "New Repair Job",
        url: "/dashboard/repairs/create",
        element: <CreateRepair />,
        icon: PlusCircle,
        allowedPermissions: [
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "",
        url: "/dashboard/repairs/:id",
        element: <RepairDetails />,
        allowedPermissions: [
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
    ],
  },

  // HR & PAYROLL
  {
    title: "HR & Payroll",
    url: "#",
    icon: UserCog,
    allowedPermissions: [
      StaffPermission.VIEW,
      SuperAdminPermission.ACCESS_ALL,
    ],
    items: [
      {
        title: "Overview",
        url: "/dashboard/payroll",
        element: <HrPayrollOverview />,
        icon: LayoutDashboard,
        allowedPermissions: [
          StaffPermission.VIEW,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "Staff",
        url: "/dashboard/staffs",
        element: <StaffsList />,
        icon: Users,
        allowedPermissions: [
          StaffPermission.LIST,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "Add Staff",
        url: "/dashboard/staffs/add",
        element: <AddStaffPage />,
        icon: UserPlus,
        allowedPermissions: [
          StaffPermission.CREATE,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "",
        url: "/dashboard/staffs/:id",
        element: <StaffDetailsPage />,
        allowedPermissions: [
          StaffPermission.DETAILS,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "",
        url: "/dashboard/staffs/:id/edit",
        element: <EditStaffPage />,
        allowedPermissions: [
          StaffPermission.EDIT,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "Payroll Runs",
        url: "/dashboard/payroll/payroll-runs",
        element: <PayrollRuns />,
        icon: DollarSign,
        allowedPermissions: [
          StaffPermission.VIEW,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "Payslips",
        url: "/dashboard/payroll/payslips",
        element: <Payslips />,
        icon: FileText,
        allowedPermissions: [
          StaffPermission.VIEW,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "Payroll Reports",
        url: "/dashboard/payroll/payroll-reports",
        element: <PayrollReports />,
        icon: TrendingUp,
        allowedPermissions: [
          StaffPermission.VIEW,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
    ],
  },

  // ACCOUNTING
  {
    title: "Accounting",
    url: "#",
    icon: Calculator,
    allowedPermissions: [
      AccountingPermission.VIEW,
      SuperAdminPermission.ACCESS_ALL,
    ],
    items: [
      {
        title: "Overview",
        url: "/dashboard/accounting",
        element: <Accounting />,
        icon: LayoutDashboard,
        allowedPermissions: [
          AccountingPermission.VIEW,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "Chart of Accounts",
        url: "/dashboard/accounting/chart-of-accounts",
        element: <ChartOfAccounts />,
        icon: List,
        allowedPermissions: [
          AccountingPermission.CHART_OF_ACCOUNTS,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "Transactions",
        url: "/dashboard/accounting/transactions",
        element: <Transactions />,
        icon: FileText,
        allowedPermissions: [
          AccountingPermission.TRANSACTIONS,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "Journal",
        url: "/dashboard/accounting/journal",
        element: <JournalReport />,
        icon: FileText,
        allowedPermissions: [
          AccountingPermission.JOURNAL_REPORT,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "Ledger",
        url: "/dashboard/accounting/ledger",
        element: <LedgerReport />,
        icon: List,
        allowedPermissions: [
          AccountingPermission.LEDGER_REPORT,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "Income",
        url: "/dashboard/accounting/income",
        element: <Income />,
        icon: TrendingUp,
        allowedPermissions: [
          AccountingPermission.INCOMES,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "",
        url: "/dashboard/accounting/add-income",
        element: <AddIncomePage />,
        allowedPermissions: [
          AccountingPermission.CREATE_INCOME,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "Expenses",
        url: "/dashboard/accounting/expenses",
        element: <Expenses />,
        icon: DollarSign,
        allowedPermissions: [
          AccountingPermission.EXPENSES,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "",
        url: "/dashboard/accounting/add-expense",
        element: <AddExpanse />,
        allowedPermissions: [
          AccountingPermission.CREATE_EXPENSE,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "Trial Balance",
        url: "/dashboard/accounting/trial-balance",
        element: <TrialBalance />,
        icon: Briefcase,
        allowedPermissions: [
          AccountingPermission.TRIAL_BALANCE,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "Profit & Loss",
        url: "/dashboard/accounting/profit-and-loss",
        element: <ProfitAndLoss />,
        icon: TrendingUp,
        allowedPermissions: [
          AccountingPermission.PROFIT_AND_LOSS,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "Product Wise P&L",
        url: "/dashboard/accounting/product-wise-profit-loss",
        element: <ProductWiseProfitLoss />,
        icon: Package,
        allowedPermissions: [
          AccountingPermission.PROFIT_AND_LOSS,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
    ],
  },

  // REPORTS
  {
    title: "Reports",
    url: "#",
    icon: TrendingUp,
    allowedPermissions: [
      ReportPermission.VIEW,
      SuperAdminPermission.ACCESS_ALL,
    ],
    items: [
      {
        title: "Sales Reports",
        url: "/dashboard/reports/sales",
        element: <SalesReportsPage />,
        icon: DollarSign,
        allowedPermissions: [
          ReportPermission.SALES,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
      {
        title: "Inventory Reports",
        url: "/dashboard/reports/inventory",
        element: <InventoryReports />,
        icon: Boxes,
        allowedPermissions: [
          ReportPermission.INVENTORY,
          SuperAdminPermission.ACCESS_ALL,
        ],
      },
    ],
  },

  // SETTINGS
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
    element: <SettingsSidebarLayout />,
    allowedPermissions: [
      SettingsPermission.VIEW,
      SuperAdminPermission.ACCESS_ALL,
    ],
  },

  // HELP
  {
    title: "Help",
    url: "/dashboard/help",
    icon: HelpCircle,
    element: <Help />,
    allowedPermissions: [
      SuperAdminPermission.ACCESS_ALL,
      ProductPermission.VIEW,
    ],
  },
];
