package com.tradingsystem.runners;

import com.intuit.karate.junit5.Karate;

class AuthTestRunner {
    
    @Karate.Test
    Karate testAuth() {
        return Karate.run("classpath:com/tradingsystem/auth/auth.feature")
                .relativeTo(getClass());
    }
}
