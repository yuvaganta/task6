$(document).ready(function () {
  var contactList = [];
  contactList.push({
    name: "Chandramani Arora",
    mobile: 9242652301,
    email: "chandermani@technovert.com",
    website: "www.technovert.com",
    landline: "040 30 123 1211",
    address: "123 now here\nSome street\nMadhapur, Hyderabad 500033",
  });
  contactList.push({
    name: "Shashi Pagadala",
    mobile: 9242652355,
    email: "shashi@technovert.com",
    website: "www.technovert.com",
    landline: "040 30 123 1211",
    address: "123 now here\nSome street\nMadhapur, Hyderabad 500033",
  });
  contactList.push({
    name: "Praveen Battula",
    mobile: 9245122301,
    email: "praveen@technovert.com",
    website: "www.technovert.com",
    landline: "040 30 123 1211",
    address: "123 now here\nSome street\nMadhapur, Hyderabad 500033",
  });
  contactList.push({
    name: "Vijay Yalamanchali",
    mobile: 9246112301,
    email: "vijay@technovert.com",
    website: "www.technovert.com",
    landline: "040 30 123 1211",
    address: "123 now here\nSome street\nMadhapur, Hyderabad 500033",
  });
  $("#addlink").click(function () {
    addForm();
  });
  $(".displayDetails").css("display", "none");
  $(".addingDetails").css("display", "none");
  let selected = 0;
  $("#editlink").click(function (e) {
    e.preventDefault();
    //console.log("editlink" + i);
    editDetails();
  });
  $("#deletelink").click(function (e) {
    e.preventDefault();
    removeDetails();
  });
  $("#addButton").click(function (e) {
    e.preventDefault();
    if (validate()) {
      submitingForm();
    }
  });
  var reference = 0;
  $("#cancelButton").click(function () {
    $("#nameWarning").text("");
    $("#emailWarning").text("");
    $("#mobileWarning").text("");
    var passed = 0;
    if (reference == 1) {
      passed = selected;
      reference = 0;
    } else {
      for (var p = 0; p < contactList.length; p++) {
        if ($("#" + p).length) {
          passed = p;
          break;
        }
      }
    }
    display(passed);
  });
  for (let i = 0; i < contactList.length; i++) {
    displayList(contactList[i], i);
  }
  display(0);
  function displayList(contact, i) {
    $("#contactBook").append("<li class='eachContact' ></li>");
    $("#contactBook").children().last().attr("id", i);
    $(".eachContact")
      .last()
      .click(function () {
        display(i);
      });
    $(".eachContact")
      .last()
      .html(
        "<p class='Name'>" +
          contact.name +
          "</p><p class='email'>" +
          contact.email +
          "</p><p class='mobile'>" +
          contact.mobile +
          "</p>"
      );
  }
  function display(i) {
    var j = i;
    $(".displayDetails").css("display", "block");
    $(".addingDetails").css("display", "none");
    $("#addressOfContact").text(contactList[j].address);
    $("#emailOfContact").text(contactList[j].email);
    $("#mobileOfContact").text(contactList[j].mobile);
    $("#landlineOfContact").text(contactList[j].landline);
    $("#websiteOfContact").text(contactList[j].website);
    $("#nameOfContact").text(contactList[j].name);
    selected = j;
    $(".eachContact").css("background-color", "white");
    $("#" + j).css("background-color", "rgb(206,231,242)");
  }
  function editDetails() {
    $(".addingDetails").css("display", "block");
    $(".displayDetails").css("display", "none");
    $("#editButton").css("display", "block");
    $("#addButton").css("display", "none");
    $("#addName").val(contactList[selected].name);
    $("#addEmail").val(contactList[selected].email);
    $("#addMobile").val(contactList[selected].mobile);
    $("#addLandline").val(contactList[selected].landline);
    $("#addWebsite").val(contactList[selected].website);
    $("#addAddress").val(contactList[selected].address);
    reference = 1;
    $("#editButton").click(function (e) {
      e.preventDefault();
      if (validate()) {
        if (
          confirm(
            "Are you sure you want to edit " +
              contactList[selected].name +
              "'s details"
          )
        ) {
          editedDetailsAdding();
        }
      }
    });
  }
  function editedDetailsAdding() {
    contactList[selected].email = $("#addEmail").val();
    contactList[selected].name = $("#addName").val();
    contactList[selected].mobile = $("#addMobile").val();
    contactList[selected].landline = $("#addLandline").val();
    contactList[selected].website = $("#addWebsite").val();
    contactList[selected].address = $("#addAddress").val();
    display(selected);
    displayEditedDetailsInList(contactList[selected], selected);
  }
  function displayEditedDetailsInList(contact, i) {
    $("#" + i).html(
      "<p class='Name'>" +
        contact.name +
        "</p><p class='email'>" +
        contact.email +
        "</p><p class='mobile'>" +
        contact.mobile +
        "</p>"
    );
  }
  function removeDetails() {
    let nameField = $("#nameOfContact").text();
    if (
      confirm("Are you sure you want to delete " + nameField + "'s details") ==
      true
    ) {
      for (let i = 0; i < contactList.length; i++) {
        if (contactList[i].name == nameField) {
          $("#" + i).remove();
          $(".displayDetails").css("display", "none");
          $(".addingDetails").css("display", "none");
        }
      }
    }
    var passed = 0;
    for (var p = 0; p < contactList.length; p++) {
      if ($("#" + p).length) {
        passed = p;
        break;
      }
    }
    display(passed);
  }
  function addForm() {
    $(".displayDetails").css("display", "none");
    $(".addingDetails").css("display", "block");
    $("#editButton").css("display", "none");
    $("#addButton").css("display", "block");
    $("#addingDetailsForm")[0].reset();
    $(".eachContact").css("background-color", "white");
    $("#addingDetailsForm").change(function (e) {
      e.preventDefault();
      validate();
    });
  }
  function submitingForm() {
    var dummyLandline = "NA";
    var dummyWebsite = "NA";
    var dummyAddress = "NA";
    var dummyEmail = "NA";
    if ($("#addLandline").val() != "") {
      dummyLandline = $("#addLandline").val();
    }
    if ($("#addAddress").val() != "") {
      dummyAddress = $("#addAddress").val();
    }
    if ($("#addWebsite").val() != "") {
      dummyWebsite = $("#addWebsite").val();
    }
    if ($("#addEmail").val() != "") {
      dummyEmail = $("#addEmail").val();
    }
    contactList.push({
      name: $("#addName").val(),
      mobile: $("#addMobile").val(),
      email: dummyEmail,
      website: dummyWebsite,
      landline: dummyLandline,
      address: dummyAddress,
    });
    displayList(contactList[contactList.length - 1], contactList.length - 1);
    display(contactList.length - 1);
    $("#addingDetailsForm")[0].reset();
  }
  function validate() {
    var nameBox = $("#addName").val();
    var emailBox = $("#addEmail").val();
    var mobileBox = $("#addMobile").val();
    var flag = 0;
    if (nameBox == "") {
      $("#nameWarning").text("Enter your name");
    } else {
      $("#nameWarning").text("");
      flag += 1;
    }
    if (mobileBox == "" || mobileBox.length != 10) {
      $("#mobileWarning").text("Enter Mobile number");
    } else {
      $("#mobileWarning").text("");
      flag += 1;
    }
    if (emailBox == "") {
      $("#emailWarning").text("");
      flag += 1;
    } else {
      var emalRef = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+\.([a-z]+)(.[a-z]+)?$/;
      if (emalRef.test(emailBox)) {
        $("#emailWarning").text("");
        flag += 1;
      } else {
        $("#emailWarning").text("Please enter a valid EmailID");
      }
    }
    if (flag == 3) {
      return true;
    } else {
      return false;
    }
  }
});
