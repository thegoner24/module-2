# Assignment Objective Website

This is a simple and responsive website built with HTML, CSS and Tailwind. 


## Features

- Responsive design for various screen sizes.
- Asymetrical Grid
- Animation and Transition
- Responsive image

## Technologies Used

- HTML5
- CSS
- Tailwind

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/revou-fsse-oct24/module-2-thegoner24.git
    ```
2. Navigate to the project directory:
    ```bash
    cd module-2-thegoner24
    ```
3. Open the `index.html` file in your browser:
    ```bash
    open index.html
    ```
4. **Assets Folder** (assets folder will located outside the project for development purpose) to call it into html you can use " ../ " :
    ```
    
    <img src="../assets/img/RevoU Youtube Thumbnail (1).png"
    ```



## Code 

In this case i use @keyframes to trigger bounce animation.

> Example

    @keyframes bounce-animation {<br>
        0%, 100% { transform: translateY(0); }<br>
        50% { transform: translateY(-20px); }<br>
    }<br>
    .animate-bounce-animation {<br>
        animation: bounce-animation 1s infinite;<br>
    }

## Full Deployment

![Click Here]()