import React, { useState } from 'react';
import { 
  CloudRain, 
  GraduationCap, 
  Building, 
  Sparkles, 
  RotateCcw, 
  ShieldCheck, 
  CheckCircle2, 
  QrCode, 
  Activity,
  Sliders,
  Database,
  Zap
} from 'lucide-react';

export default function InteractiveProjectLab() {
  const [activeTab, setActiveTab] = useState('drop');

  // DROP Simulator States
  const [humidity, setHumidity] = useState(78);
  const [temperature, setTemperature] = useState(28);
  const [pressure, setPressure] = useState(1008);

  const calculateRainfall = () => {
    const base = (humidity * 0.45) + ((35 - temperature) * 0.8) + ((1015 - pressure) * 0.6);
    return Math.max(0, Math.min(120, base)).toFixed(1);
  };

  const rainfallMM = calculateRainfall();
  const getRainStatus = (mm) => {
    if (mm > 50) return { label: 'High Monsoon Downpour', color: 'text-amber-400', bg: 'bg-amber-950/60 border-amber-800' };
    if (mm > 20) return { label: 'Moderate Rain Expected', color: 'text-cyan-400', bg: 'bg-cyan-950/80 border-cyan-700' };
    return { label: 'Light Mist / Clear Skies', color: 'text-emerald-400', bg: 'bg-emerald-950/60 border-emerald-800' };
  };
  const status = getRainStatus(rainfallMM);

  // Student Result Management States
  const [userRole, setUserRole] = useState('student');
  const semester = 'Sem 6';

  // Smart Hostel States
  const [tokenScanned, setTokenScanned] = useState(false);
  const mealType = 'Dinner';

  return (
    <section className="py-20 relative bg-slate-950/80 border-y border-slate-800/80">
      
      {/* Background ambient cyan/blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Interactive Architecture Showcase</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-mono text-white">
            Live Interactive <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Project Simulators</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Test-drive the core algorithms, role-based backend access, and automated workflows engineered in my projects.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 p-1.5 max-w-2xl mx-auto bg-slate-900/90 rounded-2xl border border-slate-800 mb-8 backdrop-blur-md">
          
          <button
            onClick={() => setActiveTab('drop')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeTab === 'drop'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-[1.02] font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <CloudRain className="w-4 h-4" />
            <span>DROP ML Engine</span>
          </button>

          <button
            onClick={() => setActiveTab('result')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeTab === 'result'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-[1.02] font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Oracle Result Portal</span>
          </button>

          <button
            onClick={() => setActiveTab('hostel')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeTab === 'hostel'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-[1.02] font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Building className="w-4 h-4" />
            <span>Smart Hostel QR</span>
          </button>

        </div>

        {/* Interactive Workspace Container */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 relative overflow-hidden">
          
          {/* Top Bar Indicator */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="font-mono text-xs font-bold text-cyan-300 uppercase tracking-wider">
                {activeTab === 'drop' && 'ML Regression Prediction Pipeline — DRDO Research'}
                {activeTab === 'result' && 'Student Result Management System — Oracle SQL & JDBC'}
                {activeTab === 'hostel' && 'Smart Hostel Management System — QR-Based Automation'}
              </span>
            </div>
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400">
              Live Sandbox
            </span>
          </div>

          {/* TAB 1: DROP ML SIMULATOR */}
          {activeTab === 'drop' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Sliders Control Panel */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-xl font-bold font-mono text-slate-100 flex items-center gap-2">
                    <Sliders className="w-5 h-5 text-cyan-400" />
                    Atmospheric Sensor Parameters
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-1">
                    Adjust input variables to test real-time regression inference (10,000+ data point benchmark).
                  </p>
                </div>

                {/* Humidity Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-300">Relative Humidity:</span>
                    <span className="text-cyan-400 font-bold">{humidity}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="100" 
                    value={humidity}
                    onChange={(e) => setHumidity(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500">
                    <span>10% (Arid)</span>
                    <span>100% (Saturated)</span>
                  </div>
                </div>

                {/* Temperature Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-300">Ambient Surface Temperature:</span>
                    <span className="text-cyan-400 font-bold">{temperature}°C</span>
                  </div>
                  <input 
                    type="range" 
                    min="15" 
                    max="45" 
                    value={temperature}
                    onChange={(e) => setTemperature(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500">
                    <span>15°C (Cool)</span>
                    <span>45°C (Hot)</span>
                  </div>
                </div>

                {/* Pressure Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-300">Barometric Pressure:</span>
                    <span className="text-cyan-400 font-bold">{pressure} hPa</span>
                  </div>
                  <input 
                    type="range" 
                    min="980" 
                    max="1030" 
                    value={pressure}
                    onChange={(e) => setPressure(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500">
                    <span>980 hPa (Depression)</span>
                    <span>1030 hPa (High Pressure)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      setHumidity(85);
                      setTemperature(24);
                      setPressure(995);
                    }}
                    className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-mono flex items-center gap-1.5 border border-slate-800 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Preset: Monsoon Storm</span>
                  </button>
                  <button
                    onClick={() => {
                      setHumidity(35);
                      setTemperature(34);
                      setPressure(1018);
                    }}
                    className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-mono flex items-center gap-1.5 border border-slate-800 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Preset: Clear Summer</span>
                  </button>
                </div>

              </div>

              {/* Real-time ML Output Gauge Card */}
              <div className="lg:col-span-5 bg-slate-900/90 p-6 sm:p-7 rounded-2xl border border-slate-800 shadow-xl space-y-6 text-center">
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    Regression Model Inference
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                    85% Accuracy
                  </span>
                </div>

                {/* Circular/Bold Value Visual */}
                <div className="py-2">
                  <div className="text-5xl font-black font-mono text-white tracking-tight flex items-baseline justify-center gap-1">
                    <span className="text-cyan-400">{rainfallMM}</span>
                    <span className="text-lg font-normal text-slate-400">mm / 24h</span>
                  </div>
                  
                  <div className={`mt-3 inline-block px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold border ${status.bg} ${status.color}`}>
                    {status.label}
                  </div>
                </div>

                {/* Feature Importance Indicators */}
                <div className="space-y-2 text-left pt-2 border-t border-slate-800">
                  <div className="flex justify-between text-xs font-mono text-slate-400">
                    <span>Forecast Confidence:</span>
                    <span className="text-cyan-400 font-bold">92.4%</span>
                  </div>
                  <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-full w-[92%]"></div>
                  </div>
                  <div className="flex justify-between text-xs font-mono text-slate-400 pt-1">
                    <span>Baseline Improvement:</span>
                    <span className="text-emerald-400 font-bold">+18% over standard</span>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: STUDENT RESULT MANAGEMENT (ORACLE SQL) */}
          {activeTab === 'result' && (
            <div className="space-y-6">
              
              {/* Role Switcher */}
              <div className="flex items-center justify-between flex-wrap gap-4 bg-slate-900 p-3 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono text-slate-300">Select Role-Based View:</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setUserRole('student')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                      userRole === 'student'
                        ? 'bg-cyan-500 text-slate-950 shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Student Portal View
                  </button>
                  <button
                    onClick={() => setUserRole('admin')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                      userRole === 'admin'
                        ? 'bg-cyan-500 text-slate-950 shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Admin Dashboard View
                  </button>
                </div>
              </div>

              {userRole === 'student' ? (
                <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                    <div>
                      <h4 className="font-bold text-slate-100 font-mono text-base">Biswaranjan Panda</h4>
                      <p className="text-xs text-slate-400 font-mono">Reg No: 2201289192 | BCET Balasore (BPUT)</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-800">
                        Semester: {semester}
                      </span>
                      <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
                        CGPA: 8.5 / 10
                      </span>
                    </div>
                  </div>

                  {/* Grade Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs font-mono">
                      <thead>
                        <tr className="text-slate-400 border-b border-slate-800">
                          <th className="py-2">Course Code</th>
                          <th className="py-2">Subject Name</th>
                          <th className="py-2">Credits</th>
                          <th className="py-2">Grade</th>
                          <th className="py-2">Points</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 text-slate-200">
                        <tr>
                          <td className="py-2 text-cyan-400 font-bold">CS601</td>
                          <td className="py-2">Object-Oriented Programming (Java)</td>
                          <td className="py-2">4</td>
                          <td className="py-2 font-bold text-emerald-400">O (Outstanding)</td>
                          <td className="py-2">10.0</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-cyan-400 font-bold">CS602</td>
                          <td className="py-2">Database Management Systems (Oracle SQL)</td>
                          <td className="py-2">4</td>
                          <td className="py-2 font-bold text-emerald-400">E (Excellent)</td>
                          <td className="py-2">9.0</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-cyan-400 font-bold">CS603</td>
                          <td className="py-2">Data Structures &amp; Algorithms</td>
                          <td className="py-2">4</td>
                          <td className="py-2 font-bold text-emerald-400">E (Excellent)</td>
                          <td className="py-2">9.0</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-cyan-400 font-bold">CS604</td>
                          <td className="py-2">Enterprise Web Architectures (Spring Boot)</td>
                          <td className="py-2">3</td>
                          <td className="py-2 font-bold text-emerald-400">O (Outstanding)</td>
                          <td className="py-2">10.0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="pt-2 flex justify-between items-center text-xs font-mono text-slate-400">
                    <span>Authenticated via JDBC Session Tokens</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Status: Distinction Verified
                    </span>
                  </div>

                </div>
              ) : (
                <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-cyan-400" />
                      <h4 className="font-bold text-slate-100 font-mono text-sm">
                        Administrator Gradebook &amp; Schema Control
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                      Oracle JDBC Connected
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                      <span className="text-slate-400">Total Records:</span>
                      <div className="text-lg font-bold text-white mt-1">1,248 Students</div>
                    </div>
                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                      <span className="text-slate-400">Avg Query Response:</span>
                      <div className="text-lg font-bold text-cyan-400 mt-1">18.4 ms</div>
                    </div>
                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                      <span className="text-slate-400">Session Security:</span>
                      <div className="text-lg font-bold text-emerald-400 mt-1">Role-Based SHA-256</div>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300">
                    <code>
                      <span className="text-cyan-400">SELECT</span> s.roll_no, s.name, c.course_name, g.grade <br/>
                      <span className="text-cyan-400">FROM</span> students s <br/>
                      <span className="text-cyan-400">JOIN</span> grades g <span className="text-cyan-400">ON</span> s.id = g.student_id <br/>
                      <span className="text-cyan-400">WHERE</span> s.cgpa &gt;= 8.5 <span className="text-cyan-400">ORDER BY</span> g.points <span className="text-cyan-400">DESC</span>;
                    </code>
                  </div>

                </div>
              )}

            </div>
          )}

          {/* TAB 3: SMART HOSTEL MANAGEMENT (QR SYSTEM) */}
          {activeTab === 'hostel' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* QR Code Interactive Preview */}
              <div className="md:col-span-5 bg-slate-900/90 p-6 rounded-2xl border border-slate-800 flex flex-col items-center text-center space-y-4">
                <span className="text-xs font-mono text-slate-400">Dynamic Student Meal Token</span>
                
                {/* Simulated QR Box */}
                <div className="relative w-44 h-44 bg-white p-3 rounded-2xl shadow-xl flex items-center justify-center overflow-hidden border-4 border-cyan-500">
                  <QrCode className="w-36 h-36 text-slate-900" />
                </div>

                <div className="text-xs font-mono space-y-1">
                  <div className="text-slate-300 font-bold">Token ID: #HSTL-2026-BP98</div>
                  <div className="text-slate-400 text-[11px]">Valid For: {mealType} (Mess Block B)</div>
                </div>

                <button
                  onClick={() => {
                    setTokenScanned(true);
                    setTimeout(() => setTokenScanned(false), 2500);
                  }}
                  className={`w-full py-2.5 px-4 rounded-xl font-mono text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                    tokenScanned
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/50'
                      : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/25'
                  }`}
                >
                  {tokenScanned ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Meal Token Verified!</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4" />
                      <span>Simulate Scanner Verification</span>
                    </>
                  )}
                </button>

              </div>

              {/* Automation Features Breakdown */}
              <div className="md:col-span-7 space-y-4">
                <div>
                  <h4 className="text-xl font-bold font-mono text-slate-100 flex items-center gap-2">
                    <Building className="w-5 h-5 text-cyan-400" />
                    Hostel Operations &amp; Warden Workflow
                  </h4>
                  <p className="text-xs text-slate-400 font-mono mt-1">
                    Eliminated food waste and streamlined warden-student communications through central digitization.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Room Allocation
                    </span>
                    <p className="text-slate-400 text-[11px]">Dynamic inventory mapping with fee payment verification.</p>
                  </div>

                  <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> QR Meal Verification
                    </span>
                    <p className="text-slate-400 text-[11px]">Instant barcode/QR scan preventing proxy mess entries.</p>
                  </div>

                  <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Complaint Ticketing
                    </span>
                    <p className="text-slate-400 text-[11px]">Direct priority escalation with timestamped resolution status.</p>
                  </div>

                  <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Visitor Tracking
                    </span>
                    <p className="text-slate-400 text-[11px]">Logged guest check-in/out with automated alerts.</p>
                  </div>
                </div>

              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
