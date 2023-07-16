package com.example.mvvm_prac;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

import androidx.lifecycle.MutableLiveData;

import java.util.List;

public class NewAdapter extends BaseAdapter {
    MutableLiveData<List<UserModel>> userList;
    public NewAdapter(MutableLiveData<List<UserModel>> userlist) {
        this.userList = userlist;
    }

    @Override
    public int getCount() {
        return userList.getValue().size();
    }

    @Override
    public Object getItem(int i) {
        return userList.getValue().get(i);
    }

    @Override
    public long getItemId(int i) {
        return i;
    }

    @Override
    public View getView(int i, View view, ViewGroup viewGroup) {
        ViewHolder viewHolder;

        if(view == null){
            viewHolder = new ViewHolder();
            view = LayoutInflater.from(viewGroup.getContext()).inflate(R.layout.listviewitem, viewGroup, false);
            viewHolder.name = view.findViewById(R.id.ID_name);
            viewHolder.job = view.findViewById(R.id.ID_job);
            viewHolder.age = view.findViewById(R.id.ID_age);

            view.setTag(viewHolder);
        }
        else{
            viewHolder = (ViewHolder) view.getTag();
        }

        UserModel userModel = userList.getValue().get(i);
        viewHolder.name.setText(userModel.getName());
        viewHolder.job.setText(userModel.getJob());
        viewHolder.age.setText(userModel.getAge());
        return view;
    }

    static class ViewHolder{
        TextView name, job, age;
    }
}
