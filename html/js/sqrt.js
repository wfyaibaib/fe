window.onload = initAll;

function initAll()
{
    var ans = prompt("Enter a number:", "");
    try
    {
        if (!ans || isNaN(ans) || ans < 0)
        {
            throw new Error("Not a valid number");
        }
        alert("The square root is "+ Math.sqrt(ans));
    }
    catch (errMsg)
    {
        alert(errMsg.message);
    }
}