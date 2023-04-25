const { createApp } = Vue// desestructuring
const app = createApp({
    data() {
        return {
            url_api_seasons: 'https://api.tvmaze.com/shows/83/seasons',
            url_api_episodes: 'https://api.tvmaze.com/shows/83/episodes',
            seasons: [],
            episodes: [],
            selectedSeason:null,
            modalVisible: false, //propiedad de datos para controlar la visibilidad del modal

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
            // console.log(seasons);
            // console.log(seasons[0].image.medium)

            // for (el of seasons) {
            //     console.log(typeof (el.number));
            // }


        },
        obtein_episodes() {
            fetch(this.url_api_episodes)
                .then(resp => resp.json())
                .then(episodes => {
                    this.episodes = episodes
                    // console.log(episodes);
                    // console.log(episodes[0].image.medium)

                    // for (el of episodes) {
                    //     console.log(typeof (el.number));
                    // }

                })

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
        showEpisodes(seasonIndex){
            this.selectedSeason = this.seasons[seasonIndex];
            this.selectedEpisodes = this.episodes[seasonIndex];
            console.log(seasonIndex);
            
            this.modalVisible = true; // establecer la propiedad modalVisible en true

        },
        

    },
    computed: {}
}).mount('#app')