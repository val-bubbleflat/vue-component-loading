import Bus from './Bus'
import LoadingMixin from './LoadingMixin';
import VueProgressBar from 'vue-progressbar';
import LoadingComponent from './LoadingComponent.vue'

export default {

    install(Vue, config = {}){
        Bus.init(Vue);

        let pbConfig = null;
        if(config.progressBar){
            pbConfig = config.progressBar
        }
        Vue.use(VueProgressBar, pbConfig);

        Vue.mixin(LoadingMixin);
        Vue.component('vue-loading-component', LoadingComponent);
    }

}