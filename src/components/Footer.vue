<template>
  <div class="footer">
      <div class="footer-item block-social">
          <a class="social-item-button">
              <img src="../assets/footer/twitter.svg" alt="Twitter icon" class="Twitter-icon">
          </a>
          <a class="social-item-button" href="https://www.linkedin.com/company/deal-book">
              <img src="../assets/footer/ld.svg" alt="Linkedin icon" class="Linkedin-icon">
          </a>
          <a class="social-item-button" href="https://www.facebook.com/groups/dealbook">
              <img src="../assets/footer/fb.svg" alt="Facebook icon" class="Facebook-icon">
          </a>
          <a class="social-item-button" href="https://t.me/dealbookproject">
              <img src="../assets/footer/tg.svg" alt="Telegram icon" class="Telegram-icon">
          </a>
      </div>
      <div class="footer-item warning-block">
          <img src="../assets/common/warning.svg" class="warning-item warning-icon" alt="Warning icon">
          <p class="warning-item warning-text" v-html="$t('footer_footerText')"></p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* start bulding footer by mobile-first */

#app .footer{
    height: fit-content;
    width: 100vw;
    padding: 4vh 2vw;
    background: #252525;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: #70777E;
    overflow: hidden;
    }
/* block with socials  */
.footer .block-social{
    width: 100%;
    padding: 0 8vw;
    max-width: 600px;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 3vh;
}
.footer .block-social .social-item-button .button-icon{
    height: 100%;
    width: 100%;
}
/* block with socials  */

/* block with warning  */
.footer .warning-block{
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    white-space: unset;
}
.footer .warning-icon{
    margin-right: 2vw;
    margin-top: 5px;
    height: fit-content;
}
.footer .warning-text{
    text-decoration: unset;
    color: #70777E;
    font-size: 12px;
    line-height: 16px;
}
.footer .warning-text u{
    color: #70777E;
}

@media (min-width: 991px){
#app .footer{
    max-width: 100%;
    padding: 4vh 2vw;
    background: #000000;
    display: flex;
    flex-direction: row;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    color: #70777E;
    overflow: hidden;
    }
}
.social-item-button{
    width: 35px;
}
@media (max-width: 990px){
    #app .app_footer_wrapper .footer{
        display: none;
    }
    .warning-text{
        font-size: 14px;
    }
}

</style>