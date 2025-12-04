from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db

router = APIRouter()

@router.post("/check")
async def run_compliance_check(project_id: int, db: Session = Depends(get_db)):
    """运行合规性检查"""
    # TODO: 调用 RiskAgent 检查
    pass

@router.get("/{project_id}/report")
async def get_compliance_report(project_id: int, db: Session = Depends(get_db)):
    """获取合规检查报告"""
    # TODO: 返回检查报告
    pass

@router.post("/name-check")
async def check_software_name(name: str):
    """软件名称查重"""
    # TODO: 名称查重逻辑
    pass

@router.post("/license-check")
async def check_licenses(project_id: int, db: Session = Depends(get_db)):
    """开源许可证检查"""
    # TODO: 许可证检查逻辑
    pass
