# Trading System - Karate Automation Tests

## Tổng quan
Dự án này chứa các test tự động hóa cho hệ thống trading sử dụng Karate framework.

## Cấu trúc thư mục
```
karate-tests/
├── src/test/java/
│   ├── karate-config.js           # Cấu hình chung
│   ├── logback-test.xml           # Cấu hình logging
│   └── com/tradingsystem/
│       ├── TestRunner.java        # Test runner chính
│       ├── auth/                  # Tests cho authentication
│       ├── trades/                # Tests cho trading
│       ├── users/                 # Tests cho user management
│       ├── statistics/            # Tests cho statistics
│       ├── integration/           # Integration tests
│       ├── helpers/               # Utility functions
│       └── runners/               # Specific test runners
├── run-tests.bat                  # Script chạy test (Windows)
├── run-tests.sh                   # Script chạy test (Linux/Mac)
├── run-specific-tests.bat         # Script chạy test cụ thể
└── pom.xml                        # Maven configuration
```

## Yêu cầu hệ thống
- Java 11 hoặc cao hơn
- Maven 3.6 hoặc cao hơn

## Cách chạy test

### 1. Chạy tất cả test
```bash
# Windows
run-tests.bat [dev|staging|prod]

# Linux/Mac
./run-tests.sh [dev|staging|prod]

# Hoặc dùng Maven
mvn test -Dkarate.env=dev
```

### 2. Chạy test cụ thể
```bash
# Windows
run-specific-tests.bat auth dev
run-specific-tests.bat trades staging

# Hoặc dùng Maven
mvn test -Dtest=AuthTestRunner -Dkarate.env=dev
mvn test -Dtest=TradesTestRunner -Dkarate.env=dev
```

### 3. Chạy test với tags
```bash
mvn test -Dkarate.options="--tags @integration"
mvn test -Dkarate.options="--tags @performance"
```

## Các môi trường test
- **dev**: http://localhost:3000 (frontend), http://localhost:8080/api (backend)
- **staging**: URLs staging environment
- **prod**: URLs production environment

## Báo cáo test
Sau khi chạy test, báo cáo sẽ được tạo trong `target/karate-reports/karate-summary.html`

## Các loại test

### Authentication Tests
- User registration
- User login/logout
- Token refresh
- Profile management

### Trading Tests  
- Create trades
- Update trade status
- Cancel trades
- Trade history
- Trading statistics

### User Management Tests
- User CRUD operations
- Profile updates
- User statistics
- Search functionality

### Statistics Tests
- Performance analytics
- Risk metrics
- Portfolio analysis
- Market data

### Integration Tests
- End-to-end workflows
- Multi-user scenarios
- Load testing
