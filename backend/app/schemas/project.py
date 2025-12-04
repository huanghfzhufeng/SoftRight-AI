from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class ProjectCreate(BaseModel):
    name: str
    version: str = "V1.0"
    description: Optional[str] = None
    completion_date: Optional[datetime] = None
    acquisition_type: str = "原始取得"
    repo_url: Optional[str] = None

class ProjectUpdate(BaseModel):
    name: Optional[str] = None
    version: Optional[str] = None
    description: Optional[str] = None
    completion_date: Optional[datetime] = None
    acquisition_type: Optional[str] = None
    repo_url: Optional[str] = None

class ProjectResponse(BaseModel):
    id: int
    name: str
    version: str
    description: Optional[str]
    status: str
    created_at: datetime
    
    class Config:
        from_attributes = True
