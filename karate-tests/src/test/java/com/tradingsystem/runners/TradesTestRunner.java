package com.tradingsystem.runners;

import com.intuit.karate.junit5.Karate;

class TradesTestRunner {
    
    @Karate.Test
    Karate testTrades() {
        return Karate.run("classpath:com/tradingsystem/trades/trades.feature")
                .relativeTo(getClass());
    }
}
