const fs = require('fs');
let code = fs.readFileSync('resources/js/pages/User/Pricing.jsx', 'utf8');

// Add useAuth import if not present
if (!code.includes("import { useAuth }")) {
  code = code.replace(
    "import { CreditCard, Zap, Check, ShieldCheck, History, AlertCircle } from 'lucide-react';",
    "import { CreditCard, Zap, Check, ShieldCheck, History, AlertCircle } from 'lucide-react';\nimport { useAuth } from '../../context/AuthContext';"
  );
}

// Add useAuth hook inside Pricing component
if (!code.includes("const { user } = useAuth();")) {
  code = code.replace(
    "export default function Pricing() {",
    "export default function Pricing() {\n  const { user } = useAuth();\n"
  );
}

// Update Trial Button
code = code.replace(
  /<button disabled={loading} onClick=\{\(\) => handlePayment\('nowpayments'\)\} className="w-full bg-blue-600([^>]+)>\s*<Zap className="w-5 h-5" \/> NOWPayments\s*<\/button>/g,
  `{user?.tier !== 'Free' ? (
              <button disabled className="w-full bg-gray-400 text-white border-4 border-black font-black uppercase tracking-widest py-3 flex justify-center items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] cursor-not-allowed">
                Недоступно
              </button>
            ) : (
              <button disabled={loading} onClick={() => handlePayment('nowpayments')} className="w-full bg-blue-600$1>
                <Zap className="w-5 h-5" /> NOWPayments
              </button>
            )}`
);

// Update Pro Button
code = code.replace(
  /<button className="w-full mt-auto bg-white text-black border-4 border-black font-black uppercase tracking-widest py-4 hover:bg-black hover:text-white transition-colors flex justify-center gap-2">\s*Купить Pro\s*<\/button>/g,
  `{user?.tier === 'Pro' ? (
            <button disabled className="w-full mt-auto bg-green-400 text-black border-4 border-black font-black uppercase tracking-widest py-4 flex justify-center gap-2 cursor-not-allowed">
              Ваш тариф
            </button>
          ) : user?.tier === 'Ultra' ? (
            <button disabled className="w-full mt-auto bg-gray-300 text-gray-500 border-4 border-black font-black uppercase tracking-widest py-4 flex justify-center gap-2 cursor-not-allowed">
              Младший тариф
            </button>
          ) : (
            <button className="w-full mt-auto bg-white text-black border-4 border-black font-black uppercase tracking-widest py-4 hover:bg-black hover:text-white transition-colors flex justify-center gap-2">
              Купить Pro
            </button>
          )}`
);

// Update Ultra Button
code = code.replace(
  /<button className="w-full mt-auto bg-white text-black border-4 border-black font-black uppercase tracking-widest py-4 hover:bg-black hover:text-white transition-colors flex justify-center gap-2">\s*Купить Ultra\s*<\/button>/g,
  `{user?.tier === 'Ultra' ? (
            <button disabled className="w-full mt-auto bg-green-400 text-black border-4 border-black font-black uppercase tracking-widest py-4 flex justify-center gap-2 cursor-not-allowed">
              Ваш тариф
            </button>
          ) : (
            <button className="w-full mt-auto bg-white text-black border-4 border-black font-black uppercase tracking-widest py-4 hover:bg-black hover:text-white transition-colors flex justify-center gap-2">
              Купить Ultra
            </button>
          )}`
);

fs.writeFileSync('resources/js/pages/User/Pricing.jsx', code);
