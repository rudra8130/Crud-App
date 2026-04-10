from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import user,auth,Emp
from . import models, database

from .database import engine
app = FastAPI()

print("creating table...")

models.Base.metadata.create_all(bind =engine)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
get_db = database.get_db

app.include_router(user.router)

app.include_router(auth.router)
app.include_router(Emp.router)
