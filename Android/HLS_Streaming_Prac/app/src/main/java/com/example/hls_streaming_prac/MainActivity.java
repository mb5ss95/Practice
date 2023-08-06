package com.example.hls_streaming_prac;

import androidx.appcompat.app.AppCompatActivity;
import androidx.media3.common.MediaItem;
import androidx.media3.exoplayer.ExoPlayer;
import androidx.media3.ui.PlayerView;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.view.TextureView;

public class MainActivity extends AppCompatActivity {
    ExoPlayer player;
    @SuppressLint("MissingInflatedId")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        String url = "https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8";

        PlayerView playerView = findViewById(R.id.exo_play);

        player = new ExoPlayer.Builder(getApplicationContext()).build();
        playerView.setPlayer(player);

        // Set the media item to be played.
        player.setMediaItem(MediaItem.fromUri(url));
        // Prepare the player.
        player.prepare();
    }

    @Override
    protected void onStart() {
        super.onStart();
        player.play();
    }
}