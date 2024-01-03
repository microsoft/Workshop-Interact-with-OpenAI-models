# Advanced Techniques

As we've seen, natural language Generative AI models can produce unexpected or unwanted responses to prompts. This can be caused by any number of factors, including:

- Insufficient information in the training data
- Insufficient context in the prompt
- Lack of capability of the model itself
- Hostile intent by the user providing the prompt ("jailbreaking")

In this section we will see how adding system messages, one-shot examples and conversation history provide grounding for a model and these are not the only techniques. Prompt Engineering is a complex and rapidly-evolving practice. [This article](https://learn.microsoft.com/azure/cognitive-services/openai/concepts/advanced-prompt-engineering) on Microsoft Learn provides the latest guidance.

## Conversation history:

Consumer conversational AI services like ChatGPT and Bing Chat use a trick to make the AI agent seem to remember the context of the conversation. The trick is that the foundation model is given the whole chat history at each turn, not just the latest prompt, but the user does not see this. An AI model cannot learn and has no memory of previous interactions if the user leaves and comes back but the application is using prompt engineering to add this 'memory'

### Example:

In the "Chat Session" pane, enter the text below:

```
How many neutrons are in a hydrogen nucleus?
```

Click **Send**. The AI agent will respond with something like:

```
A hydrogen nucleus (also called a proton) has 0 neutrons.
```

*Without clearing the chat session*, add this response in the Chat Session:

```
What about the isotopes?
```

Click **Send**. The agent will respond with an answer involving isotopes of hydrogen: deuterium (one neutron) and tritium (two neutrons). Even though your second prompt did not mention hydrogen or neutrons, the response used the context of the chat to provide a more useful answer.
The key here is sending previous prompts back into the next request provides the model with more context and grounding and therefore providing a more valuable answer to the end user.

Now do clear the chat session, and then once again send the prompt:

```
What about the isotopes?
```

Without the context of the prior messages, the model responds with a generalized answer about isotopes. 


## System message:

Use the system message to prime the model with context, instructions, or other information relevant to the use case.

In the **System message** field insert the text below, then click "Save Changes".

```
I am a hiking enthusiast named Forest who helps people discover fun hikes in their area. I am upbeat and friendly. I introduce myself when first saying hello. When helping people out, I always ask them for this information to inform the hiking recommendation I provide:
1.Where they are located
2.What hiking intensity they are looking for
I will then provide three suggestions for nearby hikes that vary in length after I get this information. I will also share an interesting fact about the local nature on the hikes when making a recommendation.
```

Observe that the System Message gives the assistant a name ("Forest"), a personality ("upbeat and friendly"), and instructions on how to behave ("introduce myself"; "always ask them for this information"), and how to respond ("provide three suggestions").

The text provided in the System Message is handled specially by the model, and is intended to have more influence on the model's responses than the User Message text or other context provided in the prompt. (This effect is stronger for GPT-4 models than for GPT-3 models, but it isn't foolproof for either.)

In the Chat Session, enter this text with the personal details of your choice:

```
Hi, I'm <your name>. I'm looking for a hike near <my city>. I want to take my dog with me.
```

Did the AI include its name, Forest in the response? Did it ask a follow-up question? How would you rate its response?

Try clearing the chat (click the "Clear Chat" button) and starting over with your initial prompt. How different was the outcome? (The Temperature parameter is set to 1, so there's scope for variability.)
