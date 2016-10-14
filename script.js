function addNewTask() {
    console.log("Add new task clicked");
    var text = $("#newTaskText").val();
    if (text == "")
        {
            return false;
        } else {
    $(".taskList").append($("<li><input type = 'checkbox'> "+text+" </li>").append($("<button onclick = removeTask(this) class = delete>x</button>")));
    clearText();
    hideTextArea();
    }
};


function clearText() {
    document.querySelector("#newTaskText").value = "";
};

function removeTask(task) {
    $(task).parent().remove();
};

function showTextArea() {
    $("#newTaskText").css("display", "block");
};

function hideTextArea(){
    $("#newTaskText").css("display", "none");
}

function openMenu() {
    $(".menu").toggle("right");
}

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