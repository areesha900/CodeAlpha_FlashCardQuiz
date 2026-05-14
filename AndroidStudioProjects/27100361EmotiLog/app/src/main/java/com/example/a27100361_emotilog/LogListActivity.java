package com.example.a27100361_emotilog;
import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;


/*
 * Purpose:
 * Displays all recorded emotion logs to the user
 * Retrieves logs from LogManager
 * Shows logs using a RecyclerView
 * Displays entries grouped by date
 * Logs are displayed in reverse chronological order (newest first)
 */


public class LogListActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_log_list);

        LogManager manager = LogManager.getInstance();

        RecyclerView recycler = findViewById(R.id.recyclerLogs);
        recycler.setLayoutManager(new LinearLayoutManager(this));
        recycler.setAdapter(new LogAdapter(manager.getLogs()));
    }
}
