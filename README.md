# 📚 New York Times Best Sellers

This app allows you to see current NYT Best Sellers and some detailed information about each book.

## Table of Contents

1. [Description](#description)
2. [Getting Started](#getting-started)
3. [Dependencies](#dependencies)
4. [Installing](#installing)
5. [Running the Application](#running-the-application)
6. [The Why](#the-why)

## Description

This project uses two APIs:

1. [NYT Books API](https://developer.nytimes.com/docs/books-product/1/overview)
2. [Google Books API](https://developers.google.com/books)

The first page pulls in the list of the current NYT best sellers (see below).

<img width="1202" alt="homepage" src="https://github.com/user-attachments/assets/7132bbc2-82af-45b3-ae99-a743408d0033">

Once you have your list, you can click on an individual book "card", which will take you to a separate screen to see more details on the book you've chosen (see below).

<img width="800" alt="individual-page" src="https://github.com/user-attachments/assets/aa2d372a-0527-4adf-a67f-723069ffb403">

The list will change as the NYT Best Sellers list is updated, as this app always shows you the most current list.

This app is configured to display dynamically for different screen sizes, including across multiple browsers and mobile.

## Getting Started

### Dependencies

To get your project up and running locally, please follow the instructions below.

This app is built with:

- [Vite](https://vitejs.dev/guide/) using the React template
- [React Router DOM](https://reactrouter.com/en/main)
- [Tailwind CSS](https://tailwindcss.com/)

### Installing

1. Sign up for free API keys with both APIs linked above (you will not need OAuth) - for the sake of this coding challenge, I will be providing my API keys
2. Clone this repository

```shell
git clone https://github.com/t-keazirian/My-NYT-Books-App.git
```

or for SSH:

```shell
git clone git@github.com:t-keazirian/My-NYT-Books-App.git
```

3. Install NPM packages

```shell
npm install
```

4. For the sake of this coding challenge, I have created a `.env.example` file that you can easily copy and then paste my API keys to your convenience

5. Copy the `.env.example file

```shell
cp .env.example .env
```

6. That will create the `.env` file, where you can paste in the provided API keys (see below)

```env
VITE_NYT_API_KEY=your_nyt_api_key
VITE_GOOGLE_BOOKS_API_KEY=your_google_books_api_key
```

The app is configured to look for these variables in the `.env` file.

### Running the Application

To run the application locally, navigate to the top level of your project and run:

```shell
npm run dev
```

The browser should open automatically, or you can go directly to: `http://localhost:5173/` or the address provided in the terminal (see below for an example).

### Things to keep in mind

- The NYT Books API limits the amount of calls you can make: "there are two rate limits per API: 500 requests per day and 5 requests per minute. You should sleep 12 seconds between calls to avoid hitting the per minute rate limit."
- Ideally this test suite would be more robust, and I hope to add to it in the future. I ran into some issues mocking my API requests, and would like to dig into `vitest` to understand it better.

### The "Why"

**Vite** - I chose Vite for it's quick setup and fast development environment

**React Router DOM** I chose React Router DOM as an accessible way to manage navigation, and it integrates seamlessly with Vite

**Tailwind CSS** I have experience working with Tailwind on prior projects. It is used for responsive design, and minimizes the need for writing all CSS by hand. I like being able to apply styles directly in my components.

**NYT and Google Books API** I love to read - and my favorite book is currently at #1 on the NYT Best Sellers list. I thought this would be a fun way to display a list of books for others to consider.
