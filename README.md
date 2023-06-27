# Survey Quiz App

This is a web application built using React, Next.js v13, and Context API for state management. It allows users to participate in surveys and earn tokens. The application is designed to be responsive and follows good practices of clean code and design patterns. It utilizes custom hooks for managing certain functionalities.

## Getting Started

To run the project, follow these steps:

```Clone the repository: git clone <repository_url>
Install the dependencies: pnpm install
Start the development server: pnpm run dev
```

## Environment Variables

NEXT_PUBLIC_QUIZ_ADDRESS=""

You need to set this ENV to make the project work.

## Usage

Connect your MetaMask wallet.

Ensure that you are connected to the Goerli network. If not, a button will be displayed to switch networks automatically.

The app will display the balance of the $QUIZ token on the navbar.

Once the page is loaded, the title of the daily trivia along with its picture will be shown, and a button will be provided to begin answering.

Each question will be displayed for a specific amount of time.

Answered or not, the app will move on to the next question.

After answering all the questions, an overview with all the answers will be shown.

A button will be available to submit the questions to the validator contract.

The balance of the $QUIZ token will be refreshed.

## Custom Hooks

The project utilizes the following custom hooks:

useBalance: get balance from $QUIZ token
useTrivia: Receives trivia object options and return trivia values.

## Aditional notes:

1. The image of the trivia is not displayed on the overview page because the API was giving an error, so I replace it for one I got from internet.
2. I used react context, Nextjs, MUI and Typescript to create this project. But I think nowadays the best option is use Tailwind & ChakraUI, its better, cleaner and faster.
3. For web3 authentication I used Thirdweb, because I think is the safest and easiest way to do it. The only thing Im missing is the Sign message (and the server auth validation cookie, I think would be a good idea to add it).
