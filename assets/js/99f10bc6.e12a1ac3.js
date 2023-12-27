"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[338],{8650:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(5893),s=t(1151);const o={},r="Lab 2: Prompt Engineering Techniques",a={id:"Prompt-Engineering-Techniques",title:"Lab 2: Prompt Engineering Techniques",description:"As we've seen, natural language Generative AI models can produce unexpected or unwanted responses to prompts. This can be caused by any number of factors, including:",source:"@site/docs/42-Prompt-Engineering-Techniques.md",sourceDirName:".",slug:"/Prompt-Engineering-Techniques",permalink:"/Prompt-Engineering-Techniques",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/Workshop-Interact-with-OpenAI-models/tree/main/docs/42-Prompt-Engineering-Techniques.md",tags:[],version:"current",sidebarPosition:42,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lab 1: Basic Prompting",permalink:"/Basic-Prompting"},next:{title:"Lab 3: Response grounding",permalink:"/Response-grounding"}},h={},c=[{value:"Conversation history:",id:"conversation-history",level:2},{value:"Example:",id:"example",level:3},{value:"System message:",id:"system-message",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"lab-2-prompt-engineering-techniques",children:"Lab 2: Prompt Engineering Techniques"}),"\n",(0,i.jsx)(n.p,{children:"As we've seen, natural language Generative AI models can produce unexpected or unwanted responses to prompts. This can be caused by any number of factors, including:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Insufficient information in the training data"}),"\n",(0,i.jsx)(n.li,{children:"Insufficient context in the prompt"}),"\n",(0,i.jsx)(n.li,{children:"Lack of capability of the model itself"}),"\n",(0,i.jsx)(n.li,{children:'Hostile intent by the user providing the prompt ("jailbreaking")'}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In this section we will see how adding system messages, one-shots examples and conversation history provide grounding for a model and these are not the only techniques. Prompt Engineering is a complex and rapidly-evolving practice. ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/azure/cognitive-services/openai/concepts/advanced-prompt-engineering",children:"This article"})," on Microsoft Learn provides the latest guidance."]}),"\n",(0,i.jsx)(n.h2,{id:"conversation-history",children:"Conversation history:"}),"\n",(0,i.jsx)(n.p,{children:"Consumer conversational AI services like ChatGPT and Bing Chat use a trick to make the AI agent seem to remember the context of the conversation. The trick is that the AI model is given the whole chat history at each turn, not just the latest prompt, but the user does not see this. An AI model cannot learn and has no memory of previous interactions if the user leaves and comes back but the application is using prompt engineering to add this 'memory'"}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example:"}),"\n",(0,i.jsx)(n.p,{children:'In the "Chat Session" pane, enter the text below:'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"How many neutrons are in a hydrogen nucleus?"})}),"\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Send"}),". The AI agent will respond with something like:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"A hydrogen nucleus (also called a proton) has 0 neutrons."})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Without clearing the chat session"}),", add this response in the Chat Session:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"What about the isotopes?"})}),"\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Send"}),". The agent will respond with an answer involving isotopes of hydrogen: deuterium (one neutron) and tritium (two neutrons). Even though your second prompt did not mention hydrogen or neutrons, the response used the context of the chat to provide a more useful answer.\nThe key here is sending previous prompts back into the next request provides the model with more context and grounding and therefore providing a more valuable answer to the end user."]}),"\n",(0,i.jsx)(n.h2,{id:"system-message",children:"System message:"}),"\n",(0,i.jsx)(n.p,{children:"Use the system message to prime the model with context, instructions, or other information relevant to the use case."}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"System message"}),' field insert the text below, then click "Save Changes".']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"I am a hiking enthusiast named Forest who helps people discover fun hikes in their area. I am upbeat and friendly. I introduce myself when first saying hello. When helping people out, I always ask them for this information to inform the hiking recommendation I provide:\n1.Where they are located\n2.What hiking intensity they are looking for\nI will then provide three suggestions for nearby hikes that vary in length after I get this information. I will also share an interesting fact about the local nature on the hikes when making a recommendation.\n"})}),"\n",(0,i.jsx)(n.p,{children:'Observe that the System Message gives the assistant a name ("Forest"), a personality ("upbeat and friendly"), and instructions on how to behave ("introduce myself"; "always ask them for this information"), and how to respond ("provide three suggestions").'}),"\n",(0,i.jsx)(n.p,{children:"The text provided in the System Message is handled specially by the model, and is intended to have more influence on the model's responses than the User Message text or other context provided in the prompt. (This effect is stronger for GPT-4 models than for GPT-3 models, but it isn't foolproof for either.)"}),"\n",(0,i.jsx)(n.p,{children:"In the Chat Session, enter this text with the personal details of your choice:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Hi, I'm <your name>. I'm looking for a hike near <my city>. I want to take my dog with me.\n"})}),"\n",(0,i.jsx)(n.p,{children:"Did the AI include its name, Forest in the response? Did it ask a follow-up question? How would you rate its response?"}),"\n",(0,i.jsx)(n.p,{children:'Try clearing the chat (click the "Clear Chat" button) and starting over with your initial prompt. How different was the outcome? (The Temperature parameter is set to 1, so there\'s scope for variability.)'})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(7294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);