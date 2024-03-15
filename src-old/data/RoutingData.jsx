import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import AddNewInvoice from "../pages/invoice/AddNewInvoice";
import InvoicesArchive from "../pages/invoice/InvoicesArchive";
import AddNewProduct from "../pages/products/AddNewProduct";
import AddNewPurchaseOrder from "../pages/purchaseOrders/AddNewPurchaseOrder";
import AddNewSalesOrder from "../pages/salesOrders/AddNewSalesOrder";

import {
  barChartOutline,
  receiptOutline,
  newspaperOutline,
  personCircleOutline,
  listOutline,
  pieChartOutline,
  cashOutline,
} from "ionicons/icons";

const navTabRoutingButtons = [
  {
    key: "tab-home",
    tabName: "home",
    tabLink: "/home",
    tabIcon: barChartOutline,
    tabPageComponent: <Dashboard />,
  },
  {
    key: "tab-login",
    tabName: "login",
    tabLink: "/login",
    tabIcon: receiptOutline,
    tabPageComponent: <Login />,
  },
  {
    key: null,
    tabName: null,
    tabLink: null,
    tabIcon: null,
    tabPageComponent: null,
  }, // Empty tab to make space for the Floating Action Button in the middle
  {
    key: "tab-invoices",
    tabName: "invoices",
    tabLink: "/invoices",
    tabIcon: newspaperOutline,
    tabPageComponent: <InvoicesArchive />,
  },
  {
    key: "tab-profile",
    tabName: "profile",
    tabLink: "/profile",
    tabIcon: personCircleOutline,
    tabPageComponent: (
      <Profile
        profileName="Jon A. Tan"
        profilePosition="Company Owner"
        profilePhone="+639123456789"
        profileEmail="jdegs@mail.com"
        profileWebsite="Project Zealous"
        profileWebLink="/"
      />
    ),
  },
];

const floatingTabRoutingButtons = [
  {
    key: "float-1",
    tabName: "addSalesOrder",
    tabLink: "/add-sales-order",
    tabIcon: listOutline,
    tabPageComponent: <AddNewSalesOrder />,
    label: "Add New Sales Order",
  },
  {
    key: "float-2",
    tabName: "addPurchaseOrder",
    tabLink: "/add-purhcase-order",
    tabIcon: cashOutline,
    tabPageComponent: <AddNewPurchaseOrder />,
    label: "Add New Purchase Order",
  },
  {
    key: "float-3",
    tabName: "addNewInvoice",
    tabLink: "/add-new-invoice",
    tabIcon: pieChartOutline,
    tabPageComponent: <AddNewInvoice />,
    label: "Add New Invoice",
  },
  {
    key: "float-4",
    tabName: "addNewProduct",
    tabLink: "/add-new-product",
    tabIcon: listOutline,
    tabPageComponent: <AddNewProduct />,
    label: "Add New Product",
  },
];

export { navTabRoutingButtons, floatingTabRoutingButtons };