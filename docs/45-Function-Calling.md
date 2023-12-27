# Lab 5: Function Calling



### System Message

```
You are an AI assistant that helps people find hotels. 
In the conversation with the user, your goal is to retrieve the required fields for the function search_hotels.
```

### Function
```
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

ask:
```
I'm looking for a hotel in the Netherlands
```

*See how the conversation goes*