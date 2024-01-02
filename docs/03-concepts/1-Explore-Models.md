---
title: "1️⃣ | AI Models & Deployments"
slug: /ai-models
---

## What is an AI Model?

![AI Model](https://learn.microsoft.com/windows/ai/images/winml-model-flow.png)

An AI model (or machine learning model) is a program that has been trained on a set of data, to _recognize certain types of patterns_. Training the model defines an _algorithm_ that the AI can use to reason over new data and make predictions. 

[🔖 | Learn more](https://learn.microsoft.com/windows/ai/windows-ml/what-is-a-machine-learning-model)

## What is a Large Language Model?

A large language model (LLM) is a type of AI that can process and produce natural language text, having been trained on massive amounts of data from diverse sources. A "foundation model" refers to a specific instance or version of an LLM. We'll cover these topics in more detail in the next lesson.

[🔖 | Learn more](https://learn.microsoft.com/training/modules/introduction-large-language-models/)


## What are Embeddings?

An embedding is a **special data representation format** that machine learning models and algorithms can use more easily. It provides an information-dense representation of the semantic meaning of text data _as a vector of floating point numbers_. The distance between embeddings in vector space correlates directly to the semantic similarity between their (original) text inputs. 

 [🔖 | Learn more](https://learn.microsoft.com/azure/ai-services/openai/concepts/understand-embeddings#embedding-models)

Embeddings help us use vector search methods for more efficient querying of text data. For example: it powers vector similarity search in databases like Azure Cosmos DB for MongoDB vCore. The recommended embedding model is currently `text-embedding-ada-002`.

[🔖 | Learn more](https://learn.microsoft.com/azure/ai-services/openai/how-to/embeddings?tabs=console)


## What Model should I use?

There are many considerations when choosing a model.
 - Model pricing (by tokens, by artifacts)
 - Model availability (by version, by region)
 - Model performance (evaluation metrics)
 - Model capability (features & parameters)

As a general guide, we recommend the following:
- **Start with gpt-35-turbo.** This model is very economical and has good performance. It's commonly used for chat applications (such as OpenAI's ChatGPT) but can be used for a wide range of tasks beyond chat and conversation.
- **Move to gpt-35-turbo-16k, gpt-4 or gpt-4-32k** if you need to generate more than 4,096 tokens, or need to support larger prompts. These models are more expensive and can be slower, and have limited availability, but they are the most powerful models available today. *We'll cover tokenization in more detail in a later lesson.*
- **Consider embeddings** for tasks like search, clustering, recommendations and anomaly detection. 
- **Use DALL-E (Preview) for generating images** from text prompts that the user provides, unlike previous models where the output is text (chat). 
- **Use Whisper (Preview) for speech-to-text** conversion or audio transcription. It's trained and optimized for transcribing audio files with English speech, though it can transcribe speech in other languages. The model output is in English text. Use it to rapidly transcribe individual audio files or for translating audio from other languages into English - given prompt-based guidance.

[🔖 | Learn more](https://learn.microsoft.com/azure/ai-services/openai/how-to/working-with-models?tabs=powershell)

## What is Azure OpenAI (AOAI)

OpenAI has a [diverse set of language models](https://platform.openai.com/docs/models/overview) that can "generate" different types of content (text, images, audio, code) from a user-provided natural language text input or **"prompt"**. The Azure OpenAI Service provides access to these OpenAI models over a REST API. 

[Currently available models](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) include GPT-4, GPT-4 Turbo Preview, GPT-3.5, Embeddings, DALL-E (Preview) and Whisper (Preview). Azure OpenAI [releases new versions regularly](https://learn.microsoft.com/azure/ai-services/openai/concepts/model-versions) to keep pace with OpenAI updates on foundational models. Developers can access them programmatically (using a Python SDK) or via the browser (using Azure AI Studio).

[🔖 | Learn more](https://learn.microsoft.com/azure/ai-services/openai/overview).

## Workshop Model Deployments

:::info OUR AZURE PLAYGROUND
In this workshop we will:
 - **use** the `gpt-35-turbo` model - for chat completions
 - **discuss** the `gpt-4` model - for comparison
:::

The two main considerations to keep in mind are: 
- [Model Versions](https://learn.microsoft.com/azure/ai-services/openai/concepts/models) - what do models provide? what are the training cutoff & retirement dates?
- [Quotas and Limits](https://learn.microsoft.com/azure/ai-services/openai/quotas-limits) - which regions are models available in? what are the model usage limits?

Here's an example of what that data looks like for the 2 models we will focus on. Refer to the links above for more details on other models.

| Model (version) | Availability | Request Limit | Training Data (up to) |
|:---|:---|:---|:---|
| [gpt-3.5-turbo (0613)](https://learn.microsoft.com/azure/ai-services/openai/concepts/models#gpt-35-models)| 10 regions | 4096 tokens | Sep 2021 |
| [gpt-4 (0613)](https://learn.microsoft.com/azure/ai-services/openai/concepts/models#gpt-4-and-gpt-4-turbo-preview-models)| 9 regions | 8192 tokens | Sep 2021 |


