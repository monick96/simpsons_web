const { createApp } = Vue// desestructuring
const app = createApp({
    data() {
        return {
            url_api_seasons: 'https://api.tvmaze.com/shows/83/seasons',
            url_api_episodes: 'https://api.tvmaze.com/shows/83/episodes',
            seasons: [],
            episodes: [],
            selectedEpisodes:[],
            selectedSeason:[],
            //modalVisible: false, //propiedad de datos para controlar la visibilidad del modal

        }
    },
    created() {
        this.obtein_seasons(),
        this.obtein_episodes()

    },
    mounted() {

    },
    methods: {
        async obtein_seasons() {
        let res = await fetch(this.url_api_seasons)
        seasons= await res.json();
        this.seasons = seasons

        },
        async obtein_episodes() {
            let resp = await fetch(this.url_api_episodes)
            let episodes= await resp.json()
            this.episodes = episodes
                    // console.log(episodes);
                    // console.log(episodes[0].image.medium)

                    // for (el of episodes) {
                    //     console.log(typeof (el.number));
                    // }

        },
        // showEpisodes (index) {
        //     let target = 'season' + index;
        //     let collapse_element= document.querySelectorAll('.collapse.show');
        //     collapse_element.forEach((el) => {
        //         if(el.id !== target){
        //             el.classList.remove('show');
        //             console.log(el);
        //         }
        //     })
        //     console.log(target);
        //     console.log(collapse_element);
        // },
        showEpisodes(seasonNumber){
            this.selectedSeason = this.seasons.find(season=>season.number === seasonNumber);
            this.selectedEpisodes = this.episodes.filter(ep =>ep.season === seasonNumber)
            console.log(seasonNumber);
            
            this.modalVisible = true; // establecer la propiedad modalVisible en true

        },
        

    },
    computed: {


    }
}).mount('#app')