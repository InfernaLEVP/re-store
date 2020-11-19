<template>
  <div class="participants fp-slider" id="partners">
   
    <div class="participants__item" v-for="slide in slides" :key="slide.name">
      <div class="participants__bio-wrapper">
        <h2 class="participants__name" v-html="slide.Name"></h2>
        <h3 class="participants__location">{{slide.Slogan}}</h3>
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
        console.log(data);
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

<style scoped>
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
</style>