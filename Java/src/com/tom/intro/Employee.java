package com.tom.intro;

import java.math.BigDecimal;

public class Employee extends Person {
	private String taxNo;
	private String employeeNo;
	private BigDecimal salary;
	
	public Employee() {
		super();
	}

	public Employee(String name, int age) {
		super(name, age);
	}

	public String getTaxNo() {
		return taxNo;
	}

	public void setTaxNo(String taxNo) {
		this.taxNo = taxNo;
	}

	public String getEmployeeNo() {
		return employeeNo;
	}

	public void setEmployeeNo(String employeeNo) {
		this.employeeNo = employeeNo;
	}

	public BigDecimal getSalary() {
		return salary;
	}

	public void setSalary(BigDecimal salary) {
		this.salary = salary;
	}
}
