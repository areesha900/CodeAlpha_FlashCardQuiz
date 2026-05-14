package com.example.a27100361_emotilog;

/*
 * Purpose:
 * Represents a single emotion entry recorded by the user
 * Stores the emotion label and the timestamp at which it was logged
 * Implemented as a simple model/data class to separate application data from UI
 */

public class EmotionLog {
    private String emotion;
    private Long timestamp;

    public EmotionLog(String emotion, long timestamp) {
        this.emotion = emotion;
        this.timestamp = timestamp;
    }

    public String getEmotion() {
        return emotion;
    }

    public Long getTimestamp() {
        return timestamp;
    }

}
