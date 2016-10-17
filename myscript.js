function addNewTask() {
    console.log("Add new task clicked");
    var text = $("#newTaskText").val();
    if (text == "")
        {
            return false;
        } else {
/*            if ($("#myList").is(":visible"))
            {
                $("#myList").append($("<li><input type = 'checkbox'> "+text+" </li>").append($("<button onclick = removeTask(this) class = delete>x</button>")));
            } else {
                $("#spainList").append($("<li><input type = 'checkbox'> "+text+" </li>").append($("<button onclick = removeTask(this) class = delete>x</button>")));
            };*/
            $("#allLists .taskList:visible").append($("<li><input type = 'checkbox'> "+text+" </li>").append($("<button onclick = removeTask(this) class = delete>x</button>")));
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
    $("#addTask").hide();
    $(".menu").toggle("right");
}

function goToMyList() {
    $("#allLists .taskList:visible").hide();
    $("#myList").show();
    $("h1").text("My List");
    $("#addTask").show();
    $(".menu").toggle("left");

}

function goToSpain() {
    $("#allLists .taskList:visible").hide();
    $("#spainList").show();
    $("h1").text("Spain Travel List");
    $("#addTask").show();
    $(".menu").toggle("left");
}

/*combine goTo fnxs
function switchList() {
    $("#allLists .taskList:visible").hide();
}*/