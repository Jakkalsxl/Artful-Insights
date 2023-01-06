//Task 20 Cumpolsory Task comments section Javascript and HTML//Non-Functional
/*

<!--Comment Adder-->
<div id="commentAdder3">
    <label>Leave a comment</label><br>
    <input class="glowing-border" type="text" name="comment3" id="comment3">
    <button id="commentSubmit3" onclick="comment('comment3')">Submit</button>
</div>

<!--Comment Section-->
<div class="commentBlock" id="commentSection3">
</div>

<!--Comment Adder-->
<div id="commentAdder4">
    <label>Leave a comment</label><br>
    <input class="glowing-border" type="text" name="comment4" id="comment4">
    <button id="commentSubmit4" onclick="comment('comment4')">Submit</button>
</div>
    
<!--Comment Section-->
<div class="commentBlock" id="commentSection4">
</div>

<!--Comment Section-->
<div id="commentAdder2">
    <label>Leave a comment</label><br>
    <input class="glowing-border" type="text" name="comment2" id="comment2">
    <button id="commentSubmit2" onclick="comment('comment2')">Submit</button>
</div>
<!--Comment Section-->
<div class="commentBlock" id="commentSection2">
</div>

<!--Comment Section-->
<div id="commentAdder1">
    <label>Leave a comment</label><br>
    <input class="glowing-border" type="text" name="comment1" id="comment1">
    <button id="commentSubmit1" onclick="comment('comment1')">Submit</button>
</div>
    
<!--Comment Section-->
<div class="commentBlock" id="commentSection1">
</div>




let commentSectionList1 = ['a'];
let commentSectionList2 = ['a'];
let commentSectionList3 = ['a'];
let commentSectionList4 = ['a'];

commentSectionList1 = JSON.parse(localStorage.getItem("comments1"));
commentSectionList2 = JSON.parse(localStorage.getItem("comments2"));
commentSectionList3 = JSON.parse(localStorage.getItem("comments3"));
commentSectionList4 = JSON.parse(localStorage.getItem("comments4"));
//Comment Section
function comment(id) {

    let saveComment = document.getElementById(id).value;
    let htmlCommentSection = document.querySelector(`#commentSection${id.slice(-1)}`);
    console.log(htmlCommentSection)
console.log(id.slice(-1))
    let newComment = document.createElement('p');
    htmlCommentSection.appendChild(newComment);
    newComment.className = id;
console.log(saveComment)
    newComment.innerHTML = `<button id="commentDel" style="margin-right:3%;" onclick='deleteComment.call(this)'> \u00D7</button>${saveComment}`;
    document.getElementById(id).value = "";
    if (id === "comment1") {
        commentSectionList1.push(`${saveComment}`);
console.log(commentSectionList1)
        localStorage.setItem("comments1", JSON.stringify(commentSectionList1));
    } else if (id === "comment2") {
        commentSectionList2.push(saveComment);
        localStorage.setItem("comments2", JSON.stringify(commentSectionList2));
    } else if (id === "comment3") {
        commentSectionList3.push(saveComment);
        localStorage.setItem("comments3", JSON.stringify(commentSectionList3));
    } else if (id === "comment4") {
        commentSectionList4.push(saveComment);
        localStorage.setItem("comments4", JSON.stringify(commentSectionList4));
    }
};
let comments1Parse = JSON.parse(localStorage.getItem("comments1"));
let comments2Parse = JSON.parse(localStorage.getItem("comments2"));
let comments3Parse = JSON.parse(localStorage.getItem("comments3"));
let comments4Parse = JSON.parse(localStorage.getItem("comments4"));
//Adds the saved comments from comments1 in local storage to the page with the id commentSection1

if(document.URL === 'file:///C:/Users/marco/Documents/HyperionDev%20Course/Level%201/Task%2020/Compulsory%20Task/painting.html'){
    for( i = 0 ; i < comments1Parse.length ; i++){
        let cSection1 = document.getElementById("commentSection1")
        let newComment = document.createElement('p');
        // console.log(comments1Parse)
        cSection1.appendChild(newComment);
        newComment.className = 'comment1';
        newComment.innerHTML = `<button id="commentDel" style="margin-right:3%;" onclick='deleteComment.call(this)'> \u00D7</button>${comments1Parse[i]}`;
    };
};

//Adds the saved comments from comments2 in local storage to the page with the id commentSection2
if(document.URL === 'file:///C:/Users/marco/Documents/HyperionDev%20Course/Level%201/Task%2020/Compulsory%20Task/colorTheory.html'){
    for( i = 0 ; i < comments2Parse.length ; i++){
        let cSection2 = document.getElementById("commentSection2")
        let newComment = document.createElement('p');
        cSection2.appendChild(newComment);
        newComment.className = 'comment2';
        newComment.innerHTML = `<button id="commentDel" style="margin-right:3%;" onclick='deleteComment.call(this)'> \u00D7</button>${comments2Parse[i]}`;
    };
};

//Adds the saved comments from comments3 in local storage to the page with the id commentSection3
if(document.URL === 'file:///C:/Users/marco/Documents/HyperionDev%20Course/Level%201/Task%2020/Compulsory%20Task/formsOfArt.html'){
    for( i = 0 ; i < comments3Parse.length ; i++){
        let cSection3 = document.getElementById("commentSection3")
        let newComment = document.createElement('p');
        cSection3.appendChild(newComment);
        newComment.className = 'comment3';
        newComment.innerHTML = `<button id="commentDel" style="margin-right:3%;" onclick='deleteComment.call(this)'> \u00D7</button>${comments3Parse[i]}`;
    };
};

//Adds the saved comments from comments4 in local storage to the page with the id commentSection4
if(document.URL === 'file:///C:/Users/marco/Documents/HyperionDev%20Course/Level%201/Task%2020/Compulsory%20Task/saveForLater.html'){
    for( i = 0 ; i < comments4Parse.length ; i++){
        let cSection4 = document.getElementById("commentSection4")
        let newComment = document.createElement('p');
        cSection4.appendChild(newComment);
        newComment.className = 'comment4';
        newComment.innerHTML = `<button id="commentDel" style="margin-right:3%;" onclick='deleteComment.call(this)'> \u00D7</button>${comments4Parse[i]}`;
    };
};

*/