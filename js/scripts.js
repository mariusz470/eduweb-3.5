(function() {

if(!window.FileReader) return;

var fileInput = $("#input");


fileInput.change(function() {
    var file = this.files[0];
    reader = new FileReader();
    reader.readAsBinaryString(file);

    reader.onload = function(e) {
        var converter = new showdown.Converter();
        var toConvert = reader.result;
        var converted = converter.makeHtml(toConvert);
        $("textarea").html(converted);
        $("#select_btn").on("click", function() {
            $("textarea").select();
            document.execCommand("copy");
        })
    }

});


})();