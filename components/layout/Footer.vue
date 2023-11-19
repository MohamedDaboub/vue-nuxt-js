<template>
  <footer class="footer">
    <div class="footer__column">
      <img
        class="footer__logo"
        src="Logo-Footer.png"
        alt="Restaurant Logo"
      />
      <MyParagraph
        paragraphe_Size="p2"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo libero viverra dapibus odio sit malesuada in quis. Arcu tristique elementum viverra integer id."
      />
      <div class="footer__social_icons">
        <MyIcon name="IconFacebook" variant="Orage Claire" size="Small" />
        <MyIcon name="IconInstagram" variant="Orage Claire" size="Small" />
        <MyIcon name="IconTwitter" variant="Orage Claire" size="Small" />
        <MyIcon name="Iconlinkedin" variant="Orage Claire" size="Small" />
      </div>
    </div>
    <div class="footer__column">
      <MyTitle class="footer__title" content="Opening Restaurant" title="h4" />
      <MyParagraph
        class="footer__text"
        paragraphe_Size="p1"
        content="Monday-Friday: 9AM - 10PM"
      />
      <MyParagraph
        class="footer__text"
        paragraphe_Size="p1"
        content="Thursdayt: 09AM - 11PM"
      />
      <MyParagraph
        class="footer__text"
        paragraphe_Size="p1"
        content="Friday: 09AM - 8PM"
      />
    </div>
    <div class="footer__column">
      <MyTitle class="footer__title" content="User Links" title="h4" />
      <ul class="footer__list-link">
        <li class="footer__text"><a href="#">About Us</a></li>
        <li class="footer__text"><a href="#">Contact Us</a></li>
        <li class="footer__text"><a href="#">Order Delivery</a></li>
        <li class="footer__text"><a href="#">Payment & Tax</a></li>
        <li class="footer__text"><a href="#">Terms of Services</a></li>
      </ul>
    </div>
    <div class="footer__column">
      <MyTitle class="footer__title" content="Contact Us" title="h4" />
      <MyParagraph
        class="footer__text"
        paragraphe_Size="p1"
        content="1234 Country Club Ave"
      />
      <MyParagraph
        class="footer__text"
        paragraphe_Size="p1"
        content="NC 123456, London, UK"
      />
      <MyParagraph
        class="footer__text"
        paragraphe_Size="p1"
        content="+0123 456 7891"
      />
      <div class="footer__input">
        <input type="email" id="email" placeholder="Enter your email...." />
        <MyIcon
          class=""
          name="IconChevronRight"
          size="Regular"
          variant="Orange"
        />
      </div>
    </div>
  </footer>
</template>

<script setup></script>
<style lang="scss" scoped>
.footer {
  background: $light-gray;
  color: $gray;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: rem(40);
  gap: rem(5);

  &__column {
    padding: 1rem;
  }
  &__logo {
    padding-bottom: rem(15);
  }
  &__social_icons {
    display: flex;
    margin: rem(15) rem(5);
    gap: rem(15);
  }
  &__title {
    font-weight: 700;
    color: $black;
    padding: rem(45) rem(0);
  }
  &__text {
    padding: rem(5) rem(0);
    font-weight: 400;
  }
  &__list-link {
    list-style: none;
    & li a {
      text-decoration: none;
      color: $gray;
    }
  }
  &__input {
    background-color: $white;
    border-radius: rem(40);
    box-shadow: 0px rem(1) rem(4) rgba(0, 0, 0, 0.25);
    font-family: $primary-font-familly;
    font-size: $small-font-size;
    display: flex;
    align-items: center;
    padding: rem(4) rem(10);
    width: fit-content;
    border: none;
    outline: none;
    margin-top: rem(15);
    & input {
      border: none;
      outline: none;
    }
  }
}
</style>
