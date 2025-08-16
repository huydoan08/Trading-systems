package com.tradingsystem;

import com.intuit.karate.junit5.Karate;

class TestRunner {
    
    @Karate.Test
    Karate testAll() {
        return Karate.run().relativeTo(getClass());
    }
    
    @Karate.Test
    Karate testAuth() {
        return Karate.run("classpath:com/tradingsystem/auth").relativeTo(getClass());
    }
    
    @Karate.Test
    Karate testTrades() {
        return Karate.run("classpath:com/tradingsystem/trades").relativeTo(getClass());
    }
    
    @Karate.Test
    Karate testUsers() {
        return Karate.run("classpath:com/tradingsystem/users").relativeTo(getClass());
    }
    
    @Karate.Test
    Karate testStatistics() {
        return Karate.run("classpath:com/tradingsystem/statistics").relativeTo(getClass());
    }
}
