$(document).ready(function () {
$('form').on('submit', function (e) {
    e.preventDefault();

    const tarefa = $('#nova-tarefa').val();
    const listaDeTarefa = $('#Lista-Tarefa');
    const novaTarefa = $(`<li>${tarefa}</li>`);

    $(novaTarefa).appendTo(listaDeTarefa);
    $('#nova-tarefa').val('');
    $(novaTarefa).click(function () {
        $(this).toggleClass('risca');
    });
});
});
