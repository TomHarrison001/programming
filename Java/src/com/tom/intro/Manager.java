package com.tom.intro;

import java.math.BigDecimal;
import java.util.logging.Logger;

public class Manager extends Employee implements StockOptionEligible, BonusEligible {
	private static final Logger log = Logger.getLogger(Manager.class.getName());
	
	public Manager() {
		super();
	}
	
	@Override
	public void processStockOptions(int numberOfOptions, BigDecimal price) {
		log.info("Wow, I can't believe I got " + numberOfOptions + " options at $" + price.toPlainString() + " each!");
	}
}
