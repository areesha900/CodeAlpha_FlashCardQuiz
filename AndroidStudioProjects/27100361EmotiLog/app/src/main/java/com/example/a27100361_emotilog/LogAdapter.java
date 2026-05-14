package com.example.a27100361_emotilog;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.recyclerview.widget.RecyclerView;
import java.text.SimpleDateFormat;
import java.util.*;

/*
 * Purpose:
 * Adapter class that connects EmotionLog data to the RecyclerView UI
 * Convert EmotionLog objects into list items
 * Group logs by date with headers
 * Format timestamps for display
 * Separates list presentation logic from the Activity
 */

public class LogAdapter extends RecyclerView.Adapter<RecyclerView.ViewHolder> {

    private static final int TYPE_HEADER = 0;
    private static final int TYPE_LOG = 1;

    private ArrayList<Object> items = new ArrayList<>();

    public LogAdapter(ArrayList<EmotionLog> logs) {

        Collections.sort(logs, (a, b) -> Long.compare(b.getTimestamp(), a.getTimestamp()));
        buildGroupedList(logs);
    }

    private void buildGroupedList(ArrayList<EmotionLog> logs) {

        String lastHeader = "";

        for (EmotionLog log : logs) {
            String header = formatDate(log.getTimestamp());
            if (!header.equals(lastHeader)) {
                items.add(header);
                lastHeader = header;
            }
            items.add(log);
        }
    }

    private String formatDate(long ts) {
        return new SimpleDateFormat("MMM dd, yyyy", Locale.getDefault())
                .format(new Date(ts));
    }

    private String formatTime(long ts) {
        return new SimpleDateFormat("hh:mm:ss a", Locale.getDefault())
                .format(new Date(ts));
    }


    @Override
    public int getItemViewType(int position) {
        return (items.get(position) instanceof String) ? TYPE_HEADER : TYPE_LOG;
    }


    // viewHolders
    static class HeaderHolder extends RecyclerView.ViewHolder {
        TextView textHeader;
        HeaderHolder(View v) {
            super(v);
            textHeader = v.findViewById(R.id.textHeader);
        }
    }

    static class LogHolder extends RecyclerView.ViewHolder {
        TextView textEmotion, textTime;
        LogHolder(View v) {
            super(v);
            textEmotion = v.findViewById(R.id.textEmotion);
            textTime = v.findViewById(R.id.textTime);
        }
    }


    @Override
    public RecyclerView.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {

        LayoutInflater inflater = LayoutInflater.from(parent.getContext());
        if (viewType == TYPE_HEADER) {
            View v = inflater.inflate(R.layout.item_date_header, parent, false);
            return new HeaderHolder(v);
        } else {
            View v = inflater.inflate(R.layout.item_log, parent, false);
            return new LogHolder(v);
        }
    }


    @Override
    public void onBindViewHolder(RecyclerView.ViewHolder holder, int position) {

        if (holder instanceof HeaderHolder) {
            ((HeaderHolder) holder).textHeader.setText((String) items.get(position));
        } else {
            EmotionLog log = (EmotionLog) items.get(position);
            LogHolder h = (LogHolder) holder;
            h.textEmotion.setText(log.getEmotion());
            h.textTime.setText(formatTime(log.getTimestamp()));
        }
    }


    @Override
    public int getItemCount() {
        return items.size();
    }
}