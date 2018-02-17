#Laravel Component Loading

by bubbleflat.com

TODO Description

##Installation

TODO

##Usage

First, register your progressbar :

```html
<template>
    <vue-loading-component />
    <router-view></router-view>
</template>
```

In a component you can use to manage the loading state of your component

```javascript
this.startLoading();
this.endLoading();
this.failLoading();
```

According to this state, you can access `loading` data in your component

##Exemple

```html
<template>
    <div v-if="!loading">
        Component Loading !
    </div>
</template>
<script>
    
    export default {

        mounted(){
            this.startLoading();
            setTimeout(() => {
                this.endLoading();
            }, 2000)
        }

    }

</script>
```