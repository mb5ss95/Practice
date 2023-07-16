package com.example.mvvm_prac;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModel;
import androidx.lifecycle.ViewModelProvider;

import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ListView;

import java.util.List;

public class MainActivity extends AppCompatActivity implements View.OnClickListener{
    private UserViewModel userViewModel;
    private ListView userListView;
    private Button addUserButton;
    private NewAdapter adapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        userListView = findViewById(R.id.ID_ListView);
        addUserButton = findViewById(R.id.ID_Button);
        addUserButton.setOnClickListener(this);

        userViewModel = new ViewModelProvider(this).get(UserViewModel.class);

        adapter = new NewAdapter(userViewModel.getUserList());
        userListView.setAdapter(adapter);
        userViewModel.getUserList().observe(this, new Observer<List<UserModel>>() {
            @Override
            public void onChanged(List<UserModel> userModels) {
                adapter.notifyDataSetChanged();
            }
        });
    }

    @Override
    public void onClick(View view) {
        if(view.getId() == R.id.ID_Button){
            // 팝업 띄우고, 정보 입력하기
            // userViewModel.addUser(); 콜백 넣으면 가능한지 확인해보셈
            userViewModel.addUser(new UserModel("test", "test", "test"));
        }
    }
}