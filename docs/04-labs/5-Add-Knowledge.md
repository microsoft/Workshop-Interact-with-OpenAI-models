# Add knowledge

:::tip Retrieval Augemented Generation
Retrieval-Augmented Generation (RAG) is an AI technique that retrieves relevant information from a database and then uses it to help generate more informed and contextually accurate text responses.
:::

In this lab we are going to add new knowledge to the conversation. This is to illustrate how the process of adding your own data would working production scenario. We are going to add the data manually, but you can use many different techniques and tools to retrieve the data and add it to the assistent.


## Adding current information:

Let's imagine that we are making a assitant for our outdoor hiking company to enable user to ask questions and get recommendations about the products the company is selling.

For a trip in the muddy mountains a customer is looking for hikings shoes.

```text title="Enter in the user prompt:"
Can you recommend me a hiking shoe for a muddy trip?
```

You will see that the model will return a lot of great suggestions, but none of them are being sold by our company.

Let's start and fix that problem by giving the model the right information on runtime and without fine-tuning.

First we start with giving the assistent a specific task.

```text title="Enter in the system prompt:"
## Task
You are an Trailwalker Hikingshoe store AI assistant. 
You help users answer questions about our shoe products.
You will be given search results as retrieved Documents that contain product information.
Your answer should be as precise as possible.
Your answer should only come from the retrieved Documents with product information.
If the Retrieved Documents do not contain sufficient information to answer user message completely, you do not anwser the question and inform the user you do not have enough information.

## Retrieved Documents
No information found.
```

```text title="Enter in the user prompt:"
Can you recommend me a hiking shoe for a muddy trip?
```

Notice that the assistent will respond that it has not enough information to answer the question.

Now let's add some product information to the prompt. Imagine here that you have done a search query in a database and got the products below back.

Add this information to the system prompt.

```text title="Enter in the system prompt:"

## Retrieved Documents
No information found.

Product name: Trailwalker X1
Product description:
This hiking shoes are great for hikes.

Product name: Sandwalker T7
Product description:
This hiking shoes are great for hikes on the beach

Product name: Mudmaster P9
Product description:
This are the best shoes for extremely muddy and challeging hikes.

Product name: Rockclimber U5
Product description:
This are the best shoes for when you are going to climb rocks.

```
Clear the conversation and ask the question again.

```text title="Enter in the user prompt:"
Can you recommend me a hiking shoe for a muddy trip?
```

The assistent should recommend you the Mudmaster P9 shoes.

