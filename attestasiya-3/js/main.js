function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

var nameInp = document.querySelector(".name")
var messageInp = document.querySelector(".message")
var sendBtn = document.querySelector(".btn")


let messagesArray = [];
class Message{
    constructor(author,sendTime,text){
        this.author = author;
        this.sendTime = sendTime;
        this.text = text;
        messagesArray.push(this);
    }
    toHtml  = function(){
        var msgs = ""
        if(messagesArray.length == 0){
            console.log("Hec bir istifadeci elave edilmeyib .")
        }else{
            for(var item of messagesArray){
                msgs +=  `<b> <p>[${item.sendTime}] [${item.author}]: [${item.text}]</ p></ b>`
            }
            document.querySelector(".history").innerHTML = msgs;
        }
    }
}

class Messenger{
    constructor(messages){
        this.messages = messagesArray;
    }
    show_history = function(){
            for(var item of messagesArray){
                item.toHtml()
            }
    }
    send = function(author, text){
        new Message(author,gettime(),text);
    }
}

let messenger = new Messenger();

sendBtn.addEventListener("click",function(){
    if(nameInp.value.trim() == "" || messageInp.value.trim() == ""){
        document.querySelector(".error").innerHTML = "Bos deyer gonderile bilmez !!!";
    }else{
        messenger.send(nameInp.value, messageInp.value)
        messenger.show_history()
        nameInp.value = "";
        messageInp.value = "";
        document.querySelector(".error").innerHTML = "";
    }
})
