# Conversation history

As we've seen, natural language Generative AI models can produce unexpected or unwanted responses to prompts. This can be caused by any number of factors, including:

- Insufficient information in the training data
- Insufficient context in the prompt
- Lack of capability of the model itself
- Hostile intent by the user providing the prompt ("jailbreaking")

In this section we will see how adding system messages, one-shot examples and conversation history provide grounding for a model and these are not the only techniques. Prompt Engineering is a complex and rapidly-evolving practice. [This article](https://learn.microsoft.com/azure/cognitive-services/openai/concepts/advanced-prompt-engineering) on Microsoft Learn provides the latest guidance.



Consumer conversational AI services like ChatGPT and Bing Chat use a trick to make the AI agent seem to remember the context of the conversation. The trick is that the foundation model is given the whole chat history at each turn, not just the latest prompt, but the user does not see this. An AI model cannot learn and has no memory of previous interactions if the user leaves and comes back but the application is using prompt engineering to add this 'memory'

Try a conversation like this, enter the text below:

```text title="Enter in the user prompt:"
How many neutrons are in a hydrogen nucleus?
```

Click **Send**. The AI agent will respond with something like:

```text title="Enter in the user prompt:"
A hydrogen nucleus (also called a proton) has 0 neutrons.
```

*Without clearing the chat session*, add this response in the Chat Session:

```text title="Enter in the user prompt:"
What about the isotopes?
```

Click **Send**. The agent will respond with an answer involving isotopes of hydrogen: deuterium (one neutron) and tritium (two neutrons). Even though your second prompt did not mention hydrogen or neutrons, the response used the context of the chat to provide a more useful answer.

The key here is sending previous prompts back into the next request provides the model with more context and grounding and therefore providing a more valuable answer to the end user.

Now do clear the chat session, and then once again send the prompt:

```text title="Enter in the user prompt:"
What about the isotopes?
```

Without the context of the prior messages, the model responds with a generalized answer about isotopes. 