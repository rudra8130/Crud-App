from typing import List, Optional
from pydantic import BaseModel,Field


class ShowUser(BaseModel):
    name: str
    email: str

    class Config:
        from_attributes = True

class User(BaseModel):
  name: str
  email: str
  password:str = Field(max_length=72) 

class Login(BaseModel):
  username:str
  password:str

class Emp(BaseModel):
  id: int
  name: str
  email: str
  phone: int
  

class Token(BaseModel):
  access_token:str
  token_type:str


class TokenData(BaseModel):
  email:Optional[str]=None