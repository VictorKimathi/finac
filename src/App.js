import { useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Debt from "./scenes/debts/"
import Transaction from "./scenes/transactions"
import Ai from "./scenes/ai"
import Insight from "./scenes/insight";
import  TransactionForm from "./scenes/transactionform"
import FraudDetection from "./scenes/fraud"
import AiHub from "./scenes/hub";
import Notifications from "./scenes/notifications";
import { AuthProvider } from "./providers/authProvider";
import Login from "./components/login";
import DashboardLayout from "./layouts/dashboard";
import DefaultLayout from "./layouts/default";
import Register from "./components/register";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <Router>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
                {/*all authenticated routes fall here*/}
                <Route element={<AuthProvider><DashboardLayout/></AuthProvider>} path="/">
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/invoices" element={<Invoices />} />
                  <Route path="/form" element={<Form />} />
                  <Route path="/debts" element={<Debt />} />
                  <Route path="/transactions" element={<Transaction />} />
                  <Route path="/transactionform" element = {<TransactionForm/>} />
                  <Route path="/insight" element={<Insight />} />
                  <Route path = "/fraud" element={<FraudDetection />} />
                  <Route path = "/hub" element={<AiHub />} />
                  <Route path = "/notifications" element={<Notifications/>} />


                  <Route path="/ai"   element={<Ai/>} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/line" element={<Line />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/geography" element={<Geography />} />
                </Route>

                {/*all unautheniticated routes fall here*/}
                <Route element={<DefaultLayout/>}>
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
                </Route>
              </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </Router>
  );
}
export default App;
