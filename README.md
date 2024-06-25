# Simple Tasks API

This is a simple API built with Node.js and Koa.js that returns a list of tasks. This project is intended for educational purposes, demonstrating how to set up a basic API using Koa.js.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/eriveltondasilva/koa-app.git
    ```
2. Change to the project directory:
    ```bash
    cd koa-app
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the server:
    ```bash
    npm start
    ```
2. The server will start on `http://localhost:3000`.

## API Endpoints

### Get Tasks

- **URL:** `/tasks`
- **Method:** `GET`
- **Response:**
    ```json
    [
      {
        "id": 1,
        "title": "Buy groceries",
        "completed": false
      },
      {
        "id": 2,
        "title": "Walk the dog",
        "completed": true
      },
      {
        "id": 3,
        "title": "Read a book",
        "completed": false
      }
    ]
    ```

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
