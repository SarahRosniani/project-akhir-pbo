function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
class Level {
    
    currentLevel;
    latestLevel;
    maxLevel;
    constructor(mx_lv) {
        this.maxLevel = mx_lv; 
    }
    setLevel(lv) {
        this.currentLevel = lv;
    }
    getCurrentLevel() {
        return this.currentLevel; 
    }
    getLatestLevel() {
        return this.latestLevel;    
    }
    
    showLevel(){    
        fill(255,255,255);
        textFont("Comic Sans MS");
        textSize(30);
        text("Level-"+this.currentLevel,460,35);
    }
}
