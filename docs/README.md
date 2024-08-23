# AI Application Starter Kit

## Description
A starter kit for building AI applications using Neon as a vector database.

## Features
- Integration with the pgvector extension for storing and querying embeddings.
- Chatbot functionality using generative AI.
- Semantic search capabilities.

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/imabutahersiddik/AI-Application-Starter-Kit.git
   cd ai-starter-kit
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up your database:**
   - Ensure you have a PostgreSQL database running.
   - Create a `.env` file in the root directory and add your database URL:
     ```
     DATABASE_URL=postgres://user:password@localhost:5432/mydb
     ```

4. **Run the application:**
   ```bash
   npm start
   ```

## API Endpoints

### Chatbot Endpoint
- **POST /chat**
- **Request Body:**
  ```json
  {
      "input": "Hello, how are you?"
  }
  ```
- **Response:**
  ```json
  {
      "response": "I'm doing well, thank you!"
  }
  ```

### Semantic Search Endpoint
- **POST /search**
- **Request Body:**
  ```json
  {
      "query": "Find similar documents"
  }
  ```
- **Response:**
  ```json
  {
      "results": [
          {"id": 1, "title": "Document 1", "content": "Content of document 1"},
          {"id": 2, "title": "Document 2", "content": "Content of document 2"}
      ]
  }
  ```
  
To make requests to your endpoints using `curl`, you can use the following examples for both the chatbot and semantic search endpoints.

### **1. Chatbot Endpoint Request**
To send a POST request to the chatbot endpoint, use this command:

```bash
curl -X POST http://localhost:3000/chat \
-H "Content-Type: application/json" \
-d '{"input": "Hello, how are you?"}'
```

### **2. Semantic Search Endpoint Request**
To send a POST request to the semantic search endpoint, use this command:

```bash
curl -X POST http://localhost:3000/search \
-H "Content-Type: application/json" \
-d '{"query": "Find similar documents"}'
```

### **Explanation of the Command:**
- `-X POST`: Specifies the request method as POST.
- `http://localhost:3000/chat` or `http://localhost:3000/search`: The URL of the endpoint.
- `-H "Content-Type: application/json"`: Sets the request header to indicate that the content type is JSON.
- `-d '{...}'`: The data being sent in JSON format.

These commands will allow you to test your API endpoints from the command line using `curl`.

## Optimization Tips
- Use indexing on vector columns for faster searches.
- Monitor performance and scale your database as needed.
```

### **Final Steps**
1. Ensure your PostgreSQL database is set up with the necessary tables (`chatbot_responses` and `documents`) and that the `pgvector` extension is installed.
2. Populate the database with sample data for testing the chatbot and semantic search functionalities.
3. Run the application and test the endpoints using tools like Postman or curl.
