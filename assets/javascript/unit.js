
//jedi
const luke={
    attack:10,
    name:"luke",
    health:200,
    maxpower:100,
    type:"jedi",
    mainFighter:false,
    oppenent:false,
    get counter(){
        return this.attack / 3
    }
}

const mace={
    attack:8,
    health:200,
    maxpower:90,
    name:"mace",
    type:"jedi",
    mainFighter:false,
    oppenent:false,
    get counter(){
        return this.attack / 2
    }
}
const yoda={
    attack:4,
    health:200,
    maxpower:75,
    name:"yoda",
    type:"jedi",
    mainFighter:false,
    oppenent:false,
    get counter(){
        return this.attack *.9
    }
}


//sith
const sidious={
    attack:10,
    name:"sidious",
    maxpower:100,
    health:200,
    type:"sith",
    mainFighter:false,
    oppenent:false,
    get counter(){
        return this.attack / 3
    }
};
const vader={
    attack:8,
    health:200,
    maxpower:90,
    name:"vader",
    type:"sith",
    mainFighter:false,
    oppenent:false,
    get counter(){
        return this.attack / 2
    }
}
const kylo={
    attack:4,
    health:200,
    maxpower:75,
    name:"kylo",
    type:"sith",
    mainFighter:false,
    oppenent:false,
    get counter(){
        return this.attack *.9
    }
}
//picture links in array
const lukep="https://github.com/Jonathan169/Unit-4-game/blob/master/assets/images/luke.jpg?raw=true";
const macep="https://github.com/Jonathan169/Unit-4-game/blob/master/assets/images/macewindu.jpg?raw=true";
const yodap="https://github.com/Jonathan169/Unit-4-game/blob/master/assets/images/master_yoda_star_wars-t2.jpg?raw=true";
const sidiousp="https://github.com/Jonathan169/Unit-4-game/blob/master/assets/images/darthsidious.jpg?raw=true";
const vaderp="https://github.com/Jonathan169/Unit-4-game/blob/master/assets/images/vardercool.jpg?raw=true";
const kylop="https://github.com/Jonathan169/Unit-4-game/blob/master/assets/images/kylo.jpg?raw=true";
const pics=[lukep,macep,yodap,sidiousp,vaderp,kylop];


//variables for game play
const sith=[sidious, vader, kylo];
const jedi=[luke,mace,yoda];
var audio="";
let fallen="";
let Coppenent="";
let playerChosen="";
let player="";
let undo="";
let battlestarted=false;
let enumber="";
let mynum="";
const hbar=[$("#sithhealth"),$("#jedihealth")]
const side=[$("#siths"),$("#jedis")]
const flist=["luke","mace","yoda","sidious","vader","kylo"]
const fighters=[luke,mace,yoda,sidious,vader,kylo]
const ids=[$("#luke"),$("#mace"),$("#yoda"),$("#sidious"),$("#vader"),$("#kylo")]


//onclick
$("#sidious").on("click", function(){
    playerChosen=this.id;
    start();
    check();
    oppenent();
});

$("#vader").on("click", function(){
    playerChosen=this.id;
    start();
    check();
    oppenent();
});

$("#kylo").on("click", function(){
    playerChosen=this.id;
    start();
    check();
    oppenent();
});

$("#luke").on("click", function(){
    playerChosen=this.id;
    start();
    check();
    oppenent();
    
});

$("#mace").on("click", function(){
    playerChosen=this.id;
    start();
    check();
    oppenent();
});

$("#yoda").on("click", function(){
    playerChosen=this.id;
    start();
    check();
    oppenent();
});


//begining game functions
function start(id){
    for(let i=0;i<fighters.length;i++){
    if(playerChosen===flist[i]&& player===""){
        fighters[i].mainFighter=true;
        player=i;
    
    }}
    if(fighters[player].type==="sith"){
        enumber=1;
        mynum=0;
    }else if(fighters[player].type==="jedi"){
        enumber=0;
        mynum=1;
    }
};

function check(){
for(let i=0;i<fighters.length;i++){
    if(fighters[i].mainFighter===true&&fighters[i].type==="jedi"){
        $("#jedis").children('img').attr('src',pics[i]);
        $("#jedis").children('div').attr('class',"stats");
        $("#jname").text(flist[i]);
        $("#jattack").text("Attack:"+fighters[i].attack);
        ids[i].children('img').attr('src', "https://github.com/Jonathan169/Unit-4-game/blob/master/assets/images/grey.jpg?raw=true");
        ids[i].children('div').attr("class","bstats");
    }
    else if(fighters[i].mainFighter===true&&fighters[i].type==="sith"){
        $("#siths").children('img').attr('src',pics[i]); 
        $("#siths").children('div').attr('class',"estats");
        $("#sname").text(flist[i]);
        $("#sattack").text("Attack:"+fighters[i].attack);
        ids[i].children('img').attr('src', "https://github.com/Jonathan169/Unit-4-game/blob/master/assets/images/grey.jpg?raw=true");
        ids[i].children('div').attr("class","bstats");
    }
}};

function oppenent(){
   playerChosen= flist.findIndex(function(word){return word===playerChosen;})
    if(player!==""&& fighters[playerChosen].type!== fighters[player].type){
       fighters[playerChosen].oppenent=true;
    };
    if (fighters[playerChosen].oppenent===true&& fighters[playerChosen].type==="jedi"&& Coppenent===""){
        $("#jedis").children('img').attr('src',pics[playerChosen]);
        $("#jedis").children('div').attr('class',"stats");
        $("#jname").text(flist[playerChosen]);
        $("#jattack").text("Attack:"+fighters[playerChosen].attack);
        ids[playerChosen].children('img').attr('src', "https://github.com/Jonathan169/Unit-4-game/blob/master/assets/images/grey.jpg?raw=true");
        ids[playerChosen].children('div').attr("class","bstats");
        Coppenent=fighters[playerChosen];
        gameReady();
    } else if(fighters[playerChosen].oppenent===true&& fighters[playerChosen].type==="sith"&& Coppenent===""){
        $("#siths").children('img').attr('src',pics[playerChosen]);
        $("#siths").children('div').attr('class',"estats");
        $("#sname").text(flist[playerChosen]);
        $("#sattack").text("Attack:"+fighters[playerChosen].attack);
        ids[playerChosen].children('img').attr('src', "https://github.com/Jonathan169/Unit-4-game/blob/master/assets/images/grey.jpg?raw=true");
        ids[playerChosen].children('div').attr("class","bstats");
        Coppenent=fighters[playerChosen];
        gameReady();
    };
    updateStats(); 
};


//Action
function gameReady(){
    battlestarted=true;

};
let coChoice;
let oattack;
let ocounter;
let smove;
let echance=2;

function comove(){
    oattack="";
    ocounter="";
    smove="";
    coChoice="";
    coChoice=Math.round(Math.random()*1);
    smove=Math.round(Math.random()*2);
    
    if(coChoice===1){
    oattack=true;
    }
    if(coChoice===0){
        ocounter=true;

    } 
    if(coChoice===0){
        ocounter=true;
     }
};


//attack and counter functions
function updateStats(){
    if(fighters[player].type==="jedi"){
        $("#jattack").text("Attack: "+fighters[player].attack);
        $("#sattack").text("Attack: "+Coppenent.attack);
    }
    else if(fighters[player].type==="sith"){
        $("#sattack").text("Attack:"+fighters[player].attack);
        $("#jattack").text("Attack:"+Coppenent.attack);
    };
    hbar[enumber].width(Coppenent.health)
    hbar[mynum].width(fighters[player].health)
    
};

function powup(){
    if(fighters[player].attack< fighters[player].maxpower){
    fighters[player].attack=fighters[player].attack *2
    }
    else if(fighters[player].attack>=fighters[player].maxpower){
        fighters[player].attack=fighters[player].maxpower
        console.log("Im over 9000!!!!!")
    }
};

function oppUp(){
    if(Coppenent.attack<Coppenent.maxpower){
        Coppenent.attack=Coppenent.attack *2
    } 
    else if(Coppenent.attack>=Coppenent.maxpower){
        Coppenent.attack=Coppenent.maxpower
        console.log("hes over 9000!!!!!")
    }
};

function oppD(){
    if( Coppenent.health<=0){
        fighters[player].health+=40;
        Coppenent.oppenent=false;
        side[enumber].children('img').attr('src', "https://github.com/Jonathan169/Unit-4-game/blob/master/assets/images/grey.jpg?raw=true");
        side[enumber].children('div').attr("class","bstats");
        updateStats();
        fighters[player].attack=fighters[player].attack/2
        fallen++;
        echance=1;
        Coppenent="";
    }
    setTimeout(message, 1000)
};

const message= function(){
    if(fallen===3){
        if(confirm("the force thanks you But theres still more out there, would you like to try again")){
        window.location.reload();
        }else{
            alert("ok goodbye");
            window.open("unit.html","_self");
        }

    }
};


//onclick
$("#attack").on("click",function(){
    comove();

    if(ocounter===true && smove===echance){
        fighters[player].health= fighters[player].health - Coppenent.counter;
        
        console.log("opp countered and takes no damage")
    }
    else if(ocounter===true){
        Coppenent.health=Coppenent.health - (fighters[player].attack /4);
        fighters[player].health= fighters[player].health - Coppenent.counter;
        console.log("opp countered")
    }
    else if (oattack===true){
    fighters[player].health = fighters[player].health - Coppenent.attack;
    Coppenent.health= Coppenent.health - fighters[player].attack ;
    console.log("opp attacked")
    oppUp();
    };
    if(battlestarted===true){
     powup();
    }
    updateStats();
    oppD();
});

$("#counter").on("click",function(){
    comove();
    if (oattack===true&& smove===2&& fighters[player].attack > 5){
    Coppenent.health= Coppenent.health - fighters[player].counter ;
    oppUp();
    console.log("i take no damage");
    }
    else if (oattack===true&& fighters[player].attack > 5){
    fighters[player].health= fighters[player].health - (Coppenent.attack /4);
    Coppenent.health= Coppenent.health - fighters[player].counter ;
    console.log("i lose " + Coppenent.attack/4);
        oppUp();
    }
    else if(ocounter===true&& fighters[player].attack>5){
        Coppenent.health=Coppenent.health - 10;
        fighters[player].health= fighters[player].health - 10;
        fighters[player].attack= fighters[player].attack /2;
        Coppenent.attack=Coppenent.attack /2;
        console.log("we both counter")
    }
     else if (fighters[player].attack<=5&& oattack===true){
    fighters[player].health = fighters[player].health - Coppenent.attack;
    console.log("stop being a bish and attack")
    oppUp()
    };
    updateStats();
    oppD();
        if(fighters[player].health<=0){
            if(confirm("AWW you lost would you like to try again")){
                window.open("unit.html","_self")
            } else{
                alert("ok goodbye")
                window.open("unit.html","_self")
            }
        }
});



