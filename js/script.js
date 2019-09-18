
    // CLASSES
class NavBar{
    constructor(navElemnts, screenResolution){
        this.otherLiElements = Array.from(navElemnts);
        this.wrpButton = this.otherLiElements.shift();
        this.screenResolution = screenResolution;
        this.otherLiElLength = this.otherLiElements.length;
        this.wrpButton.onclick = function(){
            navBar.wrapNavBar();
        }
        for(var i = 0; i < this.otherLiElLength; i++){
            console.log(this.otherLiElements[i]);       
            this.otherLiElements[i].onclick = function(){
                navBar.wrapNavBar();
                
            }
        }
    }

    showNavBar(){
        for(var i = 0; i < this.otherLiElLength; i++){
            this.otherLiElements[i].style.display = "flex";
            this.otherLiElements[i].style.justifyContent = "center";
        }
        //if for hiding old logo(logo as last element of ul list)
        /*if(window.innerWidth<this.screenResolution){
            this.otherLiElements[this.otherLiElLength - 1].style.display = "none";
        }*/
    }
    hideNavBar(){
        for(var i = 0; i < this.otherLiElLength; i++){
            this.otherLiElements[i].style.display = "none";
        }
    }

    wrapNavBar(){
        if( window.innerWidth <= this.screenResolution ){
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
var listOfSingers = document.getElementsByClassName("singer");
var screenResolution = 900;
    // GLOBAL VARIABLES END

    // OBJECTS
var navBar = new NavBar(ulElements, screenResolution);
    // OBJECTS END

    // WINDOW OPERATIONS
window.onresize = function(){
    console.log(this.screenResolution);
    console.log(window.innerWidth);
    if(window.innerWidth>screenResolution){
        navBar.showNavBar();
    }
    else{
        navBar.wrpButton.innerText="Menu";
        navBar.hideNavBar();
    }
};
    // WINDOW OPERATIONS END
