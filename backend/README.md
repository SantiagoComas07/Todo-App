# Backend - FastAPI

REST API for task management built with FastAPI and SQLModel.

## Requirements

- Python 3.9+
- pip (package manager)

## Installation

1. **Create virtual environment:**
   ```bash
   python -m venv venv
   ```

2. **Activate virtual environment:**
   - Windows: `venv\Scripts\activate`
   - Linux/Mac: `source venv/bin/activate`

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

## Running the Application

```bash
uvicorn src.main:app --reload
```

The API will be available at: `http://localhost:8000`

Interactive documentation: `http://localhost:8000/docs`

## Project Structure

```
src/
├── main.py              # Main entry point
├── config/              # Configuration
├── models/              # Data models
├── db/                  # Database configuration
├── crud/                # CRUD operations
```

## Main Endpoints

- `POST /tasks` - Create task
- `GET /tasks` - Get all tasks
- `GET /tasks/{id}` - Get task by ID
- `PUT /tasks/{id}` - Update task
- `DELETE /tasks/{id}` - Delete task

## Technologies

- FastAPI - Web framework
- SQLModel - ORM + validation
- SQLite - Database
- Uvicorn - ASGI server
