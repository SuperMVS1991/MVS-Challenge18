```
# Description

This is a social network API that allows users to perform various CRUD operations on users, thoughts, reactions, and friendships.

## Installation

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Create a .env file based on the .env.example file and configure your MongoDB connection string.
4. Run the application using `npm start`.

## Usage

### Starting the Server

To start the server and sync Mongoose models to the MongoDB database, run the following command:

```bash
npm start
```

### API Routes

#### Users

- `GET /api/users`: Retrieve all users.
- `GET /api/users/:id`: Retrieve a user by ID.
- `POST /api/users`: Create a new user.
- `PUT /api/users/:id`: Update a user by ID.
- `DELETE /api/users/:id`: Delete a user by ID.

#### Thoughts

- `GET /api/thoughts`: Retrieve all thoughts.
- `GET /api/thoughts/:id`: Retrieve a thought by ID.
- `POST /api/thoughts`: Create a new thought.
- `PUT /api/thoughts/:id`: Update a thought by ID.
- `DELETE /api/thoughts/:id`: Delete a thought by ID.

#### Reactions

- `POST /api/thoughts/:thoughtId/reactions`: Create a reaction for a thought.
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`: Delete a reaction from a thought.

#### Friends

- `POST /api/users/:userId/friends/:friendId`: Add a friend to a user's friend list.
- `DELETE /api/users/:userId/friends/:friendId`: Remove a friend from a user's friend list.

### Testing with Insomnia

1. Open Insomnia or a similar API testing tool.
2. Send GET requests to `/api/users` and `/api/thoughts` to view formatted JSON data.
3. Use POST, PUT, and DELETE requests to test creating, updating, and deleting users and thoughts.
4. Test creating and deleting reactions to thoughts using POST and DELETE requests to `/api/thoughts/:thoughtId/reactions`.
5. Test adding and removing friends to a user's friend list using POST and DELETE requests to `/api/users/:userId/friends/:friendId`.

[Watch the video tutorial on Loom](https://www.loom.com/share/9ce998ef27a242cbbc8e0232b88e23e1)