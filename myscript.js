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
            $("#allLists .taskList:visible").append($("<li><label><input type = 'checkbox'> "+text+" </li></label>").append($("<button onclick = removeTask(this) class = delete>x</button>")));
    clearText();
    hideTextArea();
    }
};


function clearText() {
    document.querySelector("#newTaskText").value = "";
    document.querySelector("#newListText").value = "";
};

function removeTask(task) {
    $(task).parent().remove();
};

function showTextArea() {
    $("#newTaskText").css("display", "block");
};

function hideTextArea(){
    $("#newTaskText").css("display", "none");
    $("#newListText").css("display", "none");

}

function openMenu() {
    $("#addTask").hide();
    // $(".menu").toggle("right");
    $(".menu").animate({width:'toggle'}, 350);

}

// function goToMyList() {
//     $("#allLists .taskList:visible").hide();
//     $("#myList").show();
//     $("h1").text("My List");
//     $("#addTask").show();
//     // $(".menu").toggle("left");
//     $(".menu").animate({width:'toggle'}, 350);

// }

// function goToSpain() {
//     $("#allLists .taskList:visible").hide();
//     $("#spainList").show();
//     $("h1").text("Spain Travel List");
//     $("#addTask").show();
//     // $(".menu").toggle("left");
//     $(".menu").animate({width:'toggle'}, 350);

// }

function goToList(name) {
    console.log($(this));
    var heading = "temp";
    $("#allLists .taskList:visible").hide();
    $(name).show();
    $("h1").text("temp");
    $("#addTask").show();
    $(".menu").animate({width:'toggle'}, 350);

}

function closeMenu() {
    $("#addTask").show();
    $(".menu").animate({width:'toggle'}, 350);
}
/*combine goTo fnxs
function switchList() {
    $("#allLists .taskList:visible").hide();
}*/

function showMenuTextArea() {
    $("#newListText").css("display", "block");
}

/*did not work,
function addNewList() {
    console.log("Add new list clicked");
    var text = $("#newListText").val();
    var myclass = "taskList";
    var new_id = text
    $("#allLists").append("<div><ul class="+myclass+" id="+new_id+"></ul></div>");
    $(".menuList").prepend("<li> "+new_id+" </li>").click(goToList);
    $("#allLists:last-child").show();
    $("#addTask").show();
    clearText();
    hideTextArea();

};*/


