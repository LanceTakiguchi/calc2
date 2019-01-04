$(document).ready(function(){
    $(".buttons div").click(function(){
        // console.log(this.textContent);
        const buttonText = this.textContent
        const screenText = $(".screen").text();
        $(".screen").text(`${screenText}${buttonText}`)
    })
})