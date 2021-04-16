import { Viewer } from './Content'

export default {
  title: 'Viewer',
  component: Viewer
}

const Template = (args) => <Viewer {...args} />

export const Default = Template.bind({})
Default.args = {
  html: ``
}
