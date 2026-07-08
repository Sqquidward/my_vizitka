export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

export const themeColors: Record<Theme, { background: string; themeColor: string }> = {
  dark: {
    background: "#07090f",
    themeColor: "#0B0E14",
  },
  light: {
    background: "#f4f6fb",
    themeColor: "#f4f6fb",
  },
};

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute("content", themeColors[theme].themeColor);
  }
}

export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t;}}catch(e){}})();`;
