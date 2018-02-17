class Bus{

    constructor(){
        this.vue = null;
    }

    init(Vue){
        this.vue = new Vue();
    }

    $emit(event, arg){
        if(this.vue){
            this.vue.$emit(event, arg)
        }
    }

    $on(event, callback){
        if(this.vue){
            this.vue.$on(event, arg)
        }
    }

}

export default new Bus();