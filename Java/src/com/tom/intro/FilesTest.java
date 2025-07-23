package com.tom.intro;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;

class FilesTest {

	@Test
	void test() {
		List<String> words = new ArrayList<String>();
		words.add("Hello");
		words.add("world");
		Files.saveWordsUnbufferedStream("text.txt", words);
		Files.readWordsUnbufferedStream("text.txt");
		Files.saveWordsBufferedStream("text.txt", words);
		Files.readWordsBufferedStream("text.txt");
	}
}
