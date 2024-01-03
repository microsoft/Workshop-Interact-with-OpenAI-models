---
title: " Generative AI"
slug: /generative-ai
---

Most people are familiar with natural language generative AI from applications like ChatGPT, but you can use these models for much more than chatbots. In this section, we'll explore some other useful applications of these models.

### Information extraction
The example below shows how you can combine a prompt with data to extract information using natural-language instructions. In this case, the completion extracts the name, company, location, and phone number from an email. Modify the prompt and the source data to extract different information.

```
Extract the person name, company name, location and phone number from the text below.

Hello. My name is Robert Smith. I’m calling from Contoso Insurance, Delaware. My colleague mentioned that you are interested in learning about our comprehensive benefits policy. Could you give me a call back at (555) 346-9322 when you get a chance so we can go over the benefits?
```

### Structured data extraction
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


### Text Classification

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

### Text summarization
Text summarization is a well known capability of ChatGPT - it creates a short summary of a larger piece of text. Add tl;dr (for "too long; didn't read") to gain a summary of the article below. Where can you see this being useful in your business?

```
At Microsoft, we have been on a quest to advance AI beyond existing techniques, by taking a more holistic, human-centric approach to learning and understanding. As Chief Technology Officer of Azure AI Cognitive Services, I have been working with a team of amazing scientists and engineers to turn this quest into a reality. In my role, I enjoy a unique perspective in viewing the relationship among three attributes of human cognition: monolingual text (X), audio or visual sensory signals, (Y) and multilingual (Z). At the intersection of all three, there’s magic—what we call XYZ-code as illustrated in Figure 1—a joint representation to create more powerful AI that can speak, hear, see, and understand humans better. 

We believe XYZ-code will enable us to fulfill our long-term vision: cross-domain transfer learning, spanning modalities and languages. The goal is to have pre-trained models that can jointly learn representations to support a broad range of downstream AI tasks, much in the way humans do today. Over the past five years, we have achieved human performance on benchmarks in conversational speech recognition, machine translation, conversational question answering, machine reading comprehension, and image captioning. These five breakthroughs provided us with strong signals toward our more ambitious aspiration to produce a leap in AI capabilities, achieving multi-sensory and multilingual learning that is closer in line with how humans learn and understand. I believe the joint XYZ-code is a foundational component of this aspiration, if grounded with external knowledge sources in the downstream AI tasks.
```

## Next steps
These examples are illustrative as one-off demonstrations, but their real power comes with automation. You can use the Azure OpenAI service to perform similar tasks either on-demand (say, as a customer request form is submitted) or in batch mode (say, to extract data points from a database of unstructured text responses). 

Lets move on to learn more about Prompt Engineering in the chat interface with hands-on lab exercises.
