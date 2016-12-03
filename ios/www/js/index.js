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
        mapboxgl.accessToken = '';
        var map = new mapboxgl.Map({
            container: 'mapPane',
            style: 'http://localhost:49000/res/natural_earth.vector.json',
            attributionControl: false,
            maxZoom: 7
        });
    }    
};

app.initialize();

