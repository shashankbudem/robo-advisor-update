
class ActionProvider {
    constructor(createChatbotMessage, setStateFunc, createClientMessage) {
      this.createChatbotMessage = createChatbotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
    

    incomeHandler=()=>{
        const message= this.createChatbotMessage("Great! what is your approx Investing amount?",{widget:"incomeearn",});
        this.setChatBotMessage(message)
    }
    askEmail=()=>{
        const message=this.createChatbotMessage("Please enter your email id to proceed");
        this.setChatBotMessage(message)
    }
    financialGoals=()=> {
        const message=this.createChatbotMessage("What is your primary goal for investing?",{widget:"fingoals",});
        this.setChatBotMessage(message)
    }
    approachInvesting=()=>{
        const message=this.createChatbotMessage("Rate your risk tolerance between 1-10",{widget:"typoinvest",});
        this.setChatBotMessage(message)
    }
    typeofGender=()=>{
        const message=this.createChatbotMessage("Please select your gender",{widget:"typgender",});
        this.setChatBotMessage(message)
    }
    askAge=()=>{
        const message=this.createChatbotMessage("What is your age?",{widget:"agerng",});
        this.setChatBotMessage(message)
    }
    replytoQstn=()=>{
        const message=this.createChatbotMessage("That's great to know! Please wait while we find the best investing solutions for you.",{widget:"portfolio",});
        this.setChatBotMessage(message)
    }
    investingTime=()=>{
        const message=this.createChatbotMessage("Amazing! So How long before you need to cash-in some or all your investments?",{widget:"investtime",});
        this.setChatBotMessage(message)
    }
        setChatBotMessage=(message) => {
        this.setState(state => ({ ...state, messages: [...state.messages, message]}))
    }
    addMessageToState=(message)=>{
        this.setState(prevState => ({
           ...prevState,
           messages: [...prevState.messages,message],  
        }))
    }
  }
  
export default ActionProvider;