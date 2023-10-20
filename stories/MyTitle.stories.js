import MyTitle from '../components/elements/MyTitle.vue';

export default {
  title: 'Elements/MyTitle',
  component: MyTitle,
  argTypes: {
    content: {
      control: 'text',
    },
    title: {
      control:'select',
      options:['h1','h2','h3','h4','h5','h6']
    }

  }
}

export const TitleH1 = {
  render: (args) => {
    return {
      components: {
        MyTitle,
      },
      setup(){
        return {args}
      },
      template: `<MyTitle v-bind="args"></MyTitle>`
    }
  },
  args: {
    title:'H1',
    content: 'Lorem',
  }
}