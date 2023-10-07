import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }



  :focus {
    outline: 0;
  }

  html {
    scroll-behavior: smooth;
  }


  body {
    color: #595959;
    font-family: 'Roboto';
    background: linear-gradient(
    to bottom,
    transparent,
    rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb));
    background-color: #fafafa;
  }
  
  div {
    display: flex;
    flex-direction: column;
  }

  button {
    padding: 3px 10px;
    &:hover {
      opacity: .8;
      cursor: pointer;
    }
  }

}



input {
  outline: none;
}

span {
  font-weight: 600;
}

button {
  padding: 3px 10px;
  &:hover {
    opacity: .8;
  }
}


h1 {
  font-size: calc(24px + 1.4vw);
  font-weight: 900;
}

h2 {
  font-size: calc(22px + 1vw);
  font-weight: 700;
}


h3 {
  font-size: calc(16px + .7vw);
  font-weight: 500;
}


h4 {
  font-size: calc(14px + .5vw);
  font-weight: 500;
}

p {
  font-size: calc(8px + .5vw);
  font-weight: 300;
}





    body, input, textarea, button {

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        border: none;


    }

    button {
      cursor: pointer;
      border-radius: 5px;
      padding: calc(2px .5vw) calc(5px + .5vw)

    }

`
