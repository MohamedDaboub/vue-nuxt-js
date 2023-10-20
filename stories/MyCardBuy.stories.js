import MyCardBuy from '../components/MyCardBuy.vue';

export default {
  title: 'Elements/MyCardBuy',
  component: MyCardBuy,
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
    buttonLabel:{
      control:'text',
    },
    Prix: {
      name: 'Prix ($)',
      description: 'Price in dollars',
      control: {
        type: 'text',  
      },
    },
    NoteStar:{
      control: {
        type: 'number',
        min: 0,  
        max: 5,     
        step: 0.25,   
      },
    },

  }
}

export const CardInfo = {
  render: (args) => {
    return {
      components: {
        MyCardBuy,
      },
      setup(){
        return {args}
      },
      template: `<MyCardBuy v-bind="args"/>`
    }
  },
  args: {
    title: 'Green Beans',
    ImageSrc: 'https://picsum.photos/450/300',
    ImageAlt: 'ImageAlt',
    buttonLabel: 'Add To Cart',
    Prix: '$15.00',
    NoteStar: '4.5',
  }
}