from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from .. import models, schema

def create(request: schema.Emp, db:Session):
  
  new_emp= models.Emp(id = request.id,name=request.name,
    email=request.email,
    phone = request.phone)
  db.add(new_emp)
  db.commit()
  db.refresh(new_emp)
  return new_emp


def get_all(db:Session):
  return db.query(models.Emp).all()

def delete(id, db: Session):
  db.query(models.Emp).filter(models.Emp.id == id).delete(synchronize_session=False)
  db.commit()
  return f"Emp with id {id} deleted"

def update(id, request, db:Session):
  Emp = db.query(models.Emp).filter(models.Emp.id == id)
  if not Emp.first():
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="NOT FOUND")
  Emp.update(request.dict())
  db.commit()
  return 'updated'
