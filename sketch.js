var player, playerimg,playerimgatt, zombhea=100,zombimg,zombie,fireimg,fireball, cooldown = 0, coolin,map,mapimg,playerhea=20, kingdomimg, xp=0, newP = 0,change=0,vilimg;
var kingdom, forest, vil1, vil2, vil3, vil4, vil5, flame=0,light,zombielef,comimg, vilr1, vilr2, vilr3, vilr4, vilr5,gameState=0,health,textremover=0;
var vilrimg,trick=0,dunimg,dun1,dun2,dun3,dun4,dun5,t1=0,t2=0,t3=0,t4=0,t5=0,monsters,golem,dragon1,dragon2,h1,h2,h3,h4,h5,dragon1,dragon2,d1hea=200,h2hea=130;
var golimg, himg1,ghea=200,h1hea=130,dunn1=0,destroy=1,cheat1=0,cheat2=0,cheat3=0,cheat4=0,cheat5=0,simg,ability,cheat=1,d1img,d2img,ceat=1,h3hea=130,d2hea=250, cat=1,ct=1,t=1,h4hea=130,h5hea=130,cd=0;
var eimg,entity,bb,b,end=100,tb,ehea=300,bye;
function preload() {
    playerimg=loadImage("ninja2.png");
    playerimgatt=loadImage("ninja.png");
    backgroundimg=loadImage("l.jpg");
    zombimg=loadImage("zombie.gif");
    fireimg=loadImage("download3.png");
    mapimg=loadImage("map.png");
    kingdomimg=loadImage("kingdom.png");
    vilimg=loadImage("village.png"); 
    zombieleft=loadImage("zombie left.webp");
    comimg=loadImage("comet.png");
    vilrimg=loadImage("villager1.png");
    dunimg=loadImage("rsz_dungeon.png");
    golimg=loadImage("golem.png");
    himg1=loadImage("download2.png");
    simg=loadImage("shard.png");
    d1img=loadImage("download1.png");
    d2img=loadImage("unnamed.jpg");
    tb=loadImage("mountain.png");
    eimg=loadImage("entity.png");
    bye=loadImage("done.png");
    //359 406
}
function setup() {
    createCanvas(displayWidth,displayHeight-200);
    
    fill("red");
    bb=createSprite(359, 406, 20, 20);
    bb.visible=false;
    fill("white");
    zombie=createSprite(1700,640,200,200);
    zombie.addImage(zombimg)
    zombie.scale=2;
    zombie.velocityX=3;
    player = createSprite(200,670,400,400);
    player.addImage(playerimg);
    player.scale=1/2;
    map=createSprite(300,300,200,200);
    kingdom=createSprite(278,130,20,20);
    kingdom.visible=false
    forest=createSprite(285,466,20,20);
    forest.visible=false
    map.addImage(mapimg);
    map.visible=false
    vil1=createSprite(467,463,20,20);
    vil1.visible=false
    vil2=createSprite(129,349,20,20);
    vil2.visible=false
    vil3=createSprite(227,389,20,20);
    vil3.visible=false
    vil4=createSprite(145,522,20,20);
    vil4.visible=false
    vil5=createSprite(406,88,20,20);
    vil5.visible=false

    vilr1=createSprite(1700,640,200,200);
    vilr1.visible=false
    vilr2=createSprite(1700,640,200,200);
    vilr2.visible=false
    vilr3=createSprite(1700,640,200,200);
    vilr3.visible=false
    vilr4=createSprite(1700,640,200,200);
    vilr4.visible=false
    vilr5=createSprite(1700,640,200,200);
    vilr5.visible=false
    vilr1.addImage(vilrimg);
    vilr2.addImage(vilrimg);
    vilr3.addImage(vilrimg);
    vilr4.addImage(vilrimg);
    vilr5.addImage(vilrimg);

    dun1=createSprite(450,145,20,20);
    dun1.visible=false
    dun2=createSprite(472,242,20,20);
    dun2.visible=false
    dun3=createSprite(338,492,20,20);
    dun3.visible=false
    dun4=createSprite(200,240,20,20);
    dun4.visible=false
    dun5=createSprite(232,219,20,20);
    dun5.visible=false
    
}
function draw() {
    console.log(mouseX);
    console.log(mouseY);
    if(end===100){
    if(frameCount<200) {
        background("black");
        push();
        fill("white")
        strokeWeight(5);
        textSize(30);
        text("You are trapped in a world, there is evil surrounding you. You have one goal: free this world, fight the mini-bosses, and reach the main boss.",50,200)
        text("space:attack e:fireball p:level up l:comet m:map h:hide tap the villagers and fight for your life. Click o",50,300)
        pop();
        text(frameCount,20,20)

    }
    else{
        end=0;
    }
}
    if (end===0) {
    
    console.log(monsters);
    if (player.y<670) {
    player.y = player.y + 5
    }
    coolin=cooldown;
    cooldown=cooldown+0.05;
    flame=flame+0.005;
    
    if (change===0) {
    background(backgroundimg);
    }
    if (change===1) {
        background(kingdomimg);
    }
    if (change===2) {
        background(vilimg);
    }
    if (change===3) {
        background(dunimg)
        trick=0
    }
    if (change===4) {
        background(tb);
    }
    if (cooldown>100 && cooldown<150) {
       text("cooldown Ready",200,200);0
    }
    if (mousePressedOver(kingdom)) {
       change=1;
       trick=0;
       if (monsters>=1) {
        destroy=0;
        
    }
    }
    if (mousePressedOver(forest)) {
        change=0;
        trick=0;
        if (monsters>=1) {
            destroy=0;
        }
    }
    if (mousePressedOver(vil1) || mousePressedOver(vil2) || mousePressedOver(vil3) || mousePressedOver(vil4) || mousePressedOver(vil5)) {
        change=2;
        if (monsters>=1) {
        destroy=0;
        }
    }
    if (mousePressedOver(dun1) || mousePressedOver(dun2) || mousePressedOver(dun3) || mousePressedOver(dun4) || mousePressedOver(dun5)) {
        change=3;
        trick=0;
    }
    if (destroy===0) {
        golem.destroy();
        h1.destroy();
        dragon1.destroy();
        h2.destroy();
    }
    if (mousePressedOver(vil1)) {
        trick=1;
    }
    if (trick===1) {
        vilr1.visible=true;
    } else {
        vilr1.visible=false;
    }
    if (mousePressedOver(vil2)) {
        trick=2;
    }
    if (trick===2) {
        vilr2.visible=true;
    } else {
        vilr2.visible=false;
    }
    if (trick===3) {
        vilr3.visible=true;
    } else {
        vilr3.visible=false;
    }
    if (mousePressedOver(vil4)) {
        trick=4;
    }
    if (trick===4) {
        vilr4.visible=true;
    } else {
        vilr4.visible=false;
    }
    if (mousePressedOver(vil5)) {
        trick=5;
    }
    if (mousePressedOver(vil3)) {
        trick=3;
    }
    if (mousePressedOver(vilr1)) {
        t1=1;
    }
    if (mousePressedOver(vilr2)) {
        t2=2;
    }
    if (mousePressedOver(vilr3)) {
        t3=3;
    }
    if (mousePressedOver(vilr4)) {
        t4=4;
    }
    if (mousePressedOver(vilr5)) {
        t5=5;
    }
    if (trick===5) {
        vilr5.visible=true;
    } else {
        vilr5.visible=false;
    }
    if(zombie.x<=0){
        zombie.velocityX=zombie.velocityX*-1;
        zombie.addImage(zombieleft);
    }
    if(zombie.x>=1800){
        zombie.velocityX=zombie.velocityX*-1;
        zombie.addImage(zombimg);
    }
    if (zombie.isTouching(player)) {
        playerhea=playerhea-0.5;
    }
    if (frameCount % 50  === 0 && playerhea<=19 && playerhea>0) {
        playerhea=playerhea+1;
    }
    if(playerhea<=0){
        player.x=200;
        cooldown=0;
        zombie.x=1700;
        playerhea=20;
    }
    if (keyDown("p") && xp>=100) {
        newP=1;
    }
    if (keyDown("up")) {
        player.y=player.y-70
    }
    if (keyDown("right")) {
        player.x=player.x+70
    }
    if (keyDown("left")) {
        player.x=player.x-70
    }
    if (zombhea<=0 && xp===0) {
      zombie.destroy();
      xp=xp+10;
      textremover=1;
    }
    if (keyDown("m")) {
        map.visible=true
        kingdom.visible=true
        forest.visible=true
        vil1.visible=true
        vil2.visible=true
        vil3.visible=true
        vil4.visible=true
        vil5.visible=true
        if (t1===1) {
            dun1.visible=true
        }
        if (t2===2) {
            dun2.visible=true
        }
        if (t3===3) {
            dun3.visible=true
        }
        if (t4===4) {
            dun4.visible=true
        }
        if (t5===5) {
            dun5.visible=true
        }
    }
    if (keyDown("h")) {
        map.visible=false
        kingdom.visible=false
        forest.visible=false
        vil1.visible=false
        vil2.visible=false
        vil3.visible=false
        vil4.visible=false
        vil5.visible=false
        dun1.visible=false
        dun2.visible=false
        dun3.visible=false
        dun4.visible=false
        dun5.visible=false
    }

    if (mousePressedOver(dun1)) {
        monsters=1;
    }
    if (monsters===1) {
        if (cheat1==! 1) {
        golem=createSprite(1700,640,400,400);
        golem.addImage(golimg);
        golem.scale=3
        h1=createSprite(1300,640,200,200);
        h1.addImage(himg1);
        }
        h1.velocityX=-3;
        if (h1.isTouching(player)) {
           playerhea=playerhea-2;
        }
        cheat1=1
        if (h1hea===0 && cheat===1) {
            h1.destroy();
            if (cheat===1) {
            xp=xp+15;
            }
            cheat=2;
        }
        if (ghea===0) {
            golem.destroy();
            if (cheat===2) {
            xp=xp+50;
            }
            cheat=3
            cd=cd+1;
        }
        if(golem.isTouching(player)){
            playerhea=playerhea-15
        }
    }
    if (mousePressedOver(dun2)) {
        monsters=2;
        
        // if (frameCount % 150 === 0) {
        //     shard = createSprite(golem.x,golem.y,20,20);
        //     shard.addImage(simg);
        //     shard.velocityX=-10;
        //     shard.scale=1/2;
        //     ability=1;
        // }
        // if (ability===1 && shard.isTouching(player)) {
        //     playerhea=playerhea-10;
        // }
    }
    if (monsters===2) {
        if (cheat2==! 1) {
        dragon1=createSprite(1700,640,400,400);
        dragon1.addImage(d1img);
        dragon1.scale=3
        h2=createSprite(1300,640,200,200);
        h2.addImage(himg1);
        }
        h2.velocityX=-3;
        if (h2.isTouching(player)) {
           playerhea=playerhea-2;
        }
        cheat2=1
        if (h2hea===0 && ceat===1) {
            h2.destroy();
            if (ceat===1) {
            xp=xp+15;
            }
            ceat=2;
        }
        if (d1hea===0) {
            dragon1.destroy();
            if (ceat===2) {
            xp=xp+50;
            }
            ceat=3
            cd=cd+1
        }
        if(dragon1.isTouching(player)){
            playerhea=playerhea-15
        }
    }
    if (mousePressedOver(dun3)) {
        monsters=3;
    }
    if (monsters===3) {
        if (cheat3==! 1) {
        dragon2=createSprite(1700,640,400,400);
        dragon2.addImage(d2img);
        dragon2.scale=3
        h3=createSprite(1300,640,200,200);
        h3.addImage(himg1);
        }
        h3.velocityX=-3;
        if (h3.isTouching(player)) {
           playerhea=playerhea-2;
        }
        cheat3=1
        if (h3hea===0 && cat===1) {
            h3.destroy();
            if (cat===1) {
            xp=xp+15;
            }
            cat=2;
        }
        if (d2hea===0) {
            dragon2.destroy();
            if (cat===2) {
            xp=xp+55;
            }
            cat=3
            cd=cd+1
        }
        if(dragon2.isTouching(player)){
            playerhea=playerhea-17
        }
    }
    if (mousePressedOver(dun4)) {
        monsters=4;
    }
    if (monsters===4) {
        if (cheat4==! 1) {
        h4=createSprite(1300,640,200,200);
        h4.addImage(himg1);
        }
        h4.velocityX=-3;
        if (h4.isTouching(player)) {
           playerhea=playerhea-2;
        }
        cheat4=1
        if (h4hea===0 && ct===1) {
            h4.destroy();
            if (ct===1) {
            xp=xp+15;
            }
            ct=2;
            cd=cd+1
        }
    }
    if (mousePressedOver(dun5)) {
        monsters=5;
    }
    if (monsters===5) {
        if (cheat5==! 1) {
        h5=createSprite(1300,640,200,200);
        h5.addImage(himg1);
        }
        h5.velocityX=-3;
        if (h5.isTouching(player)) {
           playerhea=playerhea-2;
        }
        cheat5=1
        if (h5hea===0 && t===1) {
            h5.destroy();
            if (t===1) {
            xp=xp+15;
            }
            t=2;
            cd=cd+1
        }
    }

    if (keyDown("e") && cooldown>=100) {
      cooldown=0;
      player.addImage(playerimgatt);
      fireball = createSprite(player.x,player.y,10,10);
      fireball.addImage(fireimg);
      fireball.velocityX=10;
      gameState=1;
    }
    if (gameState===1 && fireball.isTouching(zombie)) {
        zombhea=zombhea-30;
        fireball.destroy();
    }
    if (gameState===2 && light.isTouching(zombie)) {
       zombhea=zombhea-50;
       light.destroy();
    }
    if (gameState===1 && fireball.isTouching(h1)) {
        h1hea=h1hea-30;
        fireball.destroy();
    }
    if (gameState===2 && light.isTouching(h1)) {
       h1hea=h1hea-50;
       light.destroy();
    }
    if (gameState===1 && fireball.isTouching(h2)) {
        h2hea=h2hea-30;
        fireball.destroy();
    }
    if (gameState===2 && light.isTouching(h2)) {
       h2hea=h2hea-50;
       light.destroy();
    }
    if (gameState===1 && fireball.isTouching(golem)) {
        ghea=ghea-15;
        fireball.destroy();
    }
    if (gameState===2 && light.isTouching(golem)) {
       ghea=ghea-25;
       light.destroy();
    }
    if (gameState===1 && fireball.isTouching(dragon1)) {
        d1hea=d1hea-15;
        fireball.destroy();
    }
    if (gameState===2 && light.isTouching(dragon1)) {
       d1hea=d1hea-25;
       light.destroy();
    }
    if (gameState===1 && fireball.isTouching(h3)) {
        h3hea=h3hea-30;
        fireball.destroy();
    }
    if (gameState===2 && light.isTouching(h3)) {
       h3hea=h3hea-50;
       light.destroy();
    }
    if (gameState===1 && fireball.isTouching(dragon2)) {
        d2hea=d2hea-15;
        fireball.destroy();
    }
    if (gameState===2 && light.isTouching(dragon2)) {
       d2hea=d2hea-25;
       light.destroy();
    }if (gameState===1 && fireball.isTouching(h4)) {
        h4hea=h4hea-30;
        fireball.destroy();
    }
    if (gameState===2 && light.isTouching(h4)) {
       h4hea=h4hea-50;
       light.destroy();
    }
    if (gameState===1 && fireball.isTouching(h5)) {
        h5hea=h5hea-30;
        fireball.destroy();
    }
    if (gameState===2 && light.isTouching(h5)) {
       h5hea=h5hea-50;
       light.destroy();
    }
    if (gameState===1 && fireball.isTouching(entity)) {
        ehea=ehea-10;
        fireball.destroy();
    }
    if (gameState===2 && light.isTouching(entity)) {
       ehea=ehea-20;
       light.destroy();
    }
    if (keyWentUp("e")) { 
        player.addImage(playerimg);
    }
    if (keyWentUp("space")) {
        player.addImage(playerimg);
    }
    
    // if (keyWentUp("m")) {
    //     map.visible=false
    //     kingdom.visible=false
    //     forest.visible=false
    //     vil1.visible=false
    //     vil2.visible=false
    //     vil3.visible=false
    //     vil4.visible=false
    //     vil5.visible=false
    // }
    text("coolin: "+Math.round(coolin),100,100);
    if (textremover===0) {
    text("zomhea: "+Math.round(zombhea),200,100);
    }
    text("golem hea: "+Math.round(ghea),700,100);
    text("minion hea: "+Math.round(h1hea),600,100);
    text("dragon1 hea: "+Math.round(d1hea),800,100);
    text("minion2 hea: "+Math.round(h2hea),900,100);
    text("dragon2 hea: "+Math.round(d2hea),1000,100);
    text("minion3 hea: "+Math.round(h3hea),1100,100);
    text("minion4 hea: "+Math.round(h4hea),1200,100);
    text("minion5 hea: "+Math.round(h5hea),1300,100);
    text("health: "+Math.round(playerhea),300,100);
    text("XP: "+Math.round(xp),400,100);
    if (newP===1) {
        text("charging: "+Math.round(flame),500,100);
        if (keyDown("l") && flame>=100) {
            light = createSprite(player.x,player.y,10,10);
            light.addImage(comimg);
            light.velocityX=10;
            gameState=2;
            flame=0
        }
    }
    if (keyDown("space")) {
        player.addImage(playerimgatt);
        if (player.isTouching(zombie)) {
        zombhea=zombhea-10;
        }
        if (monsters===1 && player.isTouching(h1)) {
          h1hea=h1hea-10
        }
        if (monsters===1 && player.isTouching(golem)) {
          ghea=ghea-5
        }
        if (monsters===2 && player.isTouching(h2)) {
          h2hea=h2hea-10
        }
        if (monsters===2 && player.isTouching(dragon1)) {
          d1hea=d1hea-5
        }
        if (monsters===3 && player.isTouching(h3)) {
          h3hea=h3hea-10
        }
        if (monsters===3 && player.isTouching(dragon2)) {
          d2hea=d2hea-5
        }
        if (monsters===4 && player.isTouching(h4)) {
            h4hea=h4hea-10
          }
          if (monsters===5 && player.isTouching(h5)) {
            h5hea=h5hea-10
          }
          if (b===1 && player.isTouching(entity)) {
            ehea=ehea-1
          }
      }
    if (cd===5) {
        bb.visible=true;
    }
    if(mousePressedOver(bb)){
        change=4
        trick=0
        b=1;
    }
    if (b===1) {
        entity=createSprite(872,179,30,30);
        entity.addImage(eimg);
        if (entity.isTouching(player)) {
            playerhea=playerhea-20;
        }
        if (ehea<=0){
            entity.destroy();
            end=1;
        }
    }
    }
    if (end==1) {
        background(bye)
        textSize(10);
        stroke("red");
        noStroke(5);
        text("YOU WON!",800,200);
    }
    drawSprites();
}
//function mousePressed() {
//    window.alert("Mouse Pressed!!")
//}