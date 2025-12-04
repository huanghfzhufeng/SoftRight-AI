from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.api.routes import project, document, code, compliance

app = FastAPI(
    title=settings.APP_NAME,
    description="软件著作权申请智能助手 API",
    version="1.0.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(project.router, prefix="/api/projects", tags=["项目管理"])
app.include_router(document.router, prefix="/api/docs", tags=["文档生成"])
app.include_router(code.router, prefix="/api/code", tags=["代码处理"])
app.include_router(compliance.router, prefix="/api/compliance", tags=["合规检查"])

@app.get("/")
async def root():
    return {"message": "SoftRight AI API", "version": "1.0.0"}

@app.get("/health")
async def health():
    return {"status": "ok"}
