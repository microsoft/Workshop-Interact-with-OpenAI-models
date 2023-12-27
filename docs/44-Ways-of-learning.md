# Ways of 'learning'

This section discusses prompt engineering techniques that can help LLMs solve certain problems more effectively.

## Zero-shot learning

LLMs are trained on such large amounts of data they may be be able to perform some tasks with very little prompting. Try the example below and change the sentence to see what outcomes you find.

```text
Classify the text into neutral, negative or positive.
Text: My calendar today looks ok
Sentiment:
```

## Few-shot learning

If zero-shot learning is failing for your examples and more complex tasks, few shot prompting can provide examples that can better steer the model to the desired outcomes.  Examples show the model cleanly how we want it to operate. Try the example below to see the outcome. Can you think of other examples that could leverage few-shot learning?

```text
Headline: Twins' Correa to use opt-out, test free agency
Topic: Baseball
Headline: Qatar World Cup to have zones for sobering up
Topic: Soccer
Headline: Yates: Fantasy football intel for Week 6
Topic: Football
Headline: Coach confident injury won't derail Warriors
Topic:
```

The next two sections are very well described in the ['Meet Mr Prompty'](https://www.linkedin.com/pulse/meet-mr-prompty-break-tasks-down-chain-thought-dynamic-mario-fontana/?trackingId=%2FzJrYZ06TxWwVVLkU7rxug%3D%3D) articles on LinkedIn, thank you author, Mario Fontana, for sharing your insights.

## Break the task down

In this technique, the user is responsible for breaking the task down into smaller, more manageable steps. The LLM then follows the user's instructions to complete the task.

First update the system prompt:

```text
You are a famous poet who wants to write a poem about a flower. 
You will be given instructions on how to complete the task.
```

Enter the user prompt below to see 'break down the task' in action

```text
You will identify the main features of a flower, choose a flower 
to write about, brainstorm some ideas for the poem, write a draft, 
revise the poem, and publish the poem

===
Instructions:

- Identify the main features of a flower.
    - What are the different parts of a flower?
    - What are the colors of a flower?
    - What are the shapes of a flower?
- Choose a flower to write about.
    - What kind of flower do you want to write about?
    - Why did you choose this flower?
- Brainstorm some ideas for the poem.
    - What are some things you want to say about the flower?
    - What kind of poem do you want to write?
- Write a draft of the poem.
    - Start writing the poem.
    - Don't worry about making it perfect yet.
- Revise the poem.
    - Read the poem aloud.
    - Make changes to the poem.
```

## Chain of thought prompting

In this technique, the LLM is responsible for breaking the task down into smaller steps. The LLM uses its knowledge of the world and its ability to reason. The LLM then generates a chain of thoughts that leads to the solution of the task.

Enter the user prompt below to see 'Chain of thought prompting' in action:

```text
Who was the first person to walk on the moon? Take a step-by-step approach in your response, cite sources, and give reasoning before sharing a final answer in the below format: ANSWER is: <name>
```