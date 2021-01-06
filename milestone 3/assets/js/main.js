let root = new Vue({

  el: "#app",

  data: {
      chiave: '[]',
      newMessage: "",
      contacts: [{
        name: 'Michele',
        avatar: '_1',
        visible: true,
        onView:false,
        messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
            }
        ],
        },
        {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        onView:false,
        messages: [{
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
            },
            {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
            },
            {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
            }
        ],
        },
        {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        onView:false,
        messages: [{
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
            },
            {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
            },
            {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
            }
        ],
        },
        {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        onView:false,
        messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
            }
        ],
        },
        {
        name: 'Name',
        avatar: '',
        visible: true,
        onView:true,
        messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
            }
        ],
        }
    ],
    },
    
    methods:{
            sulclick(e, key) {
            console.log(key)
            chiave=this.contacts[key].onView
            console.log(chiave)
            this.contacts.forEach(element => {
                if (element.onView){
                    element.onView=false;
                }
            });
            this.contacts[key].onView = true;
        },

        addFakeMsg(){
            // this.contacts[index].messages.push(this.newMessage);
            this.contacts.forEach(element => {
                if (element.onView){
                    console.log(element);
                    element.messages.push({
                        date: '10/01/2020 15:50:00',
                        text: 'ok',
                        status: 'received'
                    })
                }
            });
        },
        
        addNewMessage(){
            // this.contacts[index].messages.push(this.newMessage);
            this.contacts.forEach(element => {
                if (element.onView){
                    console.log(element);
                    element.messages.push({
                        date: '10/01/2020 15:50:00',
                        text: this.newMessage,
                        status: 'sent'
                    })
                }
            });
            console.log(this.newMessage)
            
            // setInterval(this.next, 3000);
            setInterval(() => {this.addFakeMsg()}, 1000);
        },
    }
});

