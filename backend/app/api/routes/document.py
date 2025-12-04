from fastapi import APIRouter, Depends, UploadFile, File
from sqlalchemy.orm import Session
from app.core.database import get_db

router = APIRouter()

@router.post("/generate")
async def generate_document(project_id: int, db: Session = Depends(get_db)):
    """生成软件说明书"""
    # TODO: 调用 DocAgent 生成文档
    pass

@router.post("/optimize")
async def optimize_description(text: str):
    """AI 优化描述文本"""
    # TODO: 调用 AI 优化
    pass

@router.post("/upload")
async def upload_document(file: UploadFile = File(...)):
    """上传原始文档"""
    # TODO: 处理文件上传
    pass

@router.get("/{project_id}/preview")
async def preview_document(project_id: int):
    """预览生成的文档"""
    # TODO: 返回文档预览
    pass

@router.get("/{project_id}/download")
async def download_document(project_id: int):
    """下载生成的文档"""
    # TODO: 返回文档文件
    pass
