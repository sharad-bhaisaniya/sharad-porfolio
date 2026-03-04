import React from 'react';
import { Settings, X, Palette, Sparkles } from 'lucide-react';
import { THEME_COLORS } from '../config/theme.js';
import { ANIMATIONS } from '../config/animations.js';

const SettingsPanel = ({
    isOpen,
    setIsOpen,
    theme,
    setTheme,
    anim,
    setAnim
}) => {
    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed right-0 top-1/2 -translate-y-1/2 bg-theme text-white p-3 rounded-l-xl shadow-theme z-50 flex items-center justify-center hover:pr-5 transition-all"
                style={{ right: isOpen ? '320px' : '0' }}
            >
                {isOpen ? (
                    <X size={24} />
                ) : (
                    <Settings className="animate-spin-slow" size={24} />
                )}
            </button>

            {/* Panel */}
            <aside
                className={`fixed top-0 right-0 h-full w-80 bg-slate-900 border-l border-white/10 shadow-2xl z-50 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } flex flex-col`}
            >
                {/* Header */}
                <div className="p-6 border-b border-white/10 flex items-center gap-3">
                    <Settings className="text-theme" />
                    <h2 className="text-xl font-bold">Theme Lab</h2>
                </div>

                <div className="p-6 flex-1 overflow-y-auto space-y-8">

                    {/* Color Palette */}
                    <div>
                        <h3 className="text-sm font-mono text-gray-400 mb-4 flex items-center gap-2">
                            <Palette size={16} /> Color Palette
                        </h3>

                        <div className="grid grid-cols-3 gap-3">
                            {THEME_COLORS.map((c) => (
                                <button
                                    key={c.name}
                                    onClick={() => setTheme(c.value)}
                                    className={`h-12 rounded-lg border-2 transition-all flex items-center justify-center ${theme === c.value
                                        ? 'border-white scale-110 shadow-lg'
                                        : 'border-transparent hover:scale-105'
                                        }`}
                                    style={{ backgroundColor: c.value }}
                                    title={c.name}
                                >
                                    {theme === c.value && (
                                        <Sparkles
                                            size={16}
                                            className="text-white"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Animations */}
                    <div>
                        <h3 className="text-sm font-mono text-gray-400 mb-4 flex items-center gap-2">
                            <Sparkles size={16} /> Background FX
                        </h3>

                        <div className="space-y-2">
                            {ANIMATIONS.map((a) => (
                                <button
                                    key={a.id}
                                    onClick={() => setAnim(a.id)}
                                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${anim === a.id
                                        ? 'bg-theme/20 text-theme border border-theme/50'
                                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700 border border-transparent'
                                        }`}
                                >
                                    {a.name}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </aside>

            {/* Mobile Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default SettingsPanel;