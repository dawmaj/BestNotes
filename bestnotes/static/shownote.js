//activate tinyMCE
tinymce.init({
    selector: '.tmpTextArea',
    menubar: false,
    skin: 'oxide-dark',
    branding: false,
    content_css: 'dark',
    plugins: [
        'autoresize advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks codesample fullscreen',
        'insertdatetime media table paste code'
    ],
    readonly: 1,
    toolbar: false,
    height: 500,
    width: 700,
});
//get what is inside the textarea editor
var content = $('iframe').contents().find('#tinymce').contents();
//append it in a div
$("#toAppend").append(content);
//disable edit 
