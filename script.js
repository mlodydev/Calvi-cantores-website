
    // CLASSES
class NavBar{
    constructor(navElemnts, screenResolution){
        this.otherLiElements = Array.from(navElemnts);
        this.wrpButton = this.otherLiElements.shift();
        this.screenResolution = screenResolution;
        console.log("NavBar CONSTRUCTOR: ", this.wrpButton, " - is type of: ", typeof(this.wrpButton) );
    }

    showNavBar(){
        let otherLen = this.otherLiElements.length;
        for(var i = 0; i < otherLen; i++){
            this.otherLiElements[i].style.display = "flex";
            this.otherLiElements[i].style.justifyContent = "center";
        }
        if(window.screen.availWidth<this.screenResolution){
            this.otherLiElements[otherLen - 1].style.display = "none";
        }
    }
    hideNavBar(){
        for(var i = 0; i < this.otherLiElements.length; i++){
            this.otherLiElements[i].style.display = "none";
        }
    }

    wrapNavBar(){
        if( window.screen.availWidth <= this.screenResolution ){
            if( this.wrpButton.innerText=="Ukryj" ){
                this.wrpButton.innerText = "Menu";
                this.hideNavBar();
            }
            else{
                this.wrpButton.innerText = "Ukryj";
                this.showNavBar();
            }
        }
    }
    
}
    // CLASSES END

    // GLOBAL VARIABLES
var ulElements = document.getElementById("navbar").getElementsByTagName("li");

var screenResolution = 900;
    // GLOBAL VARIABLES END

    // OBJECTS
var navBar = new NavBar(ulElements, screenResolution);
navBar.wrpButton.onclick = function(){
    navBar.wrapNavBar();
};

    // OBJECTS END

    // WINDOW OPERATIONS
document.body.onresize = function(){
    if(window.screen.availWidth>screenResolution){
        navBar.showNavBar();
    }
    else{
        navBar.wrpButton.innerText="Menu";
        navBar.hideNavBar();
    }
};
    // WINDOW OPERATIONS END
