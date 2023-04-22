const { createApp } = Vue// desestructuring
const app = createApp({
    data(){
        return{
            url_api_seasons:'https://api.tvmaze.com/shows/83/seasons',
            seasons:[],
            episodes:[],

        }
    },
    created(){
        this.obtein_seasons()
        
    },
    mounted(){
        
    },
    methods:{
        obtein_seasons(){
            fetch(this.url_api_seasons)
            .then(resp =>resp.json())
            .then(seasons =>{
                this.seasons= seasons
                console.log(seasons);
                console.log(seasons[0].image.medium)
            
                for(el of seasons){
                    console.log(typeof(el.number));
                }
                
            })

        }

    },
    computed:{}
}).mount('#app')