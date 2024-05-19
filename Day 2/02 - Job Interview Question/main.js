function paintPage() {
    document.body.style.backgroundColor = "green";
    setTimeout(()=>{
        alert("The page is now green."); // Blocking
    }, 0);
}