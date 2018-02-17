import Bus from './Bus'
import LoadingMixin from './LoadingMixin';

export default {

    install(Vue, config = {}){
        Bus.init(Vue);

        let pbConfig = null;
        if(config.progressBar){
            pbConfig = config.progressBar
        }
        Vue.use(VueProgressBar, pbConfig);

        Vue.mixins(LoadingMixin);
        Vue.component('vue-loading-component');
    }

}