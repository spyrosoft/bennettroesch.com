$('.sort-by-interesting').on('click', sort_by_interesting);
$('.sort-by-most-recent').on('click', sort_by_most_recent);

function sort_by_interesting() {
	var all_thoughts = $('.thoughts');
	var thoughts = all_thoughts.children('p');
	thoughts.sort(
		function(first, second) {
			var first_interesting
				= parseFloat(first.getAttribute('data-interesting'));
			var second_interesting
				= parseFloat(second.getAttribute('data-interesting'));
			if (first_interesting > second_interesting) {
                return -1;
			} else if (first_interesting < second_interesting) {
                return 1;
			}
			return 0;
		}
	);
	thoughts.detach().appendTo(all_thoughts);
}

function sort_by_most_recent() {
	var all_thoughts = $('.thoughts');
	var thoughts = all_thoughts.children('p');
	thoughts.sort(
		function(first, second) {
			var first_most_recent_unparsed
				= first.getAttribute('data-date').split('-');
			var second_most_recent_unparsed
				= second.getAttribute('data-date').split('-');
			var first_most_recent = [
				parseInt(first_most_recent_unparsed[2], 10)
				, parseInt(first_most_recent_unparsed[0], 10)
				, parseInt(first_most_recent_unparsed[1], 10)
			];
			var second_most_recent = [
				parseInt(second_most_recent_unparsed[2], 10)
				, parseInt(second_most_recent_unparsed[0], 10)
				, parseInt(second_most_recent_unparsed[1], 10)
			];
			if (first_most_recent[0] > second_most_recent[0]) {
                return -1;
			} else if (first_most_recent[0] < second_most_recent[0]) {
                return 1;
			} else if (first_most_recent[1] > second_most_recent[1]) {
                return -1;
			} else if (first_most_recent[1] < second_most_recent[1]) {
                return 1;
			} else if (first_most_recent[2] > second_most_recent[2]) {
                return -1;
			} else if (first_most_recent[2] < second_most_recent[2]) {
                return 1;
			}
			return 0;
		}
	);
	thoughts.detach().appendTo(all_thoughts);
}
