jQuery(document).ready(function() {
    $('#clients-datatable').dataTable({
        "autoWidth": false,
        pagingType: 'simple_numbers',
        scrollCollapse: false,
        /*            processing: true,*/
        "responsive": false,
        "info": true,
        "ordering": true,
        "bPaginate": true,
        "bStateSave": true,

        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": $('#clients-datatable').data('source')
        },
        "columns": [
            {"data": "user_name"},
            {"data": "email"},
            {"data": "created_at"},
            {"data": "homepage"},
            {"data": "message"},
            {"data": "ip"},
            {"data": "browser"},
        ],

        "columnDefs": [
            { orderable: false, targets: [3, 4, 5, 6] }
        ],

        "fnStateSave": function (oSettings, oData) {
            localStorage.setItem('offersDataTables', JSON.stringify(oData));
        },
        "fnStateLoad": function (oSettings) {
            return JSON.parse(localStorage.getItem('offersDataTables'));

        },

        "language": {
            "sProcessing": "Подождите...",
            "sLengthMenu": "Показать _MENU_ записей",
            "sZeroRecords": "Записи отсутствуют.",
            "sEmptyTable": "В таблице отсутствуют данные",
            "sInfo": "Записи с _START_ до _END_ из _TOTAL_ записей",
            "sInfoEmpty": "Записи с 0 до 0 из 0 записей",
            "sInfoFiltered": "(отфильтровано из _MAX_ записей)",
            "sInfoPostFix": "",
            "sSearch": "",
            "sUrl": "",
            "searchPlaceholder": "Поиск...",
            "sInfoThousands": ",",
            "sLoadingRecords": "Загрузка записей...",
            "oPaginate": {
                "sFirst": "Первая",
                "sLast": "Последняя",
                "sNext": "Следующая",
                "sPrevious": "Предыдущая"
            },
            "oAria": {
                "sSortAscending": ": активировать для сортировки столбца по возрастанию",
                "sSortDescending": ": активировать для сортировки столбца по убыванию"
            }
        }

    });
});

