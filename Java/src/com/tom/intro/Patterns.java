package com.tom.intro;

import java.util.logging.Logger;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Patterns {
	public static void matchingGroupsWithStringBuffer() {
		Logger logger = Logger.getLogger("RegexLogger");
		String input = "Here is a WikiWord followed by AnotherWikiWord, then SomeWikiWord.";
		Pattern pattern = Pattern.compile("[A-Z][a-z]*([A-Z][a-z]*)+");
		Matcher matcher = pattern.matcher(input);
		StringBuffer buffer = new StringBuffer();
		while (matcher.find()) {
			matcher.appendReplacement(buffer, "*$0*");
		}
		matcher.appendTail(buffer);
		logger.info("After: " + buffer.toString());
	}
}
