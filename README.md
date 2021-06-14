This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First clone git repository.

cd contractors-app

npm install

npm run dev


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Home page contains main two sections; Input Form and Available Contractors. 
At the begining Available Contractors table is empty. Use the Input Form to enter some contractors to populate data. 

## Input Form
Form contains 4 text fields and a "ADD CONTRACTOR" submit button. All fields are considered as String inputs.
Services field can contain Strings or multiple Strings and comma is used as a delimiter to separate multiple services. 
Submit button is disabled at first and remains until all the fields are non empty values as they are required. 
Once Submit button is pressed, form data will be used to call graphql query to create a record in the server. 
Once the record has been successfully created, a closable alert will be shown. 

## Available Contractors
This table contains all the contractors. Each row represent contractor details as per they are entered. 

GraphQL server is running http://localhost:3000/api/graphql-data
use this query to fetch all contractors.
query {
    contractors{
        name
        telephone
        email
        services
    }
  }

Please note that UI unit tests and graphql unit tests have not been written. 

References:

https://material-ui.com/

https://www.apollographql.com/docs/tutorial/introduction/

https://www.howtographql.com/basics/0-introduction/

https://nextjs.org/learn/basics/create-nextjs-app
