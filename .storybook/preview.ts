import type { Preview } from '@storybook/sveltekit'
import { themes } from 'storybook/theming';
import '../src/lib/styles/layout.css'

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },

    darkMode: {
      dark: { ...themes.dark, appBg: 'black' },
      light: { ...themes.normal, appBg: 'white' },

      darkClass: 'dark',
      lightClass: 'storybook-light',
      classTarget: 'html',
      stylePreview: true
    }
  },
};

export default preview;