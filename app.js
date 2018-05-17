
// vue instance to control the application
// takes the object within the brackets
new Vue({
    // property el naming the elements that the vue instance is going to control on the page
    // it only controls this div called vue-app, nothing else in the html file
    el: '#vue-app',
    // data is a object
    data: {
        name: 'tommyfuckinboy',
        job: 'chomeur',
        website: 'http://www.fcneumuenster.ch'
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ' ' + this.name;
        }
    }
});