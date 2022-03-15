window.onload = initAll;

function initAll()
{
    // document.getElementById("redirect").onclick = initRedirect;
    document.getElementById("redirect").onclick = alertRedirect;
}

function initRedirect()
{
    window.location = "t.html";
    return false;
}

function alertRedirect()
{
    alert("you will go to another site");
    window.location = this;
    return false;
}