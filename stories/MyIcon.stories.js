import MyIcon from '../components/elements/MyIcon.vue';

export default {
  title: 'Elements/MyIcon',
  component: MyIcon,
  argTypes: {
    name:{
      control:'select',
      options:["community", "documentation", "Support", "Tooling","IconFlecheD","IconFlecheG",'IconInstagram','IconTwitter','Iconlinkedin','IconFacebook',"IconChevronRight",'IconSearch','IconTime','IconLocation','IconPhone','IconShopBag','IconStar','IconPolygon','IconCamion','IconEat','IconEat2','default']
    },
    variant:{
      control:'select',
      options:['default','Orange','Orage Claire','black','White']
    },
    size:{
      control:'select',
      options:['Small','Regular','Big']
    },
    Shadow:{
      control:'boolean',
    }
  }
}

export const Icon_community = {
  render: (args) => {
    return {
      components: {
        MyIcon,
      },
      setup(){
        return {args}
      },
      template: `<MyIcon v-bind="args"/>`
    }
  },
  args: {
    name:"community",
    variant: 'default',
    size:'Regular',
    Shadow:false
  }
}
export const Icon_documentation ={
  ...Icon_community,
  args: {
    name:"documentation",
    variant: 'Orange',
    size:'Small',
    Shadow:false
  }
};
export const Icon_Support ={
  ...Icon_community,
  args: {
    name:"Support",
    variant: 'Orage Claire',
    size:'Small',
    Shadow:false
  }
};
export const Icon_Tooling ={
  ...Icon_community,
  args: {
    name:"Tooling",
    variant: 'black',
    size:'Small',
    Shadow:false
  }
};
export const IconFlecheD ={
  ...Icon_community,
  args: {
    name:"IconFlecheD",
    variant: 'default',
    size:'Small',
    Shadow:false
  }
};
export const IconFlecheG ={
  ...Icon_community,
  args: {
    name:"IconFlecheG",
    variant: 'default',
    size:'Small',
    Shadow:false
  }
};
export const IconInstagram ={
  ...Icon_community,
  args: {
    name:"IconInstagram",
    variant: 'default',
    size:'Small',
    Shadow:false
  }
};
export const IconTwitter ={
  ...Icon_community,
  args: {
    name:"IconTwitter",
    variant: 'default',
    size:'Small',
    Shadow:false
  }
};
export const Iconlinkedin ={
  ...Icon_community,
  args: {
    name:"Iconlinkedin",
    variant: 'default',
    size:'Small',
    Shadow:false
  }
};
export const IconFacebook ={
  ...Icon_community,
  args: {
    name:"IconFacebook",
    variant: 'default',
    size:'Small',
    Shadow:false
  }
};
export const IconChevronRight ={
  ...Icon_community,
  args: {
    name:"IconChevronRight",
    variant: 'default',
    size:'Small',
    Shadow:false
  }
};
export const IconSearch ={
  ...Icon_community,
  args: {
    name:"IconSearch",
    variant: 'default',
    size:'Small',
    Shadow:false
  }
};
export const IconTime ={
  ...Icon_community,
  args: {
    name:"IconTime",
    variant: 'default',
    size:'Small',
    Shadow:false
  }
};
export const IconLocation ={
  ...Icon_community,
  args: {
    name:"IconLocation",
    variant: 'default',
    size:'Small',
    Shadow:false
  }
};
export const IconPhone ={
  ...Icon_community,
  args: {
    name:"IconPhone",
    variant: 'default',
    size:'Small',
    Shadow:false
  }
};
export const IconShopBag ={
  ...Icon_community,
  args: {
    name:"IconShopBag",
    variant: 'default',
    size:'Small',
    Shadow:false
  }
};
export const IconStar ={
  ...Icon_community,
  args: {
    name:"IconStar",
    variant: 'default',
    size:'Small',
    Shadow:false
  }
};
export const IconPolygon ={
  ...Icon_community,
  args: {
    name:"IconPolygon",
    variant: 'White',
    size:'Big',
    Shadow:false
  }
};
export const IconCamion ={
  ...Icon_community,
  args: {
    name:"IconCamion",
    variant: 'Orage Claire',
    size:'Big',
    Shadow:false
  }
};
export const IconEat ={
  ...Icon_community,
  args: {
    name:"IconEat",
    variant: 'Orage Claire',
    size:'Big',
    Shadow:false
  }
};
export const IconEat2 ={
  ...Icon_community,
  args: {
    name:"IconEat2",
    variant: 'Orage Claire',
    size:'Big',
    Shadow:false
  }
};
export const IconDefault ={
  ...Icon_community,
  args: {
    name:"default",
    variant: 'default',
    size:'Small',
    Shadow:false
  }
};

