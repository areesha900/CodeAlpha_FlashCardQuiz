package com.example.a27100361_emotilog;
import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

/*
 * Purpose:
 * Serves as the home screen of the EmotiLog application
 * Displays emotion buttons
 * Records logs when buttons are pressed
 * Navigates to log list and summary screens
 */

public class MainActivity extends AppCompatActivity {

    private LogManager logManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });

        logManager = LogManager.getInstance();

        Button happy = findViewById(R.id.btnHappy);
        Button sad = findViewById(R.id.btnSad);
        Button angry = findViewById(R.id.btnAngry);
        Button excited = findViewById(R.id.btnExcited);
        Button shy = findViewById(R.id.btnShy);
        Button motivated = findViewById(R.id.btnMotivated);
        Button sick = findViewById(R.id.btnSick);
        Button scared = findViewById(R.id.btnScared);

        Button viewLogs = findViewById(R.id.btnViewLogs);
        Button summary = findViewById(R.id.btnSummary);

        happy.setOnClickListener(v -> logManager.addLog("Happy"));
        sad.setOnClickListener(v -> logManager.addLog("Sad"));
        angry.setOnClickListener(v -> logManager.addLog("Angry"));
        excited.setOnClickListener(v -> logManager.addLog("Excited"));
        shy.setOnClickListener(v -> logManager.addLog("Shy"));
        motivated.setOnClickListener(v -> logManager.addLog("Motivated"));
        sick.setOnClickListener(v -> logManager.addLog("Sick"));
        scared.setOnClickListener(v -> logManager.addLog("Scared"));

        viewLogs.setOnClickListener(v ->
                startActivity(new Intent(this, LogListActivity.class)));

        summary.setOnClickListener(v ->
                startActivity(new Intent(this, SummaryActivity.class)));
    }

}





