# Other things to try

Completed the workshop already? Need something else to do? Here are some other things to try

## Generate Images with Bing Create

> NOTE: A Microsoft account is required for this section

1. Go to [Bing Create](https://www.bing.com/create) and sign in with your Microsoft account if prompted

Bing Create uses the Dall-E image generation model to generate an image from a prompt you supply. 

2. Click the "Surprise Me" button to generate a random prompt, and then click "Create" to geneate an image based on that prompt.

3. Try entering your own prompt and see what images are generated.

## Have a conversation with Bing Chat

In this section we will use Bing Chat: https://bing.com/chat.

Unlike the conversation-based models such as ChatGPT in Azure OpenAI Service, Bing Chat's responses are not limited by the underlying natural language model alone. Bing Chat uses a variety of techniques to provide "grounding" for its responses, including the results of live Web searches. This means that Bing Chat can use current information, not just information that was included in the model's training data, to inform its responses. 

Bing Chat also offers three interaction modes: Creative, Balanced, and Precise, which allow you to control the tradeoff between the relevance of the responses and the creativity of the responses.

Let's try some examples to see how this works in practice.

### Have an ongoing conversation

Start with Bing in Balanced mode. Ask any question you like. Ask for followups-too! You can also use the suggested continuation buttons to guide the conversation.

### Get information about recent events

Bing Chat is based on [OpenAI's GPT-4 model](https://blogs.bing.com/search/march_2023/Confirmed-the-new-Bing-runs-on-OpenAI%E2%80%99s-GPT-4), which was trained on data collected before September 2021. Nonetheless, thanks to the grounding techniques mentioned above, Bing Chat can provide information about recent and current events. 

First, enable "Precise" mode in Bing Chat by clicking the "New Topic" button and clicking the "More Precise" button.

Now, try these prompts, and compare the results to using the models in the Azure OpenAI Service playground:

```
When did Queen Elizabeth II die?
```
```
How's today's weather in Seattle, WA
```
```
What big news happened today?
```

## Generate an image in Creative mode

As the name suggests, Creative mode is best for generating creative responses that won't necessarily be grounded in facts: poetry, jokes, and so on. You can also use Bing Chat in creative mode to generate images. Try something like this:

```
Draw a logo for an ice-cream shop located in Hawaii near the beach.
```

Try other prompts and see what creative responses you can get!
