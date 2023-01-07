// --------------------------------- 1학년 함수 ---------------------------------

// ----------------- 추가 버튼 클릭 이벤트 -----------------

function handleAddBtnTwo() {
  const tableTbody = document.getElementById("table_tbody2");

  const inputTr = document.getElementById("inputTr2");

  if (inputTr == null) {
    const newTr = document.createElement("tr");
    newTr.setAttribute("id", "inputTr2");

    const emptyTh = document.createElement("th");

    const newTh1 = document.createElement("th");
    const input1 = document.createElement("select");
    input1.setAttribute("id", "type2");
    const option1 = document.createElement("option");
    option1.setAttribute("value", "교양");
    option1.innerText = "교양";
    const option2 = document.createElement("option");
    option2.setAttribute("value", "전공");
    option2.innerText = "전공";

    const newTh2 = document.createElement("th");
    const input2 = document.createElement("select");
    input2.setAttribute("id", "essential2");
    const option3 = document.createElement("option");
    option3.setAttribute("value", "선택");
    option3.innerText = "선택";
    const option4 = document.createElement("option");
    option4.setAttribute("value", "필수");
    option4.innerText = "필수";

    const newTh3 = document.createElement("th");
    const input3 = document.createElement("input");
    input3.setAttribute("type", "text");
    input3.setAttribute("id", "subname2");

    const newTh4 = document.createElement("th");
    const input4 = document.createElement("select");
    input4.setAttribute("id", "grade2");
    const option5 = document.createElement("option");
    option5.setAttribute("value", "1");
    option5.innerText = "1";
    const option6 = document.createElement("option");
    option6.setAttribute("value", "2");
    option6.innerText = "2";
    const option7 = document.createElement("option");
    option7.setAttribute("value", "3");
    option7.innerText = "3";

    const newTh5 = document.createElement("th");
    const input5 = document.createElement("input");
    input5.setAttribute("type", "text");
    input5.setAttribute("id", "attendance2");

    const newTh6 = document.createElement("th");
    const input6 = document.createElement("input");
    input6.setAttribute("type", "text");
    input6.setAttribute("id", "assignment2");

    const newTh7 = document.createElement("th");
    const input7 = document.createElement("input");
    input7.setAttribute("type", "text");
    input7.setAttribute("id", "midterm2");

    const newTh8 = document.createElement("th");
    const input8 = document.createElement("input");
    input8.setAttribute("type", "text");
    input8.setAttribute("id", "final2");

    input1.appendChild(option1);
    input1.appendChild(option2);

    input2.appendChild(option3);
    input2.appendChild(option4);

    input4.appendChild(option5);
    input4.appendChild(option6);
    input4.appendChild(option7);

    newTh1.appendChild(input1);
    newTh2.appendChild(input2);
    newTh3.appendChild(input3);
    newTh4.appendChild(input4);
    newTh5.appendChild(input5);
    newTh6.appendChild(input6);
    newTh7.appendChild(input7);
    newTh8.appendChild(input8);

    newTr.appendChild(emptyTh);
    newTr.appendChild(newTh1);
    newTr.appendChild(newTh2);
    newTr.appendChild(newTh3);
    newTr.appendChild(newTh4);
    newTr.appendChild(newTh5);
    newTr.appendChild(newTh6);
    newTr.appendChild(newTh7);
    newTr.appendChild(newTh8);

    tableTbody.appendChild(newTr);
  } else if (inputTr) {
    document.getElementById("inputTr2").remove();
  }
}

// ----------------- 저장 버튼 클릭 이벤트 -----------------

function handleSaveBtnTwo() {
  const tableTbody = document.getElementById("table_tbody2");

  const type = document.getElementById("type2");
  const essential = document.getElementById("essential2");
  const subname = document.getElementById("subname2");
  const grade = document.getElementById("grade2");
  const attendance = document.getElementById("attendance2");
  const assignment = document.getElementById("assignment2");
  const midterm = document.getElementById("midterm2");
  const final = document.getElementById("final2");

  const newTr = document.createElement("tr");

  if (subname.value == "") {
    return alert("과목명을 입력해주세요.");
  }

  if (parseInt(grade.value) != 1) {
    let checkNum20 = /^[0-9]{1}$|^[1]{1}[0-9]{1}$|^[2]{1}[0]{1}$/;
    if (!checkNum20.test(parseInt(attendance.value))) {
      return alert("출석 점수는 0부터 20 사이의 숫자로 입력해주세요.");
    }
    if (!checkNum20.test(parseInt(assignment.value))) {
      return alert("과제 점수는 0부터 20 사이의 숫자로 입력해주세요.");
    }
    let checkNum30 = /^[0-9]{1}$|^[1-2]{1}[0-9]{1}$|^[3]{1}[0]{1}$/;
    if (!checkNum30.test(parseInt(midterm.value))) {
      return alert("중간고사 점수는 0부터 30 사이의 숫자로 입력해주세요.");
    }
    if (!checkNum30.test(parseInt(final.value))) {
      return alert("기말고사 점수는 0부터 30 사이의 숫자로 입력해주세요.");
    }
  } else {
    if (
      attendance.value != "" ||
      assignment.value != "" ||
      midterm.value != "" ||
      final.value != ""
    ) {
      return alert(
        "1학점 과목인 경우 점수를 입력하실 수 없습니다. \n 패스인 경우에만 추가해주세요."
      );
    }
    if (type.value == "전공")
      return alert("전공과목은 1학점 선택이 불가능합니다.");
  }

  // 중복 과목 입력 불가능
  for (let i = 0; i < tableTbody.rows.length; i++) {
    if (tableTbody.rows[i].cells[3].innerHTML.includes(subname.value)) {
      return alert("기존에 입력한 과목입니다.");
    }
  }

  // 1학년 과목 중복 확인 후 성적 F 학점일 경우에만 입력
  const tableTbody1 = document.getElementById("table_tbody");
  let temp = -1;
  for (let i = 0; i < tableTbody1.rows.length; i++) {
    if (tableTbody1.rows[i].cells[3].innerHTML.includes(subname.value)) {
      console.log(tableTbody1.rows[i].cells[3].innerHTML);
      temp = i;
    }
  }
  if (temp >= 0) {
    if (!tableTbody1.rows[temp].cells[11].innerHTML.includes("F")) {
      return alert(
        "재수강 과목은 1학년 과목 중 F학점인 경우만 입력이 가능합니다."
      );
    }
    if (!tableTbody1.rows[temp].cells[1].innerHTML.includes(type.value)) {
      return alert("올바른 이수 과목을 선택해 주세요.");
    } else if (
      !tableTbody1.rows[temp].cells[2].innerHTML.includes(essential.value)
    ) {
      return alert("올바른 필수 과목을 선택해 주세요.");
    } else if (
      !tableTbody1.rows[temp].cells[4].innerHTML.includes(grade.value)
    ) {
      return alert("올바른 학점을 선택해 주세요.");
    }
  }

  const deleteInput = newTr.insertCell();
  deleteInput.innerHTML = `<th><input type="checkbox" class="checkbox-class2"></th>`;

  const newTh1 = newTr.insertCell();
  newTh1.innerHTML = `<th>${type.value}</th>`;

  const newTh2 = newTr.insertCell();
  newTh2.innerHTML = `<th>${essential.value}</th>`;

  const newTh3 = newTr.insertCell();
  newTh3.innerHTML = `<th><div style="text-align:left; margin-left:5px; margin-right:5px">${subname.value}</div></th>`;

  const newTh4 = newTr.insertCell();
  newTh4.innerHTML = `<th>${grade.value}</th>`;

  const newTh5 = newTr.insertCell();
  newTh5.innerHTML = `<th>${attendance.value}</th>`;

  const newTh6 = newTr.insertCell();
  newTh6.innerHTML = `<th>${assignment.value}</th>`;

  const newTh7 = newTr.insertCell();
  newTh7.innerHTML = `<th>${midterm.value}</th>`;

  const newTh8 = newTr.insertCell();
  newTh8.innerHTML = `<th>${final.value}</th>`;

  const intSumGrade =
    parseInt(
      attendance.value === "" || attendance.value === NaN
        ? "0"
        : attendance.value
    ) +
    parseInt(
      assignment.value === "" || attendance.value === NaN
        ? "0"
        : assignment.value
    ) +
    parseInt(
      midterm.value === "" || attendance.value === NaN ? "0" : midterm.value
    ) +
    parseInt(
      final.value === "" || attendance.value === NaN ? "0" : final.value
    );

  const newTh9 = newTr.insertCell();
  newTh9.innerHTML = `<th>${intSumGrade === 0 ? "" : intSumGrade}</th>`;

  const newTh10 = newTr.insertCell();
  newTh10.innerHTML = `<th></th>`;

  const enggrade = engGrade2(intSumGrade);
  console.log(intSumGrade);

  const newTh11 = newTr.insertCell();
  if (enggrade == "F") {
    newTh11.innerHTML = `<td><div style="color:red">${enggrade}</div></td>`;
  } else {
    newTh11.innerHTML = `<td>${enggrade}</td>`;
  }

  newTr.appendChild(deleteInput);
  newTr.appendChild(newTh1);
  newTr.appendChild(newTh2);
  newTr.appendChild(newTh3);
  newTr.appendChild(newTh4);
  newTr.appendChild(newTh5);
  newTr.appendChild(newTh6);
  newTr.appendChild(newTh7);
  newTr.appendChild(newTh8);
  newTr.appendChild(newTh9);
  newTr.appendChild(newTh10);
  newTr.appendChild(newTh11);

  tableTbody.appendChild(newTr);

  document.getElementById("inputTr2").remove();

  if (somthingSum("grades_sum2", 4) == 1) {
    document.getElementById("grades_sum2").innerText = "1";
  } else {
    somthingSum("grades_sum2", 4);
  }
  somthingSum2("grades_sum2", 4);
  somthingSum2("attendance_sum2", 5);
  somthingSum2("assignment_sum2", 6);
  somthingSum2("midterm_sum2", 7);
  somthingSum2("final_sum2", 8);
  somthingSum2("total_sum2", 9);

  let avg_sum = 0;
  const totalRow = tableTbody.rows.length;
  if (totalRow > 0) {
    for (let i = 0; i < totalRow; i++) {
      console.log(tableTbody.rows[i].cells[9].innerHTML);
      avg_sum += parseInt(
        tableTbody.rows[i].cells[9].innerHTML === ""
          ? "0"
          : tableTbody.rows[i].cells[9].innerHTML
      );
    }
  }

  let cnt = 0;
  for (let i = 0; i < totalRow; i++) {
    if (tableTbody.rows[i].cells[4].innerHTML === "1") {
      cnt += 1;
    }
  }

  const avgs_sum = Math.floor(totalRow == cnt ? 0 : avg_sum / (totalRow - cnt));

  document.getElementById("total_avg2").innerText = avgs_sum;

  const tatal_grade = engGrade2(avgs_sum);
  document.getElementById("total_grade2").innerText = tatal_grade;

  // 정렬
  let table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("table_container2");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[3];
      y = rows[i + 1].getElementsByTagName("TD")[3];
      if (x.textContent.toLowerCase() > y.textContent.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

// ----------------- 삭제 버튼 클릭 이벤트 -----------------

function handleDeleteBtnTwo() {
  const tableTbody = document.getElementById("table_tbody2");
  const chkbox = document.querySelectorAll(".checkbox-class2");
  const totalRow = tableTbody.rows.length;
  if (totalRow > 0) {
    let CheckedCnt = 0;
    for (let i in chkbox) {
      if (chkbox[i].nodeType == 1 && chkbox[i].checked == true) {
        tableTbody.removeChild(chkbox[i].parentNode.parentNode);
        CheckedCnt += 1;
      }
    }
    if (CheckedCnt == 0) return alert("체크하실 항목을 선택해주세요.");

    if (totalRow == 1) {
      document.getElementById("grades_sum2").innerText = "";
      document.getElementById("attendance_sum2").innerText = "";
      document.getElementById("assignment_sum2").innerText = "";
      document.getElementById("midterm_sum2").innerText = "";
      document.getElementById("final_sum2").innerText = "";
      document.getElementById("total_sum2").innerText = "";
      document.getElementById("total_avg2").innerText = "";
      document.getElementById("total_grade2").innerText = "";
    } else {
      if (somthingSum2("grades_sum2", 4) == 1) {
        document.getElementById("grades_sum2").innerText = "1";
      } else {
        somthingSum2("grades_sum2", 4);
      }
      somthingSum2("attendance_sum2", 5);
      somthingSum2("assignment_sum2", 6);
      somthingSum2("midterm_sum2", 7);
      somthingSum2("final_sum2", 8);
      somthingSum2("total_sum2", 9);

      let avg_sum = 0;
      const totalRow = tableTbody.rows.length;
      if (totalRow > 0) {
        for (let i = 0; i < totalRow; i++) {
          console.log(tableTbody.rows[i].cells[9].innerHTML);
          avg_sum += parseInt(
            tableTbody.rows[i].cells[9].innerHTML === ""
              ? "0"
              : tableTbody.rows[i].cells[9].innerHTML
          );
        }
      }
      let cnt = 0;
      for (let i = 0; i < tableTbody.rows.length; i++) {
        if (tableTbody.rows[i].cells[4].innerHTML === "1") {
          cnt += 1;
        }
      }

      const avgs_sum = Math.floor(
        totalRow == cnt ? 0 : avg_sum / (totalRow - cnt)
      );

      document.getElementById("total_avg2").innerText = avgs_sum;

      const tatal_grade = engGrade2(avgs_sum);
      document.getElementById("total_grade2").innerText = tatal_grade;
    }
  }
}

const somthingSum2 = (id, cellNum) => {
  const tableTbody = document.getElementById("table_tbody2");
  let sum = 0;

  const totalRow = tableTbody.rows.length;
  if (totalRow > 0) {
    for (let i = 0; i < totalRow; i++) {
      sum += parseInt(
        tableTbody.rows[i].cells[cellNum].innerHTML === ""
          ? 0
          : tableTbody.rows[i].cells[cellNum].innerHTML
      );
    }
    document.getElementById(id).innerText = sum;
  }
};

const engGrade2 = (sumGrade) => {
  if (sumGrade >= 95) {
    return "A+";
  } else if (sumGrade >= 90) {
    return "A0";
  } else if (sumGrade >= 85) {
    return "B+";
  } else if (sumGrade >= 80) {
    return "B0";
  } else if (sumGrade >= 75) {
    return "C+";
  } else if (sumGrade >= 70) {
    return "C0";
  } else if (sumGrade >= 65) {
    return "D+";
  } else if (sumGrade >= 60) {
    return "D0";
  } else if (sumGrade == 0) {
    return "P";
  } else {
    return "F";
  }
};
