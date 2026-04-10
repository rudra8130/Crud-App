
from fastapi import APIRouter, Depends,status, HTTPException
from .. import database, schema
from sqlalchemy.orm import Session
from ..oauth2 import get_current_user
from ..repository import user

router= APIRouter(
  prefix='/user',
  tags=['Users']
)

@router.post('/', response_model=schema.ShowUser)
def create_user(request: schema.User,db : Session = Depends(database.get_db)):
  return user.create(request, db)

@router.get('/{id}',response_model=schema.ShowUser)
def show_user(id ,db : Session = Depends(database.get_db), current_user = Depends(get_current_user) ):
  return user.showuser(id, db)  