#!/bin/bash

# Trading System - Karate Tests Runner (Linux/Mac)

KARATE_ENV=${1:-dev}

echo "===================================="
echo "   Trading System - Karate Tests"
echo "===================================="
echo "Running tests in $KARATE_ENV environment..."
echo

# Clean and compile
echo "[1/3] Cleaning and compiling..."
mvn clean compile -q

if [ $? -ne 0 ]; then
    echo "ERROR: Compilation failed"
    exit 1
fi

# Run all tests
echo "[2/3] Running all tests..."
mvn test -Dkarate.env=$KARATE_ENV

if [ $? -ne 0 ]; then
    echo "ERROR: Some tests failed"
    echo "Check the reports in target/karate-reports/"
    exit 1
fi

# Generate reports
echo "[3/3] Generating reports..."
if [ -d "target/karate-reports" ]; then
    echo
    echo "===================================="
    echo "   Test Results Summary"
    echo "===================================="
    echo "Report location: target/karate-reports/"
    echo
    
    # Open report if available (on macOS)
    if [ -f "target/karate-reports/karate-summary.html" ] && command -v open &> /dev/null; then
        echo "Opening test report..."
        open target/karate-reports/karate-summary.html
    fi
else
    echo "No reports generated"
fi

echo
echo "Tests completed successfully!"
