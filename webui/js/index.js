var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        console.log('Received Event: ' + 'deviceready');   
        this.setupDocument();  
        this.setupMap();   
    },

    setupDocument: function() {
        // menu button
        var menuButton = document.getElementsByClassName('menuButton')[0];        
        menuButton.addEventListener('click', function(){
            var menu = document.getElementsByClassName('menu')[0];            
            var mapCover = document.getElementsByClassName('mapCover')[0];            
            menu.classList.add('show');
            mapCover.classList.add('show');            
        });

        // mapCover
        var mapCover = document.getElementsByClassName('mapCover')[0];       
        mapCover.addEventListener('click', function(){
            var that = this; 
            var menu = document.getElementsByClassName('menu')[0];
            that.classList.remove('show');
            menu.classList.remove('show');            
        });
    },

    setupMap: function(){
        mapboxgl.accessToken = 'pk.eyJ1IjoieGluZ2Z1cnlkYSIsImEiOiJhMWNmOWU2NGU5ODQ5NjE3Nzc4Y2ZiYjQzNzI0MTc5ZiJ9.iCaLgnYU9Se1gYtEPZBzEg';
        var map = new mapboxgl.Map({
            container: 'mapPane',
            style: 'http://10.0.0.5:80/res/natural_earth.vector.json',
            //style: 'mapbox://styles/mapbox/streets-v9',
            attributionControl: false,
            maxZoom: 7
        });
    }    
};

app.initialize();

