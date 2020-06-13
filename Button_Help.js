if (ct.touch.collideUi(this)) {

    this.tips = new PIXI.Text('Seu irmão é o cara mais popular' ,  ct.styles.get('Help'));
    this.addChild(this.tips);
    
    this.tips.x = -600;
    this.tips.y = -300;
    
    //this.countLife--;
    
    
    }