# Laravel Component Loading

by [bubbleflat.com]()

This package allows you to manage a loading state inside all component, and to display a progressbar (thanks to [vue-progressbar](https://github.com/hilongjw/vue-progressbar)) to show the global loading state of your app.

All components have their own loading state, but the progressbar show the global loading state of all components.

## Installation

````
npm install vue-component-loading
````

```javascript
import VueLoading from 'vue-component-loading'

let config = {
  progressBar:{
    color: '#000',
    failedColor: '#874b4b',
    thickness: '5px',
    transition: {
      speed: '0.2s',
      opacity: '0.6s',
      termination: 300
    },
  }
}

Vue.use(VueLoading, config);
```

See [progressbar doc](https://github.com/hilongjw/vue-progressbar#constructor-options) for all options for the progressbar

## Usage

First, register your progressbar :

```html
<template>
    <vue-loading-component />
    <router-view></router-view>
</template>
```

You can use these methods inside a component to manage its loading state

```javascript
this.startLoading(); // --> this.loading = true : the component starts to load, the progressbar appear
this.endLoading(); // --> this.loading = false : the component end to load, the progressbar progress :p (if it's the last component, it disappear)
this.failLoading(); // --> this.loading = false : show the fail progressbar
```

Depending on the loading state, you can access `loading` boolean in your component

## Exemple

```html
<template>
    <div v-if="!loading">
        Component Loaded !
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

## License

[The MIT License](https://opensource.org/licenses/MIT)