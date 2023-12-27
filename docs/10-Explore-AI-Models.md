# Explore AI Models

:::tip PRE-REQUISITE

Before you begin this section, you **must have completed** the [Setup](Setup) to get the relevant access key.
:::

## Deployed models available:

In this workshop we will 
 - **use** the `gpt-35-turbo` model, a popular instance of the OpenAI ChatGPT model. 
 - **mention**  the `gpt-4` model, the latest model from OpenAI though we won't be using it here. 

Learn more about these models by visiting the [Azure OpenAI documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/) documentation. 
- The [Models](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) page lists currently available models, training cutoff dates & retirement dates
- The [Quotas and Limits](https://learn.microsoft.com/azure/ai-services/openai/quotas-limits) page tells you where models are availabe, and request limits (tokens-per-minute).

Here's an example of what that data looks like for the 2 models we will focus on:

| Model | Availability | Request Limit | Training Data (up to) |
|:---|:---|:---|:---|
| [gpt-3.5-turbo (0613)](https://learn.microsoft.com/azure/ai-services/openai/concepts/models#gpt-35-models)| 10 regions | 4096 tokens | Sep 2021 |
| [gpt-4 (0613)](https://learn.microsoft.com/azure/ai-services/openai/concepts/models#gpt-4-and-gpt-4-turbo-preview-models)| 9 regions | 8192 tokens | Sep 2021 |
| | | |

## About Embeddings

An embedding is a special format of data representation that machine learning models and algorithms can easily use. The embedding is an information dense representation of the semantic meaning of a piece of text. Each embedding is a vector of floating-point numbers, such that the distance between two embeddings in the vector space is correlated with semantic similarity between two inputs in the original format. For example, if two texts are similar, then their vector representations should also be similar. Embeddings power vector similarity search in Azure Databases such as Azure Cosmos DB for MongoDB vCore.
 - [About Embedding models](https://learn.microsoft.com/azure/ai-services/openai/concepts/understand-embeddings#embedding-models)
 - [Recommended Embedding model](https://learn.microsoft.com/azure/ai-services/openai/concepts/models#embeddings) is currently `text-embedding-ada-002`


## Which model should I use?
There are many considerations when choosing a model, including cost, availability, performance, and capability. As a general guide, we recommend the following:
- **Start with gpt-35-turbo.** This model is very economical, has good performance, and despite the "ChatGPT" name can be used for a wide range of tasks beyond chat and conversation.
- **Move to gpt-35-turbo-16k, gpt-4 or gpt-4-32k** if you need to generate more than 4,096 tokens, or need to support larger prompts. These models are more expensive and can be slower, and have limited availability, but they are the most powerful models available today. *Find out more about tokens later on in this workshop.*
- **Consider an embeddings model** for tasks like search, clustering, recommendations and anomaly detection. 
- **Use DALL-E (Preview) for generating images** - from text prompts that the user provides, unlike previous models where the output is text (chat). 
- **Use Whisper (Preview) for speech-to-text** - typically used to transcribe audio files. The model is trained on a large dataset of English audio and text, and optimized for transcribing audio files with English speech though it can also transcribe speech in other languages. The model output is English text. Best for quickly transcribing audio files one at a time, translate audio from other languages into English or providing a prompt to the model to guide the output.

