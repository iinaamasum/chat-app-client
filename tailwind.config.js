module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#6E0B75',
          secondary: '#007EBD',
          accent: '#22c55e',
          neutral: '#1F2937',
          'base-100': '#FFFFFF',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#DAA520',
          error: '#FF5349',
        },
      },
      'fantasy',
    ],
  },
};
