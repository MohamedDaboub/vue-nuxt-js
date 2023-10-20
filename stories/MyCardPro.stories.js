import MyCardPro from '../components/MyCardPro.vue';

export default {
  title: 'Elements/MyCardPro',
  component: MyCardPro,
  argTypes: {
    title:{
      control:'text',
    },  
    ImageSrc:{
      control:'text',
    },
    ImageAlt:{
      control:'text',
    },
    Name:{
      control:'text',
    },
    Prix: {
      name: 'Prix ($)',
      description: 'Price in dollars',
      control: {
        type: 'text',  
      },
    },
  }
}

export const CardInfo = {
  render: (args) => {
    return {
      components: {
        MyCardPro,
      },
      setup(){
        return {args}
      },
      template: `<MyCardPro v-bind="args"/>`
    }
  },
  args: {
    title: 'Burger',
    ImageSrc: 'https://picsum.photos/450/300',
    ImageAlt: 'ImageAlt',
    Prix: '$5.15',
    Name: 'Mushroom Sauce',
  }
}