import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import AdminLayout from "./pages/Admin/AdminLayout";
import Dashboard from "./pages/Admin/Dashboard";
import Leads from "./pages/Admin/Leads";
import Settings from "./pages/Admin/Settings";
import AdminSupport from "./pages/Admin/Support";
import UserManagement from "./pages/Admin/UserManagement";
import PlatformAnalytics from "./pages/Admin/PlatformAnalytics";
import BotPerformance from "./pages/Admin/BotPerformance";
import SystemHealth from "./pages/Admin/SystemHealth";
import AuditLogs from "./pages/Admin/AuditLogs";
import BlogCMS from "./pages/Admin/BlogCMS";
import NewsCMS from "./pages/Admin/NewsCMS";
import SupportTickets from "./pages/Admin/SupportTickets";
import RevenueTracking from "./pages/Admin/RevenueTracking";
import RBAC from "./pages/Admin/RBAC";
import GlobalNotifications from "./pages/Admin/GlobalNotifications";
import FeeConfig from "./pages/Admin/FeeConfig";
import LeadCRM from "./pages/Admin/LeadCRM";
import ApiIntegrations from "./pages/Admin/ApiIntegrations";
import DataExport from "./pages/Admin/DataExport";
import UserLayout from "./pages/User/UserLayout";
import UserDashboard from "./pages/User/UserDashboard";
import UserSupport from "./pages/User/UserSupport";
import Portfolio from "./pages/User/Portfolio";
import History from "./pages/User/History";
import Partners from "./pages/User/Partners";
import Blog from "./pages/User/Blog";
import News from "./pages/User/News";
import About from "./pages/User/About";
import TradingBots from "./pages/User/TradingBots";
import Pricing from "./pages/User/Pricing";
import Analytics from "./pages/User/Analytics";
import Documentation from "./pages/User/Documentation";
import Signals from "./pages/User/Signals";
import CopyTrading from "./pages/User/CopyTrading";
import Backtesting from "./pages/User/Backtesting";
import ApiKeys from "./pages/User/ApiKeys";
import RiskManagement from "./pages/User/RiskManagement";
import UserSettings from "./pages/User/UserSettings";
import Watchlist from "./pages/User/Watchlist";

import PublicNavbar from "./components/layout/PublicNavbar";
import Footer from "./components/layout/Footer";

import Configurator from "./pages/User/Configurator";
import Marketplace from "./pages/User/Marketplace";
import Billing from "./pages/User/Billing";


import KYCAML from "./pages/Admin/KYCAML";
import ABTesting from "./pages/Admin/ABTesting";
import Affiliate from "./pages/Admin/Affiliate";
import SEO from "./pages/Admin/SEO";
import Promocodes from "./pages/Admin/Promocodes";
import Payouts from "./pages/Admin/Payouts";
import ApiLogs from "./pages/Admin/ApiLogs";
import CronJobs from "./pages/Admin/CronJobs";
import ExchangeStatus from "./pages/Admin/ExchangeStatus";
import KnowledgeBase from "./pages/Admin/KnowledgeBase";
import Campaigns from "./pages/Admin/Campaigns";
import Limits from "./pages/Admin/Limits";
import Backups from "./pages/Admin/Backups";
import SupportAudit from "./pages/Admin/SupportAudit";
import Localization from "./pages/Admin/Localization";
import Themes from "./pages/Admin/Themes";
import Funnels from "./pages/Admin/Funnels";
import Surveys from "./pages/Admin/Surveys";
import Widgets from "./pages/Admin/Widgets";
import ErrorTracking from "./pages/Admin/ErrorTracking";
import IPBlacklist from "./pages/Admin/IPBlacklist";
import SocialScheduler from "./pages/Admin/SocialScheduler";
import Segmentation from "./pages/Admin/Segmentation";
import FinancialReports from "./pages/Admin/FinancialReports";
import SecurityLog from "./pages/Admin/SecurityLog";
import ChurnStats from "./pages/Admin/ChurnStats";
import BotLimits from "./pages/Admin/BotLimits";
import Events from "./pages/Admin/Events";
import FileManager from "./pages/Admin/FileManager";
import Plugins from "./pages/Admin/Plugins";

const ProtectedRoute = ({ children, allowedRole }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  if (allowedRole === 'user' && user.role === 'admin') {
    return children;
  }
  if (user.role !== allowedRole) return <Navigate to={user.role === 'admin' ? '/admin' : '/user'} replace />;
  return children;
};

const Placeholder = ({ title }) => (
  <div className="flex items-center justify-center h-full min-h-[400px]">
    <div className="p-8 text-2xl font-bold bg-white rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] text-center m-8 text-gray-800 border-2 border-black">
      {title} — Раздел в разработке 🚧
    </div>
  </div>
);

const PublicLayout = ({ children }) => (
  <div className="min-h-screen bg-white flex flex-col font-sans">
    <PublicNavbar />
    <main className="flex-1 pt-24 pb-12">
      {children}
    </main>
    <Footer />
  </div>
);

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />

      {/* Public Footer Links (Placeholders) */}
      <Route path="/features" element={<PublicLayout><Placeholder title="Функции" /></PublicLayout>} />
      <Route path="/pricing" element={<PublicLayout><Placeholder title="Тарифы" /></PublicLayout>} />
      <Route path="/marketplace" element={<PublicLayout><Placeholder title="Маркетплейс" /></PublicLayout>} />
      <Route path="/changelog" element={<PublicLayout><Placeholder title="Обновления" /></PublicLayout>} />
      <Route path="/docs" element={<PublicLayout><Placeholder title="Документация" /></PublicLayout>} />
      <Route path="/api" element={<PublicLayout><Placeholder title="API Reference" /></PublicLayout>} />
      <Route path="/blog" element={<PublicLayout><Placeholder title="Блог" /></PublicLayout>} />
      <Route path="/guides" element={<PublicLayout><Placeholder title="Гайды" /></PublicLayout>} />
      <Route path="/terms" element={<PublicLayout><Placeholder title="Условия сервиса" /></PublicLayout>} />
      <Route path="/privacy" element={<PublicLayout><Placeholder title="Политика кондф." /></PublicLayout>} />
      <Route path="/cookies" element={<PublicLayout><Placeholder title="Cookies" /></PublicLayout>} />
      <Route path="/contact" element={<PublicLayout><Placeholder title="Контакты" /></PublicLayout>} />

      <Route path="/admin" element={<ProtectedRoute allowedRole="admin"><AdminLayout /></ProtectedRoute>}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<UserManagement />} />
        <Route path="analytics" element={<PlatformAnalytics />} />
        <Route path="bots" element={<BotPerformance />} />
        <Route path="health" element={<SystemHealth />} />
        <Route path="audit" element={<AuditLogs />} />
        <Route path="blog" element={<BlogCMS />} />
        <Route path="news" element={<NewsCMS />} />
        <Route path="tickets" element={<SupportTickets />} />
        <Route path="revenue" element={<RevenueTracking />} />
        <Route path="rbac" element={<RBAC />} />
        <Route path="notifications" element={<GlobalNotifications />} />
        <Route path="leads" element={<LeadCRM />} />
        <Route path="fees" element={<FeeConfig />} />
        <Route path="integrations" element={<ApiIntegrations />} />
        <Route path="export" element={<DataExport />} />
        <Route path="settings" element={<Settings />} />
        <Route path="support" element={<AdminSupport />} />
        
        
        {/* 30 New Admin Placeholder Routes */}
        <Route path="kyc-aml" element={<KYCAML />} />
        <Route path="ab-testing" element={<ABTesting />} />
        <Route path="affiliate" element={<Affiliate />} />
        <Route path="seo" element={<SEO />} />
        <Route path="promocodes" element={<Promocodes />} />
        <Route path="payouts" element={<Payouts />} />
        <Route path="api-logs" element={<ApiLogs />} />
        <Route path="cron-jobs" element={<CronJobs />} />
        <Route path="exchange-status" element={<ExchangeStatus />} />
        <Route path="knowledge-base" element={<KnowledgeBase />} />
        <Route path="campaigns" element={<Campaigns />} />
        <Route path="limits" element={<Limits />} />
        <Route path="backups" element={<Backups />} />
        <Route path="support-audit" element={<SupportAudit />} />
        <Route path="localization" element={<Localization />} />
        <Route path="themes" element={<Themes />} />
        <Route path="funnels" element={<Funnels />} />
        <Route path="surveys" element={<Surveys />} />
        <Route path="widgets" element={<Widgets />} />
        <Route path="error-tracking" element={<ErrorTracking />} />
        <Route path="ip-blacklist" element={<IPBlacklist />} />
        <Route path="social-scheduler" element={<SocialScheduler />} />
        <Route path="segmentation" element={<Segmentation />} />
        <Route path="financial-reports" element={<FinancialReports />} />
        <Route path="security-log" element={<SecurityLog />} />
        <Route path="churn-stats" element={<ChurnStats />} />
        <Route path="bot-limits" element={<BotLimits />} />
        <Route path="events" element={<Events />} />
        <Route path="file-manager" element={<FileManager />} />
        <Route path="plugins" element={<Plugins />} />

      </Route>

      <Route path="/user" element={<ProtectedRoute allowedRole="user"><UserLayout /></ProtectedRoute>}>
        <Route index element={<UserDashboard />} />
        <Route path="bots" element={<TradingBots />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="signals" element={<Signals />} />
        <Route path="copy-trading" element={<CopyTrading />} />
        <Route path="backtesting" element={<Backtesting />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="apikeys" element={<ApiKeys />} />
        <Route path="risks" element={<RiskManagement />} />
        <Route path="history" element={<History />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="news" element={<News />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="partners" element={<Partners />} />
        <Route path="docs" element={<Documentation />} />
        <Route path="watchlist" element={<Watchlist />} />
        <Route path="settings" element={<UserSettings />} />
        <Route path="support" element={<UserSupport />} />
      </Route>
    </Routes>
  );
}

function App() {
  if (window.location.pathname === '/') {
    window.location.replace('/app');
    return null;
  }

  return (
    <Router basename="/app">
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
