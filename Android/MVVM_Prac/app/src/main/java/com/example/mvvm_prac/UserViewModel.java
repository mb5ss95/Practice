package com.example.mvvm_prac;

import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.ViewModel;

import java.util.ArrayList;
import java.util.List;

public class UserViewModel extends ViewModel {
    private MutableLiveData<List<UserModel>> userList;

    public MutableLiveData<List<UserModel>> getUserList() {
        if(userList == null){
            userList = new MutableLiveData<>();
            initUserList();
            System.out.println("hello?");
        }

        return userList;
    }

    private void initUserList() {
        List<UserModel> users = new ArrayList<>();
//        users.add(new UserModel("moon1", "developer1", "28"));
//        users.add(new UserModel("moon2", "developer2", "29"));
//        users.add(new UserModel("moon3", "developer3", "30"));
        userList.setValue(users);
    }

    public void addUser(UserModel user){
        List<UserModel> currentList = userList.getValue();
        currentList.add(user);
        userList.setValue((currentList));
    }
}
