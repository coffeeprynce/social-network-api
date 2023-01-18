# social-network-api

##Descriptions
this is an api using mongo db for a social network platform where users can add friends and share thoughts with each other.

##### Table of Contents
[User Story](#userstory)

[Criteria](#criteria)

[Usage](#usage)

[Credits](#credits)

[References](#references)

<a name="userstory"/>
## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

<a name="criteria"/>
## Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```
<a name="usage"/>
## Usage
```md
TO start off make sure you clone the code then go to your terminal once you have the files open.
NEXT you are going to want to run Mongosh on a separate window or secondary terminal to pair it with the 
MONGO database. Once that is up and running go back to your first terminal and enter in npm run start to start your
APPLICATION.
```

<a name="credits"/>
## Credits
```md
I want to thank my instructors from the university of minnesota bootcamp for helping me with this project as well as 
STACK overflow which has been a great resource for me.
```

<a name="references"/>
## References
```md
I had great help from the module 17 mini project which thoroughly explain the structure and get methods I needed to CREATE the framework for this project.
```
