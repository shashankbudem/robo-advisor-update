

class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }

    
  
    parse(message) {
      console.log(message);
      const lowercase = message.toLowerCase();
  
      if(/^([a-zA-Z\s]+)$/.test(lowercase)){
        this.actionProvider.askEmail();
      }
      if(lowercase.includes("@") && lowercase.includes(".com")){
        this.actionProvider.askAge();
      }
      if(lowercase.includes("100xx000")){
          this.actionProvider.financialGoals();
      }if(lowercase.includes("2x2")){
        this.actionProvider.typeofGender();
      }
    }
  }
  
  export default MessageParser;