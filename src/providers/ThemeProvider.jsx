// import { hexToRgb } from '../utils/hexToRgb';

// const ThemeProvider = ({ color }) => {
//     const rgb = hexToRgb(color);

//     const css = `
//     @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap');
//     :root { --theme-main: ${color}; --theme-rgb: ${rgb}; }
//     body { font-family: 'Poppins', sans-serif; background:#0f172a; color:#f8fafc; }
//     .font-mono { font-family: 'Fira Code', monospace; }
//     .text-theme { color: var(--theme-main) !important; }
//     .bg-theme { background-color: var(--theme-main) !important; color:#fff !important; }
//     .border-theme { border-color: var(--theme-main) !important; }
//     .shadow-theme { box-shadow: 0 4px 14px 0 rgba(var(--theme-rgb), 0.3) !important; }
//     .glow-theme { text-shadow: 0 0 10px rgba(var(--theme-rgb), 0.7); }
//   `;

//     return <style dangerouslySetInnerHTML={{ __html: css }} />;
// };

// export default ThemeProvider;



import { hexToRgb } from '../utils/hexToRgb';

const ThemeProvider = ({ color }) => {
  const rgb = hexToRgb(color);

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap');

    :root { 
        --theme-main: ${color}; 
        --theme-rgb: ${rgb}; 
    }

    body { 
        font-family: 'Poppins', sans-serif; 
        background: #0f172a; 
        color: #f8fafc; 
    }

    .font-mono { 
        font-family: 'Fira Code', monospace; 
    }

    .text-theme { 
        color: var(--theme-main) !important; 
    }

    .bg-theme { 
        background-color: var(--theme-main) !important; 
        color: #fff !important; 
    }

    .border-theme { 
        border-color: var(--theme-main) !important; 
    }

    .shadow-theme { 
        box-shadow: 0 4px 14px 0 rgba(var(--theme-rgb), 0.3) !important; 
    }
    .cirle-theme{
        box-shadow:
        0 0 60px rgba(var(--theme-rgb), 0.5),
        0 0 60px rgba(var(--theme-rgb), 0.9),
        0 0 40px rgba(var(--theme-rgb), 0.3);
          }

    .glow-theme { 
        text-shadow: 0 0 30px_rgba(220,38,38,0.9); 
    }

    /* ✅ NEW: Focus Border Support */
    .focus-theme:focus {
        border-color: var(--theme-main) !important;
        box-shadow: 0 0 0 2px rgba(var(--theme-rgb), 0.25);
        outline: none;
    }

    /* Optional: Smooth transition */
    input, textarea {
        transition: all 0.3s ease;
    }
    `;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
};

export default ThemeProvider;