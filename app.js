const app = Vue.createApp ({
    data() {
        return {
           title: "Dog of the day",
           picture: "https://cdn2.thedogapi.com/images/6dE0ghECM.jpg",
           breed: "Bull Terrier",
           lifeSpan: "10 to 12 years",
           height: "41 - 43",
           weight: "25 - 36",
           temperament: "Friendly, Lively, Intelligent",
           breedFor: "Ratting, Companionship",
           breedGroup: "Non-Sporting",
        }
    },

    methods: {
         async getDog() {
            const results = await fetch("https://api.thedogapi.com/v1/images/search");
            const data = await results.json()
            let dogInfo = data[0]
            let breeds = dogInfo.breeds[0]
            /* console.log(breeds) */

            this.picture = dogInfo.url
            this.breed = breeds.name
            this.lifeSpan = breeds.life_span
            this.temperament = breeds.temperament
            this.breedFor = breeds.bred_for
            this.breedGroup = breeds.breed_group
            this.height = breeds.height.metric
            this.weight = breeds.weight.metric
        }
    }
});

app.mount("#app");