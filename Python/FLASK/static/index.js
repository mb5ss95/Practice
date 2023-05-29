$("#logInBtn").click(function () {
    var id = $("#id").val()
    var pw = $("#pw").val()

    if (id == "") {
        alert("ID를 입력하세요.")
    }
    if (pw == "") {
        alert("PW를 입력하세요.")
    }
    console.log(id)
    $.ajax({
        type: "POST",
        url: "/signIn",
        data: {
            ID: id,
            PW: pw
        },
        success: function (response) {
            console.log(response)
            if (response['result'] == 'success') {
                alert(id + "님, 환영합니다!")
                location.replace('/')
            } else {
                alert("입력된 정보가 틀립니다.")
            }
        }
    })
});

$("#signUpBtn").click(function () {

    var id = $("#id").val()
    var pw = $("#pw").val()
    var name = $("#name").val()

    $.ajax({
        type: "POST",
        url: "/createInfo",
        data: {
            ID: id,
            PW: pw,
            NAME: name
        },
        success: function (response) {
            console.log(response)
            if (response['result'] == 'success') {
                alert(name + "(" + id + ")님, 가입을 축하드립니다!")
                location.replace("/sign")
                //$("body").html(response['data'])
            } else {
                alert("이미 가입된 정보가 있습니다..")
            }
        }
    })
});

$("#ranking").click(function () {
    $.ajax({
        type: "GET",
        url: "/ranking",
        dataType: "html",
        success: function (response) {
            if (response) {
                alert("영화 랭킹을 불러왔습니다!")
                $(".containerRight").html(response)
                //$("body").html(response['data'])
            } else {
                alert("영화에 대한 정보가 없습니다..ㅠㅠ")
            }
        }
    })
});