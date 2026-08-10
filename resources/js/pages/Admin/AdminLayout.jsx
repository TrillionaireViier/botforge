import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { LayoutDashboard, Users, Key, LogOut, Menu, Bot, Activity, DollarSign, LifeBuoy, Shield, Search, Tag, Database, Clock, BookOpen, Mail, Save, Eye, Globe, Palette, Filter, PieChart, LayoutTemplate, AlertTriangle, Calendar, BarChart, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { logout } = useAuth();

  const navItems = [
    { path: "/admin", name: "OVERVIEW", icon: LayoutDashboard },
    { path: "/admin/users", name: "USERS", icon: Users },
    { path: "/admin/bots", name: "BOT FLEET", icon: Bot },
    { path: "/admin/revenue", name: "TRADES", icon: DollarSign },
    { path: "/admin/tickets", name: "SUPPORT", icon: LifeBuoy },
    { path: "/admin/settings", name: "SETTINGS", icon: Key },
    { path: "/admin/kyc-aml", name: "KYC / AML", icon: Shield },
    { path: "/admin/ab-testing", name: "A/B TESTING", icon: Activity },
    { path: "/admin/affiliate", name: "AFFILIATE", icon: Users },
    { path: "/admin/seo", name: "SEO", icon: Search },
    { path: "/admin/promocodes", name: "PROMOCODES", icon: Tag },
    { path: "/admin/payouts", name: "PAYOUTS", icon: DollarSign },
    { path: "/admin/api-logs", name: "API LOGS", icon: Database },
    { path: "/admin/cron-jobs", name: "CRON JOBS", icon: Clock },
    { path: "/admin/exchange-status", name: "EXCHANGES", icon: Activity },
    { path: "/admin/knowledge-base", name: "KNOWLEDGE", icon: BookOpen },
    { path: "/admin/campaigns", name: "CAMPAIGNS", icon: Mail },
    { path: "/admin/limits", name: "LIMITS", icon: Shield },
    { path: "/admin/backups", name: "BACKUPS", icon: Save },
    { path: "/admin/support-audit", name: "AUDIT", icon: Eye },
    { path: "/admin/localization", name: "LANGUAGES", icon: Globe },
    { path: "/admin/themes", name: "THEMES", icon: Palette },
    { path: "/admin/funnels", name: "FUNNELS", icon: Filter },
    { path: "/admin/surveys", name: "SURVEYS", icon: PieChart },
    { path: "/admin/widgets", name: "WIDGETS", icon: LayoutTemplate },
    { path: "/admin/error-tracking", name: "ERRORS", icon: AlertTriangle },
    { path: "/admin/ip-blacklist", name: "BLACKLIST", icon: Shield },
    { path: "/admin/social-scheduler", name: "SOCIAL", icon: Calendar },
    { path: "/admin/segmentation", name: "SEGMENTS", icon: Users },
    { path: "/admin/financial-reports", name: "FINANCIALS", icon: BarChart },
    { path: "/admin/security-log", name: "SECURITY", icon: Shield },
    { path: "/admin/churn-stats", name: "CHURN", icon: Users },
    { path: "/admin/bot-limits", name: "BOT LIMITS", icon: Bot },
    { path: "/admin/events", name: "EVENTS", icon: Calendar },
    { path: "/admin/file-manager", name: "FILES", icon: Database },
    { path: "/admin/plugins", name: "PLUGINS", icon: Bot },
  ];

  return (
    <div className="min-h-screen bg-white text-black flex flex-col md:flex-row font-mono">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-black bg-white z-20">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-black flex items-center justify-center">
            <span className="font-bold text-white">A</span>
          </div>
          <span className="font-bold text-xl uppercase tracking-widest">Админ</span>
        </div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 text-black hover:bg-gray-200">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 z-30 w-64 bg-white border-r border-black transition-transform duration-0 flex flex-col`}>
        <div className="p-6 hidden md:flex items-center space-x-3 border-b border-black">
          <div className="w-10 h-10 bg-black flex items-center justify-center">
            <span className="font-bold text-xl text-white">A</span>
          </div>
          <span className="font-bold text-2xl uppercase tracking-widest text-black">
            АДМИН
          </span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 mt-12 md:mt-0">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center justify-between space-x-3 px-4 py-3 border-2 transition-all duration-300 group overflow-hidden relative ${
                  isActive
                    ? "border-black bg-black text-white shadow-[4px_4px_0px_0px_rgba(200,200,200,1)]"
                    : "border-transparent hover:border-black hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 bg-white text-black"
                }`}
              >
                <div className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out z-0 hidden md:block"></div>
                <div className="flex items-center space-x-3 relative z-10 group-hover:text-white transition-colors duration-300">
                  <Icon className={`w-5 h-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 ${isActive ? "text-white" : "text-black group-hover:text-white"}`} />
                  <span className="font-bold tracking-wider transition-transform duration-300 group-hover:translate-x-2">{item.name}</span>
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-black space-y-2">
          <Link
            to="/user"
            className="flex items-center space-x-3 px-4 py-3 border border-black text-black hover:bg-black hover:text-white transition-colors w-full uppercase tracking-wider text-sm font-bold bg-yellow-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
          >
            <ExternalLink className="w-5 h-5" />
            <span>USER PANEL</span>
          </Link>
          <button
            onClick={logout}
            className="flex items-center space-x-3 px-4 py-3 border border-black text-black hover:bg-black hover:text-white transition-colors w-full uppercase tracking-wider text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 bg-white"
          >
            <LogOut className="w-5 h-5" />
            <span>ВЫХОД</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-gray-50 relative">
        <div className="p-6 md:p-10 max-w-7xl mx-auto">
          <Outlet />
        </div>
      </div>
      
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}
