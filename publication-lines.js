/* Poetry publication-note formatting
   This keeps the existing poems.json data unchanged. It simply places each
   "*Published ..." / "*Republished ..." note on its own line in the archive.
*/

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.meta').forEach(function (meta) {
        meta.innerHTML = meta.innerHTML.replace(
            /\s+\*(?=(?:Published|Republished)\b)/g,
            '<br>*'
        );
    });
});
