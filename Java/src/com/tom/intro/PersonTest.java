package com.tom.intro;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import org.junit.jupiter.api.Test;

class PersonTest {

	@Test
	void testPerson() {
		Logger l = Logger.getLogger(Person.class.getName());
		Person p1 = new Person("Tom", 21);
		l.info("Created Person object named: " + p1.getName());
		assertEquals("Tom", p1.getName());
		assertEquals(21, p1.getAge());
		List<Person> people = new ArrayList<Person>();
		people.add(p1);
	}
}
