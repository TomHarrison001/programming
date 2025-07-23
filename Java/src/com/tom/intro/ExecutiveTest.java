package com.tom.intro;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.math.BigDecimal;

import org.junit.jupiter.api.Test;

class ExecutiveTest {

	@Test
	void testProcessStockOptions() {
		Executive e = new Executive();
		e.processStockOptions(1000, BigDecimal.valueOf(1.f));
	}
	
	@Test
	void testCalculateBonus() {
		Executive e = new Executive();
		e.setSalary(BigDecimal.valueOf(100000));
		assertEquals(BigDecimal.valueOf(20000.0), e.calculateBonus());
	}
}
