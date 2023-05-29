class info{
    constructor(){
        this.images_path = "../images/";
        this.images_name = [
            "karina1.jpg", "karina2.jpg", "karina3.jpg","karina4.jpg", 
            "winter1.jpg", "winter2.jpg", "winter3.jpg", "winter4.jpg", 
            "sana1.jpg", "sana2.jpg", "sana3.jpg", "sana4.jpg",
            "jisoo1.jpg", "jisoo2.jpg", "jisoo3.jpg", "jisoo4.jpg",
            "irene1.jpg", "irene2.jpg", 
        ];
        this.datas = [];
        this.init_data();
    }
    

    init_data(){
        const ranIdx = this.get_ranIndex();
        for(let i = 0; i < this.images_name.length; i+=2){ // 0 2 4 6 8 10
            const name = this.images_name[ranIdx[i]];
            const path = this.images_path + name;

            this.datas.push({
                name:name,
                path:path,
                id:ranIdx[i],
                check:true,
                done:false,
            });
            this.datas.push({
                name:name,
                path:path,
                id:ranIdx[i + 1],
                check:true,
                done:false,
            });
        }
        this.datas.sort((a, b) => {
            return a.id - b.id;
        });
    }

    get_ranIndex(){
        const temp = [];
        const len = this.images_name.length;
        while(1){
            const rand = Math.floor(Math.random() * len);
            if(temp.indexOf(rand) === -1) temp.push(rand);
            if(temp.length == 18) break;
        };
        return temp;
    }

    get_data(){
        console.log(this.datas);
    }
}

class active extends info{
    constructor(){
        super();
        this.cardList = document.querySelectorAll(".card");
        this.backList = document.querySelectorAll(".back-none");
        this.frontList = document.querySelectorAll(".front-show");
        this.count = document.querySelector(".counter");
        this.rest = document.querySelector(".rest");
        this.cnt = 0;
        this.rst = 9;
        this.preName = null;
        this.preId = null;
        this.init_image();
        this.show();
    }

    init_image(){
        const list = this.cardList;

        for(let idx = 0; idx < this.datas.length; idx++) this.backList[idx].src = this.datas[idx].path;

        for(let idx = 0; idx < list.length; idx++){
            list[idx].addEventListener("click", (e) =>{
                const id = e.target.id;
              
                if(this.datas[id].check === true) { // 앞면이 앞일때
                    this.check_same(id);
                }
            });
        };
    }

    show(){
        this.lockOn_card();
        for(let idx = 0; idx < this.datas.length; idx++) this.flip_card(idx);
        setTimeout(()=>{
            for(let idx = 0; idx < this.datas.length; idx++) this.flip_card(idx);
            this.lockOff_card();
        }, 3000);
    }

    flip_card(nowId){
        const idx = this.datas[nowId].id;
        this.frontList[idx].classList.toggle("front-show");
        this.frontList[idx].classList.toggle("front-none");
        this.backList[idx].classList.toggle("back-none");
        this.backList[idx].classList.toggle("back-show");
    }

    check_same(nowId){
        const nowName =this.datas[nowId].name;
        if(this.preName === null){
            this.preName = nowName;
            this.preId = nowId;
            this.datas[nowId].check = false;
            this.flip_card(nowId)
            return;
        }
        this.flip_card(nowId);
        this.lockOn_card();
        setTimeout(()=>{
            if(nowName === this.preName){
                this.rst = this.rst - 1;
                this.rest.textContent = this.rst;
                this.datas[nowId].done = true; 
                this.datas[this.preId].done = true; 
                this.datas[nowId].check = false; 
                this.datas[this.preId].check = false; 
            }
            else{
                this.flip_card(this.preId)
                this.flip_card(nowId)
            }
            this.count.textContent = ++this.cnt;
            this.preName = null;
            this.preId = null;
            this.lockOff_card();
        }, 500);
    }

    lockOn_card(){
        for(let i = 0; i < this.datas.length; i++){
            if(this.datas[i].done === false) this.datas[i].check = false;
        }
    }

    lockOff_card(){
        for(let i = 0; i < this.datas.length; i++){
            if(this.datas[i].done === false) this.datas[i].check = true;
        }
    }
}


moon = new active();