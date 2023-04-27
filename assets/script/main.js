const { createApp } = Vue// desestructuring
const app = createApp({
    data() {
        return {
            url_api_seasons: 'https://api.tvmaze.com/shows/83/seasons',
            url_api_episodes: 'https://api.tvmaze.com/shows/83/episodes',
            seasons: [],
            backupSeasons: [],
            episodes: [],
            selectedEpisodes:[],
            season:null,
            text:'',
            

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
        this.backupSeasons= this.seasons
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
            //from the database came with html tags that appeared in the summary with this I remove it
            this.episodes = this.episodes.map((episode) => {
                if (episode.summary) {
                    return {
                        ...episode,
                        summary: episode.summary.replace(/<\/?[^>]+(>|$)/g, "")
                    };
                } else {
                    return episode;
                }
            });
            // with this I get the episodes of the season selected with the show episodes link button
            //What I did was to assign the link that leads to the episodes page to the season variable of the link, 
            //the season. number of seasons, then with the URLsearchparams I capture that variable and compare it with 
            //the episode.number to see if the episode corresponds to the season
            
            if (this.season != null){
                this.selectedEpisodes = this.episodes.filter(ep=>ep.season ==  this.season)
                console.log(this.selectedEpisodes);
            }

                

        }

    },
    computed: {
        filterSeasons(){
            this.seasons = this.backupSeasons.filter((season)=> { 
                return season.number.toString().toLowerCase().includes(this.text.toLowerCase());
            }) 
        }
    }
}).mount('#app')