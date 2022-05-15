const stories = (componentName) => `import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ${componentName} from '.';

export default {
  title: 'Components/${componentName}',
  component: ${componentName},
} as ComponentMeta<typeof ${componentName}>;

const Template: ComponentStory<typeof ${componentName}> = (args: any) => <${componentName} {...args} />;

export const Primary = Template.bind({});
/* Primary.parameters = {
  backgrounds: { default: 'dark' }
};

Primary.args = {
  label: '${componentName}',
  variant: ${componentName}Variants.primary
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: '${componentName}',
  variant: ${componentName}Variants.secondary
}; */
`

export default stories
