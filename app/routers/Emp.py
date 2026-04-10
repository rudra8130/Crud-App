
from fastapi import APIRouter, Depends,status, HTTPException
from typing import List
from .. import database, schema
from sqlalchemy.orm import Session
from ..oauth2 import get_current_user
from ..repository import Emp

router= APIRouter(
  prefix='/Emp',
  tags=['Emp']
)

@router.post('/', response_model=schema.Emp)
def create_Emp(request: schema.Emp,db : Session = Depends(database.get_db), current_user = Depends(get_current_user)):
  return Emp.create(request, db)

@router.get('/', response_model=List[schema.Emp])
def all(db : Session = Depends(database.get_db), current_user = Depends(get_current_user)):
  return Emp.get_all(db)

@router.delete('delete/{id}', status_code=status.HTTP_204_NO_CONTENT)
def destroy(id, db : Session = Depends(database.get_db), current_user = Depends(get_current_user)):
   return Emp.delete(id, db)

@router.put('/{id}', status_code=status.HTTP_202_ACCEPTED)
def update(id,request: schema.Emp,  db : Session = Depends(database.get_db), current_user = Depends(get_current_user)):
  return Emp.update(id, request,db)