import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			primary: {
  				DEFAULT: 'var(--primary)',
  				foreground: 'var(--primary-foreground)'
  			},
  			secondary: {
  				DEFAULT: 'var(--secondary)',
  				foreground: 'var(--secondary-foreground)'
  			},
  			price: 'var(--gradient-price)',
  			'primary-accent': 'var(--primary-accent)',
  			'foreground-accent': 'var(--foreground-accent)',
  			'hero-background': 'var(--hero-background)',
  			'primary-50': 'var(--primary-50)',
  			'primary-100': 'var(--primary-100)',
  			'primary-200': 'var(--primary-200)',
  			'primary-300': 'var(--primary-300)',
  			'primary-400': 'var(--primary-400)',
  			'primary-500': 'var(--primary-500)',
  			'primary-600': 'var(--primary-600)',
  			'primary-700': 'var(--primary-700)',
  			'primary-800': 'var(--primary-800)',
  			'primary-900': 'var(--primary-900)',
  			'primary-950': 'var(--primary-950)',
  			'secondary-50': 'var(--secondary-50)',
  			'secondary-100': 'var(--secondary-100)',
  			'secondary-200': 'var(--secondary-200)',
  			'secondary-300': 'var(--secondary-300)',
  			'secondary-400': 'var(--secondary-400)',
  			'secondary-500': 'var(--secondary-500)',
  			'secondary-600': 'var(--secondary-600)',
  			'secondary-700': 'var(--secondary-700)',
  			'secondary-800': 'var(--secondary-800)',
  			'secondary-900': 'var(--secondary-900)',
  			'secondary-950': 'var(--secondary-950)',
  			card: {
  				DEFAULT: 'var(--card)',
  				foreground: 'var(--card-foreground)'
  			},
  			popover: {
  				DEFAULT: 'var(--popover))',
  				foreground: 'var(--popover-foreground)'
  			},
  			muted: {
  				DEFAULT: 'var(--muted))',
  				foreground: 'var(--muted-foreground)'
  			},
  			accent: {
  				DEFAULT: 'var(--accent))',
  				foreground: 'var(--accent-foreground)'
  			},
  			destructive: {
  				DEFAULT: 'var(--destructive))',
  				foreground: 'var(--destructive-foreground)'
  			},
  			border: 'var(--border)',
  			input: 'var(--input)',
  			ring: 'var(--ring)',
  			chart: {
  				'1': 'var(--chart-1)',
  				'2': 'var(--chart-2)',
  				'3': 'var(--chart-3)',
  				'4': 'var(--chart-4)',
  				'5': 'var(--chart-5)'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
