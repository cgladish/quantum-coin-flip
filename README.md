# Quantum Coin Flip

<img src='https://raw.githubusercontent.com/nullstack/nullstack/master/nullstack.png' height='60' alt='Nullstack' />

## How to run this Project

Project that handles populating the DB with data lives here: [https://github.com/cgladish/quantum-coin-flip-backend](https://github.com/cgladish/quantum-coin-flip-backend). Clone the backend project and follow the instructions to run the getCoinFlips script. This will populate the DB with data.

Install the dependencies:

`npm install`

Copy the environment sample to a .env file

```sh
NULLSTACK_PROJECT_NAME="[dev] Quantum Coin Flip"
NULLSTACK_PROJECT_DOMAIN="localhost"
NULLSTACK_PROJECT_COLOR="#D22365"
NULLSTACK_SERVER_PORT="3000"

NULLSTACK_SECRETS_DB_URL="mongodb://user:pass@localhost:27017/db"
```

Run the app in development mode:

`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Learn more about Nullstack

[Read the documentation](https://nullstack.app/documentation)
