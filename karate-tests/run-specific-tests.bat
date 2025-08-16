@echo off
setlocal

set TEST_TYPE=%1
set KARATE_ENV=%2

if "%TEST_TYPE%"=="" (
    echo Usage: run-specific-tests.bat [auth^|trades^|users^|statistics^|integration] [dev^|staging^|prod]
    echo.
    echo Examples:
    echo   run-specific-tests.bat auth dev
    echo   run-specific-tests.bat trades staging
    echo   run-specific-tests.bat integration prod
    echo.
    exit /b 1
)

if "%KARATE_ENV%"=="" set KARATE_ENV=dev

echo ====================================
echo   Running %TEST_TYPE% tests
echo   Environment: %KARATE_ENV%
echo ====================================

REM Map test types to runner classes
if "%TEST_TYPE%"=="auth" set TEST_CLASS=com.tradingsystem.runners.AuthTestRunner
if "%TEST_TYPE%"=="trades" set TEST_CLASS=com.tradingsystem.runners.TradesTestRunner
if "%TEST_TYPE%"=="users" set TEST_CLASS=com.tradingsystem.TestRunner
if "%TEST_TYPE%"=="statistics" set TEST_CLASS=com.tradingsystem.TestRunner
if "%TEST_TYPE%"=="integration" set TEST_CLASS=com.tradingsystem.runners.IntegrationTestRunner

if "%TEST_CLASS%"=="" (
    echo ERROR: Invalid test type '%TEST_TYPE%'
    echo Valid types: auth, trades, users, statistics, integration
    exit /b 1
)

echo Compiling...
call mvn clean compile -q

if %ERRORLEVEL% neq 0 (
    echo ERROR: Compilation failed
    exit /b 1
)

echo Running %TEST_TYPE% tests...
call mvn test -Dtest=%TEST_CLASS% -Dkarate.env=%KARATE_ENV%

if %ERRORLEVEL% neq 0 (
    echo ERROR: Tests failed
    echo Check the reports in target/karate-reports/
    exit /b 1
)

echo.
echo %TEST_TYPE% tests completed successfully!

if exist target\karate-reports\karate-summary.html (
    echo Opening test report...
    start target\karate-reports\karate-summary.html
)

pause
