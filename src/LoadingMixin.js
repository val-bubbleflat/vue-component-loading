import Bus from './Bus'

export default {

    methods: {

        startLoading(){
            this.$options.load = true;
            Bus.$emit('start_loading')
        },

        endLoading(){
            this.$options.load = false;
            Bus.$emit('end_loading');

        },

        failLoading(){
            this.$options.load = false;
            Bus.$emit('fail_loading');

        }

    },

    computed: {

        /*loading(){
            return this.load
        }*/

    },

    beforeCreate(){
        Vue.util.defineReactive(this.$options, 'load', false);
        if(!this.$options.computed){
            this.$options.computed = {}
        }
        this.$options.computed["loading"] = function() {
            return this.$options.load;
        };
    }

}