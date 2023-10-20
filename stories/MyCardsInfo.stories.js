import MyCardsInfo from '../components/MyCardsInfo.vue';

export default {
  title: 'Elements/MyCardsInfo',
  component: MyCardsInfo,
  argTypes: {
  }
}

export const CardsInfo = {
  render: (args) => {
    return {
      components: {
        MyCardsInfo,
      },
      setup(){
        return {args}
      },
      template: `<MyCardsInfo v-bind="args"/>`
    }
  },
  args: {

  }
}