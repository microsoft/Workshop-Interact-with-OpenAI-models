# Conversation history


:::tip How to remember context?
Consumer conversational AI services like ChatGPT and Bing Chat use a trick to make the AI agent seem to remember the context of the conversation. The trick is that the foundation model is given the whole chat history at each turn, not just the latest prompt, but the user does not see this. An AI model cannot learn and has no memory of previous interactions if the user leaves and comes back but the application is using prompt engineering to add this 'memory'
:::

Let's see for ourselfs to see how we can have a conversation with context.

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

:::info[Assignment]
Try having a conversation and make the model remember your name birthdate.
:::