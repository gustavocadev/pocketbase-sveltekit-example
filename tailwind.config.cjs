const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        'shira-night': {
          primary: '#339AF0',
          secondary: '#570DF8',
          accent: '#37CDBE',
          neutral: '#3D4451',
          'base-100': '#121212',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
          'base-200': '#1A1B1E',
          'base-300': '#2C2E33',
          'base-content': '#F9FAFB',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};

module.exports = config;
