let commentList = ["a"];
//Finds the url of all pages
let saveURL = window.location.pathname;
//On page load all comments are displayed and new comments added are shown
function pageLoad() {
    if (localStorage.getItem("hasCodeRunBefore") === null) {
        localStorage.setItem("comments", JSON.stringify(commentList));
        localStorage.setItem("hasCodeRunBefore", true);
    };
        let newCommentList = JSON.parse(localStorage.getItem("comments"));

    for( i = 1 ; i < newCommentList.length ; i++){
        let cSection = document.getElementById("commentSection")
        let newComment = document.createElement('p');
        cSection.appendChild(newComment);
        newComment.innerHTML = `${newCommentList[i]}`;
    };
};

const saveButtons = document.querySelectorAll('.save');
// Add event listener to each save button
saveButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Toggle clicked class on button
        if (this.classList.contains('clicked')){
            this.classList.remove('clicked');
        } else {
            this.classList.add('clicked');
        }
        // Save state of the Save button in local storage
        localStorage.setItem(this.id, this.classList.contains('clicked'));
        // Save parent element of button in local storage
        localStorage.setItem(this.id + '-div', this.parentElement.outerHTML);
        let i = 0;
         // Count number of save buttons with the clicked class
        for (const key of Object.keys(localStorage)) {
            if (key.startsWith('button') && localStorage.getItem(key) === 'true') {
                i++
            }
        };
        // Alert user with number of items in Saved For Later folder
        if(i === 1){
            alert(`You have ${i} item in your Saved For Later Folder`);
        } else {
            alert(`You have ${i} items in your Saved For Later Folder`);
        };
    });
});

// Add event listener to each like button
const likeButtons = document.querySelectorAll('.like');
likeButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Toggle click class on button
        if (this.classList.contains('click')){
            this.classList.remove('click');
        } else {
            this.classList.add('click');
        }
        // Save state of  Like button in local storage
        localStorage.setItem(this.id, this.classList.contains('click'));
    });
});

// Add event listener for when DOM content has loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check state of each like button in local storage and adds the 'click' class if it is listed as true in the localStorage
    likeButtons.forEach(button => {
        if(localStorage.getItem(button.id) === 'true'){
            button.classList.add('click');
        }
    });
});

// Add event listener for when DOM content has loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check state of each save button in local storage and adds the 'clicked' class if it is listed as true in the localStorage
    saveButtons.forEach(button => {
        if(localStorage.getItem(button.id) === 'true'){
            button.classList.add('clicked');
        }
    });
});

// Iterate over keys in local storage if the page url contains "saveForLater.html"
if(saveURL.includes("saveForLater.html")){
    for (const key of Object.keys(localStorage)) {
        // Loops through storage gathering all objects where the save button key is true, then finds the corrosponding div element and adds it to the saveForLater html
        if (key.startsWith('button') && localStorage.getItem(key) === 'true') {
            document.querySelector('#savedContent').innerHTML += localStorage.getItem(`${key}-div`);
        };
    };
};
let newCommentList = JSON.parse(localStorage.getItem("comments"));
//Function adds new comments to local storage
function comment(){
    let saveComment = document.getElementById("comment").value;

    newCommentList.push(saveComment);
    localStorage.setItem("comments",JSON.stringify(newCommentList))

    let cSection = document.getElementById("commentSection")
    let newComment = document.createElement('p');
    cSection.appendChild(newComment);
    newComment.innerHTML = `${saveComment}`;
    document.getElementById("comment").value = '';
};

$(document).ready(function(){
    //Comment section will hide/show when button is pressed
    $("#show-hide-button").on('click',function(){
        $("#show-hide").toggle();
    });
    //Page where button is located will slide up pr down accordingly
    $("#slideToggleButton").on('click',function(){
        $(".slideToggle").slideToggle(100)
    });

    //Every clicked on image will fade out and back in
    $("img").on('click',function(event){
        $(event.target).fadeOut(500).delay(500).fadeIn(500)
    })

    //Rave Button to make paragraphs cycle through colors
    let colors = ["red", "purple", "orange", "black", "white", "green", "blue", "yellow"]
    let i = 0;
    let interval;
    $('#raveButton').on('click', function(){
        $("#raveButton").toggleClass("raveC");
        if($("#raveButton").hasClass("raveC")) {
            interval = setInterval(function() {
                $('p').css({color: colors[i]});
                i = (i + 1) % colors.length;
            }, 150);
        }else {
            clearInterval(interval);
            $('p').css({color: "black"});
        };
    });
});

function pageLoadSaved() {
//Adds "Save" functionality to saved for later page
        const saveButtons1 = document.querySelectorAll('.save');
    // Add event listener to each save button
    saveButtons1.forEach(button => {
        button.addEventListener('click', function () {
            // Toggle clicked class on button
            if (this.classList.contains('clicked')){
                this.classList.remove('clicked');
            } else {
                this.classList.add('clicked');
            }
            // Save state of the Save button in local storage
            localStorage.setItem(this.id, this.classList.contains('clicked'));
            // Save parent element of button in local storage
            localStorage.setItem(this.id + '-div', this.parentElement.outerHTML);
            let i = 0;
            // Count number of save buttons with the clicked class
            for (const key of Object.keys(localStorage)) {
                if (key.startsWith('button') && localStorage.getItem(key) === 'true') {
                    i++
                }
            };
            // Alert user with number of items in Saved For Later folder
            if(i === 1){
                alert(`You have ${i} item in your Saved For Later Folder`);
            } else {
                alert(`You have ${i} items in your Saved For Later Folder`);
            };
        });
    });

//Adds "Like" Functionality to saved for later page
    // Add event listener to each like button
    const likeButtons1 = document.querySelectorAll('.like');
    likeButtons1.forEach(button => {
        button.addEventListener('click', function () {
            // Toggle click class on button
            if (this.classList.contains('click')){
                this.classList.remove('click');
            } else {
                this.classList.add('click');
            }
            // Save state of  Like button in local storage
            localStorage.setItem(this.id, this.classList.contains('click'));
        });
    });
    likeButtons1.forEach(button => {
        if(localStorage.getItem(button.id) === 'true'){
            button.classList.add('click');
        } else if(localStorage.getItem(button.id) === 'false'){
            button.classList.remove('click')
        }
    });
};