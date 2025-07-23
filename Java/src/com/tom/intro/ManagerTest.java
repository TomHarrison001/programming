package com.tom.intro;

import static org.junit.jupiter.api.Assertions.*;

import java.math.BigDecimal;

import org.junit.jupiter.api.Test;

class ManagerTest {

	@Test
	void testProcessStockOptions() {
		Manager m = new Manager();
		m.processStockOptions(1000, BigDecimal.valueOf(1.f));
	}
	
	@Test
	void testCalculateBonus() {
		Manager m = new Manager();
		m.setSalary(BigDecimal.valueOf(100000));
		assertEquals(BigDecimal.valueOf(10000.0), m.calculateBonus());
	}
}
