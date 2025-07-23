package com.tom.intro;

import java.math.BigDecimal;

public interface BonusEligible {
	BigDecimal getSalary();
	
	default BigDecimal calculateBonus() {
		// Default: bonus is 10% of salary
		return getSalary().multiply(BigDecimal.valueOf(0.1));
	}
}
