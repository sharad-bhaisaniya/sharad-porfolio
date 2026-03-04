import { X, Menu } from 'lucide-react';

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => (
    <nav className="fixed top-0 w-full z-40 bg-black backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="text-2xl font-bold font-mono tracking-tighter flex items-center gap-2 group cursor-pointer">
                <span className="text-theme">{'<'}</span>
                Sharad
                <span className="text-theme">{'/>'}</span>
            </div>

            <div className="hidden md:flex gap-8 font-medium">
                {['About', 'Skills', 'Projects', 'Contact'].map(link => (
                    <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-theme">
                        {link}
                    </a>
                ))}
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>
    </nav>
);

export default Navbar;