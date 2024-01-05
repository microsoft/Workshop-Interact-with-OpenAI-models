# Function Calling

:::tip What is function calling? 
XXX
:::

The latest versions of gpt-35-turbo and gpt-4 are fine-tuned to work with functions and are able to both determine when and how a function should be called. If one or more functions are included in your request, the model determines if any of the functions should be called based on the context of the prompt. When the model determines that a function should be called, it responds with a JSON object including the arguments for the function.

The models formulate API calls and structure data outputs, all based on the functions you specify. It's important to note that while the models can generate these calls, it's up to you to execute them, ensuring you remain in control.

At a high level you can break down working with functions into three steps:

- Call the chat completions API with your functions and the user’s input
- Use the model’s response to call your API or function
- Call the chat completions API again, including the response from your function to get a final response


### System Message

First update the system message. 
- In this system message explain the goal of the assitant
- Explain the information that needs to be gathered
- Which function to all if all information is gathered


```text title="System Message"
You are an AI assistant that helps people find hotels. 
In the conversation with the user, your goal is to retrieve the required fields for the function search_hotels.
```

### OpenAI Function

Second paste the json below in the OpenAI Functions functions field.

A function has three main parameters: name, description, and parameters.

Description: The model is to determine when and how to call the function so it's important to give a meaningful description of what the function does.

Parameters: is a JSON schema object that describes the parameters that the function accepts.


```json title="Functions"
[{
    "name": "search_hotels",
    "description": "Retrieves hotels from the search index based",
    "parameters": {
           "type": "object",             
           "properties": {
                "location": {
                    "type": "string",
                    "description": "The location of the hotel (i.e. Seattle, WA)"
                },
                "price": {
                    "type": "number",
                    "description": "The maximum price for the hotel"
                },
                "features": {
                    "type": "string",
                    "description": "A comma separated list of features (i.e. beachfront, free wifi, etc.)"
                }
            },
           "required": ["location","price","features"]
      }
}]
```


### Conversation

Now let's start a conversation with the agent.

Ask:
```text title="User Message"
I'm looking for a hotel in the Netherlands
```

The agent should start asking you about location, price and hotel features and finally call the function and return the properties in json format. 


:::tip[Assignment]
Extend the function to ask for how many people the room is.
:::