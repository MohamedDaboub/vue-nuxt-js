import MyParagraph from '../components/elements/MyParagraph.vue';

export default {
  title: 'Elements/MyParagraph',
  component: MyParagraph,
  argTypes: {
    content: {
      control: 'text',
    },
    paragraphe_Size: {
      control:'select',
      options:['p1','p2']
    }

  }
}

export const Paragraph = {
  render: (args) => {
    return {
      components: {
        MyParagraph,
      },
      setup(){
        return {args}
      },
      template: `<MyParagraph v-bind="args"></MyParagraph>`
    }
  },
  args: {
    paragraphe_Size:'p1',
    content: 'Lorem',
  }
}