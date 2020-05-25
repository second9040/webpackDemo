<template>
  <div>
    <h3 class="title">lightBox</h3>
    <div class="lightBox">
      <figure>
        <img @click="lightBox('egg')" class="demo" src="/image/lightBox/e1.jpg" alt="">
        <p>EGG</p>
      </figure>
      <figure>
        <img @click="lightBox('black')" class="demo" src="/image/lightBox/b1.jpg" alt="">
        <p>BLACK</p>
      </figure>
      <figure>
        <img @click="lightBox('orange')" class="demo" src="/image/lightBox/o1.jpg" alt="">
        <p>Orange</p>
      </figure>
      <div :class="{'mask':mask}"  v-if="mask">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index2) in showList">
              <div class="swiper-zoom-container">
                <img :src="'/image/lightBox/'+item" alt="" class="lazyload">
              </div>
            </div>
          </div>
          <!-- 燈箱照片下方swiper的點點 -->
          <div class="swiper-pagination swiper-pagination-white"></div>
          <!-- swiper套件的左右按鈕 -->
          <div class="swiper-button-prev fas fa-angle-left"></div>
          <div class="swiper-button-next fas fa-angle-right"></div>
          <button class="closeBtn" @click="lightBox('',true)"><i class="fa fa-times"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
export default {
  data: function() {
    return {
      list: {
        egg: ['e2.jpg', 'e3.jpg', 'e4.jpg'],
        black: ['b2.jpg', 'b3.jpg', 'b4.jpg'],
        orange: ['o2.jpg', 'o3.jpg', 'o4.jpg'],
      },
      mask: false,
      showList: []
    }
  },
  methods: {
    lightBox(showCat, close = false) {
      if (close) {
        this.mask = false
      } else {
        this.mask = true
        this.showList = this.list[showCat]

        this.$nextTick(() => {
          // DOM更新了
          // swiper重新初始化
          let swiper = new Swiper('.swiper-container', {
            zoom: true,
            pagination: {
              el: '.swiper-pagination',
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
          });
        })
      }
    }
  }
}
</script>