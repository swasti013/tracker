function savetolocalstorage(event) {
    event.preventDefault();
    
    const exp_track = event.target.exp_track.value;
    const desc = event.target.desc.value;
    const category = event.target.category.value;

    const userDetails = {
        exp_track: exp_track,
        desc: desc,
        category: category,
    };

    localStorage.setItem(userDetails.desc, JSON.stringify(userDetails));
    displayonscreen(userDetails);
}

function displayonscreen(userDetails) {
    const userlist = document.getElementById("userlist");
    const newli = document.createElement("li");
    newli.textContent = `${userDetails.exp_track} - ${userDetails.desc} - ${userDetails.category}`;

    const dltbtn = document.createElement("button");
    dltbtn.textContent = "Delete Expense";
    dltbtn.onclick = () => {
        localStorage.removeItem(userDetails.desc);
        userlist.removeChild(newli);
    };

    const edit = document.createElement("button");
    edit.textContent = "Edit Expense";
    edit.onclick = () => {
        localStorage.removeItem(userDetails.desc);
        userlist.removeChild(newli);

        document.getElementById("exp_track").value = userDetails.exp_track;
        document.getElementById("desc").value = userDetails.desc;
        document.getElementById("category").value = userDetails.category;
    };

    newli.appendChild(dltbtn);
    newli.appendChild(edit);
    userlist.appendChild(newli);
}
