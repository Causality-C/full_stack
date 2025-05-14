# Sample Todo Full Stack Repo
- vuejs
- fastapi
- postgres

## To Run

**Database**
1. `docker compose up`

**Backend**
1. `cd backend`
2. `pip install -r requirements.txt`
3. `uvicorn main:app --reload`

**Frontend**
1. `cd frontend`
2. `npm install`
3. `npm run dev`

## To deploy
1. `docker compose -f docker-compose.prod.yaml up`
2. go to `localhost:8000/app`
