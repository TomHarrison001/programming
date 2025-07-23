package com.tom.intro;

import static org.junit.jupiter.api.Assertions.*;

import java.math.BigDecimal;
import java.util.logging.Logger;

import org.junit.jupiter.api.Test;

class EmployeeTest {

	@Test
	void testEmployee() {
		Employee e1 = new Employee("Tom", 21);
		e1.setTaxNo("0");
		e1.setEmployeeNo("1");
		e1.setSalary(BigDecimal.valueOf(60000));
		Logger l = Logger.getLogger(EmployeeTest.class.getName());
		l.info("Created Employee object");
		l.info("Tax No: " + e1.getTaxNo());
		assertEquals("0", e1.getTaxNo());
		l.info("Employee No: " + e1.getEmployeeNo());
		assertEquals("1", e1.getEmployeeNo());
		l.info("Salary: " + e1.getSalary());
		assertEquals(BigDecimal.valueOf(60000), e1.getSalary());
		
	}
}
