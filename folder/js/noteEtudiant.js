const tableNoteStudent = [];

const send = document.querySelector("#send");
send.addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.querySelector("#input").value;
  tableNoteStudent.push(input);
  console.log(tableNoteStudent);
});
