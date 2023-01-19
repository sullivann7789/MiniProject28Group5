const projectNameInput = $("#project-name");
const projectTypeSelect = $("#project-type");
const dueDateInput = $("#due-date");

// Add a new project to the list when we click on the Submit button
$("#submit-button").on("click", function (event) {
  console.log("Submit Project", projectTypeSelect.val());

  event.preventDefault();
  const daysLeft =
    moment(dueDateInput.val()).dayOfYear() - moment().dayOfYear();

  displayProject(
    projectNameInput.val(),
    projectTypeSelect.val(),
    moment(dueDateInput.val()).format("MMMM Do, YYYY"),
    daysLeft
  );
  projectNameInput.val("");
  projectTypeSelect.val("");
  // hourlyRateInput.val("");
  dueDateInput.val("");
});

// Creates a new project row in the table
function displayProject(name, type, date, daysLeft) {
  $("#project-list").append(
    $("<tr>").append(
      $("<td>").text(name),
      $("<td>").text(type),
      $("<td>").text(date),
      $("<td>").text(daysLeft),
      $("<td>").append(
        $("<button>")
          .addClass("btn btn-danger delete")
          .html("<i class='bi bi-trash'></i> Delete")
      )
    )
  );
}

// Deletes a row in the table when you click on its delete button
$("#project-list").on("click", ".delete", function (event) {
  $(event.target).parent().parent().remove();
});

// set up clock
setInterval(function () {
  const now = moment();
  $("#date").text(now.format("MMMM Do, YYYY"));
  $("#time").text(now.format("HH:mm:ss"));
}, 1000);
