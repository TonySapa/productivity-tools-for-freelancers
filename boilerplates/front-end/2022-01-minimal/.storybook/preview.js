// import '../styles/global/global.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#fff'
      },
      {
        name: 'dark',
        value: '#1d63a0'
      }
    ]
  },
  controls: {
    matchers: {
      // color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      // method: '',
      // order: ['Get Started', 'Components', 'API']
      // locales: '', 
    },
  },
}