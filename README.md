# 📚 New York Times Best Sellers

This app allows you to see current NYT Best Sellers and some detailed information about each book.

## Table of Contents

1. [Description](#description)
2. [Getting Started](#getting-started)
3. [Dependencies](#dependencies)
4. [installing](#installing)
5. [Executing Program](#executing-program)
6. [The Why](#the-why)

## Description

This project uses two APIs:

1. [NYT Books API](https://developer.nytimes.com/docs/books-product/1/overview)
2. [Google Books API](https://developers.google.com/books)

![Homepage]('src/images/homepage.png')

The first page pulls in the list of the current NYT best sellers. From there, you can click on one of the cards that correspond to each book, where you'll see more detailed information about the book you've chosen.

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

### Executing program

- How to run the program
- Step-by-step bullets

```
code blocks for commands
```

### The "Why"

**Vite** - I chose Vite for it's quick setup and fast development environment

**React Router DOM** I chose React Router DOM as an accessible way to manage navigation, and it integrates seamlessly with Vite

**NYT and Google Books API** I love to read - and my favorite book is currently at #1 on the NYT Best Sellers list. I thought this would be a fun way to display a list of books for others to consider.
