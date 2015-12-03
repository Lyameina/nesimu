//FUNCTIONS
function reset(Player,numPlayer){
    $(Player).css('bottom','0');
    $(Player).css('position','absolute');
    switch(numPlayer){
        case 1:
            $(Player).css('left','100px');
            //            $(Player).css('background-image','url(images\player1.png)');
            break;

        case 2:
            $(Player).css('left','250px');
            break;
    }

}

function commands(numPlayer){
    var commands = [];
    switch(numPlayer){
        case 1:
            commands["haut"] = 90;
            commands["bas"] = 83;
            commands["gauche"] = 81;
            commands["droite"] = 68;
            break;

        case 2:
            commands["haut"] = 79;
            commands["bas"] = 76;
            commands["gauche"] = 75;
            commands["droite"] = 77;
            break;
    }
    return commands;
}

function move(Player,numPlayer,event){
    if(canMove(Player,numPlayer,event)){
        var pos = null;
        switch(event.which){
            case commands(numPlayer)["haut"] :
                pos = parseInt($(Player).css('bottom'));
                //                $(Player).css('bottom',pos+50+"px");
                $(Player)
                    .animate({bottom: pos+50},0,'linear')
                    .delay(100)
                event.preventDefault();
                break;

            case commands(numPlayer)["bas"] :
                pos = parseInt($(Player).css('bottom'));
                //                $(Player).css('bottom',pos-50+'px');
                $(Player)
                    .animate({bottom: pos-50},0,'linear')
                    .delay(50)
                break;

            case commands(numPlayer)["gauche"] :
                pos = parseInt($(Player).css('left'));
                //                $(Player).css('left',pos-50+'px');
                $(Player)
                    .animate({left: pos-50},0,'linear')
                    .delay(50)
                break;

            case commands(numPlayer)["droite"] :
                pos = parseInt($(Player).css('left'));
                //                $(Player).css('left',pos+50+'px');
                $(Player)
                    .animate({left: pos+50},0,'linear')
                    .delay(50)
                break;
        }
    }
}

function canMove(Player,numPlayer,event){
    //    console.log(event);
    var auth = true;
    var pos = null;
    switch(event.which){
        case commands(numPlayer)["haut"] :
            pos = parseInt($(Player).css('bottom'));
            if(pos==650){
                auth = false;
            }
            break;

        case commands(numPlayer)["bas"] :
            pos = parseInt($(Player).css('bottom'));
            if(pos==0){
                auth = false;
            }
            break;

        case commands(numPlayer)["gauche"] :
            pos = parseInt($(Player).css('left'));
            if(pos==0){
                auth = false;
            }
            break;

        case commands(numPlayer)["droite"] :
            pos = parseInt($(Player).css('left'));
            if(pos==350){
                auth = false;
            }
            break;

        default:
            auth = true;
            break;
    }
    return auth;
}

function dangerZone(playground,numZone,position,direction,speed){
    //Creation
    playground.append('<div id="danger'+numZone+'"></div>');
    var currentZone = $('#danger'+numZone);
    //Absolute position
    currentZone.css('position','absolute');
    //Position and size
    var width = playground.css('width'+100);
    var height = '30px';
    var bottom = position*50+5+'px';
    currentZone.css('width',width);
    currentZone.css('height',height);
    currentZone.css('bottom',bottom);
    //Enemy creation

    var d = document.createElement('span');
    $(d).addClass('enemy')
        .css('height','30')
        .attr('position','absolute')
        .attr('margin-top','0px')
        .attr('margin-bottom','0px')
        .css('margin-left','-50px')
        .appendTo(currentZone)

    i = document.createElement('img');
    $(i).attr('src','images/white.png')
        .attr('height','30')
        .attr('border','0')
        .appendTo(d)

    runIt(d,direction,speed,0,0);
}

function finishZone(playground){
    //Creation
    playground.append('<div id="finish"></div>');
    var currentZone = $('#finish');
    //Absolute position
    currentZone.css('position','absolute');
    //Position and size
    var width = playground.css('width'+100);
    var height = '30px';
    var bottom = playground.css('height')-50;
    currentZone.css('width',width);
    currentZone.css('height',height);
    currentZone.css('bottom',bottom);
}

function runIt(enemy,direction,speed,delay,wait){
    var op = "+";
    var invop = "-";
    var move1 = 0;
    var move2 = 0;
    switch(direction){
        case "r":
            move1=speed;
            break;

        case "l":
            move2=speed;
            break;
    }

    $(enemy)
        .delay(delay)
    //        .animate({marginLeft: op+"=450",width: '-=50'},move1,'linear')
    //        .animate({width: '0px'},0)
    //        .animate({width: '-='+$(enemy).attr('marginLeft')},move1,'linear',false)
        .animate({marginLeft: op+"=450"},move1,'linear',{queue:false})
        .delay(wait)
    //        .animate({width: '-=50'},move2,'linear')
        .animate({marginLeft: invop+"=450"},move2,'linear',function(){
        runIt(enemy,direction,speed,delay);
    })
}

//function contact(player,numPlayer,enemy){
//    window.setInterval(function(){
//        if(collision(player,enemy)){
//            reset(player,numPlayer);
//        }
//    })
//}

function collision(entity1, entity2) {
    var x1 = $(entity1).offset().left;
    var y1 = $(entity1).offset().top;
    var h1 = $(entity1).outerHeight(false);
    var w1 = $(entity1).outerWidth(false);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $(entity2).offset().left;
    var y2 = $(entity2).offset().top;
    var h2 = $(entity2).outerHeight(false);
    var w2 = $(entity2).outerWidth(false);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
}

function contact(player,numPlayer,enemy){
    window.setInterval(function(){
        for(var i = 0; i<enemy.length; i++){

            if(collision(player,enemy[i])){
                reset(player,numPlayer);
            }
        }
    }, 0);
}

function win(player,numPlayer){
    var pos = $(player).css('bottom');
    if(pos=="650px"){
        switch(numPlayer){
            case 1:
                var color = "#aa7ad4";
                break;

            case 2:
                var color = "#7cb766";
                break;
        }

        $("#title").fadeIn(400);
        $("#title").css('color',color);
        $("#title").html('<span>PLAYER '+numPlayer+' WINS<br>CLICK TO PLAY AGAIN</span>');
        $('body').unbind('keydown');
    }
}
//
//EXEC
//
$(document).ready(function(){

    var playground = $('#area');
    var finish = $('#finish');
    dangerZone(playground,1,1,'l',1500);
    dangerZone(playground,2,2,'r',1200);
    //
    dangerZone(playground,3,4,'l',1000);
    dangerZone(playground,4,5,'r',700);

    dangerZone(playground,5,7,'r',700);
    dangerZone(playground,6,8,'l',800);
    dangerZone(playground,7,9,'r',900);

    dangerZone(playground,8,11,'r',500);
    dangerZone(playground,9,12,'r',700);

    var player1 = $('#player1');
    var player2 = $('#player2');
    var enemy = $('.enemy img');
    //    console.log(enemy[1]);
    reset(player1,1);
    reset(player2,2);
    contact(player1,1,enemy);
    contact(player2,2,enemy);
//    $("#title").css('background','url("images/background.jpeg")');
    $("#title").animate({background: 'url(images/title.png)'},2000,'linear');
    $("#title span").css("display", "none");
    $("#title span").slideUp(300).delay(800).fadeIn(400);
    $("#title").click(function(){
        $("#title").slideUp(300).fadeOut(400);
        playground.css("display", "none");
        playground.slideUp(300).delay(800).fadeIn(400);
        enemy.css("display", "none");
        enemy.slideUp(300).delay(800).fadeIn(400);
        $('body').delay(1500).keydown(function(event){
            move(player1,1,event);
            move(player2,2,event);
            win(player1,1,win);
            win(player2,2,win);
        });
    })
    
    $('#title').click(function(){
        $('body').unbind('keydown');
        reset(player1,1);
        reset(player2,2);
        $('body').keydown(function(event){
            move(player1,1,event);
            move(player2,2,event);
            win(player1,1,win);
            win(player2,2,win);
        });
    })
});