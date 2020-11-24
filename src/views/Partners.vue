<template>
  <div class="participants fp-slider" id="partners">
   
    <div class="participants__item" v-for="slide in slides" :key="slide.name">
      <img
        :src="slide.Photo"
        :alt="slide.Name"
        class="participants__image"
      />
      <div class="participants__bio-wrapper">
        <!-- <h2 class="participants__name" v-html="slide.Name"></h2> -->
        <!-- <h3 class="participants__location"><a :href="slide.Slogan" target="_blank">{{slide.Slogan}}</a></h3> -->
        <div class="participants__body" v-html="parseContent(slide.Text)">
        </div>
        <a href="#" class="participants__social-link"></a>
      </div>
    </div>

    <div class="participants__button">
      <router-link to="/gallery">Галерея</router-link>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Partners",
  components: {
  },
  data() {
    return {
      slides: []
    };
  },
  mounted(){
    fetch('/data/partners.json')
      .then(response => response.json())
      .then(data => {
        this.slides = data;
        // console.log(data);    
      });
  },
  methods: {
    parseContent(plainString){
      let formattedText = '';

        const rows = plainString.split(/\n/g);
        // console.log(rows);
        rows.forEach((item) => {
          if(item !== ''){
            formattedText += '<p>' + item + '</p>';
          }
        });
      formattedText = formattedText.replace('<s>', '<span>');
      formattedText = formattedText.replace('</s>', '</span>');
      return formattedText;
    },
    
  },
  computed: {
  }
};
</script>

<style>
  #partners{
    flex-direction: column;
  }

  /*  */
  #partners .participants__item{
    width: 60%;
    margin: 0 auto;
    padding: 0;
    margin-bottom: 3rem;
  }
  @media(max-width: 992px){
    #partners .participants__item{
      width: 100%;
    }
  }

  /*  */
  #partners .participants__bio-wrapper{
    width: 100%;
  }
  #partners .participants__location a{
    color: inherit;
    text-decoration: none;
  }
  #partners .participants__name{
    text-transform: none;
  }
  #partners .participants__image{
    max-width: 131px;
  }
  #partners .participants__item:nth-child(2){
    margin-top: 100px;
  }
  #partners .participants__item:nth-child(2) .participants__image{
    max-width: 79px;
    margin-right: 52px;
  }
  #partners .participants__body p{
    font-size: 18px;
  }
</style>