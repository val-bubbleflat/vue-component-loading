<template>
    <div class="loading">
        <vue-progress-bar></vue-progress-bar>
    </div>
</template>
<script>

    import Bus from './Bus'

    export default {

        props: [],

        data(){
            return {
                nbComponents: 0,
                nbFinished: 0,
                isLoading: false,
                currentPourcentage: 0,
                timeout: null
            }
        },

        methods: {

            registerComponent(){
                this.isLoading = true;
                this.nbComponents++
                this.setTimeout();
            },

            componentEndLoading(){
                this.nbFinished++
            },

            fail(){
                this.$Progress.fail();
                this.nbComponents = 0;
                this.nbFinished = 0;
                this.isLoading = false;
                this.currentPourcentage = 0
            },

            setPourcentage(){
                let p = this.pourcentage();
                if(p > this.currentPourcentage){

                    this.currentPourcentage = p;
                    this.$Progress.set(p)
                }
            },

            pourcentage(){
                return (this.nbFinished / this.nbComponents) * 100;
            },

            setTimeout(){
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    console.log("timeout");
                    this.nbFinished = this.nbComponents;
                }, 2000)
            }

        },

        watch: {

            nbFinished(){
                if(this.nbComponents > 0){
                    this.setPourcentage()
                    if(this.pourcentage() >= 100){
                        this.nbComponents = 0;
                        this.nbFinished = 0;
                        this.isLoading = false;
                        this.currentPourcentage = 0
                        this.setPourcentage()
                        this.$Progress.finish()
                    }
                }
            }

        },

        created(){
            Bus.$on('start_loading', this.registerComponent);
            Bus.$on('end_loading', this.componentEndLoading);
            Bus.$on('fail_loading', this.fail);
        }
    }

</script>