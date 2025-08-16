@echo off
echo ====================================
echo   Karate Test - Chạy không cần Maven
echo ====================================

echo Bạn cần cài đặt Maven để chạy Karate tests.
echo.
echo Hướng dẫn cài đặt Maven:
echo 1. Tải Maven từ: https://maven.apache.org/download.cgi
echo 2. Giải nén vào thư mục (ví dụ: C:\apache-maven-3.9.6)
echo 3. Thêm vào PATH: C:\apache-maven-3.9.6\bin
echo 4. Khởi động lại Command Prompt
echo 5. Kiểm tra: mvn -version
echo.
echo Hoặc sử dụng Chocolatey:
echo   choco install maven
echo.
echo Hoặc sử dụng Scoop:
echo   scoop install maven
echo.
echo Sau khi cài đặt Maven, chạy:
echo   cd karate-tests
echo   mvn clean test
echo.

REM Tạo một test đơn giản bằng Java thuần
echo Tạo test demo đơn giản...

if not exist "demo-test" mkdir demo-test
cd demo-test

echo // Demo test class > DemoTest.java
echo public class DemoTest { >> DemoTest.java
echo     public static void main(String[] args) { >> DemoTest.java
echo         System.out.println("=== DEMO KARATE TEST ==="); >> DemoTest.java
echo         System.out.println("Cấu hình test đã sẵn sàng!"); >> DemoTest.java
echo         System.out.println(""); >> DemoTest.java
echo         System.out.println("Các test đã được tạo:"); >> DemoTest.java
echo         System.out.println("- Authentication tests"); >> DemoTest.java
echo         System.out.println("- Trading API tests"); >> DemoTest.java
echo         System.out.println("- User management tests"); >> DemoTest.java
echo         System.out.println("- Statistics tests"); >> DemoTest.java
echo         System.out.println("- Integration tests"); >> DemoTest.java
echo         System.out.println(""); >> DemoTest.java
echo         System.out.println("Để chạy test thực tế, cài đặt Maven và chạy:"); >> DemoTest.java
echo         System.out.println("mvn clean test -Dkarate.env=dev"); >> DemoTest.java
echo         System.out.println("========================"); >> DemoTest.java
echo     } >> DemoTest.java
echo } >> DemoTest.java

echo Compiling demo...
javac DemoTest.java

if %ERRORLEVEL% equ 0 (
    echo Running demo...
    java DemoTest
) else (
    echo Compilation failed
)

cd ..

echo.
echo Demo hoàn thành! Hãy cài đặt Maven để chạy test thực tế.
pause
