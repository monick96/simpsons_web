const { createApp } = Vue// desestructuring
const app = createApp({
    data() {
        return {
            url_api_seasons: 'https://api.tvmaze.com/shows/83/seasons',
            url_api_episodes: 'https://api.tvmaze.com/shows/83/episodes',
            seasons: [],
            //episodes: [],
            selectedEpisodes:[],
            season:null,
            

        }
    },
    created() {
        this.obtein_seasons(),
        this.obtein_episodes()

    },
    mounted() {
        // // Get season number from query parameter
        // let params= new URLSearchParams(location.search)
        // this.season = params.get('season')
        // this.season = Number(this.season)
        // if (this.season != null){
        //     this.selectedEpisodes = this.episodes.filter(ep=>ep.season ==  this.season)
        //     console.log(this.selectedEpisodes);
        // }
    },
    methods: {
        async obtein_seasons() {
        let res = await fetch(this.url_api_seasons)
        seasons= await res.json();
        this.seasons = seasons
        // Get season number from query parameter
        let params= new URLSearchParams(location.search)
        this.season = params.get('season')
        this.season = Number(this.season)
        
        console.log(this.season);
        console.log(typeof(this.season))
        },
        async obtein_episodes() {
            let resp = await fetch(this.url_api_episodes)
            let episodes= await resp.json()
            this.episodes = episodes
            if (this.season != null){
                this.selectedEpisodes = this.episodes.filter(ep=>ep.season ==  this.season)
                console.log(this.selectedEpisodes);
            }
                    // console.log(episodes);
                    // console.log(episodes[0].image.medium)

                // for (el of episodes) {
                //         console.log(typeof (el.season));
                // }

        }

    },
    computed: {
        // filteredEpisodes(){
        //     if (this.season != ''){
        //         this.selectedEpisodes = this.episodes.filter(ep=>ep.season === this.season)
        //         console.log(this.selectedEpisodes);
        //     }
        // }
    }
}).mount('#app')