Feature: Statistics and Analytics API Tests

Background:
  * url apiUrl
  * configure headers = headers
  # Login and get auth token
  * def loginResult = call read('classpath:com/tradingsystem/helpers/auth-helper.js') { user: testUser }
  * def authToken = loginResult.token
  * header Authorization = 'Bearer ' + authToken

Scenario: Get Overall Trading Statistics
  Given path '/statistics/overview'
  And param period = '30d'
  When method GET
  Then status 200
  And match response == 
    """
    {
      "success": true,
      "data": {
        "period": "30d",
        "totalUsers": "#number",
        "activeUsers": "#number",
        "totalTrades": "#number",
        "executedTrades": "#number",
        "totalVolume": "#number",
        "totalPnL": "#number",
        "averageWinRate": "#number",
        "topPerformers": "#array",
        "mostTradedSymbols": "#array",
        "dailyStats": "#array"
      }
    }
    """

Scenario: Get Market Statistics
  Given path '/statistics/market'
  And param symbols = 'BTCUSDT,ETHUSDT,ADAUSDT'
  When method GET
  Then status 200
  And match response == 
    """
    {
      "success": true,
      "data": {
        "symbols": "#array",
        "marketData": "#object",
        "priceChanges": "#object",
        "volumes": "#object",
        "marketCap": "#object",
        "lastUpdated": "#string"
      }
    }
    """

Scenario: Get User Performance Analytics
  Given path '/statistics/performance'
  And param period = '7d'
  And param granularity = 'daily'
  When method GET
  Then status 200
  And match response == 
    """
    {
      "success": true,
      "data": {
        "userId": "#number",
        "period": "7d",
        "granularity": "daily",
        "performanceData": "#array",
        "summary": {
          "totalPnL": "#number",
          "winRate": "#number",
          "totalTrades": "#number",
          "averageTradeSize": "#number",
          "maxDrawdown": "#number",
          "sharpeRatio": "#number",
          "bestDay": "#object",
          "worstDay": "#object"
        },
        "riskMetrics": {
          "volatility": "#number",
          "beta": "#number",
          "var": "#number",
          "maxDrawdown": "#number"
        }
      }
    }
    """

Scenario: Get Portfolio Analysis
  Given path '/statistics/portfolio'
  When method GET
  Then status 200
  And match response == 
    """
    {
      "success": true,
      "data": {
        "userId": "#number",
        "totalValue": "#number",
        "allocations": "#array",
        "diversificationScore": "#number",
        "riskScore": "#number",
        "positions": "#array",
        "unrealizedPnL": "#number",
        "realizedPnL": "#number",
        "lastUpdated": "#string"
      }
    }
    """

Scenario: Get Trading Heatmap Data
  Given path '/statistics/heatmap'
  And param period = '30d'
  And param type = 'pnl'
  When method GET
  Then status 200
  And match response == 
    """
    {
      "success": true,
      "data": {
        "period": "30d",
        "type": "pnl",
        "heatmapData": "#array",
        "maxValue": "#number",
        "minValue": "#number",
        "colorScale": "#array"
      }
    }
    """

Scenario: Get Risk Metrics
  Given path '/statistics/risk'
  And param period = '90d'
  When method GET
  Then status 200
  And match response == 
    """
    {
      "success": true,
      "data": {
        "userId": "#number",
        "period": "90d",
        "riskMetrics": {
          "portfolioVolatility": "#number",
          "beta": "#number",
          "sharpeRatio": "#number",
          "sortinoRatio": "#number",
          "maxDrawdown": "#number",
          "var95": "#number",
          "var99": "#number",
          "expectedShortfall": "#number"
        },
        "riskBreakdown": "#array",
        "correlationMatrix": "#object",
        "riskTrend": "#array"
      }
    }
    """

Scenario: Get Comparative Analysis
  Given path '/statistics/compare'
  And param benchmark = 'MARKET'
  And param period = '1y'
  When method GET
  Then status 200
  And match response == 
    """
    {
      "success": true,
      "data": {
        "userId": "#number",
        "benchmark": "MARKET",
        "period": "1y",
        "comparison": {
          "userReturn": "#number",
          "benchmarkReturn": "#number",
          "alpha": "#number",
          "beta": "#number",
          "correlation": "#number",
          "trackingError": "#number"
        },
        "performanceChart": "#array",
        "monthlyReturns": "#array",
        "drawdownComparison": "#array"
      }
    }
    """

Scenario: Get Social Trading Statistics
  Given path '/statistics/social'
  When method GET
  Then status 200
  And match response == 
    """
    {
      "success": true,
      "data": {
        "followersCount": "#number",
        "followingCount": "#number",
        "copiedTrades": "#number",
        "copyTraders": "#number",
        "socialRank": "#number",
        "reputation": "#number",
        "popularTrades": "#array",
        "followersPerformance": "#object"
      }
    }
    """

Scenario: Export Trading Report
  Given path '/statistics/export'
  And param format = 'pdf'
  And param period = '1m'
  And param sections = 'performance,risk,portfolio'
  When method POST
  Then status 200
  And match response == 
    """
    {
      "success": true,
      "data": {
        "reportId": "#string",
        "downloadUrl": "#string",
        "expiresAt": "#string",
        "format": "pdf",
        "sections": ["performance", "risk", "portfolio"]
      }
    }
    """

Scenario: Get Real-time Market Data
  Given path '/statistics/realtime/market'
  And param symbols = 'BTCUSDT,ETHUSDT'
  When method GET
  Then status 200
  And match response == 
    """
    {
      "success": true,
      "data": {
        "symbols": ["BTCUSDT", "ETHUSDT"],
        "prices": "#object",
        "changes": "#object",
        "volumes": "#object",
        "timestamp": "#number"
      }
    }
    """
