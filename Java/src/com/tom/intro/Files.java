package com.tom.intro;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Files {
	public static Logger logger = Logger.getLogger("com.tom.intro.Files");
	
    public static List<String> readWordsUnbufferedStream(String wordsFilename) {
        long startTime = System.currentTimeMillis();

        // Return value: list of strings
        List<String> ret = new ArrayList<>();

        File wordsFile = new File(wordsFilename);

        int numberOfLines = 0;
        try (InputStreamReader reader = new InputStreamReader(new FileInputStream(wordsFile))) {
            boolean done = false;

            while (!done) {
                int charRead = reader.read();
                if (charRead == -1) {
                    done = true;
                } else {
                    StringBuilder word = new StringBuilder();
                    while (charRead != -1 && charRead != '\n' && charRead != '\r') {
                        word.append(charRead);
                        charRead = reader.read();
                    }
                    ret.add(word.toString());
                    numberOfLines++;
                }
            }
        } catch (IOException e) {
        	logger.log(Level.SEVERE, "IOException occurred, message = " + e.getLocalizedMessage(), e);
        }

        logger.info("Read " + numberOfLines + " lines in " + Long.toString(System.currentTimeMillis() - startTime) + "ms");
        return ret;
    }
    
    public static int saveWordsUnbufferedStream(String filename, List<String> words) {
        long startTime = System.currentTimeMillis();

        // Return value: number of words written
        int wordCount = 0;

        File file = new File(filename);
        try (OutputStreamWriter writer = new OutputStreamWriter(new FileOutputStream(file))) {
            for (String word : words) {
                if (wordCount > 0) {
                    writer.append(' ');
                }
                writer.write(word);
                wordCount++;
            }
        } catch (IOException e) {
            logger.log(Level.SEVERE, "IOException occurred, message = " + e.getLocalizedMessage(), e);
        }

        logger.info("Wrote " + wordCount + " words in " + Long.toString(System.currentTimeMillis() - startTime) + "ms");

        return wordCount;
    }
    
    public static List<String> readWordsBufferedStream(String wordsFilename) {
        long startTime = System.currentTimeMillis();

        // Return value: list of strings
        List<String> ret = new ArrayList<>();

        File wordsFile = new File(wordsFilename);

        int numberOfLines = 0;
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(new FileInputStream(wordsFile)))) {
            String line = reader.readLine();

            while (line != null) {
                ret.add(line);
                numberOfLines++;
                line = reader.readLine();
            }
        } catch (IOException e) {
            logger.log(Level.SEVERE, "IOException occurred, message = " + e.getLocalizedMessage(), e);
        }

        logger.info("Read " + numberOfLines + " lines in " + Long.toString(System.currentTimeMillis() - startTime) + "ms");

        return ret;
    }
    
    public static int saveWordsBufferedStream(String filename, List<String> words) {
        long startTime = System.currentTimeMillis();

        // Return value: number of words written
        int wordCount = 0;

        File file = new File(filename);
        try (BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(file)))) {
            for (String word : words) {
                if (wordCount > 0) {
                    writer.append(' ');
                }
                writer.write(word);
                wordCount++;
            }
        } catch (IOException e) {
            logger.log(Level.SEVERE, "IOException occurred, message = " + e.getLocalizedMessage(), e);
        }

        logger.info("Wrote " + wordCount + " words in " + Long.toString(System.currentTimeMillis() - startTime) + "ms");

        return wordCount;
    }
}
