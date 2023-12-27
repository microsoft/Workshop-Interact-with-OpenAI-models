# Lab 1: Basic Prompting

Prompt Engineering is the process of adding additional context to the prompt to provide "grounding" to the AI model and make it more likely to produce the desired response and less likely to produce undesirable outputs. For example, in a chatbot application, the system would inject additional instructions and data into the prompt before the user's actual input, to provide context to the model.

Lets start with a few prompts and observe the response using the chat interface. Here are some examples to try, but get creative with your own prompts and see what happens!

```
What is the capital of Australia?
```

```
A recipe for banana bread, and an itemized shopping list of the ingredients.
```

```
What were the 10 top movies of 2001? Respond in the form of a table listing the movie name, the box office earnings, and the studio.
```

```
Write a Python function to calculate the nth prime number.
```

## Generating novel content

Even though the outputs are generated based on frequencies of similar content in the training data, generative AI models are still capable of generating novel content that has never existed before.

Try a prompt like this:

```
Write a limerick about the Python programming language
```

How was the limerick? If you didn't like it, you can always ask the chat session to generate a new one.

Next lets check out the parameters we have available: Use the Temperature field on the right column of the chat interface, and set Temperature to zero. What do you observe when you retry the prompt?

The Temperature parameter controls how "creative" the model is allowed to be. At low values of "Temperature", the model is very likely to respond with the completion with the highest weight, limiting the variability in the responses. At higher values of Temperature, low-weighted completions become more likely to be generated, allowing for more creative (but less precise) responses.

Here is another prompt to try with different Temperature values:

```
What is a unique and long name for a cat?
```

**Make sure the Temperature parameter is reset to 1 before you continue.**

## Less-useful prompts

Natural language generative AI models have a number of limitations:

- They are limited by their training data, which was frozen at a fixed point in time in the past.
- They generate text that resembles human language, but are not capable of reasoning or cognition.
- They have no memory of prior prompts (if chat is cleared), and no capability to learn or change their behavior.

Here are some example prompts that demonstrate these weaknesses:

```
When did Queen Elizabeth II die?
```

In this case, the model is limited by training data, which is current only up to June 2021.

```
What is the square root of 98765?
```

The model will generate an answer to math questions, but there's no guarantee it will be correct. The correct answer here (to 3 dp) is 314.269. Try submitting the same prompt again and see if you get the same answer. (If you do get the correct response to a math question from a foundational GPT model, it's only because the question and answer are well represented in the training data.)

But you could ask the model to write Python code to calculate the square root of 98765, and it would probably do a good job. (Try it!).

```
Write Python code to calculate the square root of 98765
```

Next, ask the model to solve a puzzle:

```
Steven is my uncle. Steven has two children, Sam and Lindsay. Sam's sole aunt is called Julie. What is my mother's name?
```

It's a simple puzzle, but the GPT-3.5 model cannot reason about the relationships between people and may not be able to solve it. (More advanced models like GPT-4 are more likely to get the answer right, but are still not guaranteed to do so.)

## Generative AI models can't perform actions

Clear the contents of the chat box. Enter the following text:

```
What are the 5 stocks listed on https://finance.yahoo.com/trending-tickers with the largest market cap?
```

Although the model will respond with a plausible answer, look closely: those aren't actually the 5 largest stocks today. Foundational AI models are not capable of performing actions, so they can't actually visit the web page and read the list of stocks. Instead, they generate a plausible response based on the prompt and the training data.

## Completions are not facts

Clear the contents of the prompt box. Enter the following text, then click Generate.

```
Write an obituary for the poet Harold Bloomsbury. Include references.
```

There has never been a poet (nor indeed any person, according to web search) named Harold Bloomsbury. As a result, the model generates text in the form of an obituary, but not grounded in any facts. Even the requested references, while convincing-looking, are not real.
