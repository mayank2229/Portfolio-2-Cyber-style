@echo off
echo =======================================
echo GitHub Upload Helper for DevOps Portfolio
echo =======================================
echo.

cd /d "%~dp0"
echo Current project directory is: %CD%
echo.

where git >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Git is not installed or not in your PATH. 
    echo Please install Git from https://git-scm.com/ and try again.
    pause
    exit /b 1
)

set /p REPO_URL="Enter your GitHub repository URL (e.g., https://github.com/mayank2229/your-repo.git): "

if "%REPO_URL%"=="" (
    echo [ERROR] Repository URL cannot be empty.
    pause
    exit /b 1
)

echo.
echo [1/5] Initializing Git repository...
git init

echo.
echo [2/5] Staging files...
git add .

echo.
echo [3/5] Creating commit...
git commit -m "feat: add Dockerfile and update config"

echo.
echo [4/5] Setting main branch and adding remote...
git branch -M main
git remote remove origin >nul 2>&1
git remote add origin %REPO_URL%

echo.
echo [5/5] Pushing to GitHub...
echo (If prompted, please log in through the browser window that pops up)
git push -u origin main

if %ERRORLEVEL% neq 0 (
    echo.
    echo [ERROR] Push failed. Make sure your GitHub repository exists, is empty, and you have write permissions.
) else (
    echo.
    echo [SUCCESS] Portfolio successfully uploaded to GitHub!
)

pause
