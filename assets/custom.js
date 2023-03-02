

$('button').on("click", () => {

	let obj = {
		name: $('input:eq(0)').val(),
		surname: $('input:eq(1)').val()
	};

	console.log(`Имя: ${obj.name}, фамилия: ${obj.surname}`);
});