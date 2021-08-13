class Security {

    constructor(){
        this.access1 = createInput("mob1");
        this.access2 = createInput("mob2");
        this.access3 = createInput("mob3");
        this.access4=createInput("mob4")
        this.button1 = createButton('check');
        this.button2 = createButton('check');
        this.button3 = createButton('check');
        this.button4 = createButton('check');
        this.title = createElement('h1');
       
    
      }
      
      
      display(){
        this.title.html("MINECRAFT QUIZ!!!!!!!!!");
        this.title.position(520,20);
        //this.title.fill("yellow");
  
        
        this.access1.position(120,180);
        this.access2.position(760,350);
        this.access3.position(100,480);
        this.access4.position(760,580);
        this.button1.position(120,210);
        this.button2.position(760,380);
        this.button3.position(100,510);
        this.button4.position(760,610);



       this.button1.mousePressed(()=>{
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
        }

      });

        this.button2.mousePressed(()=>{
        if(system.authenticate(accessCode2,this.access2.value())){
            this.button2.hide();
            this.access2.hide();
            score++;
}

     });

     this.button3.mousePressed(()=>{
        if(system.authenticate(accessCode3,this.access3.value())){
            this.button3.hide();
            this.access3.hide();
            score++;
    }

     });
     this.button4.mousePressed(()=>{
      if(system.authenticate(accessCode4,this.access4.value())){
          this.button4.hide();
          this.access4.hide();
          score++;
  }

   });
  }
    }
    
