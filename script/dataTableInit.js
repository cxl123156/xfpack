
$(document).ready(function() {

        $('#dataTable').DataTable({
            "info": false,
            "language": {
                "decimal":        "",
                "emptyTable":     "无有效记录",
                "info":           "Showing _START_ to _END_ of _TOTAL_ entries",
                "infoEmpty":      "Showing 0 to 0 of 0 entries",
                "infoFiltered":   "(filtered from _MAX_ total entries)",
                "infoPostFix":    "",
                "thousands":      ",",
                "lengthMenu":     "每页显示 _MENU_ 条数据",
                "loadingRecords": "Loading...",
                "processing":     "Processing...",
                "search":         "搜索:",
                "zeroRecords":    "未找到符合条件的记录",
                "paginate": {
                    "first":      "第一页",
                    "last":       "最后一页",
                    "next":       "下一页",
                    "previous":   "上一页"
                },
                "aria": {
                    "sortAscending":  ": activate to sort column ascending",
                    "sortDescending": ": activate to sort column descending"
                }
            }
        });

        $('input.column_filter').on( 'keyup ', function () {
        filterColumn( $(this).attr('data-column'));
        } );
    } );
    function filterColumn ( i ) {
    $('#dataTable').DataTable().column( i ).search(
        $('#col'+i+'_filter').val()
        // $('#col'+i+'_regex').prop('checked'),
        // $('#col'+i+'_smart').prop('checked')
    ).draw();
}
