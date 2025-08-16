@echo off
echo ====================================
echo   Trading System - Karate Tests
echo ====================================

set KARATE_ENV=%1
if "%KARATE_ENV%"=="" set KARATE_ENV=dev

echo Running tests in %KARATE_ENV% environment...
echo.

REM Clean and compile
echo [1/3] Cleaning and compiling...
call mvn clean compile -q

if %ERRORLEVEL% neq 0 (
    echo ERROR: Compilation failed
    exit /b 1
)

REM Run all tests
echo [2/3] Running all tests...
call mvn test -Dkarate.env=%KARATE_ENV%

if %ERRORLEVEL% neq 0 (
    echo ERROR: Some tests failed
    echo Check the reports in target/karate-reports/
    exit /b 1
)

REM Generate reports
echo [3/3] Generating reports...
if exist target\karate-reports (
    echo.
    echo ====================================
    echo   Test Results Summary
    echo ====================================
    echo Report location: target\karate-reports\
    echo.
    
    REM Open report if available
    if exist target\karate-reports\karate-summary.html (
        echo Opening test report...
        start target\karate-reports\karate-summary.html
    )
) else (
    echo No reports generated
)

echo.
echo Tests completed successfully!
pause
