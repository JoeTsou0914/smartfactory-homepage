/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        border:   "rgb(var(--border))",
        input:    "rgb(var(--input))",
        ring:     "rgb(var(--ring))",
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        // 若要拆 foreground 屬性，也可以用下面方式
        "card":           "rgb(var(--card))",
        "card-foreground":"rgb(var(--card-foreground))",
        "popover":        "rgb(var(--popover))",
        "popover-foreground":"rgb(var(--popover-foreground))",
        "primary": {
          DEFAULT:       "rgb(var(--primary))",
          foreground:    "rgb(var(--primary-foreground))",
        },
        "secondary": {
          DEFAULT:       "rgb(var(--secondary))",
          foreground:    "rgb(var(--secondary-foreground))",
        },
        "destructive": {
          DEFAULT:       "rgb(var(--destructive))",
          foreground:    "rgb(var(--destructive-foreground))",
        },
        "muted": {
          DEFAULT:       "rgb(var(--muted))",
          foreground:    "rgb(var(--muted-foreground))",
        },
        "accent": {
          DEFAULT:       "rgb(var(--accent))",
          foreground:    "rgb(var(--accent-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    // 如果需要表單與排版支援，可打開下面這兩行
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
}
