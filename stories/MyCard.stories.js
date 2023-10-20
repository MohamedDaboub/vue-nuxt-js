import MyCard from '../components/MyCard.vue';

export default {
  title: 'Elements/MyCard',
  component: MyCard,
  argTypes: {
    title:{
      control:'text',
    },
    description:{
      control:'text',
    },   
    ImageSrc:{
      control:'text',
    },
    ImageAlt:{
      control:'text',
    },
    buttonLabel:{
      control:'text',
    },
  }
}

export const Card = {
  render: (args) => {
    return {
      components: {
        MyCard,
      },
      setup(){
        return {args}
      },
      template: `<MyCard v-bind="args"/>`
    }
  },
  args: {
    title: 'Title',
    description: 'Description',
    ImageSrc: 'https://picsum.photos/200/300',
    ImageAlt: 'ImageAlt',
    buttonLabel: 'Button',
  }
}