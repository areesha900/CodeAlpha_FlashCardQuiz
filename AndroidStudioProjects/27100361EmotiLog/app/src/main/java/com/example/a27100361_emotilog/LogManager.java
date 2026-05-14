package com.example.a27100361_emotilog;
import java.util.ArrayList;
import java.util.HashMap;

/*
 * Purpose:
 * Responsible for storing and managing all emotion logs
 * Add new emotion logs
 * Provide the full list of logs
 * Generate summary counts for each emotion
 */

public class LogManager {

    private static LogManager instance;
    private ArrayList<EmotionLog> logs;

    private LogManager() {
        logs = new ArrayList<>();
    }

    public static LogManager getInstance() {
        if (instance == null) {
            instance = new LogManager();
        }
        return instance;
    }

    public void addLog(String emotion) {
        logs.add(new EmotionLog(emotion, System.currentTimeMillis()));
    }

    public ArrayList<EmotionLog> getLogs() {
        return logs;
    }

    public HashMap<String, Integer> getSummary() {
        HashMap<String, Integer> summary = new HashMap<>();

        for (EmotionLog log : logs) {
            String emotion = log.getEmotion();
            summary.put(emotion, summary.getOrDefault(emotion, 0) + 1);
        }
        return summary;
    }
}