
//jedi
const luke={
    attack:10,
    mainFighter:false,
    get counter(){
        return this.attack / 3
    }
}
const mace={
    attack:8,
    mainFighter:false,
    get counter(){
        return this.attack / 2
    }
}
const yoda={
    attack:4,
    mainFighter:false,
    get counter(){
        return this.attack *.8
    }
}


//sith
const darth={
    attack:10,
    mainFighter:false,
    get counter(){
        return this.attack / 3
    }
}
const vader={
    attack:8,
    mainFighter:false,
    get counter(){
        return this.attack / 2
    }
}
const kylo={
    attack:4,
    mainFighter:false,
    get counter(){
        return this.attack *.8
    }
}

//onclick
$("#darth").on("click", function(){
    darth.mainFighter=true;
    $('#darth').children('img').attr('src', 'grey.jpg');
})