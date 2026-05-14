package com.example.a27100361_emotilog;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;
import java.util.HashMap;


/*
 * Purpose:
 * Displays a summary of all recorded emotions
 * Retrieves emotion counts from LogManager
 * Shows frequency of each emotion in a simple list format
 * Each row displays an emotion label and its total count
 */


public class SummaryActivity extends AppCompatActivity {

    View happyRow, excitedRow, angryRow, sadRow, scaredRow, motivatedRow, sickRow, shyRow;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_summary);

        // connect rows
        happyRow = findViewById(R.id.happyRow);
        excitedRow = findViewById(R.id.excitedRow);
        angryRow = findViewById(R.id.angryRow);
        sadRow = findViewById(R.id.sadRow);
        scaredRow = findViewById(R.id.scaredRow);
        motivatedRow = findViewById(R.id.motivatedRow);
        sickRow = findViewById(R.id.sickRow);
        shyRow = findViewById(R.id.shyRow);

        LogManager manager = LogManager.getInstance();
        HashMap<String, Integer> summary = manager.getSummary();

        // set values
        setEmotion(happyRow, "😊 Happy", summary.getOrDefault("Happy", 0));
        setEmotion(sadRow, "😢 Sad", summary.getOrDefault("Sad", 0));
        setEmotion(angryRow, "😡 Angry", summary.getOrDefault("Angry", 0));
        setEmotion(excitedRow, "😄 Excited", summary.getOrDefault("Excited", 0));
        setEmotion(shyRow, "🫣 Shy", summary.getOrDefault("Shy", 0));
        setEmotion(motivatedRow, "💪 Motivated", summary.getOrDefault("Motivated", 0));
        setEmotion(sickRow, "🤒 Sick", summary.getOrDefault("Sick", 0));
        setEmotion(scaredRow, "😨 Scared", summary.getOrDefault("Scared", 0));

    }

    private void setEmotion(View row, String label, int count) {
        TextView name = row.findViewById(R.id.emotionLabel);
        TextView num  = row.findViewById(R.id.emotionCount);

        name.setText(label);
        num.setText(String.valueOf(count));
    }
}