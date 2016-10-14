function addNewTask() {
    console.log("Add new task clicked");
    var text = $("#newTaskText").val();
    if (text == "")
        {
            return false;
        } else {
    $(".taskList").append($("<li><input type = 'checkbox'> "+text+" </li>").append($("<button onclick = removeTask(this) class = delete>x</button>")));
    clearText();
    }
};


function clearText() {
    document.querySelector("#newTaskText").value = "";
};

/*function hideTextArea(){
    $("#newTaskText").hide();
}*/


function removeTask(task) {
    $(task).parent().remove();
};

function showTextArea() {
    $("#newTaskText").css("display", "block");
};

function openMenu() {
    $(".menu").toggle("right");
}

/*DOESN'T WORK text()?*/
function goToMyList() {
    $("#spainList").hide();
    $("#myList").show();
    $("h1").text("My List");
    $(".menu").hide();

}

function goToSpain() {
    $("#myList").hide();
    $("#spainList").show();
    $("h1").text("Spain Travel List");
    $(".menu").hide();
}