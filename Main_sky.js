var rounds = 1;

var m_1 = { name: 'O irmão do Jorel', emoji: '👵🍐👲', ajuda: 'Seu irmão é o cara mais popular' };
var m_2 = { name: 'Procurando Nemo', emoji: '🔍🐟', ajuda: 'Seu irmão é o cara mais popular' };
var m_3 = { name: 'O irmão do Jorel', emoji: '👱‍♂👩🏼👱‍♂👩🏼👱‍♂👩🏼 🛋', ajuda: 'Seu irmão é o cara mais popular' };
var m_4 = { name: 'O irmão do Jorel', emoji: '🏃‍♂💨🐔🐔🐔🐔', ajuda: 'Seu irmão é o cara mais popular' };
var m_5 = { name: 'O irmão do Jorel', emoji: '🤡👦🏻🎈', ajuda: 'Seu irmão é o cara mais popular' };
var m_6 = { name: 'O irmão do Jorel', emoji: '👩‍👦🗣🏃👟⛴', ajuda: 'Seu irmão é o cara mais popular' };
var m_7 = { name: 'O irmão do Jorel', emoji: '🌨❄🌎🌪🚐', ajuda: 'Seu irmão é o cara mais popular' };
var m_8 = { name: 'O irmão do Jorel', emoji: '👵🍐👲', ajuda: 'Seu irmão é o cara mais popular' };
var m_9 = { name: 'O irmão do Jorel', emoji: '👵🍐👲', ajuda: 'Seu irmão é o cara mais popular' };
var m_10 = { name: 'O irmão do Jorel', emoji: '👵🍐👲', ajuda: 'Seu irmão é o cara mais popular' };

if(rounds == 1){    
this.emojiLabel = new PIXI.Text(ct.random.dice(m_1.emoji, m_2.emoji, m_3.emoji, m_4.emoji, m_5.emoji, m_6.emoji, m_7.emoji));
this.addChild(this.emojiLabel);
this.emojiLabel.x = 300;
this.emojiLabel.y = 400;
}
if(this.emojiLabel == m_1.emoji){
this.word = new PIXI.Text('_  _ _ _ _ _  _ _  _ _ _ _ _ ');
this.wmovie = new PIXI.Text('Qual o nome da série: ');
this.addChild(this.word);
this.word.x = 250;
this.word.y = 450;
this.wmovie.x = 250;
this.wmovie.y = 350;
} 









