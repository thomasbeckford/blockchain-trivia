# Survey Quiz App

This is a web application built using React, Next.js v13, and Context API for state management. It allows users to participate in surveys and earn tokens. The application is designed to be responsive and follows good practices of clean code and design patterns. It utilizes custom hooks for managing certain functionalities.

![Screenshot 2023-06-27 at 6 03 07 PM](https://github.com/thomasbeckford/membrane-frontend-cc/assets/28713861/8fe2a35a-44ad-4784-9780-54db3b977dc4)

![Screenshot 2023-06-27 at 6 03 41 PM](https://github.com/thomasbeckford/membrane-frontend-cc/assets/28713861/5ece18ea-a9dc-4b73-a9c5-b339de96cccf)

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

## Resources

- Material UI https://mui.com/
- Thirdweb https://thirdweb.com/
- Ethers https://docs.ethers.org/v5/
- Nextjs 13 app directory https://nextjs.org/
- Framer motion https://www.framer.com/motion/

## Aditional notes:

1. The image of the trivia is not displayed on the overview page because the API was giving an error, so I replace it for one I got from internet.
2. I used react context, Nextjs, MUI and Typescript to create this project. But I think nowadays the best option is use Tailwind & ChakraUI, its better, cleaner and faster.
3. For web3 authentication I used Thirdweb, because I think is the safest and easiest way to do it. The only thing Im missing is the Sign message (and the server auth validation cookie, I think would be a good idea to add it).
4. MISSING: react-hook-form. I think react-hook-form and yup (for form validation) are very good options. In this case, because of performance and time I prefer to set all the data on a context while I was navigating between trivia options insted of using an extra library.
