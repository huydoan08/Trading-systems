package com.tradingsystem.runners;

import com.intuit.karate.junit5.Karate;

class IntegrationTestRunner {
    
    @Karate.Test
    Karate testIntegration() {
        return Karate.run("classpath:com/tradingsystem/integration/end-to-end.feature")
                .tags("@integration")
                .relativeTo(getClass());
    }
    
    @Karate.Test
    Karate testPerformance() {
        return Karate.run("classpath:com/tradingsystem/integration/end-to-end.feature")
                .tags("@performance")
                .relativeTo(getClass());
    }
}
