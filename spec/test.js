describe('table functionality', function () {
	it('must move elements to next line', function () {
		var columns = 5;
		var newLineEl1 = document.querySelector('.table-c-5 > div:nth-child(' + (columns + 1) + ')');
		var newLineEl2 = document.querySelector('.table-c-5 > div:nth-child(' + (columns + columns + 1) + ')');


		window.getComputedStyle(newLineEl1).getPropertyValue('clear').should.equal('both');
		window.getComputedStyle(newLineEl2).getPropertyValue('clear').should.equal('both');
	});
});

describe('border functionality', function () {
	describe('inner border functionality', function () {
		it('must add only inner borders', function () {
			var columns = 5;
			var topEl = document.querySelector('.table-c-5 > div:nth-child(' + (columns - 2) + ')');
			var midleEl = document.querySelector('.table-c-5 > div:nth-child(' + (columns + 2) + ')');
			var bottomEl = document.querySelector('.table-c-5 > div:nth-child(' + (columns * 3 - 2) + ')');
			var leftEl = document.querySelector('.table-c-5 > div:nth-child(' + 1 + ')');
			var rightEl = document.querySelector('.table-c-5 > div:nth-child(' + columns + ')');

			function checkBorderIsTransarent(el, border, isNot) {
				var noneBorderProp = '0px none rgb(0, 0, 0)';
				if (isNot) {
					window.getComputedStyle(el).getPropertyValue('border-' + border).should.not.equal(noneBorderProp);
				} else {
					window.getComputedStyle(el).getPropertyValue('border-' + border).should.equal(noneBorderProp);
				}
			}

            checkBorderIsTransarent(topEl, 'top');
            checkBorderIsTransarent(midleEl, 'top', true);
            checkBorderIsTransarent(bottomEl, 'bottom');

            checkBorderIsTransarent(leftEl, 'left');
            checkBorderIsTransarent(rightEl, 'right');
		});
	});
});