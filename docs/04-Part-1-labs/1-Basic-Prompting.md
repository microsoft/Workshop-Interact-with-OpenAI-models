# Basic Prompting

:::tip What is prompt engineering?
Prompt engineering is a concept in Natural Language Processing (NLP) that involves **embedding descriptions of tasks** in input to **prompt the model** to output the **desired results**.
:::

Lets start with a few prompts and observe the response using the chat interface. 

Here are some examples to try, but get creative with your own prompts and see what happens!

```text title="Enter in the user prompt:"
What is the capital of Australia?
```

```text title="Enter in the user prompt:"
A recipe for banana bread, and an itemized shopping list of the ingredients.
```

```text title="Enter in the user prompt:"
What were the 10 top movies of 2001? 
Respond in a list.
Listing the movie name, the box office earnings, and the studio
Ranking the movies from 1 to 10 in the list.
```

```text title="Enter in the user prompt:"
Write a Python function to calculate the nth prime number.
```

## Generating novel content

Even though the outputs are generated based on frequencies of similar content in the training data, generative AI models are still capable of generating novel content that has never existed before.

Try a prompt like this:

```text title="Enter in the user prompt:"
Write a limerick about the Python programming language
```

How was the limerick? If you didn't like it, you can always ask the chat session to generate a new one.

Next lets check out the parameters we have available: Use the Temperature field on the right column of the chat interface, and set Temperature to zero. What do you observe when you retry the prompt?

The Temperature parameter controls how "creative" the model is allowed to be. At low values of "Temperature", the model is very likely to respond with the completion with the highest weight, limiting the variability in the responses. At higher values of Temperature, low-weighted completions become more likely to be generated, allowing for more creative (but less precise) responses.

Here is another prompt to try with different Temperature values:

```text title="Enter in the user prompt:"
What is a unique and long name for a cat?
```

**Make sure the Temperature parameter is reset to 1 before you continue.**

## Less-useful prompts

Natural language generative AI models have a number of limitations:

- They are limited by their training data, which was frozen at a fixed point in time in the past.
- They generate text that resembles human language, but are not capable of reasoning or cognition.
- They have no memory of prior prompts (if chat is cleared), and no capability to learn or change their behavior.

Here are some example prompts that demonstrate these weaknesses:

```text title="Enter in the user prompt:"
When did Queen Elizabeth II die?
```

In this case, the model is limited by training data, which is current only up to June 2021.

```text title="Enter in the user prompt:"
What is the square root of 98765?
```

The model will generate an answer to math questions, but there's no guarantee it will be correct. The correct answer here (to 3 dp) is 314.269. Try submitting the same prompt again and see if you get the same answer. (If you do get the correct response to a math question from a foundational GPT model, it's only because the question and answer are well represented in the training data.)

But you could ask the model to write Python code to calculate the square root of 98765, and it would probably do a good job. (Try it!).

```text title="Enter in the user prompt:"
Write Python code to calculate the square root of 98765
```

Next, ask the model to solve a puzzle:

```text title="Enter in the user prompt:"
Steven is my uncle. Steven has two children, Sam and Lindsay. Sam's sole aunt is called Julie. What is my mother's name?
```

It's a simple puzzle, but the GPT-3.5 model cannot reason about the relationships between people and may not be able to solve it. (More advanced models like GPT-4 are more likely to get the answer right, but are still not guaranteed to do so.)

## Generative AI models can't perform actions

Clear the contents of the chat box. Enter the following text:

```text title="Enter in the user prompt:"
What are the 5 stocks listed on https://finance.yahoo.com/trending-tickers with the largest market cap?
```

Although the model will respond with a plausible answer, look closely: those aren't actually the 5 largest stocks today. Foundational AI models are not capable of performing actions, so they can't actually visit the web page and read the list of stocks. Instead, they generate a plausible response based on the prompt and the training data.

## Completions are not facts

Clear the contents of the prompt box. Enter the following text, then click Generate.

```text title="Enter in the user prompt:"
Write an obituary for the poet Harold Bloomsbury. Include references.
```

There has never been a poet (nor indeed any person, according to web search) named Harold Bloomsbury. As a result, the model generates text in the form of an obituary, but not grounded in any facts. Even the requested references, while convincing-looking, are not real.


As we've seen, natural language Generative AI models can produce unexpected or unwanted responses to prompts. This can be caused by any number of factors, including:

- Insufficient information in the training data
- Insufficient context in the prompt
- Lack of capability of the model itself
- Hostile intent by the user providing the prompt ("jailbreaking")


## Information extraction
The example below shows how you can combine a prompt with data to extract information using natural-language instructions. In this case, the completion extracts the name, company, location, and phone number from an email. Modify the prompt and the source data to extract different information.

```
Extract the person name, company name, location and phone number from the text below.

Hello. My name is Robert Smith. I’m calling from Contoso Insurance, Delaware. My colleague mentioned that you are interested in learning about our comprehensive benefits policy. Could you give me a call back at (555) 346-9322 when you get a chance so we can go over the benefits?
```

## Structured data extraction
In this example, we provide freeform narrative about fictitious fruits, and prompt the model to generate a table of all the fruits mentioned and their attributes.

In this example, we "primed" the model with the desired output format: a header row, and a couple of examples.

```
There are many fruits that were found on the recently discovered planet Goocrux. There are neoskizzles that grow there, which are purple and taste like candy. There are also loheckles, which are a grayish blue fruit and are very tart, a little bit like a lemon. Pounits are a bright green color and are more savory than sweet. There are also plenty of loopnovas which are a neon pink flavor and taste like cotton candy. Finally, there are fruits called glowls, which have a very sour and bitter taste which is acidic and caustic, and a pale orange tinge to them.


Please make a table summarizing the fruits from Goocrux
| Fruit | Color | Flavor |
| Neoskizzles | Purple | Sweet |
| Loheckles | Grayish blue | Tart |
```

Try extending the prompt by appending the following text:

```
Please also make a JSON array summarizing the fruits from Goocrux:
```

The model will now return a JSON array of the fruit and their attributes.


## Text Classification

In this example, we provide one example of a headline and a category, and ask the model to classify a second example. This is an example of "one-shot learning": with just one example, the model can generalize to classify a new example.

```
Classify the following news headline into 1 of the following categories: Business, Tech, Politics, Sport, Entertainment

Headline 1: Donna Steffensen Is Cooking Up a New Kind of Perfection. The Internet's most beloved cooking guru has a buzzy new book and a fresh new perspective
Category: Entertainment

Headline 2: Major Retailer Announces Plans to Close Over 100 Stores

Category:
```

Try replacing Headline 2 with other text and regenerating the completion. Does it generate the appropriate category? 

```
Jets lose, again!
```

```
Obama announces re-election bid
```

```
Microsoft up in after-hours trading
```

```
20nm process offers more density and better power value
```

## Text summarization
Text summarization is a well known capability of ChatGPT - it creates a short summary of a larger piece of text. Add tl;dr (for "too long; didn't read") to gain a summary of the article below. Where can you see this being useful in your business?

```
At Microsoft, we have been on a quest to advance AI beyond existing techniques, by taking a more holistic, human-centric approach to learning and understanding. As Chief Technology Officer of Azure AI Cognitive Services, I have been working with a team of amazing scientists and engineers to turn this quest into a reality. In my role, I enjoy a unique perspective in viewing the relationship among three attributes of human cognition: monolingual text (X), audio or visual sensory signals, (Y) and multilingual (Z). At the intersection of all three, there’s magic—what we call XYZ-code as illustrated in Figure 1—a joint representation to create more powerful AI that can speak, hear, see, and understand humans better. 

We believe XYZ-code will enable us to fulfill our long-term vision: cross-domain transfer learning, spanning modalities and languages. The goal is to have pre-trained models that can jointly learn representations to support a broad range of downstream AI tasks, much in the way humans do today. Over the past five years, we have achieved human performance on benchmarks in conversational speech recognition, machine translation, conversational question answering, machine reading comprehension, and image captioning. These five breakthroughs provided us with strong signals toward our more ambitious aspiration to produce a leap in AI capabilities, achieving multi-sensory and multilingual learning that is closer in line with how humans learn and understand. I believe the joint XYZ-code is a foundational component of this aspiration, if grounded with external knowledge sources in the downstream AI tasks.
```





Prompt Engineering is a complex and rapidly-evolving practice. [This article](https://learn.microsoft.com/azure/cognitive-services/openai/concepts/advanced-prompt-engineering) on Microsoft Learn provides the latest guidance.





In the next labs we are going to learn how to stear the models to create the response we want.

:::info[Assignment]
Create a prompt that generates a rhyme about a lost kangaroo in the middle of the city.
:::