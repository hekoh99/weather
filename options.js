/**
 * ---------------------------------------------------------------------------------
 * | 옵션 |
 * ---------------------------------------------------------------------------------
 **/

// button element 요소
let page = document.getElementById("buttonDiv");
// CSS 클래스명
let selectedClassName = "current";
// 제공할 날씨 목록
const presetWeathers = ["snow", "rain"];

/**
 * @param {object} event - 이벤트
 * @description 스토리지 API 를 호출하여 배경색을 저장하고 현재 웹 페이지의 배경색을 변경하여 줍니다.
 **/
function handleButtonClick(event) {
  let current = event.target.parentElement.querySelector(
    `.${selectedClassName}`
  );
  if (current && current !== event.target) {
    current.classList.remove(selectedClassName);
  }

  // let color = event.target.dataset.color;
  // event.target.classList.add(selectedClassName);
  // chrome.storage.sync.set({ color });
  let weather = event.target.dataset.weather;
  event.target.classList.add(selectedClassName);
  chrome.storage.sync.set({ weather });
}

/**
 * @param {object} buttonColors - 버튼 컬러 목록
 * @description 제공할 배경색을 웹 페이지에 표시하여 줍니다.
 **/
function constructOptions(buttonColors) {
  chrome.storage.sync.get("color", (data) => {
    let currentColor = data.color;
    for (let buttonColor of buttonColors) {
      let button = document.createElement("button");
      button.dataset.color = buttonColor;
      button.style.backgroundColor = buttonColor;

      if (buttonColor === currentColor) {
        button.classList.add(selectedClassName);
      }

      button.addEventListener("click", handleButtonClick);
      page.appendChild(button);
    }
  });
}

// 최초 버튼 컬러 표시 및 이벤트 등록 호출
constructOptions(presetButtonColors);
