# Project Description

Design and implement a Gifs SPA application for searching and sharing funny gifs with your friends. The application should be able to display the top trending gifs, upload gifs, and much more! For our purposes, we are going to use the Giphy API.

## Step-by-step Guide

1. In order to use the Giphy API, first, we need to register. Go [here](https://giphy.com/join?next=%2Foauth%2Fauthorize%2F%3Fresponse_type%3Dcode%26client_id%3DC7yftGDVCAhmaTnJCKv3eNaRsANYTDDf7PA9jZbw%26redirect_uri%3Dhttps%253A%252F%252Fdevelopers.giphy.com%252Foauth%252Fexchange%252F) and register with Giphy.
2. After you have registered successfully, the next thing is to create an app. By creating an app, Giphy will provide us with an `api_key` that we are going to need in our future requests.

   - Select the API product and name your app.
   - After successfully creating an app, you should have obtained an `api_key` for that app. Now we can get to work!

3. Consume the Giphy API Endpoints to retrieve and store the gif data you want.

## Functional Requirements

Each requirement is categorized into one of three categories – must, should, or could.

- **Must** requirements have the highest priority and should be addressed first.
- **Should** requirements have medium priority and should be addressed after all or most must requirements have been implemented and tested.
- **Could** requirements should be left for last.

Any additional features are welcome if you have covered all the listed requirements below.

### Must Requirements

#### Display Trending Gifs

The application must have a display trending gifs functionality that allows the user to see the top trending gifs. Use the trending endpoint with your `api_key`. You can limit the received gifs by using the limit parameter.

#### Search Gifs

The application must have a search gifs functionality that allows the user to search gifs by a given query. Use the search endpoint with your `api_key` and a search query – `q`, provided by the user. You can limit the received gifs by using the limit parameter.

#### Display Gif Details

The application must have a display gif details functionality that allows the user to see a given gif’s detailed information like the uploaded user’s username. Use the get-gif-by-id endpoint with your `api_key` and the desired gif’s id – `gif_id`.

#### Upload Gif

The application should have an upload gif functionality that allows the user to upload a gif from his file system. Use the upload endpoint with a POST request, containing your `api_key`, and in the request’s body, you should send a file object as a form data. You can see the uploaded gifs in your Giphy Channel.

### Should Requirements

This application should support the following functionalities:

#### Display Uploaded Gifs

The application should have a display uploaded gifs functionality that allows the user to see his uploaded gifs. You can do this by storing the ids of the uploaded gifs in the browser’s local storage and then use the get-gifs-by-id endpoint with your `api_key` and the desired ids, separated by commas – `ids`.

#### Favorite Gif

The application should have a favorite gif functionality that allows the user to make a gif his favorite and display it somewhere in the app. If the user hasn’t chosen a favorite gif yet, he should be notified, and a random gif will be shown as a favorite. You can do this by storing the chosen favorite gif’s id in the browser’s local storage and then use the get-gif-by-id endpoint. If the user has no favorite gif yet, you can use the random endpoint.

### General Requirements

- You must use Native DOM API for DOM manipulations.
- You must use Git to keep your source code and for team collaboration.
- You must use GitLab’s issue tracking system.
- You must use ESLint to write consistently styled code.
- You must use modules, and they should be single-responsible.
- You must document your code explicitly following the JSDoc standard.
- You must use correct naming and write clean, self-documenting code.
- You must have a usable user interface.
- You must use the latest features of ECMAScript.
- You could use external libraries such as Bootstrap, Materialize, or other to style your project.
- External libraries such as jQuery UI, Kendo UI, or others for custom controls are allowed.

## Teamwork Guidelines

Refer to the teamwork guidelines document found along with the project requirements.

## Give Feedback about Your Teammate

You will be invited to provide feedback about all of your teammates, their attitude about this project, their technical skills, their teamwork skills, their contributions to the project, etc. The feedback is an important part of the project evaluation, so take it seriously and be honest.
