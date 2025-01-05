package com.example.jetpackcompose_prac

import android.content.Context
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Preview
import com.example.jetpackcompose_prac.ui.theme.JetpackCompose_PracTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            JetpackCompose_PracTheme {
                // A surface container using the 'background' color from the theme
                Surface(modifier = Modifier.fillMaxSize(), color = MaterialTheme.colorScheme.background) {
                    rootContainer(applicationContext)
                }
            }
        }
    }
}

@Composable
fun rootContainer(context : Context, modifier : Modifier = Modifier){
    var imageList = listOf("sana0", "sana1", "sana2", "sana3", "sana4")
    var sanaList = mutableListOf<Int>()
    for (sana in imageList){
        sanaList.add(context.resources.getIdentifier(
            sana,
            "drawable",
            context.packageName
        ))
    }

    colContainer(sanaList, modifier)
}

@Composable
fun colContainer(resList : List<Int>, modifier: Modifier = Modifier){
    Column {
        for(res in resList){
            rowContatiner(res, modifier)
        }
    }
}

@Composable
fun rowContatiner(res: Int, modifier: Modifier = Modifier){
    Row {
        Image(
            painter = painterResource(id = res),
            contentDescription = "${res}"
        )
        Button(onClick = {
            System.out.println("hello ${res}")
            }) {
            Text("push me baby")
        }
    }
}